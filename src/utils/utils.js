/**
 * Created by issuser on 2017/7/4.
 */
import $ from 'jquery';

class Utils {
	
	/**
	 * url加密串解密处理
	 * */
	static getDecodeStr(params) {
		
		let start = window.atob(params);
		let projectId = start.split("#")[0].split("=")[1],
			userId = start.split("#")[1].split("=")[1],
			projectType = start.split("#")[2].split("=")[1];
		return {
			projectId: projectId,
			userId: userId,
			projectType: projectType
		}
	}
	
	
	/**
	 * 判断是否移动端
	 * @returns {boolean}
	 */
	static isMobile() {
		//noinspection JSUnresolvedVariable
		let browser = {
			versions: function () {
				let u = navigator.userAgent, app = navigator.appVersion;
				return {//移动终端浏览器版本信息
					trident: u.indexOf('Trident') > -1, //IE内核
					presto: u.indexOf('Presto') > -1, //opera内核
					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
					iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
					iPad: u.indexOf('iPad') > -1, //是否iPad
					webApp: u.indexOf('Safari') === -1, //是否web应该程序，没有头部与底部
					weixin: u.indexOf('MicroMessenger') > -1
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		};
		return !!(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
			browser.versions.iPhone || browser.versions.iPad);
	};
	
	/**
	 * 计算窗口缩放值
	 * @returns {{scaleX: number, scaleY: number}}
	 */
	static screenAdapter() {
		let window_width = $(window).width();
		let window_height = $(window).height();
		let scaleX = window_width / 375;
		let scaleY = window_height / 603;
		let isMobile = Utils.isMobile();
		let scale = scaleX < scaleY ? scaleX : scaleY;
		if (isMobile) {
			$('.ma-wrapper').css({
				transform: 'scale(' + scale + ', ' + scale + ')',
			});
		} else {
			$('.ma-wrapper').css({
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			});
		}
	};
	
}

export default Utils;

