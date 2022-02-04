/**
 * An English Metric Unit (EMU) is defined as 1/360,000 of a centimeter.
 *
 * This is the base unit used by this library.
 *
 * @see https://developers.google.com/slides/api/reference/rest/v1/Unit
 */
export const EMU_PER_CM = 360000;
export const EMU_PER_INCH = 914400; // EMU_PER_CM * 2.54;
export const EMU_PER_PT = 12700; // EMU_PER_INCH / 72;

////////////////////////////////////////////////////////////////
////////////////////////// Page Sizes //////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Either a {@linkcode KnownPageSize} or {@linkcode CustomPageSize}.
 */
export type PageSize = KnownPageSize | CustomPageSize;

/**
 * A pre-defined page size supported by PDFKit.
 *
 * @see https://pdfkit.org/docs/paper_sizes.html
 */
export type KnownPageSize =
	| '4A0'
	| '2A0'
	| 'A0'
	| 'A1'
	| 'A2'
	| 'A3'
	| 'A4'
	| 'A5'
	| 'A6'
	| 'A7'
	| 'A8'
	| 'A9'
	| 'A10'
	| 'B0'
	| 'B1'
	| 'B2'
	| 'B3'
	| 'B4'
	| 'B5'
	| 'B6'
	| 'B7'
	| 'B8'
	| 'B9'
	| 'B10'
	| 'C0'
	| 'C1'
	| 'C2'
	| 'C3'
	| 'C4'
	| 'C5'
	| 'C6'
	| 'C7'
	| 'C8'
	| 'C9'
	| 'C10'
	| 'RA0'
	| 'RA1'
	| 'RA2'
	| 'RA3'
	| 'RA4'
	| 'SRA0'
	| 'SRA1'
	| 'SRA2'
	| 'SRA3'
	| 'SRA4'
	| 'EXECUTIVE' // 7.25 x 10.5
	| 'FOLIO' // 8.5 x 13
	| 'LEGAL' // 8.5 x 14
	| 'LETTER' // 8.5 x 11
	| 'TABLOID'; // 11 x 17

/**
 * A list of {@link KnownPageSize pre-defined page sizes} supported by PDFKit.
 */
export const KNOWN_PAGE_SIZES: readonly KnownPageSize[] = [
	'4A0',
	'2A0',
	'A0',
	'A1',
	'A2',
	'A3',
	'A4',
	'A5',
	'A6',
	'A7',
	'A8',
	'A9',
	'A10',
	'B0',
	'B1',
	'B2',
	'B3',
	'B4',
	'B5',
	'B6',
	'B7',
	'B8',
	'B9',
	'B10',
	'C0',
	'C1',
	'C2',
	'C3',
	'C4',
	'C5',
	'C6',
	'C7',
	'C8',
	'C9',
	'C10',
	'RA0',
	'RA1',
	'RA2',
	'RA3',
	'RA4',
	'SRA0',
	'SRA1',
	'SRA2',
	'SRA3',
	'SRA4',
	'EXECUTIVE',
	'FOLIO',
	'LEGAL',
	'LETTER',
	'TABLOID',
];

/**
 * Type guard to check whether a `string` is a {@linkcode KnownPageSize}.
 */
export function isKnownPageSize(s: string): s is KnownPageSize {
	return KNOWN_PAGE_SIZES.indexOf(s as KnownPageSize) !== -1;
}

/**
 * A custom page size, in the form of a `[width, height]` tuple in {@link EMU_PER_CM EMUs}.
 */
export type CustomPageSize = [number, number];

////////////////////////////////////////////////////////////////
////////////////////////// Templates ///////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Union type for all possible types of templates.
 */
export type Template = SimpleTemplate | GridTemplate;

/**
 * Union type for all known manufacturers.
 */
export type Manufacturer = 'Avery' | 'Online Labels';

/**
 * Type for defining all of the names of a template across multiple manufacturers.
 */
export type TemplateNames = Readonly<Partial<Record<Manufacturer, string | readonly string[]>>>;

/**
 * Base type inherited by all template types.
 *
 * @deprecated Not to be used directly.
 */
export type BaseTemplate = {
	/**
	 * The names of the template.
	 */
	readonly names: TemplateNames;

	/**
	 * The {@link PageSize size} of the page.
	 */
	readonly pageSize: PageSize;
};

/**
 * A simple template, consisting of a page.
 */
export type SimpleTemplate = BaseTemplate & {
	/**
	 * @deprecated This is only for use by the {@linkcode isSimpleTemplate} type guard.
	 */
	readonly $type: 'simple';
};

/**
 * Type guard to check whether a {@linkcode Template} is a {@linkcode SimpleTemplate}.
 */
export function isSimpleTemplate(template: Template): template is SimpleTemplate {
	return template.$type === 'simple';
}

/**
 * A grid template, consisting of a grid of shapes, centered on the page.
 */
export type GridTemplate = BaseTemplate & {
	/**
	 * @deprecated This is only for use by the {@linkcode isGridTemplate} type guard.
	 */
	readonly $type: 'grid';

	/**
	 * Flag indicating whether this template has been verified.
	 */
	readonly verified: boolean;

	/**
	 * Any notes about this template.
	 */
	readonly notes?: string;

	/**
	 * The number of shapes horizontally across the page.
	 */
	readonly hCount: number;

	/**
	 * The number of shapes vertically down the page.
	 */
	readonly vCount: number;

	/**
	 * The amount of space in {@link EMU_PER_CM EMUs} horizontally between shapes.
	 */
	readonly hSpacing: number;

	/**
	 * The amount of space in {@link EMU_PER_CM EMUs} vertically between shapes.
	 */
	readonly vSpacing: number;

	/**
	 * The {@linkcode Shape} of a cell within the grid.
	 */
	readonly cellShape: Shape;
};

/**
 * Type guard to check whether a {@linkcode Template} is a {@linkcode GridTemplate}.
 */
export function isGridTemplate(template: Template): template is GridTemplate {
	return template.$type === 'grid';
}

////////////////////////////////////////////////////////////////
//////////////////////////// Shapes ////////////////////////////
////////////////////////////////////////////////////////////////

/**
 * Union type for all possible types of shapes.
 */
export type Shape = Ellipse | Rectangle;

/**
 * {@linkcode Shape} representing an ellipse, or a circle if `width` and `height` are the same.
 */
export type Ellipse = {
	/**
	 * @deprecated This is only for use by the {@linkcode isEllipse} type guard.
	 */
	readonly $type: 'ellipse';

	/**
	 * Width of the ellipse in {@link EMU_PER_CM EMUs}.
	 */
	readonly width: number;

	/**
	 * Height of the ellipse in {@link EMU_PER_CM EMUs}.
	 */
	readonly height: number;
};

/**
 * Type guard to check whether a {@linkcode Shape} is a {@linkcode Ellipse}.
 */
export function isEllipse(shape: Shape): shape is Ellipse {
	return shape.$type === 'ellipse';
}

/**
 * {@linkcode Shape} representing a rectangle.
 */
export type Rectangle = {
	/**
	 * @deprecated This is only for use by the {@linkcode isRectangle} type guard.
	 */
	readonly $type: 'rectangle';

	/**
	 * Width of the rectangle in {@link EMU_PER_CM EMUs}.
	 */
	readonly width: number;

	/**
	 * Height of the rectangle in {@link EMU_PER_CM EMUs}.
	 */
	readonly height: number;
};

/**
 * Type guard to check whether a {@linkcode Shape} is a {@linkcode Rectangle}.
 */
export function isRectangle(shape: Shape): shape is Rectangle {
	return shape.$type === 'rectangle';
}
