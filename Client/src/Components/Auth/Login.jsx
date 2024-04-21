// Login.jsx
import { useState } from "react";
import styles from "./Styles/Register.module.css";
import cross from "../../Images/cross.png";
import eyeIcon from "../../Images/Vector (1).png";
import { loginUser } from "./Apis/User";
import {useNavigate} from "react-router-dom";

const Login = ({ onClose }) => {
  // Here showing password is a state that is toggled when the eye icon is clicked
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleClose = () => {
    onClose();
  };
  //---------------------------------------------
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      alert("Please fill all the fields");
      return;
    }
    const response = await loginUser(formData.username, formData.password);
    if(response){
      localStorage.setItem("token" , response.token);
      localStorage.setItem("user" , response.username);
      navigate("/home");
    }
    console.log(response);
    
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleClose}>
          <img className={eyeIcon} src={cross} alt="cross" />
        </span>
        <h2 className={styles.regiHead}>Sign-In for Swip-Troy</h2>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                name="password"
                onChange={handleFormChange}
              />
              <img
                src={eyeIcon}
                alt="Toggle Password Visibility"
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
        </div>
        <button className={styles.regiBtn} onClick={handleSubmit} style={{marginLeft:"270px"}}>Sign-In</button>
      </div>
    </div>
  );
};

export default Login;
