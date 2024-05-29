import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <Link to="/" className="btn btn-primary mr-2">Home</Link>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>

      <h1 className="display-4 text-center my-4">Welcome to Trendify Fashion!</h1>
      <p className="lead text-center mb-4">Fashion enthusiast, style aficionado, and your go-to source for all things chic. With a background in fashion design and a passion for self-expression through clothing, I created this blog to inspire and empower others to embrace their unique sense of style.</p>
      <div className="row">
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Blog Image 1" className="img-fluid rounded mb-4" />
        </div>
        <div className="col-md-6">
          <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion Blog Image 2" className="img-fluid rounded mb-4" />
        </div>
      </div>
    </div>
  );
}

export default Home;

