import logo from './logo.svg';
import './App.css';
//import 'antd/dist/antd.css'
import { BrowserRouter } from "react-router-dom";
import AllRoute from './AllRoute';
import 'antd/dist/antd.css';
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  return (
    <BrowserRouter>
    <AllRoute />
    <MessengerChat pageId='123456789101112' />
  </BrowserRouter>
  );
}

export default App;
