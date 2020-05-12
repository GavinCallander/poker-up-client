import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Chart } from '../Chart';
import { Landing } from '../Landing';
import { PotOdds } from '../PotOdds';

import { Footer, Header } from '../Layout';

import * as ROUTES from '../../constants/routes';

import '../../styling/main.scss';

export const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.CHART} component={Chart} />
            <Route path={ROUTES.POTODDS} component={PotOdds} />
            <Footer />
        </Router>
    )
};