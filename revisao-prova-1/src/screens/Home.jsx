import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Listitem from '../components/Listitem'
import Galery from '../components/Galery'
import '../styles/styles.css'


function Home(){
    return(
        <main>
            <Header />
            <div className='section' id='list'>
                <Listitem />
            </div>
            <div className="section" id="galeria">
                <Galery />
            </div>
            <Footer />
        </main>
    )
}

export default Home