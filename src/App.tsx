import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={ProductDetails} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
