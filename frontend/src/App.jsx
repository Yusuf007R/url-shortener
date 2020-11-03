import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./components/global-styles";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
