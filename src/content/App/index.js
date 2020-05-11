import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Landing } from '../Landing';

import { Footer, Header } from '../Layout';

import * as ROUTES from '../../constants/routes';

import '../../styling/main.scss';

export const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Footer />
        </Router>
    )
};