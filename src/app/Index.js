import React, {PureComponent} from 'react';
import {withRouter} from 'mirrorx';

class Index extends PureComponent {
	

	
	render() {
		return (
			<div className="ma-wrapper">
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(Index);