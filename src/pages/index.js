// Manages routing pages individual components

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';

const Pages = () => {

    // define routes
    return(
        <Router>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/mynotes" element={<MyNotes />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="note/:id" element={<NotePage />} />
                <Route
                    path="*"
                    element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                } />
            </Routes>
            </Layout>
        </Router>
    );
}

export default Pages;