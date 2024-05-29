import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container">
      <div className="text-center mb-4">
        <Link to="/" className="btn b8tn-primary mr-2">Home</Link>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>

      <h1 className="display-4 text-center my-4">Contact Us</h1>
      <p className="lead text-center mb-4">Feel free to reach out to us with any questions or inquiries.</p>
      
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
        <Link to="/" className="btn btn-secondary ml-2">Back</Link>
      </form>
    </div>
  );
}

export default Contact;


