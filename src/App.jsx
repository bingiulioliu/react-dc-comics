
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import comics from './components/data/comics';

function App() {
  return (
    <>
      <Navbar/>
      <Content comics={comics}/>

      <Footer/>
    </>
  )
}

export default App
