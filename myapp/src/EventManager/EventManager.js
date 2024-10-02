import React, { useState } from 'react';
import AddEvent from '../Admin/AddEvent';
import ViewEvent from '../Admin/ViewEvents';

const EventManager = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]); // Add the new event to the list
  };

  return (
    <div>
      <h1>Event Manager</h1>
      <AddEvent addEvent={addEvent} />
      <ViewEvent events={events} />
    </div>
  );
};

export default EventManager;
