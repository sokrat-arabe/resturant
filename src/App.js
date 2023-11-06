
import './App.css';
import Home from './componants/home.js/Home';
import Navs from './componants/navs/Navs';
import { Fragment } from 'react';
import Header from './componants/home.js/Header';





function App() {
  return (
    <Fragment>
    <Navs/>
   
<Home/>

</Fragment>
  );
}

export default App;
