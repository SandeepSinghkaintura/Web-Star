import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx';

import './style/App.scss';
import './style/header.scss';
import './style/home.scss';
import './style/footer.scss';
import './style/contact.scss';
import './style/services.scss';



function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/services' element={<Services />}/>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
