import React, { Suspense } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStore } from "redux";
import Layout from "./Components/Layout/Layout";
import Loading from "./Components/UI/Loading/Loading";
import { reducer } from "./Store/reducer";
import routes from "../src/Tools/Routes";

const store = createStore(reducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Suspense fallback={<Loading/>}>
              {routes.map(r=> <Route exact key={r.path} path={r.path} component={r.component}/>)}
            </Suspense>
          </Switch>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
