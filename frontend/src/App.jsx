import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import GlobalStyle from "./components/global-styles";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Stats from "./pages/stats";
function App() {
  return (
    <Router>
      <Fragment>
        {/* <GlobalStyle /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
