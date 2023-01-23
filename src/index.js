import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/Styles.css';
import App from './app/layout/App';
import { configureStore } from './store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </Provider>
);