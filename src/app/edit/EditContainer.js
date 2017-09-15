import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import TopBar from './toolbar/topbar/TopBar';

class EditContainer extends PureComponent {
	
	render() {
		return(
			<Layout className="ma-wrapper">
				<TopBar/>
			</Layout>
		);
	}
}

export default EditContainer;