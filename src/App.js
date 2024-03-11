import {Navi} from './layouts/Navi'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Footer } from './layouts/Footer';
import { MainPage } from './pages/MainPage';
function App() {
  return (
    <div className='App'>
      <Navi></Navi>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
