import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Images from '../components/Images';
import '../App.css';

function Home() {
  return(
    <>
      <Header />
      <Banner />
      <Images />
      <About />
    </>
  )
}

export default Home