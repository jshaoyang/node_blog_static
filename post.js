var http = require('http');
var conf = require('./.build-config');
var fs = require('fs');
var dir = './dest/' + conf.version;
var path = require('path');
var map = {};
var options = {
    'hostname': 'onlyqing.cn',
    'port':3000,
    "headers":{},
    'path': '/upload',
    'method': 'POST'     
}

var postFile = function ( filePath , option , toPath , filename ) {
    var req = http.request(option, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('\t提示:\t' + chunk);
        });
    });
    req.setHeader('to',toPath.replace('./','/'));
    req.setHeader('filename',filename);

    var readStream = fs.ReadStream(filePath);
    readStream.pipe(req);
    // 当stream停止读取的时候通过对request调用end()方法断开链接
    readStream.on('close', function() {
        req.end();
    });
}

var readMap = function ( dir ) {
    let files = fs.readdirSync( dir);
    for(var i = 0; i < files.length; i++) {
        let filePath = dir + '/' + files[i];
        let stats = fs.statSync(filePath);
        if( stats.isFile() ){
            postFile( filePath, options , dir , files[i]);
            let file = filePath.replace('./','/');
            map[file.replace( conf.version , 'dev' )] = conf.staticSite + file;
        }else{
            readMap(filePath);
        }
    }
}

readMap(dir);

var data = JSON.stringify( map , null ,'\t' );

fs.writeFile(dir + '.json', data ,'utf-8',function (err,file) {
    options['path'] = options['path'] + '/config';
    postFile( dir + '.json' , options ,'./config/' , conf.version + '.json' )
});