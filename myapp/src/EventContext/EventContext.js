import React, { createContext, useState } from 'react';
import UserViewEvents from '../User/UserViewEvents';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
    <addEvent></addEvent>
    <UserViewEvents></UserViewEvents>
    </EventContext.Provider>
  );
};
