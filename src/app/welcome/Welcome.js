import React, {PureComponent} from 'react';
import {actions} from 'mirrorx'
import localData from 'test/data.json';
import './welcome.css';


class Welcome extends PureComponent {
	
	/**
	 * 前往渲染界面
	 */
	goPage = () => {
		actions.routing.push('/test/edit');
	};
	
	componentDidMount() {
		actions.currentPage.saveProjectInfo(localData);
		console.log("111");
		this.goPage();
	}
	
	render() {
		return (
			<div className="ma-welcome">
				<div className="ma-logo"/>
				<div className="ma-loading">
					<div className="ma-loading-text" id="ma-loading-text1"/>
					<div className="ma-loading-text" id="ma-loading-text2"/>
					<div className="ma-loading-text" id="ma-loading-text3"/>
				</div>
			</div>
		);
	}
}

export default (Welcome);
