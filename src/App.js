import React from 'react';
import mirror, {render, Route, Router, withRouter} from "mirrorx";
import Index from 'app/Index';
import Welcome from "app/welcome/Welcome";
import EditContainer from "app/edit/EditContainer";
import models from './model/models';
import './css/base.css';
mirror.defaults({
	historyMode: 'browser'
});

//Object.keys(models).forEach(m => mirror.model(models[m]));
mirror.model(models);

render(
	<Router>
		<Index>
			<Route exact path="/test" component={withRouter(Welcome)}/>
			<Route exact path="/test/edit" component={withRouter(EditContainer)}/>
		</Index>
	</Router>
	, document.getElementById('app'));