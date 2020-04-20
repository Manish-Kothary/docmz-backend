import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import defaultreducer from "./store/reducers/reducer";
import doctorReducer from "./store/reducers/doctorReducer";
import editDataReducer from "./store/reducers/editDataReducer";
import patientReducer from "./store/reducers/patientReducer";
import paymentReducer from "./store/reducers/paymentReducer";
import config from "./config";

const rootReducer = combineReducers({
	paymentReducer: paymentReducer,
	patientReducer: patientReducer,
	editDataReducer: editDataReducer,
	doctorReducer: doctorReducer,
	withTheme: defaultreducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<BrowserRouter basename={config.basename}>
			{/* basename="/datta-able" */}
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
