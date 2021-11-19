import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import WorkPage from './pages/WorkPage/WorkPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/works' element={<WorkPage />} />
        </Routes>
      </main>
     <Footer/>
    </div>
  );
}

export default App;