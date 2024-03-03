import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
