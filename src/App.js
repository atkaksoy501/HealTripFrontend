import {Navi} from './layouts/Navi'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Footer } from './layouts/Footer';
import { MainPage } from './pages/MainPage';
import { MyGallery } from './pages/MyGallery';
import ExperienceSection from './pages/ExperienceSection';
import { MyGallery2 } from './pages/MyGallery2';
function App() {
  return (
    <div className='App'>
      <Navi></Navi>
      <MainPage></MainPage>
      <MyGallery2></MyGallery2>
      <h1>buba</h1>
      <h1>buba</h1>
      <h1>buba</h1>
      <h1>buba</h1>
      <ExperienceSection></ExperienceSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
