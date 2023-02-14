import './App.css';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import EditUser from './components/EditUser';


export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/Register" element={<HomePage />} />
        </Routes>
      </Router>


  );
}

