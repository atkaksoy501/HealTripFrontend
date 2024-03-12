import {Navi} from './layouts/Navi'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Footer } from './layouts/Footer';
import { MainPage } from './pages/MainPage';
import { MyGallery } from './pages/MyGallery';
function App() {
  return (
    <div className='App'>
      <Navi></Navi>
      <MainPage></MainPage>
      <MyGallery></MyGallery>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <h1>Ömür Baba</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
