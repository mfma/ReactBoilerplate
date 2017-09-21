import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import TopBar from './toolbar/topbar/TopBar';
import LeftBar from './toolbar/leftbar/LeftBar';

const {Content, Sider} = Layout;

class EditContainer extends PureComponent {
	
	render() {
		return (
			<Layout className="ma-wrapper">
				<TopBar/>
				<Layout>
					<LeftBar/>
					<Content/>
					<Sider width={264}/>
				</Layout>
			</Layout>
		);
	}
}

export default EditContainer;