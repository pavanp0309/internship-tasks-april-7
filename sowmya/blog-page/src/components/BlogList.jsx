import React from "react";
import blogs from "../data/blogData";

const BlogList = () => {
  return (
    <div className="grid">
      {blogs.map((blog, index) => (
        <div className="card" key={index}>
          <img src={blog.image} alt="Blog Thumbnail" className="thumbnail" />
          <div className="card-content">
            <h3 className="title">{blog.title}</h3>
            <p className="description">{blog.description}</p>
            <p className="author">By {blog.author}</p>
            <div className="tags">
              {blog.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
          <button className="read-more">Read More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
