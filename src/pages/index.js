// Manages routing pages individual components

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import shared layout component
import Layout from '../components/Layout';

// Get all components/import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

const Pages = () => {

    // define routes
    return(
        <Router>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/mynotes" element={<MyNotes />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
            </Layout>
        </Router>
    );
}

export default Pages;