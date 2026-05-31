import Navbar from './Navbar';
import Home from './Home';
import Skill from './Skill';
import Work from './work';
import './Style/App.css';

export default function App(){

  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Skill />
      <Work />
    </div>
  );
}