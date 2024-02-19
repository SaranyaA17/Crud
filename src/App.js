import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Pages/Home/Home';
import Welcome from './Component/Pages/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
