import React from 'react';
import Hero from './components/hero';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <section className="min-h-screen z-0 bg-blue-500" />
        </main>
    );
};

export default App;
