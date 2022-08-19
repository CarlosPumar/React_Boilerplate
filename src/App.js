import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <Router basename="/">
      <AppRouter />
    </Router>
  );
};

export default App;
