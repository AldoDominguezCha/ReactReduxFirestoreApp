import { combineReducers } from 'redux';
import modalReducer from '../app/common/modals/modalReducer';
import authReducer from '../features/auth/authReducer';
import eventReducer from '../features/events/eventReducer';
import testReducer from '../features/sandbox/testReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer
});

export default rootReducer;