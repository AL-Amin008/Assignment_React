import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Service from './src/components/Service';
import Project from './src/components/Project';
import Footer from './src/components/Footer';


function App() {
    return(
        <div>
            <Header />
            <Hero />
            <About />
            <Service />
            <Project />
            <Footer />
        </div>
    );
    
}
export default App;
