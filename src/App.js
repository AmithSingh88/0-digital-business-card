import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Intrests from './components/Intrests';
import './style.css';


const App = function () {
    return (
        <div className='container'>
            <Info />
            <About />
            <Intrests />
            <Footer />
        </div>
    )
}

export default App;