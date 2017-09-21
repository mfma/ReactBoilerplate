import React, {PureComponent} from 'react';
import {Icon, Layout, Menu} from 'antd';
import './topbar.css';
import logoImage from 'img/logo.svg';

const {Header} = Layout;

class TopBar extends PureComponent {
	
	handleSelect=(e)=>{
		console.log('click ', e.key);
	};
	
	render() {
		return (
			<Header className='ma-topbar'>
				<img className='ma-topbar-logo' src={logoImage}/>
				<Menu className='ma-topbar-menus' theme="dark" mode="horizontal" onSelect={this.handleSelect}>
					<Menu.Item key="save">
						<Icon type={'save'}/>保存
					</Menu.Item>
					<Menu.Item key="preview">
						<Icon type={'play-circle-o'}/>预览
					</Menu.Item>
					<Menu.Item key="publish">
						<Icon type={'check'}/>发布
					</Menu.Item>
					<Menu.Item key="logout">
						<Icon type={'logout'}/>退出
					</Menu.Item>
				</Menu>
			</Header>
		);
	}
}

export default TopBar;