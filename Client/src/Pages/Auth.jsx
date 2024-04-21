import styles from "./Styles/Auth.module.css";
import { useState } from "react";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";

const Auth = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleRegisterClose = () => {
    setShowRegisterModal(false);
  };
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  return (
    <nav className={styles.navbar}>
      <h2>Swip-Troy</h2>
      <div>
        <button
          onClick={() => setShowRegisterModal(true)}
          className={styles.regiBtn}
        >
          Register Now
        </button>
        {showRegisterModal && <Register onClose={handleRegisterClose} />}
        <button
          onClick={() => setShowLoginModal(true)}
          className={styles.signInBtn}
        >
          Sign-In
        </button>
        {showLoginModal && <Login onClose={handleLoginClose} />}
      </div>
    </nav>
  );
};

export default Auth;
