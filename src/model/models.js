import {actions} from 'mirrorx';
import FSUtils from 'utils/fs-utils';


export default {
	/**
	 * @property currentPage
	 */
	name: "currentPage",
	initialState: {},
	reducers: {
		getPage(state, data) {
			let newPage = FSUtils.Page.getPage(data);
			return newPage ? newPage : state;
		}
	},
	effects: {
		async saveProjectInfo(projectInfo) {
			FSUtils.Project.saveProjectInfo(projectInfo);
			actions.currentPage.getPage(0);
		}
	}
};




