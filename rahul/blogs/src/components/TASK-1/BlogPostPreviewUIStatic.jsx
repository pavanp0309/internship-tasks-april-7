import React from 'react';
import styles from './BlogPostPreviewUIStatic.module.css';

// Import local images
// import coding1 from "../images/coding1.jpg"; 
// import coding2 from "../images/coding2.png";
// import coding3 from "../images/coding3.jpeg";

const BlogPostPreviewUIStatic = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      thumbnail:"./src/images/coding1.jpg",
      title: 'Getting Started with React',
      description: 'Learn the fundamentals of React and start building modern web applications with this comprehensive guide.',
      author: 'John Doe',
      tags: ['React', 'JavaScript', 'WebDev']
    },
    {
      id: 2,
      thumbnail:"./src/images/coding2.png",
      title: 'CSS Grid Made Simple',
      description: 'Master CSS Grid layout with practical examples and learn how to create responsive layouts effortlessly.',
      author: 'Jane Smith',
      tags: ['CSS', 'WebDesign', 'Frontend']
    },
    {
      id: 3,
      thumbnail:"../src/images/coding3.jpeg",
      title: 'Modern JavaScript Features',
      description: 'Explore the latest JavaScript features and how they can improve your code quality and productivity.',
      author: 'Mike Johnson',
      tags: ['JavaScript', 'ES6', 'Programming']
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {blogPosts.map(post => (
          <article key={post.id} className={styles.card}>
            <img src={post.thumbnail} alt={post.title} className={styles.thumbnail} />
            <div className={styles.content}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.description}>{post.description}</p>
              <p className={styles.author}>By {post.author}</p>
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
              <button className={styles.readMore}>Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPreviewUIStatic;
