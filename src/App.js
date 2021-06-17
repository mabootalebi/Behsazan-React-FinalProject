import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStore } from "redux";
import Layout from "./Components/Layout/Layout";
import Login from "./Containers/Login/Login";
import { reducer } from "./Store/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route path="/" component={Login}/>
          </Switch>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
