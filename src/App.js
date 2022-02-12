import Home from "./components/Home";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <>
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  exact path="/view/:id" component={View} />
    <Route exact path="/edit/:id" component={Edit}/>
  </Switch>
  </BrowserRouter>
   
    </>
  );
}

export default App;
