const Story = require("../Models/Story");

const createStories = async (req, res) => {
  try {
    const { bookmark, userId, slides } = req.body;

    if (!userId || !slides) {
      res.status(400).json({ message: "Please fill all the fields" });
      return;
    }

    const newStories = await Story.create({
      bookmark: bookmark,
      userId: userId,
      slides: slides,
    });

    if (!newStories) {
      res.status(400).json({ message: "Unable to create story" });
      return;
    }
    res.status(200).json({ message: "Story created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const fetchAllStories = async (req, res) => {
  try {
    const allStories = await Story.find({});
    if (!allStories) {
      res.status(400).json({ message: "No Stories found" });
      return;
    }
    res.status(200).json(allStories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getIndividualStories = async (req, res, next) => {
  try {
    const storyId = req.params.id;
    const individualStories = await Story.findById(storyId);

    if (!individualStories) {
      return res.status(400).json({
        success: false,
        message: "There are no stories avaiable ",
      });
    }

    res.status(200).json({
      success: true,
      story: individualStories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getUserAllStories = async (req, res) => {
  try {
    const userId = req.params.id;
    const storiesOfUser = await Story.find({ userId: userId });
    if (!storiesOfUser) {
      res.status(400).json({ message: "No Stories found" });
      return;
    }
    res.status(200).json(storiesOfUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const update = req.body;
    const options = { new: true };
    const updatedStory = await Story.findByIdAndUpdate(
      storyId,
      update,
      options
    );
    if (!updatedStory) {
      res.status(400).json({ message: "Unable to update story" });
      return;
    }
    res.status(200).json({ message: "Story updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const bookMarkedStories = async (req, res) => {
    try{
        const userId = req.params.id;
        const bookMarkedStory = await Story.find({
            userId: userId,
            bookmark: true
        });
        if(!bookMarkedStory.length){
            res.status(400).json({message: "No bookmarked stories found"});
            return;
        }
        res.status(200).json(bookMarkedStory);
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
}
const filteringStories = async (req, res) => {
    try {
        const { category } = req.body;
        const regex = new RegExp(category, "i"); 
        const sortedStories = await Story.find({ "slides.category": regex });

        if (!sortedStories.length) {
            res.status(400).json({ message: "No stories found" });
            return;
        }
        res.status(200).json(sortedStories);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
} 
module.exports = {
  createStories,
  fetchAllStories,
  getIndividualStories,
  getUserAllStories,
  updateStory,
  bookMarkedStories,
  filteringStories
};
