import classes from './App.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Converter from './components/Converter/Converter';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <div className={classes.app}>
          <NavLink className={classes.link_1} to="/converter">Converter</NavLink>
          <br />
          <NavLink className={classes.link_2} to="/exchangeRate">Exchange Rate</NavLink>
            
          <Route exact path="/exchangeRate" render={() => <ExchangeRate />} />
          <Route exact path="/converter" render={() => <Converter  />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
