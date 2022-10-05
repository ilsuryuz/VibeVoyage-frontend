import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/AboutPage';
import VideosPage from './pages/VideosPage';
import Videos from './components/Videos';
function App() {
  return (
    <div className="App">
    <AboutPage />
    <Main />
    <VideosPage />
    <Videos />
    </div>
  );
}

export default App;

