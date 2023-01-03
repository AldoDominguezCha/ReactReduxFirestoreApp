import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events, selectEvent, deleteEvent }) {
    return (
        <>
            { events.map( e => <EventListItem event={e} key={e.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />) }
        </>
    );
}