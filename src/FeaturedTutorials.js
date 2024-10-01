import React from 'react';
import './FeaturedTutorials.css';

function FeaturedTutorials() {
  const tutorials = [
    {
      title: 'React Hooks Overview',
      description: 'Learn about the power of React Hooks.',
      tech: 'React',
      author: 'Alice Johnson',
      image: '/images/tutorial1.jpg',
    },
    {
      title: 'Building Components with Vue',
      description: 'A step-by-step guide to building components in Vue.js.',
      tech: 'Vue',
      author: 'Bob Smith',
      image: '/images/tutorial2.jpg',
    },
    {
      title: 'Angular Directives Explained',
      description: 'Master Angular directives with practical examples.',
      tech: 'Angular',
      author: 'Charlie Brown',
      image: '/images/tutorial3.jpg',
    },
  ];

  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorials-list">
        {tutorials.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <img src={tutorial.image} alt={tutorial.title} />
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <span className="tech-tag">{tutorial.tech}</span>
            <hr />
            <div className="author-info">
              <span className="star">★ ★ ★ ★ ★</span>
              <span className="author">{tutorial.author}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-tutorials">
        <button>See All Tutorials</button>
      </div>
    </div>
  );
}

export default FeaturedTutorials;
