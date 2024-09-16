import React, { useContext } from 'react';
import { EventContext } from '../EventContext/EventContext'; // Import the context

function UserViewEvents() {
  const { events } = useContext(EventContext); // Use the context to get events

  return (
    <div>
      <h2>Available Events</h2>
      <div style={styles.cardContainer}>
        {events.map((event, index) => (
          <div key={index} style={styles.card}>
            <h3>{event.eventName}</h3>
            <p><strong>Date:</strong> {event.eventName}</p>
            <p><strong>Genre:</strong> {event.genre}</p>
            <p><strong>Points:</strong> {event.points}</p>
            <p><strong>Uses:</strong> {event.uses}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
  },
};

export default UserViewEvents;
