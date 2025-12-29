import './App.css'
import 'primeicons/primeicons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/Home';
import ProjectPage from './pages/Project';
import AboutPage from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
