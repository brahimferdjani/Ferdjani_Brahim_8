import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Banner />} />
    </Routes>
  );
}

export default App;
