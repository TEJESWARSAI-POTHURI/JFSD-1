import React from 'react';


const ViewEvent = ({ events }) => {
  return (
    <div className="view-events-container">
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <h3>{event.eventName}</h3>
              <p><strong>Genre:</strong> {event.genre}</p>
              <p><strong>Points:</strong> {event.points}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewEvent;
