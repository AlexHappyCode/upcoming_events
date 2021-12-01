import Header from './components/Header'
import Content from './components/Content'
import ContentTailored from './components/ContentTailored'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Header />
            <Router>
            <Routes>
                <Route path="/UpcomingEvents" element={<Content />} />
                <Route path="/ContentTailored" element={<ContentTailored />} />
            </Routes>
            </Router>
        </div>
    );
}

export default App