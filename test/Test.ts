const { cwd } = process;
const p = function (path: string) {
	return require('path').join(cwd(), path);
};
const oe = Object.entries;
const importPaths = [
	'/dist',
	'/index'
];
importPaths.forEach((importPath: string) => {
	const _ = require(p(`${importPath}`));
	console.info('importPath :');
	console.info('', importPath);
	oe(_).forEach(([functionName, functionValue]: any) => {
		if (!functionValue || !(functionValue instanceof Function)) {
			return;
		}
		let { params }:any = require('./Param');
		params = params[functionName];
		const result = functionValue(params);
		console.warn('', '', `${functionName} :`);
		console.info('', '', '', result);
	});
});
