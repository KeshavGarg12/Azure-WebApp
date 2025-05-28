import './App.css';
import FoodDeliveryHome from './components/homepage';
import Menu from './components/Menu'; // ← Import your Menu page component
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodDeliveryHome />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
