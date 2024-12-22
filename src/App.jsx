// App Component with Routes
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Router>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
export default App;
