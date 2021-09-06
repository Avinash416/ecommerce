import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Header from './Components/header/Header'
// import Banner from './Components/Home/Banner'
// import MidSection from './Components/Home/MidSection'
// import MidSlide from './Components/Home/MidSlide'

import Home from './Components/home/Home'
import {TemplateProvider}from './templates/TemplateProvider'
// import Slide from './Components/Home/Slide'
import ContextProvider from './context/ContextProvider'
import DeatailView from './Components/product/DetailView'
import Cart from './Components/Cart/Cart'
import {Box} from '@material-ui/core'


const App = () => {
  return (

    <TemplateProvider>
      <ContextProvider>
    <BrowserRouter>

     <Header/>
     <Box style={{marginTop:54}}>
     <Switch>
     
    
    <Route  exact path="/" component={Home}/>
    
    <Route  exact path="/product/:id" component={DeatailView}/>
    <Route  exact path="/cart" component={Cart}/>
    </Switch>
    </Box>
     
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  )
}

export default App
