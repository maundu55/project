import React from "react"
import { useState } from "react"
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
import IconComponent from "./components/IconComponent"
import Count from "./components/Count"
import Friends from "./components/Friends"
import Movies from "./components/Movies"
import Counter from "./components/Counter"
import TodoList from "./components/TodoList"
import Profile from "./components/Profile"
import ShoppingList from "./components/ShoppingList"
import Data from "./components/Data"
import BasicEffect from "./components/BasicEffect"
import CounterEffect from "./components/CounterEffect"
import FetchDataEffect from "./components/FetchDataEffect"
import UserProvider from "./components/UserProvider"
import ReducerTutorial from "./components/ReducerTutorial"
import CounterReducer from "./components/CounterReducer"
import InputElement from "./components/InputElement"




function App() {
  const [count, setCount] = useState(0);

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
    <IconComponent />
    <Count />
    <Friends />
    <Movies />
    <Counter  />
    <TodoList />
    <Profile />
    <ShoppingList />
    <Data />
    <BasicEffect />
    <CounterEffect />
    <FetchDataEffect />
    <UserProvider />
    <ReducerTutorial />
    <CounterReducer />
    <InputElement />
  
    </>
    
  )
}

export default App


















// we setup useEffect hook to run some code WHEN
// component renders for the first time
//whenever it re-renders
//some data in our component changed.