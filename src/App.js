import './App.css';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <Routes basename={'/my-portfolio'}>
      <Route path={'/'} element={<Layout />} >
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/about'} element = {<About/>}/>
        <Route path={'/portfolio'} element = {<Portfolio/>}/>
        <Route path={'/contact'} element = {<Contact/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
