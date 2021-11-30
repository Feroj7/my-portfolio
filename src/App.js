import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
