import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route exact path="/profile" render={() => <Profile posts={props.posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
