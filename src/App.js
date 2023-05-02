import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './components/userList';
import UserDetails from './components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserList/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
      </Routes>
  </Router>
  // <UserList/>
  // <UserDetails/>
  );
}

export default App;
