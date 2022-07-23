import Category from "@elements/Category";
import { RowData } from "@organisms/DataGrid";

export type CategoryCellProps = {
  value: any;
  row: RowData;
};

const CategoryCell = ({ value }: CategoryCellProps): JSX.Element => {
  return <Category name={value} />;
};

export default CategoryCell;
