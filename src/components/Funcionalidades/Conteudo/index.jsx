import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../../../pages/Home';
const Conteudo = () => {
    return (
        <Fragment>
            <div className="mt-5">
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Fragment>
    );
}
export default Conteudo;