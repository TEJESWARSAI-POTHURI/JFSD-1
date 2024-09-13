import React, { useState } from 'react';

function AddEvent({ addEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [genre, setGenre] = useState('');
  const [points, setPoints] = useState('');
  const [uses, setUses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventDate,
      genre,
      points,
      uses,
    };
    addEvent(newEvent); // Call the function to add event to the global state
    setEventName('');
    setEventDate('');
    setGenre('');
    setPoints('');
    setUses('');
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Uses:</label>
          <textarea
            value={uses}
            onChange={(e) => setUses(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
