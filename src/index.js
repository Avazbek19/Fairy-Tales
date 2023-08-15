import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import HomePage from './pages/home/home_page';
import InfoId from './pages/info_by_id/info_id';
import AudioTales from './pages/audio_tales/audio_tales';
import Puzzle from './pages/puzzle/puzzle';
import NotFoundComponent from './components/NotFoundComponent/notFoundComponent';
import Cartoons from './pages/cartoons/cartoons';
import Cartoon_mp4 from './components/fairyTaleVidioComponent/cartoon_mp4';
import CartoonIdComponent from './components/cartoonIdComponent/cartoonIdComponent';
import News from './pages/news/news';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFoundComponent/>} />
        <Route path='/info_by_id/:id' element={<InfoId/>}/>
        <Route path='/audio-ertaklar' element={<AudioTales/>}/>
        <Route path='/topishmoqlar' element={<Puzzle/>}/>
        <Route path='/multifilmlar' element={<Cartoons/>}/>
        <Route path='/yangiliklar' element={<News/>}/>
        <Route path='/multifilm/:id' element={<CartoonIdComponent/>}/>
      </Route>
        <Route path='/video/:id' element={<Cartoon_mp4/>}/>
    </Routes>
  </BrowserRouter>
);