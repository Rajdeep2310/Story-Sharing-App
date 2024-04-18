const express = require('express');
const storyRouter = express.Router();
const {createStories , bookMarkedStories, filteringStories,fetchAllStories , getIndividualStories ,updateStory ,getUserAllStories} = require('../Controllers/storyControllers');   
const verifyToken = require('../Middlewares/verifyToken');

storyRouter.get('/all-stories', fetchAllStories);
storyRouter.post('/create-story', createStories);
storyRouter.get('/your-story/:id',getIndividualStories);
storyRouter.get('/user-all-stories/:id',getUserAllStories)
storyRouter.put('/update-story/:id',updateStory)
storyRouter.get('/bookmarked-stories/:id',bookMarkedStories)
storyRouter.post('/filter-stories', filteringStories)
module.exports = storyRouter;