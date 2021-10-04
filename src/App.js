
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Blog from './Component/Blog/Blog';
import NotAvailable from './Component/NotAvailable/NotAvailable';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div>
       <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotAvailable></NotAvailable>
          </Route>
        </Switch>
       </BrowserRouter>
       <Footer></Footer>
    </div>
  );
}

export default App;
