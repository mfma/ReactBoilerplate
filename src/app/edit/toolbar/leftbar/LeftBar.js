import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import './leftbar.css';
import Menus from './Menus';
import MenuLayout from './MenuLayout';

const {Sider} = Layout;

class LeftBar extends PureComponent {
	
	render() {
		return (
			<div className="ma-left-bar">
				<Menus/>
				<MenuLayout/>
			</div>
		);
	}
}

export default LeftBar;