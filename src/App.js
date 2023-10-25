import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
