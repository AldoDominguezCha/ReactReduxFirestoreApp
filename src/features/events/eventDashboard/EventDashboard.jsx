import { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {

    const [events, setEvents] = useState(sampleData);

    /* const createEventHandler = event => {
        setEvents(prev => ([...prev, event]));
    }

    const updateEventHandler = updatedEvent => {
        setEvents(prev => {
            return prev.map(e => e.id === updatedEvent.id ? updatedEvent : e);
        });
    }; */

    const deleteEventHandler = event => {
        setEvents(prev => prev.filter(e => e.id !== event.id));
    };

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent={deleteEventHandler}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    );
}