import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<CreateBlog />}/>
            <Route path='/blogs/:id' element={<BlogDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
