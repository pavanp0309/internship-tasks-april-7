import React from "react";

const BlogCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="./src/assets/img-1.webp"
          alt=""
          className="thumbnail"
        />
        <div className="content">
          <h3 className="title">Getting Started with React</h3>
          <p className="description">A beginner-friendly guide to kickstart your React journey.</p>
          <p className="author">By Jane Doe</p>
          <div className="tags">
            <span className="tag">#React</span>
            <span className="tag">#Beginner</span>
            <span className="tag">#WebDev</span>
          </div>
          <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="card">
        <img
          src="./src/assets/img-2.jpg"
          alt=""
          className="thumbnail"
        />
        <div className="content">
          <h3 className="title">CSS Grid Layout</h3>
          <p className="description">Mastering modern layout techniques with CSS Grid.</p>
          <p className="author">By John Smith</p>
          <div className="tags">
            <span className="tag">#CSS</span>
            <span className="tag">#Grid</span>
            <span className="tag">#Frontend</span>
          </div>
          <button className="readMore">Read More</button>
        </div>
      </div>

      <div className="card">
        <img
          src="./src/assets/img-3.jpg"
          alt=""
          className="thumbnail"
        />
        <div className="content">
          <h3 className="title">JavaScript Tips & Tricks</h3>
          <p className="description">Level up your JavaScript skills with these handy tips.</p>
          <p className="author">By Alex Johnson</p>
          <div className="tags">
            <span className="tag">#JavaScript</span>
            <span className="tag">#Tips</span>
            <span className="tag">#Programming</span>
          </div>
          <button className="readMore">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
