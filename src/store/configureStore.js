import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const createHistory = require('history');

export default function configureStore(initialState) {
    const isProduction = process.env.NODE_ENV === 'production';
    const history = createHistory.createBrowserHistory();
    const routeMiddleware = routerMiddleware(history);
    const middleware = [
        thunk,
        routeMiddleware
    ];

    const composeEnhancers = isProduction ? compose : window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose; // add support for Redux dev tools

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        ));

    if (!isProduction && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer', () => {
            const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    const persist = persistStore(store);

    return { store, history, persist };
}
