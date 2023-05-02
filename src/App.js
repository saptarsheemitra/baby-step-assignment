import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Home>
      <Routes>
        <Route exact path="/" element={<UserList/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
      </Routes>
      </Home>
  </Router>

  );
}

export default App;
