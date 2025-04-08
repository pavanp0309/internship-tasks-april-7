import React from "react";
import styles from "./BlogCardGroup.module.css";
import HTMLBasicsImg from "../../assets/HTMLBasics.png";
import TailwindCSSImg from "../../assets/TailwindCSS.png";
import ReduxImg from "../../assets/Redux.png";
// import "./BlogCardGroup.css";

// import coding1 from "./src/images/coding1.jpg";
// import coding2 from "./src/images/coding2.png";
// import coding3 from "./src/images/coding3.jpeg";


// import coding1 from "./src/images/coding1.jpg";
// import coding2 from "./src/images/coding2.png";
// import coding3 from "./src/images/coding3.jpeg";

const BlogCardGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={HTMLBasicsImg} className={styles.cardImgTop} alt="HTML Basics" />
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>HTML Basics for Beginners</h5>
            <p className={styles.cardText}>
              Understand the structure of web pages using semantic HTML tags and layout.
            </p>
            <div className={styles.cardMeta}>
              <div className={styles.author}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" className={styles.authorImg} />
                <span className={styles.authorName}>John Smith</span>
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>#HTML</span>
                <span className={styles.tag}>#Web Development</span>
                <span className={styles.tag}>#Beginners</span>
              </div>
            </div>
            <p className={styles.cardTextSmall}>Last updated 5 mins ago</p>
            <button className={styles.readMoreBtn}>Read More</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={TailwindCSSImg} className={styles.cardImgTop} alt="Tailwind CSS" />
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>Design Faster with Tailwind CSS</h5>
            <p className={styles.cardText}>
              Learn utility-first classes and how to build beautiful responsive UIs rapidly.
            </p>
            <div className={styles.cardMeta}>
              <div className={styles.author}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" className={styles.authorImg} />
                <span className={styles.authorName}>Sarah Johnson</span>
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>#CSS</span>
                <span className={styles.tag}>#Tailwind</span>
                <span className={styles.tag}>#UI Design</span>
              </div>
            </div>
            <p className={styles.cardTextSmall}>Last updated 15 mins ago</p>
            <button className={styles.readMoreBtn}>Read More</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src={ReduxImg} className={styles.cardImgTop} alt="Redux" />
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>State Management with Redux</h5>
            <p className={styles.cardText}>
              Dive into Redux, actions, reducers, and store to manage global state in React apps.
            </p>
            <div className={styles.cardMeta}>
              <div className={styles.author}>
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Author" className={styles.authorImg} />
                <span className={styles.authorName}>Michael Chen</span>
              </div>
              <div className={styles.tags}>
                <span className={styles.tag}>#React</span>
                <span className={styles.tag}>#Redux</span>
                <span className={styles.tag}>#State Management</span>
              </div>
            </div>
            <p className={styles.cardTextSmall}>Last updated 45 mins ago</p>
            <button className={styles.readMoreBtn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardGroup;
