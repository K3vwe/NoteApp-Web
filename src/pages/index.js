// Manages routing pages individual components

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signUp';
import SignIn from './signIn';
import ProtectedRoute from './privateRoute';

const Pages = () => {

    // define routes
    return(
        <Router>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/mynotes" element={<MyNotes />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Route>
                <Route path="note/:id" element={<NotePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
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