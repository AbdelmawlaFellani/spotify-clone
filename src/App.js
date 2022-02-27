
import './App.css';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavLeft />
      <Main />
      <NavRight /> 
      <Footer />
    </div>
  );
}

export default App;
