import "./home_page/HomePage.js"
import './App.css';
import Header from './Header/Header';
import HomePage from './home_page/HomePage.js';
import DistrictPage from './DistrictSearch/DistrictPage.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux"

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Header />

        <Router >
          <Switch>
            <Route path="/DistrictSearch">
              <DistrictPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
