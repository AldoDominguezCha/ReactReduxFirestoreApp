import { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {

    const [events, setEvents] = useState(sampleData);

    const createEventHandler = event => {
        setEvents(prev => ([...prev, event]));
        setFormOpen(false);
    }

    const updateEventHandler = updatedEvent => {
        setEvents(prev => {
            return prev.map(e => e.id === updatedEvent.id ? updatedEvent : e);
        });
        selectEvent(null);
        setFormOpen(false);
    };

    const deleteEventHandler = event => {
        setEvents(prev => prev.filter(e => e.id !== event.id));
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEventHandler}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                    <EventForm 
                        setFormOpen={setFormOpen} 
                        setEvents={setEvents} 
                        createEvent={createEventHandler}
                        selectedEvent={selectedEvent}
                        key={selectEvent ? selectEvent.id : null}
                        updateEvent={updateEventHandler}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
}