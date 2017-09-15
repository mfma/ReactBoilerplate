import $ from 'jquery';

/**
 * 页面跳转
 * @param dispatch
 * @param tigger
 * @param pageIndex
 */
function goPage(dispatch, tigger, pageIndex) {
	$("#" + tigger).bind('click', function () {
		//dispatch(getPage(PageActions.GET_PAGE, pageIndex));
	});
}

/**
 * 控制音频播放
 * @param tigger
 * @param target
 */
function controlAudio(tigger, target) {
	$("#" + tigger).bind('click', function () {
		let audio = $("#" + target)[0];
		let audioPlayBtn = $("#" + target + "_playBtn");
		let audioPauseBtn = $("#" + target + "_pauseBtn");
		if (audio.paused) {
			audioPlayBtn.show();
			audioPauseBtn.hide();
			audio.play();
		} else {
			audioPlayBtn.hide();
			audioPauseBtn.show();
			audio.pause();
		}
	});
}

/**
 * 控制视频播放
 * @param tigger
 * @param target
 */
function controlVideo(tigger, target) {
	$("#" + tigger).bind('click', function () {
		let videoItem = $("#" + target);
		let video = videoItem.find('.ma-video')[0];
		let videoPlayBtn = videoItem.find(".ma-video-playBtn");
		if (video.paused) {
			videoPlayBtn.hide();
			video.play();
		} else {
			videoPlayBtn.show();
			video.pause();
		}
	});
}

let PageEvents = {};
PageEvents.goPage = goPage;
PageEvents.controlAudio = controlAudio;
PageEvents.controlVideo = controlVideo;
export default PageEvents;