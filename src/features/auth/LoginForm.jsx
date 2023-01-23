import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import MyTextInput from '../../app/common/form/MyTextInput';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import { signInUser } from './authActions';
import { closeModal } from '../../app/common/modals/modalReducer';

export default function LoginForm() {

    const dispatch = useDispatch();

    return (
        <ModalWrapper size='mini' header='Sign in to Re-vents'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().required().email('Please provide a valid email'),
                    password: Yup.string().required(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(signInUser({ email: values.email }))
                    setSubmitting(false);
                    dispatch(closeModal());
                }}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput name='password' type='password' placeholder='Password' />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    );
}