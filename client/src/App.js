import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './lib/components/Login';
import Registration from './lib/components/Registration';
import './App.css';
import GetData from './lib/requests/GetOne'
function App() {
  return (
    <div className="App">
     <GetData/>
     <Login/>
     <Registration/>
    </div>
  );
}

export default App;
