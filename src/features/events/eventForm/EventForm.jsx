import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import { Segment, Header, Button } from "semantic-ui-react";
import { updateEvent, createEvent } from '../eventActions';
import cuid from "cuid";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm(props) {
  const { id } = useParams();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === id)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const defaultValues = useMemo(
    () => ({
      title: "",
      category: "",
      description: "",
      city: "",
      venue: "",
      date: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.date().required(),
  })

  return (
    <Segment clearing>
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(createEvent({
              ...values,
              id: cuid(),
              hostedBy: "Bob",
              hostPhotoURL: "/assets/user.png",
              attendees: [],
            }))
            navigate('/events');
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form" >
            <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event title'/>
            <MySelectInput name='category' placeholder='Category' options={categoryData} />
            <MyTextArea name='description' placeholder='Description' rows={3} />
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='City'/>
            <MyTextInput name='venue' placeholder='Venue'/>
            <MyDateInput 
              name='date' 
              placeholderText='Event date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm a'
            />
            <Button 
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit' floated='right'
              positive
              content='Submit'
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to='/events'
              floated='right'
              content='Cancel'
            />
          </Form>
        )}
      </Formik>    
    </Segment>
  );
}