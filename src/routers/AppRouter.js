import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pagesComponents/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element="404 Not found" />
    </Routes>
  );
};

export default AppRouter;
