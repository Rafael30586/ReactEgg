//import logo from './logo.svg';
import './App.css';
import Navbar from './components/public/Navbar';
import Footer from './components/public/Footer';
import { Route, Routes } from 'react-router-dom';
import { Main1 } from './components/public/Main1';
import { Main2 } from './components/public/Main2';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path={"/"} element={<Main1></Main1>}></Route>
        <Route path={"/main1"} element={<Main1></Main1>}></Route>
        <Route path={"/main2"} element={<Main2></Main2>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
