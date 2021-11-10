import { BrowserRouter, Route, Switch } from "react-router-dom";
//Setting up paths to each page within the single page we will navigate to.
function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route component= {Home} path="/" />
      <Route component= {About} path="/about" />
      <Route component= {SinglePost} path="/post/:slug" />
      <Route component= {Post} path="/post" />
      <Route component= {Project} path="/project" />

    </Switch>
    </BrowserRouter>
  )
}

export default App;
