import React, {PureComponent} from 'react';
import {Layout} from 'antd';

const {Header, Sider, Content} = Layout;

class TopBar extends PureComponent {
	
	render() {
		return (
			<Layout className='ma-top-bar'>
				<Header className ='ma-top-header' style={{color:'white',fontSize:'100px'}}>
					{'4'}
				</Header>
			</Layout>
		);
	}
}

export default TopBar;