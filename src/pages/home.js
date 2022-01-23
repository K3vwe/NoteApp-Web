import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

function Home() {

    return (
        <div>
            <Header />
            <Navigation />
            <h1>This is the Home Page</h1>
            <p>Data Base Notes Saved</p>
        </div>
    );
}

export default Home;