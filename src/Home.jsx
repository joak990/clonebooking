
import './Home.css'
import NavBar from './NavBar'
import Header from './Header'
import Featured from './Featured'
import PropertyList from './PropertyList'
import FeaturedProperties from './FeaturedProperties'
import MailList from './MailList'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
      <div className="homeContainer">
        <Featured/>
      <h1 className="homeTitle">Busca por tipo de alojamiento</h1>
      <PropertyList/>
      <h1 className="homeTitle">Quédate en un alojamiento único</h1>
     
      <FeaturedProperties/> 
      <MailList/>
      <Footer/>
      </div>
     
    </div>
  )
}

export default Home
