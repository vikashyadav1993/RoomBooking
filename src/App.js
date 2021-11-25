import './App.css';

import RoomBooking from './components/RoomBooking';
import {IoIosPeople} from 'react-icons/io';

function App() {
  return (
    <div className="App">
      <div className="heading-container">
         <IoIosPeople className="main-heading"/><h1>Choose number of people</h1>
         </div>
      <RoomBooking/>
    </div>
  );
}

export default App;
