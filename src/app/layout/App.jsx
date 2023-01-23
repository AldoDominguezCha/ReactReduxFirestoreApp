import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";

function App() {

  function EventsLayout(props) {
    return (
      <>
        <NavBar />
        <Container className='main'>
          <Outlet />
        </Container>
      </>
    );
  }

  return (
    <React.Fragment>
      <ModalManager />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events' element={<EventsLayout />} >
          <Route path='sandbox' element={<Sandbox />} />
          <Route path='' element={<EventDashboard />} />
          {['new', 'manage/:id'].map((path, index) => <Route path={path} element={<EventForm />} key={index} />)}
          <Route path=':id' element={<EventDetailedPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;