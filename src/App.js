import './App.css';
import './assets/fonts/FuturaNewLight-Obl.woff2'
import {BrowserRouter, Route} from "react-router-dom";
import main from "./components/main/Main";
import $ from 'jquery';
import {Link} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <div className="inner">
                  <div className="admin-menu">
                      <ul>
                          <li><Link to="/main" className="admin-link">Главная</Link></li>
                          <li><Link to="/main" className="admin-link">Еще одна страница</Link></li>
                      </ul>
                  </div>

                  <Route path="/main" component={main}>

                  </Route>
              </div>
              <script src={$}/>
          </div>
      </BrowserRouter>


  );
}


export default App;
