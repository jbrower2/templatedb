import { Ellipse, GridTemplate, PageSize, Rectangle, Shape, SimpleTemplate, Template, TemplateNames } from './types';

let curName: string;

function ol(name: string): TemplateNames {
	curName = name;
	return { 'Online Labels': name };
}

const allowedNumbers: readonly number[] = [];
const badNumbers: { [n: string]: string[] } = {};
function validateNumber(n: number) {
	if (n % 127 && allowedNumbers.indexOf(n) === -1) {
		const s = `${n}`;
		let arr = badNumbers[s];
		if (!arr) {
			badNumbers[s] = arr = [];
		}
		arr.push(curName);
	}
}

function simple(names: TemplateNames, pageSize: PageSize): SimpleTemplate {
	return {
		$type: 'simple',
		names,
		pageSize,
	};
}

function grid(
	names: TemplateNames,
	pageSize: PageSize,
	hCount: number,
	vCount: number,
	hSpacing: number,
	vSpacing: number,
	cellShape: Shape,
): GridTemplate {
	validateNumber(hSpacing);
	validateNumber(vSpacing);
	return {
		$type: 'grid',
		names,
		pageSize,
		hCount,
		vCount,
		hSpacing,
		vSpacing,
		cellShape,
	};
}

function ellipse(width: number, height: number): Ellipse {
	validateNumber(width);
	validateNumber(height);
	return {
		$type: 'ellipse',
		width,
		height,
	};
}

function rectangle(width: number, height: number): Rectangle {
	validateNumber(width);
	validateNumber(height);
	return {
		$type: 'rectangle',
		width,
		height,
	};
}

const PAGE_12x18: PageSize = [12 * 914400, 18 * 914400];

export const templatedb: Template[] = [
	simple(ol('OL1097'), PAGE_12x18),
	simple(ol('OL1588'), 'LEGAL'),
	simple(ol('OL177'), 'LETTER'),
	simple(ol('OL284'), 'LETTER'),
	simple(ol('OL4469'), 'LETTER'),
	simple(ol('OL915'), 'TABLOID'),
	simple(ol('OL9805'), 'LETTER'),

	grid(ol('OL100'), 'LETTER', 2, 7, 178308, 0, rectangle(3657600, 1207008)),
	grid(ol('OL1000'), 'LETTER', 5, 10, 114300, 0, rectangle(1371600, 914400)),
	grid(ol('OL1028'), 'LETTER', 2, 5, 114300, 114300, rectangle(2743200, 1828800)),
	grid(ol('OL1050'), 'LETTER', 4, 16, 114300, 114300, rectangle(1657350, 457200)),
	grid(ol('OL1067'), 'LETTER', 5, 12, 114300, 114300, rectangle(1371600, 685800)),
	grid(ol('OL1075'), 'LETTER', 6, 11, 0, 0, rectangle(1295339.04, 914400)),
	grid(ol('OL1100'), 'LETTER', 5, 20, 0, 0, rectangle(1371600, 457200)),
	grid(ol('OL1115'), 'LETTER', 2, 9, 114300, 114300, rectangle(2743200, 914400)),
	grid(ol('OL1125'), 'LETTER', 2, 5, 228600, 0, rectangle(2800350, 1680210)),
	grid(ol('OL114'), 'LETTER', 8, 5, 0, 0, rectangle(914400, 1828800)),
	grid(ol('OL1150'), 'LETTER', 1, 15, 0, 0, rectangle(5349240, 615116.88)),
	grid(ol('OL1159'), 'LETTER', 1, 5, 0, 0, rectangle(7315200, 1828800)),
	grid(ol('OL1182'), 'LETTER', 13, 4, 114300, 114300, rectangle(457200, 2286000)),
	grid(ol('OL1244'), 'LEGAL', 2, 2, 0, 0, rectangle(3657600, 5943600)),
	grid(ol('OL125'), 'LETTER', 2, 5, 128016, 0, rectangle(3657600, 1828800)),
	grid(ol('OL1252'), 'LEGAL', 2, 2, 0, 0, rectangle(3657600, 6400800)),
	grid(ol('OL1258'), 'LETTER', 1, 2, 0, 228600, rectangle(7086600, 4343400)),
	grid(ol('OL131'), 'LETTER', 1, 2, 0, 457200, rectangle(7315200, 4572000)),
	grid(ol('OL1347'), 'LETTER', 3, 6, 0, 0, rectangle(2057400, 1371600)),
	grid(ol('OL1417'), 'LETTER', 1, 2, 0, 114300, rectangle(5486400, 4572000)),
	grid(ol('OL1437'), 'LETTER', 1, 9, 0, 114300, rectangle(5486400, 914400)),
	grid(ol('OL145'), 'LETTER', 1, 2, 0, 228600, rectangle(5486400, 3657600)),
	grid(ol('OL1499'), 'LETTER', 1, 2, 0, 621792, rectangle(5943600, 4114800)),
	grid(ol('OL150'), 'LETTER', 2, 3, 186263.28, 0, rectangle(3657600, 3057753.6)),
	grid(ol('OL1502'), 'LETTER', 3, 6, 320040, 182880, rectangle(1828800, 1371600)),
	grid(ol('OL1543'), 'LETTER', 2, 20, 1143000, 0, rectangle(2857500, 457200)),
	grid(ol('OL1555'), 'LETTER', 3, 3, 114300, 114300, rectangle(2171700, 2743200)),
	grid(ol('OL157'), 'LETTER', 2, 9, 575980.56, 176022, rectangle(3143250, 857250)),
	grid(ol('OL159'), 'LETTER', 1, 2, 0, 0, rectangle(7433998.848, 4572000)),
	grid(ol('OL160'), 'LETTER', 3, 6, 288036, 228600, rectangle(2171700, 1143000)),
	grid(ol('OL161'), 'LETTER', 2, 6, 228600, 215981.28, rectangle(3429000, 1143000)),
	grid(ol('OL162'), 'LETTER', 2, 2, 228600, 228600, rectangle(3429000, 4343400)),
	grid(ol('OL1649'), 'LETTER', 7, 2, 114300, 114300, rectangle(914400, 4572000)),
	grid(ol('OL171'), 'LETTER', 2, 4, 228600, 228600, rectangle(3429000, 1828800)),
	grid(ol('OL172'), 'LETTER', 2, 3, 228600, 342900, rectangle(3429000, 2743200)),
	grid(ol('OL173'), 'LETTER', 2, 16, 747064.8, 0, rectangle(2743200, 571500)),
	grid(ol('OL1735'), 'LETTER', 4, 12, 304495.2, 124358.4, rectangle(1600200, 685800)),
	grid(ol('OL178'), 'LETTER', 2, 1, 0, 0, rectangle(3886200, 10058400)),
	grid(ol('OL1809'), 'LETTER', 2, 6, 182880, 251460, rectangle(3429000, 1314450)),
	grid(ol('OL1825'), 'LETTER', 2, 40, 304495.2, 0, rectangle(3200400, 228600)),
	grid(ol('OL1905'), 'LETTER', 4, 8, 171450, 0, rectangle(1600200, 1143000)),
	grid(ol('OL1930'), 'LETTER', 8, 20, 0, 0, rectangle(914400, 457200)),
	grid(ol('OL1983'), 'LETTER', 2, 2, 114300, 228600, rectangle(2743200, 4572000)),
	grid(ol('OL1985'), 'LETTER', 1, 5, 0, 0, rectangle(7772400, 1828800)),
	grid(ol('OL200'), 'LETTER', 2, 15, 514350, 0, rectangle(3143250, 608624.64)),
	grid(ol('OL2050'), 'LETTER', 13, 17, 114300, 114300, rectangle(457200, 457200)),
	grid(ol('OL2082'), 'LETTER', 2, 12, 152339.04, 0, rectangle(3657600, 685800)),
	grid(ol('OL2083'), 'LETTER', 3, 9, 114300, 114300, rectangle(1714500, 857250)),
	grid(ol('OL2097'), 'LETTER', 1, 5, 0, 0, rectangle(5486400, 1828800)),
	grid(ol('OL2124'), 'LETTER', 1, 2, 0, 114300, rectangle(6400800, 4572000)),
	grid(ol('OL223'), 'LETTER', 5, 3, 328617.072, 1028700, rectangle(1200150, 2514600)),
	grid(ol('OL2331'), 'LETTER', 5, 2, 114300, 114300, rectangle(1371600, 4572000)),
	grid(ol('OL243'), 'LETTER', 1, 2, 0, 685800, rectangle(6172200, 3886200)),
	grid(ol('OL248'), 'LETTER', 2, 7, 457200, 0, rectangle(2743200, 1371600)),
	grid(ol('OL25'), 'LETTER', 4, 20, 257175, 0, rectangle(1600200, 457200)),
	grid(ol('OL250'), 'LETTER', 2, 6, 141732, 0, rectangle(3657600, 1367028)),
	grid(ol('OL2510'), 'LETTER', 1, 16, 0, 152393.904, rectangle(4572000, 457200)),
	grid(ol('OL2515'), 'LETTER', 1, 10, 0, 114300, rectangle(6000750, 800100)),
	grid(ol('OL2520'), 'LETTER', 7, 1, 152393.904, 0, rectangle(914400, 7543800)),
	grid(ol('OL2525'), 'LETTER', 7, 1, 152393.904, 0, rectangle(857250, 8286750)),
	grid(ol('OL2530'), 'LETTER', 6, 1, 91440, 0, rectangle(1143000, 9258300)),
	grid(ol('OL2547'), 'LETTER', 2, 2, 228600, 228600, rectangle(3200400, 4114800)),
	grid(ol('OL2679'), 'LETTER', 3, 4, 571500, 521208, rectangle(1828800, 1828800)),
	grid(ol('OL2680'), 'LETTER', 5, 1, 365760, 0, rectangle(1143000, 8915400)),
	grid(ol('OL2681'), 'LETTER', 4, 6, 285750, 182880, rectangle(1371600, 1371600)),
	grid(ol('OL28'), 'LETTER', 9, 10, 107990.64, 0, rectangle(685800, 914400)),
	grid(ol('OL285'), 'LETTER', 6, 12, 0, 0, rectangle(1143000, 685800)),
	grid(ol('OL291'), 'LETTER', 3, 4, 114300, 152403.048, rectangle(2286000, 2286000)),
	grid(ol('OL2921'), 'LETTER', 1, 3, 0, 228600, rectangle(6743700, 2857500)),
	grid(ol('OL3008'), 'LETTER', 10, 14, 0, 0, rectangle(685800, 685800)),
	grid(ol('OL3016'), 'LETTER', 3, 4, 914400, 761969.52, rectangle(1828800, 1828800)),
	grid(ol('OL3027'), 'LETTER', 2, 2, 0, 228600, rectangle(3657600, 3657600)),
	grid(ol('OL3043'), 'LETTER', 2, 4, 457200, 457200, rectangle(3200400, 1943100)),
	grid(ol('OL3072'), 'LETTER', 2, 4, 457200, 457200, rectangle(3200400, 1828800)),
	grid(ol('OL3089'), 'LETTER', 3, 3, 0, 0, rectangle(2286000, 2743200)),
	grid(ol('OL318'), 'LETTER', 1, 3, 0, 228600, rectangle(5486400, 2743200)),
	grid(ol('OL330'), 'LETTER', 4, 5, 0, 114300, rectangle(1828800, 1828800)),
	grid(ol('OL340'), 'LETTER', 5, 4, 354330, 228600, rectangle(1143000, 2057400)),
	grid(ol('OL351'), 'LETTER', 1, 3, 0, 0, rectangle(7315200, 3200400)),
	grid(ol('OL3846'), 'LETTER', 2, 2, 228600, 228600, rectangle(3200400, 3657600)),
	grid(ol('OL385'), 'LETTER', 4, 15, 269748, 0, rectangle(1600200, 608990.4)),
	grid(ol('OL394'), 'LETTER', 1, 5, 0, 114300, rectangle(4114800, 1828800)),
	grid(ol('OL400'), 'LETTER', 1, 2, 0, 0, rectangle(7772400, 5029200)),
	grid(ol('OL421'), 'LETTER', 3, 5, 514350, 357182.928, rectangle(1943100, 1543050)),
	grid(ol('OL425'), 'LETTER', 1, 3, 0, 0, rectangle(7772400, 3200400)),
	grid(ol('OL435'), 'LETTER', 1, 7, 0, 118113.048, rectangle(7486650, 1257300)),
	grid(ol('OL4467'), 'LETTER', 2, 1, 762609.6, 0, rectangle(2743200, 10058400)),
	grid(ol('OL4498'), 'LETTER', 1, 4, 0, 228600, rectangle(7086600, 2057400)),
	grid(ol('OL4499'), 'LETTER', 2, 1, 228600, 0, rectangle(2971800, 7086600)),
	grid(ol('OL450'), 'LETTER', 2, 2, 0, 0, rectangle(3886200, 5029200)),
	grid(ol('OL4501'), 'LETTER', 1, 5, 0, 228600, rectangle(7086600, 1600200)),
	grid(ol('OL4544'), 'LETTER', 1, 3, 0, 0, rectangle(7658100, 2971800)),
	grid(ol('OL4546'), 'LETTER', 2, 2, 457200, 114300, rectangle(3200400, 4343400)),
	grid(ol('OL4603'), 'LETTER', 3, 4, 285750, 381003.048, rectangle(1943100, 1943100)),
	grid(ol('OL4606'), 'LETTER', 3, 4, 285750, 457200, rectangle(2000250, 1657350)),
	grid(ol('OL4607'), 'LETTER', 3, 8, 160020, 228600, rectangle(2286000, 914400)),
	grid(ol('OL4647'), 'LETTER', 2, 5, 914400, 514350, rectangle(2514600, 1371600)),
	grid(ol('OL4648'), 'LETTER', 2, 4, 914400, 457200, rectangle(2514600, 1828800)),
	grid(ol('OL475'), 'LETTER', 2, 2, 171450, 0, rectangle(3657600, 4572000)),
	grid(ol('OL4904'), 'LETTER', 9, 16, 100584, 109728, rectangle(685800, 457200)),
	grid(ol('OL500'), 'LETTER', 2, 3, 114300, 0, rectangle(3657600, 2743200)),
	grid(ol('OL5030'), 'LETTER', 2, 4, 342900, 171450, rectangle(3086100, 2114550)),
	grid(ol('OL5051'), 'LETTER', 4, 4, 57150, 57150, rectangle(1737360, 2286000)),
	grid(ol('OL5100'), 'LETTER', 2, 2, 457200, 0, rectangle(3200400, 4572000)),
	grid(ol('OL5125'), 'LETTER', 4, 10, 0, 0, rectangle(1828800, 914400)),
	grid(ol('OL5175'), 'LETTER', 4, 5, 0, 0, rectangle(1645920, 1645920)),
	grid(ol('OL5225'), 'LETTER', 4, 8, 0, 0, rectangle(1828800, 1143000)),
	grid(ol('OL525'), 'LETTER', 2, 3, 171450, 114300, rectangle(3657600, 2971800)),
	grid(ol('OL5350'), 'LETTER', 3, 7, 0, 0, rectangle(2587752, 1371600)),
	grid(ol('OL5400'), 'LETTER', 7, 22, 91440, 89611.2, rectangle(914400, 342900)),
	grid(ol('OL5425'), 'LETTER', 8, 10, 0, 0, rectangle(914400, 914400)),
	grid(ol('OL5450'), 'LETTER', 1, 7, 0, 0, rectangle(6858000, 1371600)),
	grid(ol('OL550'), 'LETTER', 2, 4, 0, 0, rectangle(3886200, 2514600)),
	grid(ol('OL5550'), 'LETTER', 1, 4, 0, 0, rectangle(5486400, 2286000)),
	grid(ol('OL575'), 'LETTER', 2, 4, 114300, 114300, rectangle(3429000, 2228850)),
	grid(ol('OL5925'), 'LETTER', 1, 3, 0, 0, rectangle(6400800, 2743200)),
	grid(ol('OL5950'), 'LETTER', 1, 4, 0, 0, rectangle(7315200, 2286000)),
	grid(ol('OL600'), 'LETTER', 2, 4, 128016, 0, rectangle(3657600, 2286000)),
	grid(ol('OL6200'), 'LETTER', 1, 4, 0, 0, rectangle(6400800, 2286000)),
	grid(ol('OL625'), 'LETTER', 2, 5, 0, 0, rectangle(3886200, 1828800)),
	grid(ol('OL6300'), 'LETTER', 4, 6, 228600, 0, rectangle(1371600, 1371600)),
	grid(ol('OL6450'), 'LETTER', 2, 5, 228600, 228600, rectangle(3200400, 1600200)),
	grid(ol('OL6675'), 'LETTER', 1, 3, 0, 457200, rectangle(4572000, 2743200)),
	grid(ol('OL675'), 'LETTER', 3, 4, 0, 0, rectangle(2587752, 2514600)),
	grid(ol('OL685'), 'LETTER', 1, 2, 0, 0, rectangle(4857750, 4800600)),
	grid(ol('OL6950'), 'LETTER', 3, 10, 457200, 228600, rectangle(2057400, 685800)),
	grid(ol('OL700'), 'LETTER', 2, 6, 0, 0, rectangle(3657600, 1600200)),
	grid(ol('OL7000'), 'LETTER', 1, 5, 0, 0, rectangle(6400800, 1828800)),
	grid(ol('OL725'), 'LETTER', 2, 7, 114300, 0, rectangle(3657600, 1314450)),
	grid(ol('OL75'), 'LETTER', 2, 10, 142875, 0, rectangle(3657600, 914400)),
	grid(ol('OL750'), 'LETTER', 3, 5, 0, 0, rectangle(2590796.952, 2011680)),
	grid(ol('OL775'), 'LETTER', 3, 5, 68580, 114300, rectangle(2446020, 1828800)),
	grid(ol('OL7800'), 'LETTER', 1, 4, 0, 0, rectangle(7772400, 2286000)),
	grid(ol('OL800'), 'LETTER', 3, 6, 114300, 114300, rectangle(2286000, 1428750)),
	grid(ol('OL805'), 'LETTER', 2, 3, 114300, 114300, rectangle(2743200, 2743200)),
	grid(ol('OL820'), 'LETTER', 13, 5, 114300, 114300, rectangle(457200, 1828800)),
	grid(ol('OL8250'), 'LETTER', 4, 2, 0, 0, rectangle(1828800, 4572000)),
	grid(ol('OL8325'), 'LETTER', 3, 5, 114300, 114300, rectangle(1912924.8, 1493215.2)),
	grid(ol('OL835'), 'LETTER', 1, 6, 0, 114300, rectangle(5486400, 1371600)),
	grid(ol('OL850'), 'LETTER', 2, 12, 1028700, 114300, rectangle(3200400, 685800)),
	grid(ol('OL8500'), 'LETTER', 1, 10, 0, 0, rectangle(6400800, 914400)),
	grid(ol('OL853'), 'LEGAL', 4, 1, 114300, 0, rectangle(1714500, 10972800)),
	grid(ol('OL857'), 'LETTER', 4, 3, 114300, 114300, rectangle(1600200, 2514600)),
	grid(ol('OL864'), 'LETTER', 4, 5, 114300, 114300, rectangle(1485900, 1657350)),
	grid(ol('OL870'), 'LETTER', 3, 8, 0, 0, rectangle(2590796.952, 1257300)),
	grid(ol('OL875'), 'LETTER', 3, 10, 128016, 0, rectangle(2371496.4, 914400)),
	grid(ol('OL900'), 'LETTER', 3, 11, 0, 0, rectangle(2590495.2, 914400)),
	grid(ol('OL911'), 'LETTER', 3, 7, 114300, 114300, rectangle(2286000, 1143000)),
	grid(ol('OL9350'), 'LETTER', 3, 2, 228600, 228600, rectangle(2286000, 4572000)),
	grid(ol('OL950'), 'LETTER', 3, 11, 114300, 0, rectangle(2400300, 800100)),
	grid(ol('OL959'), 'LEGAL', 2, 2, 0, 0, rectangle(3657600, 5486400)),
	grid(ol('OL975'), 'LETTER', 5, 10, 0, 0, rectangle(1371600, 914400)),
	grid(ol('OL982'), 'LEGAL', 2, 1, 0, 0, rectangle(3886200, 12801600)),
	grid(ol('OL983'), 'LEGAL', 2, 1, 0, 0, rectangle(3886200, 11887200)),
	grid(ol('OL996'), 'LETTER', 2, 5, 114300, 114300, rectangle(2743200, 1828800)),
];

const keys = [];
for (const key in badNumbers) {
	keys.push(key);
}
keys.sort((a, b) => badNumbers[a].length - badNumbers[b].length || Number(a) - Number(b));
for (const key of keys) {
	console.log(...badNumbers[key], Number(key), Number(key) / 914400);
}
