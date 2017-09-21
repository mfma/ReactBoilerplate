import React, {PureComponent,PropTypes} from 'react';
import {Icon, Menu} from 'antd';


class Menus extends PureComponent {
	
	
	render() {
		return (
			<Menu
				className="ma-menus"
				defaultSelectedKeys={['1']}
				mode="inline"
				theme="dark"
				inlineCollapsed={true}
			>
				<Menu.Item key="1">
					<Icon type="pie-chart"/>
					<span>页面</span>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="desktop"/>
					<span>对象</span>
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="inbox"/>
					<span>控件</span>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Menus;