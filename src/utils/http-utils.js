/**
 * Created by issuser on 2017/7/3.
 */
import * as $ from 'jquery';

function ajaxUtil(jsonData, callback) {
	let callBacks = callback || null;
	if (jsonData.processData === undefined) {
		jsonData.processData = true
	}
	if (jsonData.async === undefined) {
		jsonData.async = true
	}
	if (jsonData.contentType === undefined) {
		jsonData.contentType = "application/x-www-form-urlencoded"
	}
	$.ajax({
		type: jsonData.type || "GET", /*可传可不传参数，不传默认为get请求*/
		async: jsonData.async, /*可传可不传参数，不传默认为true为异步请求*/
		url: jsonData.url,
		data: jsonData.data || null, /*发送请求的参数，为json格式数据*/
		dataType: jsonData.dataType || null, /*需要跨域时传入参数值jsop*/
		contentType: jsonData.contentType,
		processData: jsonData.processData,
		beforeSend: function (request) {
			let header = jsonData.header;
			$.each(header, function (index, item) {
				request.setRequestHeader(item.header_name, item.header_value)
			})
		},
		success: function (result) {
			callBacks && callBacks(result)
		},
		error: function (error) {
			console.log("error_json", jsonData);
			console.log("error_message", error);
		}
	});
}

class Project {
	
	/**
	 * 下载服务代码
	 * @param serviceId
	 * @param callback
	 */
	static getServiceCode(serviceId, callback) {
		let jsonData = {
			type: "POST",
			async: true,
			url: "/pub/application/downServiceSource",
			data: {
				appInstanceId: serviceId,
				type: 2
			},
			contentType: 'application/x-www-form-urlencoded',
			dataType: "json"
		};
		ajaxUtil(jsonData, callback);
	};
}



class HttpUtils {
	static get Project() {
		return Project;
	}
}

export default HttpUtils;
