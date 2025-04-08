import React from "react";
import styles from "../styles/BlogCardGroup.css";

// import coding1 from "../images/coding1.jpg";
// import coding2 from "../images/coding2.png";
// import coding3 from "../images/coding3.jpeg";


// import coding1 from "./src/images/coding1.jpg";
// import coding2 from "./src/images/coding2.png";
// import coding3 from "./src/images/coding3.jpeg";

const BlogCardGroup = () => {
  return (
    <div className={styles.cardGroup}>
      <div className={styles.card}>

        <img src="./src/images/coding1.jpg" className={styles.cardImgTop} alt="React Hooks" />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>Mastering React Hooks</h5>
          <p className={styles.cardText}>
            Learn the power of useState, useEffect and custom hooks in real projects.
          </p>
          <p className={styles.cardTextSmall}>Last updated 3 mins ago</p>
        </div>
      </div>

      <div className={styles.card}>
        <img src="./src/images/coding2.png" className={styles.cardImgTop} alt="CSS Grid" />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>CSS Grid Magic</h5>
          <p className={styles.cardText}>
            Build stunning responsive layouts with CSS Grid.
          </p>
          <p className={styles.cardTextSmall}>Last updated 10 mins ago</p>
        </div>
      </div>

      <div className={styles.card}>
        <img src="./src/images/coding3.jpeg" className={styles.cardImgTop} alt="State Management" />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>React State Management</h5>
          <p className={styles.cardText}>
            Understand Context API, useReducer, and best practices to handle complex states.
          </p>
          <p className={styles.cardTextSmall}>Last updated 1 hour ago</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCardGroup;
