import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import login from './login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
