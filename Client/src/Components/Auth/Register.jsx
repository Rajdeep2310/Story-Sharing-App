// Register.jsx
import { useState } from "react";
import styles from "./Styles/Register.module.css";
import cross from "../../Images/cross.png";
import eyeIcon from "../../Images/Vector (1).png";
import { registerUser } from "./Apis/User";

const Register = ({ onClose }) => {
  // Here showing password is a state that is toggled when the eye icon is clicked
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // for cross button to close the modal
  const handleClose = () => {
    onClose();
  };
  //---------------------------------------------
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFromChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    if (!formData.username || !formData.password) {
      alert("Please fill all the fields");
      return;
    }
    const response = await registerUser({ ...formData });
    console.log(response);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={handleClose}>
          <img className={eyeIcon} src={cross} alt="cross" />
        </span>
        <h2 className={styles.regiHead}>Register for Swip-Troy</h2>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFromChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleFromChange}
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
        <button className={styles.regiBtn} onClick={handleSubmit}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;
