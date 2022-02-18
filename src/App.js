import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header} from './components';
import { Homepage } from './components';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
            </Routes>
        </Router>
    );
}

export default App;