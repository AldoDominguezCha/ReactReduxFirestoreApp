import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {

  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectEventHandler = event => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const createFormOpenHandler = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <React.Fragment>
      <NavBar openFormHandler={createFormOpenHandler} />
      <Container className='main'>
        <EventDashboard 
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={selectEventHandler}
          selectedEvent={selectedEvent}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;