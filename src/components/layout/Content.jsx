import React from 'react';
import './Content.css'
import { Switch, Route } from 'react-router-dom'

import About from '../../views/examples/About';
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

import { AnimatePresence, motion } from 'framer-motion'

const Content = props => (
  <main className="Content">
    <AnimatePresence>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  </main>
);

export default Content