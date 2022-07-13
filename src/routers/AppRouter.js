import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pagesComponents/Home';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element="404 not found" />
    </Routes>
  );
};

export default AppRouter;
