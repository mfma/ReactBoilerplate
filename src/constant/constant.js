/**
 * Created by issuser on 2017/1/13.
 */

/**
 * Page对象类型
 * @type {{SNAPSHOT: string, EDIT: string, PREVIEW: string}}
 */
export const PageType = {
	SNAPSHOT: 'Snapshot',
	EDIT: 'Edit',
	PREVIEW: 'PreView'
};
/**
 * 控件类型
 * @type {{VIEW: string, TEXT: string, IMAGE: string, BUTTON: string, NAVBAR: string, INPUT: string, LIST: string, LIST_TEXT: string, LIST_IMAGE: string, LIST_BUTTON: string, LIST_DIVIDER: string, DIVIDER: string, CHECKBOX: string, RADIO: string, MAP: string, SLIDER: string, SWITCH: string, AUDIO: string, PROGRESS: string, RECTANGLEPROGRESS: string, CIRCLEPROGRESS: string, VIDEO: string, PICKER: string, TIMEDATA: string, SCROLLBAR: string}}
 */
export const ModuleType = {
	VIEW: 'View',
	TEXT: 'Text',
	IMAGE: 'Image',
	BUTTON: 'Button',
	NAVBAR: 'Navbar',
	INPUT: 'Input',
	LIST: 'List',
	LIST_TEXT: 'ListText',
	LIST_IMAGE: 'ListImage',
	LIST_BUTTON: 'ListButton',
	LIST_DIVIDER: 'ListDivider',
	DIVIDER: 'Divider',
	CHECKBOX: 'Checkbox',
	RADIO: 'Radio',
	MAP: 'Map',
	SLIDER: 'Slider',
	SWITCH: 'Switch',
	AUDIO: 'Audio',
	PROGRESS: 'Progress',
	RECTANGLEPROGRESS: 'RectangleProgress',
	CIRCLEPROGRESS: 'CircleProgress',
	VIDEO: 'Video',
	PICKER: 'Picker',
	TIMEDATA: 'TimeData',
	SCROLLBAR: 'ScrollBar'
};
/**
 * 子控件类型
 * @type {[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */
export const SubModules = [
	{
		"value": ModuleType.TEXT,
		"name": "文本"
	},
	{
		"value": ModuleType.INPUT,
		"name": "输入框"
	},
	{
		"value": ModuleType.NAVBAR,
		"name": "菜单"
	},
	{
		"value": ModuleType.IMAGE,
		"name": "图片"
	},
	{
		"value": ModuleType.BUTTON,
		"name": "按钮"
	},
	{
		"value": ModuleType.LIST,
		"name": "列表"
	},
	{
		"value": ModuleType.VIEW,
		"name": "视图"
	},
	{
		"value": ModuleType.MAP,
		"name": "地图"
	},
	{
		"value": ModuleType.SLIDER,
		"name": "轮播图"
	},
	{
		"value": ModuleType.SWITCH,
		"name": "开关"
	},
	{
		"value": ModuleType.AUDIO,
		"name": "音频"
	},
	{
		"value": ModuleType.VIDEO,
		"name": "视频"
	},
	{
		"value": ModuleType.DIVIDER,
		"name": "分隔线"
	},
	{
		"value": ModuleType.PICKER,
		"name": "下拉列表"
	},
	{
		"value": ModuleType.TIMEDATA,
		"name": "时间与日期"
	},
	{
		"value": ModuleType.PROGRESS,
		"name": "进度条"
	},
	{
		"value": ModuleType.SCROLLBAR,
		"name": "滑动条"
	},
];
/**
 * 列表子控件类型
 * @type {[null,null,null,null,null]}
 */
export const ListSubModules = [
	{
		"value": "none",
		"name": "无"
	},
	{
		"value": ModuleType.TEXT,
		"name": "文本"
	},
	{
		"value": ModuleType.IMAGE,
		"name": "图片"
	},
	{
		"value": ModuleType.BUTTON,
		"name": "按钮"
	},
	{
		"value": ModuleType.DIVIDER,
		"name": "分割线"
	}
];
/**
 * 边框样式
 * @type {[null,null,null,null,null,null,null,null,null]}
 */
export const BorderStyle = [
	{
		"value": "none",
		"name": "无"
	},
	{
		"value": "solid",
		"name": "实线"
	},
	{
		"value": "dotted",
		"name": "点线"
	},
	{
		"value": "dashed",
		"name": "虚线"
	},
	{
		"value": "double",
		"name": "双线"
	},
	{
		"value": "groove",
		"name": "3D凹槽"
	},
	{
		"value": "inset",
		"name": "3D凹边"
	},
	{
		"value": "outset",
		"name": "3D凸边"
	},
	{
		"value": "ridge",
		"name": "菱形"
	}
];
/**
 * 边框类型
 * @type {[null,null,null,null,null,null]}
 */
export const BorderType = [
	{
		"value": "none",
		"name": "无边框"
	},
	{
		"value": "borderAll",
		"name": "全边框"
	},
	{
		"value": "borderTop",
		"name": "上边框"
	},
	{
		"value": "borderBottom",
		"name": "下边框"
	},
	{
		"value": "borderLeft",
		"name": "左边框"
	},
	{
		"value": "borderRight",
		"name": "右边框"
	}
];
/**
 * 文字粗细
 * @type {[null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */
export const FontWeight = [
	{
		"value": "normal",
		"name": "normal"
	},
	{
		"value": "lighter",
		"name": "lighter"
	},
	{
		"value": "bold",
		"name": "bold"
	},
	{
		"value": "bolder",
		"name": "bolder"
	},
	{
		"value": "100",
		"name": "100"
	},
	{
		"value": "200",
		"name": "200"
	},
	{
		"value": "300",
		"name": "300"
	},
	{
		"value": "400",
		"name": "400"
	},
	{
		"value": "500",
		"name": "500"
	},
	{
		"value": "600",
		"name": "600"
	},
	{
		"value": "700",
		"name": "700"
	},
	{
		"value": "800",
		"name": "800"
	},
	{
		"value": "900",
		"name": "900"
	}
];
/**
 * 字体
 * @type {[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */
export const FontFamily = [
	{
		"value": "微软雅黑",
		"name": "微软雅黑"
	},
	{
		"value": "宋体",
		"name": "宋体"
	},
	{
		"value": "楷体",
		"name": "楷体"
	},
	{
		"value": "隶书",
		"name": "隶书"
	},
	{
		"value": "华文行楷",
		"name": "华文行楷"
	},
	{
		"value": "黑体",
		"name": "黑体"
	},
	{
		"value": "方正舒体",
		"name": "方正舒体"
	},
	{
		"value": "Arial Unicode MS",
		"name": "Arial Unicode MS"
	},
	{
		"value": "Buxton sketch",
		"name": "Buxton sketch"
	},
	{
		"value": "Brush Script Std",
		"name": "Brush Script Std"
	},
	{
		"value": "Arabic Typesetting",
		"name": "Arabic Typesetting"
	},
	{
		"value": "Andalus",
		"name": "Andalus"
	},
	{
		"value": "Segoe UI",
		"name": "Segoe UI"
	},
	{
		"value": "Lucida Grande",
		"name": "Lucida Grande"
	},
	{
		"value": "Helvetica",
		"name": "Helvetica"
	},
	{
		"value": "Arial",
		"name": "Arial"
	},
	{
		"value": "Microsoft YaHei",
		"name": "Microsoft YaHei"
	}
];
export const ProgressForm = [
	{
		"value": "CircleProgress",
		"name": "圆形"
	},
	{
		"value": "RectangleProgress",
		"name": "条形"
	},
];
/**
 * 页面操作类型
 * @type {{GET_PAGES: string, GET_PAGE: string, ADD_PAGE: string, DELETE_PAGE: string, PRE_PAGE: string, NEXT_PAGE: string, ENLARGE_PAGE: string, NARROW_PAGE: string, UPDATE_PAGE: string, ADD_COMPONENT: string, HANDLE_RMOUSE: string}}
 */
export const PageActions = {
	GET_PAGES: 'GET_PAGES',
	GET_PAGE: "GET_PAGE",
	ADD_PAGE: "ADD_PAGE",
	DELETE_PAGE: "DELETE_PAGE",
	PRE_PAGE: "PRE_PAGE",
	NEXT_PAGE: "NEXT_PAGE",
	ENLARGE_PAGE: "ENLARGE_PAGE",
	NARROW_PAGE: "NARROW_PAGE",
	UPDATE_PAGE: "UPDATE_PAGE",
	ADD_COMPONENT: "ADD_COMPONENT",
	HANDLE_RMOUSE: "HANDLE_RMOUSE",
	ADD_PAGE_EVENT: "ADD_PAGE_EVENT",
	DELETE_PAGE_EVENT: "DELETE_PAGE_EVENT"
};
/**
 * 按钮操作类型
 * @type {{SELECTED_PAGE: string, SELECTED_MODULE: string}}
 */
export const MenuActions = {
	SELECTED_PAGE: 'SELECTED_PAGE',
	SELECTED_MODULE: 'SELECTED_MODULE',
	SELECTED_CODING_MODULE: 'SELECTED_CODING_MODULE',
	SELECTED_SYS_FUNC: 'SELECTED_SYS_FUNC'
};
/**
 * 页面事件类型
 * @type {{GO_PAGE: string, VIDEO_ACTION: string, AUDIO_ACTION: string}}
 */
export const PageEventType = {
	GO_PAGE: 'GO_PAGE',
	VIDEO_ACTION: 'VIDEO_ACTION',
	AUDIO_ACTION: 'AUDIO_ACTION'
};


/**
 * 对象树节点类型
 * @type {{PARENT: number, CHILD: number}}
 */
export const ElementType = {
	PARENT: 0,
	CHILD: 1,
	PAGE: 2,
	MODULE: 3,
	CONTENT: 4
};
/**
 * 按钮类型
 * @type {{snapshots: {value: string, name: string}, elements: {value: string, name: string}, modules: {value: string, name: string}, component: {value: string, name: string}, apiPage: {value: string, name: string}, coding: {value: string, name: string}, coding1: {value: string, name: string}}}
 */
export const Menus = {
	snapshots: {
		value: 'snapshots',
		name: '页面'
	},
	elements: {
		value: 'elements',
		name: '对象'
	},
	modules: {
		value: 'modules',
		name: '控件'
	},
	component: {
		value: 'component',
		name: '组件'
	},
	apiPage: {
		value: 'apiPage',
		name: 'API'
	},
	coding: {
		value: 'coding',
		name: '编码'
	}
};
/**
 * 组件操作类型
 * @type {{ADD_MODULE: string, UPDATE_MODULE: string, ADD_SUB_MODULE: string, SET_CURRENT_MODULE: string, STORE_SELECT_BOX_POSITION: string, UPDATE_SELECTED_MODULES: string}}
 */
export const ModuleAction = {
	ADD_MODULE: 'ADD_MODULE',
	UPDATE_MODULE: 'UPDATE_MODULE',
	ADD_SUB_MODULE: 'ADD_SUB_MODULE',
	SET_CURRENT_MODULE: 'SET_CURRENT_MODULE',
	STORE_SELECT_BOX_POSITION: "STORE_SELECT_BOX_POSITION",
	UPDATE_SELECTED_MODULES: 'UPDATE_SELECTED_MODULES'
};
export const ApiAction = {
	API_CATEGORIES: "API_CATEGORIES",
	API_GAT_API: "API_GAT_API",
	ADD_API_DETAILS: "ADD_API_DETAILS",
	DELETE_API_DETAILS: "DELETE_API_DETAILS",
	UPDATE_API_DETAILS: "UPDATE_API_DETAILS",
	GET_ORDERED_APIS: "GET_ORDERED_APIS"
};
/************************组件下载*******************/
export const componentAction = {
	NAV_PRIMARY: "NAV_PRIMARY",
	NAV_SUB: "NAV_SUB",
	COM_DETAIL: "COM_DETAIL",
	COM_PRIVATE: "COM_PRIVATE",
};
/********************服务分支列表************************/
export const serviceVersionAction = {
	SER_VERSIONS: "SER_VERSIONS",
	SER_CURRENT_VERSION: "SER_CURRENT_VERSION",
	SER_STORE_VERSION: "SER_STORE_VERSION",
};
/********************工程类型************************/

/**
 * 服务工程
 * @type {string}
 */
export const SERVICE_PROJECT = 'cso';
export const OLDSERVICE_PROJECT = '1';
/**
 * 模板工程
 * @type {string}
 */
export const TEMPLET_PROJECT = 'TEMPLET_PROJECT';

/**
 * 组件工程
 * @type {string}
 */
export const COMPONENT_PROJECT = 'co';
export const OLDCOMPONENT_PROJECT = 'CO';




