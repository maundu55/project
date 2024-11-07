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
    </>
    
  )
}

export default App
