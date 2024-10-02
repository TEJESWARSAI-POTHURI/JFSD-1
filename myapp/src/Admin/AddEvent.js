import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    genre: '',
    points: '',
    category: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log or send the event details to the backend here
    console.log('Event Details:', eventDetails);
    
    // Reset form after submission
    setEventDetails({
      eventName: '',
      genre: '',
      points: '',
      category: '',
      location: '',
      description: ''
    });
  };

  return (
    <div className="add-event-container">
      <h2 className="title">Create a New Event</h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleChange}
            placeholder="Enter event name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={eventDetails.genre}
            onChange={handleChange}
            placeholder="Enter genre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="points">Points:</label>
          <input
            type="number"
            id="points"
            name="points"
            value={eventDetails.points}
            onChange={handleChange}
            placeholder="Enter points"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={eventDetails.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventDetails.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            placeholder="Enter event description"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
