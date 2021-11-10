import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import SinglePost from "./componets/SinglePost";
import Post from "./componets/Post";
import Project from "./componets/Project";


//Setting up paths to each page within the single page we will navigate to.
// Using exact so the home page doesn't get confused with any other routes.
function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route component= {Home} path="/" exact />
      <Route component= {About} path="/about" />
      <Route component= {SinglePost} path="/post/:slug" />
      <Route component= {Post} path="/post" />
      <Route component= {Project} path="/project" />

    </Switch>
    </BrowserRouter>
  )
}

export default App;
