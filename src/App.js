import  React,{useEffect} from 'react'
import './App.css';
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/Login';
import Error from './components/Error';
import { CartProvider } from 'react-use-cart';
import Favorite from './components/Favorite';
import { Fab } from '@material-ui/core';
import { Arrow90degUp } from 'react-bootstrap-icons';


function App() {
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
    <CartProvider className="App">
      {
       
       <BrowserRouter> 
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/favorite" component={Favorite}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="*" component={Error} />
        </Switch>
        <Footer/>
      </BrowserRouter> }
      </CartProvider>
        {showButton && (
           <div style={{height:"70px" }}>
           <Fab size='medium'text-white
           onClick={scrollToTop}
           style={{backgroundColor: "#ffd700",  margin:"10px", marginLeft:'85%',zindex:"4" }} 
           > <Arrow90degUp/></Fab>
           </div>
        )}
    </>    
  )
}

export default App
