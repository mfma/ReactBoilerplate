'use strict';
//noinspection JSFileReferences
import Store from "store";
import uniqid from "uniqid";
import Jsing from "jsing";

class UserInfo {
	static AUTH_TOKEN = "Cable-Services-Auth-Token";
	
	
	/**
	 * 获取当前用户Token
	 * */
	static getUserToken() {
		return Store.get(UserInfo.AUTH_TOKEN);
	}
	
}

class Project {
	
	static CURRENT_PROJECT = "CURRENT_PROJECT";
	
	/**
	 * 保存工程信息
	 * @param projectInfo
	 */
	static saveProjectInfo(projectInfo) {
		let pages = Jsing.get(projectInfo, "pages");
		if (!pages) {
			pages = [];
			pages.push(Page.getDefaultPage());
			Jsing.set(projectInfo, "pages", pages);
		}
		Store.set(Project.CURRENT_PROJECT, projectInfo);
	}
	
	/**
	 * 获取工程信息
	 * @returns {*}
	 */
	static getProjectInfo() {
		return Store.get(Project.CURRENT_PROJECT);
	}
}

class Page {
	/**
	 * 获取默认的页面数据
	 * @returns {{pageId: *, pageIndex: number, opacity: number, backgroundColor: [number,number,number,number]}}
	 */
	static getDefaultPage() {
		return {
			id: uniqid(),
			pageIndex: 0,
			opacity: 1,
			height: 603,
			backgroundColor: [255, 255, 255, 0],
			name: 'Page'
		};
	}
	
	/**
	 * 获取指定的页面
	 * @param pageIndex 页码
	 */
	static getPage(pageIndex) {
		let projectInfo = Store.get(Project.CURRENT_PROJECT);
		let pages = Jsing.get(projectInfo, "pages");
		return pages[pageIndex];
	}
	
}

class FSUtils {
	
	static get Project() {
		return Project;
	}
	
	static get Page() {
		return Page;
	}
	
	static get UserInfo() {
		return UserInfo;
	}
	
}


export default FSUtils;

