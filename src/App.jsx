
import './App.css';
import Count from './component/Count';
// import HOC from './component/HOC';
import Counterclick from './component/Counterclick';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/counter' element={<Count />}></Route>
          <Route path='/HOC' element={<Counterclick />}></Route>
          {/* <Route path='/counter' element={<Count/>}></Route> */}
        </Routes>
        


      </BrowserRouter>

      

    </div>
  );
}

export default App;
