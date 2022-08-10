import './App.css';
import Textform from './Screens/Textform';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Getdata from './Screens/Getdata';


function App() {
  return (
    <>

      <Router>
        <Link to="/" />

        <Routes>

          <Route exact path="/" element={<Textform />} />
          

        </Routes>

      </Router>

    </>
  );
}

export default App;