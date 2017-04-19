'use strict';
var gulp = require('gulp');
var http = require('http');
var pack = require('./package');
var confPack = require('./.build-config');
var fs = require('fs');
var dir = './dest/v' + pack.version;
var path = require('path');
var map = {};
var options = {
	'hostname': 'onlyqing.cn',
	'port':3000,
	'path': '/upload',
	'method': 'POST'     
}
var readMap = function ( dir ) {
	let files = fs.readdirSync( dir);
	for(var i = 0; i < files.length; i++) {
		let filePath = dir + '/' + files[i];
		let stats = fs.statSync(filePath);
		if( stats.isFile() ){
			let file = filePath.replace('./','/');
			var req = http.request(options, function(res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					console.log('\t提示:\t' + chunk);
				});
			});
			req.setHeader('to',dir.replace('./','/'));
			req.setHeader('filename',files[i]);

			var readStream = fs.ReadStream(filePath);
			readStream.pipe(req);
			// 当stream停止读取的时候通过对request调用end()方法断开链接
			readStream.on('close', function() {
				req.end();
			});
			map[file] = confPack.staticSite + file;
		}else{
			readMap(filePath);
		}
	}
}

readMap(dir);

var data = JSON.stringify( map , null ,'\t' );

fs.writeFile(dir + '.json', data ,'utf-8',function (err,file) {
	
});