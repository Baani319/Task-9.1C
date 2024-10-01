import React from 'react';
import './FeaturedArticles.css';

function FeaturedArticles() {
  const articles = [
    {
      title: 'Understanding React',
      description: 'A deep dive into React and its core concepts.',
      tech: 'React',
      author: 'John Doe',
      image: '/images/image1.jpg',
    },
    {
      title: 'Getting Started with Vue',
      description: 'Learn how to build apps using Vue.js.',
      tech: 'Vue',
      author: 'Jane Smith',
      image: '/images/image2.jpg',
    },
    {
      title: 'Mastering Angular',
      description: 'Advanced techniques for Angular developers.',
      tech: 'Angular',
      author: 'Chris Lee',
      image: '/images/image3.jpg',
    },
  ];

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="tech-tag">{article.tech}</span>
            <hr />
            <div className="author-info">
              <span className="star">★ ★ ★ ★ ★</span>
              <span className="author">{article.author}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-articles">
        <button>See All Articles</button>
      </div>
    </div>
  );
}

export default FeaturedArticles;
