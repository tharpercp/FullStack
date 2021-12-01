import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';





document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = { 
            session: {id: window.currentUser.id },
            entities: {
                user: { [window.currentUser.id]: window.currentUser },
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
});