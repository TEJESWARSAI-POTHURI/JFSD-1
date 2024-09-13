import React from 'react';

function UserViewEvents({ events }) {
  return (
    <div>
      <h2>Available Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong> - {event.eventDate} - {event.genre} - Points: {event.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserViewEvents;
