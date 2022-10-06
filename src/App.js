import logo from './logo.svg';
import './App.css';
//import 'antd/dist/antd.css'
import { BrowserRouter } from "react-router-dom";
import AllRoute from './AllRoute';


function App() {
  return (
    <BrowserRouter>
    <AllRoute />
  </BrowserRouter>
  );
}

export default App;
