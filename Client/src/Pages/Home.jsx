import styles from "./Styles/Home.module.css"
import hamSign from "../Images/hamsign.png";
import profile from "../Images/profile.png";
import { useState } from "react";
import {logOutUser} from "../Apis/User";
import { useNavigate } from "react-router-dom";

const  Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const getUsername = localStorage.getItem("username");
    console.log(getUsername);

    const handleSignOut = async() =>{
        const response = await logOutUser();
        if(response.message === "User Logged Out Successfully..."){
            localStorage.clear();
            navigate("/auth");
        }
    }
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_left}>
        <h1>SwipTroy</h1>
      </div>
      <div className={styles.nav_right}>
        <button className={styles.bookmarkBtn}>
            Bookmarks
        </button>
        <button className={styles.addStoryBtn} >
          Add Story
        </button>
        <img className={styles.profile}src={profile} alt="" />
        <img className={styles.hamSign}src={hamSign} onClick={() => setIsOpen(!isOpen)} alt="" />
        {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.profileName}>{getUsername}</div>
          <button className={styles.signOutBtn} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
      </div>
    </div>
  )
}

export default  Home

{/* <img src={bookmark} alt="" /> */}