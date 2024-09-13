import React from 'react';

function ViewEvents({ events }) {
  return (
    <div>
      <h2>View Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong> - {event.eventDate} - {event.genre} - Points: {event.points} - Uses: {event.uses}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewEvents;
