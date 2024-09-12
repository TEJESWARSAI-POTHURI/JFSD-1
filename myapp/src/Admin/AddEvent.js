import React, { useState } from 'react';
import './AddEvent.css'

function App() {
  // State to hold form input values
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [genre, setGenre] = useState('');
  const [points, setPoints] = useState('');
  const [uses, setUses] = useState('');

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission logic here
    console.log({
      eventName,
      eventDate,
      genre,
      points,
      uses,
    });
  };

  return (
    <div className="App">
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Event Name:
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Event Date:
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Genre:
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Points Gained:
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Uses of the Event:
            <textarea
              value={uses}
              onChange={(e) => setUses(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default App;
