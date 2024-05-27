import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Trendify Fashion</h1>
      <p>Discover Your Style Signature.</p>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default Home;




