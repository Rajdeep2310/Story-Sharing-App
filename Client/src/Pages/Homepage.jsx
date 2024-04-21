import styles from "./Styles/Homepage.module.css";
import ProfilePic from "../Images/Mask group (5).png";
import HamSign from "../Images/Vector (2).png";

const Homepage = () => {

  return (
    <div>
      <nav className={styles.navbar}>
        <h2>Swip-Troy</h2>
        <div>
          <button className={styles.bookmarkBtn}>Bookmark</button>
          <button className={styles.bookmarkBtn}>Add Story</button>
          <span className={styles.profileBtn}>
            <img src={ProfilePic} alt="profile" />
          </span>
          <button className={styles.hamBtn} >
            <img src={HamSign} alt="Hamsign" />
          </button>
        </div>
      </nav>
      
    </div>
  );
};

export default Homepage;
