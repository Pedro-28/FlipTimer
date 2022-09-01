import { Route, Routes } from 'react-router-dom';
import './App.css';
import Timer from './pages/Timer';
import TimerForm from './pages/TimerForm';

function App() {
  return (
    <div className="timer-container">
      <Routes>
        <Route path='/' element={<TimerForm />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;