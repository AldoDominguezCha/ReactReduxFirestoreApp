import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events }) {
    return (
        <>
            { events.map( e => <EventListItem event={e} key={e.id} />) }
        </>
    );
}