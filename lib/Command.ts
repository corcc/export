import { loadModule } from '@corcc/loader';
const oe = Object.entries;
type s = string;
export type ExportCommandParams = {
	name: s;
	value?: s;
}
export function getExportCommand ({
	name,
	value
}: ExportCommandParams) {
	const _a: s = (function (_n: s, _v?: s): s {
		const V = function (v?: s) {
			return v ? ('=' + `"${v}"`) : '';
		};
		const _c: s = `export "${_n}"${V(_v)}`;
		return _c;
	})(name, value);
	return _a;
}

export function getExportCommandFrom (path: string) {
	const { config } = loadModule(path);
	const _a = oe(config).map(([name, value]: any) => {
		return getExportCommand({
			name,
			value
		});
	});
	return _a;
}
