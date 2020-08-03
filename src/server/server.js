const http = require('http');
const convert = require('xml-js');

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
  	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.setHeader("Content-Type", "application/json");
	res.writeHead(200);
	
	
	console.log('req', new Date());
	console.log(req.url);
	
	/* http://192.168.8.1/api/device/signal */
	const options = {
		host: '192.168.8.1',
		path: req.url
	};
	
	const huawei = http.request(options, (response) => {
		let str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			const json = convert.xml2js(str, {compact: true, spaces: 4});
			const result = {
				rsrp: json.response.rsrp._text,
				rsrq: json.response.rsrq._text,
				rssi: json.response.rssi._text,
				sinr: json.response.sinr._text,
				cqi0: json.response.cqi0._text,
				cqi1: json.response.cqi1._text
			};
			res.end(JSON.stringify(result));
		});
	}).end();
	
	
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});