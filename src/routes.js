import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import DefaultPage from './pages/DefaultPage';
import RegisterContract from './pages/RegisterContract';
import RegisterPerson from './pages/RegisterPerson';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          
          <Route path='/' element={<DefaultPage />} />

          <Route path='/register-person' element={<RegisterPerson />} />

          <Route path='/register-contract' element={<RegisterContract />} />

        </Routes>
      </Router>
    </>
  );
}