import { CustomCell } from "@organisms/DataGrid";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const MealNameCell = ({
  value,
  row,
  generateLink,
}: CustomCell): JSX.Element => {
  const content = useMemo(
    () => (
      <span className="text-lg hover:underline cursor-pointer">{value}</span>
    ),
    [value]
  );

  return (
    <>
      {generateLink ? <Link to={generateLink(row)}>{content}</Link> : content}
    </>
  );
};

export default MealNameCell;
