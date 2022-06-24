import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Wrapper from './components/Wrapper'
import EditUI from './components/EditUI'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <div className="App font-face-lineto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper/>} />
          <Route path="/cards/:id" element={<EditUI/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
