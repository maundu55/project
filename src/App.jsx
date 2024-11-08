import React from "react"
import Greet from "./components/Greet"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import JSXRules from "./components/JSXRules"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"
import Person from "./components/Person"
import Product from "./components/Product"
import Weather from "./components/Weather"
import UserStatus from "./components/UserStatus"
import Greeting from "./components/Greeting"
import StyledCard from "./components/StyledCard"
import ProfileCard from "./components/ProfileCard"
 
function App() {

  return (
    <>
    <Greet />
    <Header />
    <MainContent />
    <Footer />
    <JSXRules />
    <ProductInfo /> 
    <UserList />
    <hr />
    <ProductList />
    <Person name ="Mary Maundu" age={29} />
    <Product name="Phone" price= {500}/>
    <Weather />

    <UserStatus loggedIn={false} Admin={true} />
    <Greeting  timeOfDay ="afternoon"/>
    <StyledCard />
    <ProfileCard />
    </>
    
  )
}

export default App
