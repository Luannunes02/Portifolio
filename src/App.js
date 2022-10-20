import './app.css'
import Apresentation from './page/Apresentation';
import Abilitys from './page/Abilitys';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';;

function App() {
  return (
    <div className="App bg-dark" id='App'>
      <ToastContainer autoClose={2000}/>
      <Apresentation/>      
      <Abilitys/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
