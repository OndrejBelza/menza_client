import Category from "@elements/Category";
import { RowData } from "@organisms/DataGrid";

export type CategoryCellProps = {
  value: any;
  row: RowData;
};

const CategoryCell = ({ value }: CategoryCellProps): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center">
      <Category name={value} width="w-full" />
    </div>
  );
};

export default CategoryCell;
