import React from "react";
import { blog1, blog2, blog3 } from "../data/blogData";

const BlogList = () => {
  return (
    <div className="grid">
      {/* Blog 1 */}
      <div className="card">
        <img src={blog1.image} alt="Blog Thumbnail" className="thumbnail" />
        <h3 className="title">{blog1.title}</h3>
        <p className="description">{blog1.description}</p>
        <p className="author">By {blog1.author}</p>
        <div className="tags">
          <span className="tag">{blog1.tags[0]}</span>
          <span className="tag">{blog1.tags[1]}</span>
        </div>
        <button className="read-more">Read More</button>
      </div>

      {/* Blog 2 */}
      <div className="card">
        <img src={blog2.image} alt="Blog Thumbnail" className="thumbnail" />
        <h3 className="title">{blog2.title}</h3>
        <p className="description">{blog2.description}</p>
        <p className="author">By {blog2.author}</p>
        <div className="tags">
          <span className="tag">{blog2.tags[0]}</span>
          <span className="tag">{blog2.tags[1]}</span>
        </div>
        <button className="read-more">Read More</button>
      </div>

      {/* Blog 3 */}
      <div className="card">
        <img src={blog3.image} alt="Blog Thumbnail" className="thumbnail" />
        <h3 className="title">{blog3.title}</h3>
        <p className="description">{blog3.description}</p>
        <p className="author">By {blog3.author}</p>
        <div className="tags">
          <span className="tag">{blog3.tags[0]}</span>
          <span className="tag">{blog3.tags[1]}</span>
        </div>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default BlogList;
