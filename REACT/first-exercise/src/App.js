import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection url="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png" />
      <Content />
    </div>
  );
}

export default App;
