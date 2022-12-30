import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Product } from './pages/Product';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route
              path='/category/:name'
              component={Category}
            />
            <Route
              path='/meal/:idMeal'
              component={Product}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
};
