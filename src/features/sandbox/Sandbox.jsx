import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

export default function Sandbox() {

    const value = useSelector(state => state.test.data);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Testing 123</h1>
            <h3>The data is: {value}</h3>
            <Button content='Increment' color='green' onClick={() => dispatch(increment(8))} />
            <Button content='Decrement' color='red' onClick={() => dispatch(decrement(3))} />
            <Button 
                content='Display test modal'
                color='teal'
                onClick={() => dispatch(openModal({ modalType: 'TestModal', modalProps: { data: 'Hello, this is a modal test on my end!' } }))}
            />
            <Button 
                content='Display login modal'
                color='teal'
                onClick={() => dispatch(openModal({ modalType: 'LoginForm', modalProps: {} }))}
            />
        </>
    );
};
