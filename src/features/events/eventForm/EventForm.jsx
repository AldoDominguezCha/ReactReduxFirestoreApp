import { useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

export default function EventForm({ createEvent, selectedEvent, updateEvent }) {

    const defaultValues = useMemo(() => (
        {
            title: '',
            category: '',
            description: '',
            city: '',
            venue: '',
            date: ''
        }
    ), []);

  const [formState, setFormState] = useState(selectedEvent ?? defaultValues);

  useEffect(() => {
    setFormState(selectedEvent ?? defaultValues);
  }, [selectedEvent, defaultValues]);

  const submitFormHandler = (event) => {

    selectedEvent 
    ? updateEvent({...selectedEvent, ...formState})
    : createEvent({ 
        ...formState,
        id: cuid(),
        hostedBy: "Bob",
        hostPhotoURL: '/assets/user.png',
        attendees: [] 
    });
    
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={submitFormHandler}>
        <Form.Field>
          <input
            type='text'
            name='title'
            placeholder='Event title'
            value={formState.title}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='category'
            placeholder='Event category'
            value={formState.category}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={formState.description}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={formState.city}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='venue'
            placeholder='Venue'
            value={formState.venue}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='date'
            placeholder='Date'
            value={formState.date}
            onChange={inputChangeHandler}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link}
          to='/events'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
}
