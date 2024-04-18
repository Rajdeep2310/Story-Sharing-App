import { useState } from "react";
import styles from "./Styles/HomepageAuth.module.css";
import hamSign from "../Images/hamsign.png";
import cross from "../Images/cross.png";
import { useNavigate } from "react-router-dom";
import { registerUser , loginUser } from "../Apis/User";

const HomepageAuth = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [showRegiModal, setShowRegiModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [error , setError] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const toggleRegiModal = () => {
    setShowRegiModal(!showRegiModal);
  };
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  // Handling Register User Request ....
  const handleRegisterUser = async () => {
    if (!formData.username || !formData.password) {
      alert("Enter all the fields...");
    }
    const response = await registerUser({ ...formData });
    console.log(response);
  };

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling Login User Request ....
  const handleLoginUser = async () => {
    if(!formData.username || !formData.password){
      alert("Enter all the fields...");
      return;
    }
    const response = await loginUser(formData.username, formData.password);
    if(response?.username){
      localStorage.setItem("token",response.token)
      localStorage.setItem("username",response.username)
      navigate("/");
    }else{
      setError("Please enter a valid username...")
      setTimeout(() => {
        setError("");
      }, 5000); 
    }
  };
  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav_left}>
        <h1>SwipTroy</h1>
      </div>
      <img
        src={hamSign}
        className={`${styles.hamSign} ${toggle ? styles.showMenu : ""}`}
        alt="toggleIcon"
        onClick={toggleMenu}
      />
      <div className={`${styles.nav_right} ${toggle ? styles.showMenu : ""}`}>
        <button className={styles.registerBtn} onClick={toggleRegiModal}>
          Register Now
        </button>
        <button className={styles.loginBtn} onClick={toggleLoginModal}>
          Sign In
        </button>
      </div>
      {showRegiModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={toggleRegiModal} className={styles.close}>
              <img src={cross} />
            </span>
            <h2>Register to SwipTroy</h2>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleRegisterChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleRegisterChange}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleRegisterUser}
            >
              Register
            </button>
          </div>
        </div>
      )}
      {showLoginModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={toggleLoginModal} className={styles.close}>
              <img src={cross} />
            </span>
            <h2>Login to SwipTroy</h2>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={handleLoginChange}
                value={formData.username}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleLoginChange}
                value={formData.password}
              />
            </div>
            {error && (
              <span className={styles.errorMsg}>{error}</span>
            )}
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={handleLoginUser}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomepageAuth;
