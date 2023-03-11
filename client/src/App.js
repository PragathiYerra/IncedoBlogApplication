import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar.jsx";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div>
      {/* <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login" element = {user ? Home  : <Login />}/>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router> */}
      
      {/* --> */}

      <BrowserRouter>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register"element={user ? <Home /> : <Register />}/>
        <Route path="/login"element={user ? <Home /> : <Login />}/>
        <Route path="/write"element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId"
        element={<Single />}/>
      </Routes>
      </BrowserRouter>
        </div>

        
  );
}

export default App;
