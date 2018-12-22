import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeMaterialLayoutGridListDetails extends ForgeRenderingDetails<ForgeMaterialLayoutGridListConfig> {
	public Columns: number;
	
	public GutterSize: string;

	public RowHeight: string;

	public Rows: number;
}

export class ForgeMaterialLayoutGridListConfig {
	public ColumnSpan: number;

	public RowSpan: number;
}
