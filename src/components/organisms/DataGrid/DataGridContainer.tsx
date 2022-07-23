import { DataGridProps, RowData } from ".";
import get from "lodash/fp/get";
import React from "react";
import generateGridTemplateColumns from "./utils/generateGridTemplateColumns";
import { Alignment } from "./types";

const DataGridContainer = <T extends RowData>({
  columns,
  data,
  subscriber,
}: DataGridProps<T>): JSX.Element => {
  return (
    <div
      style={{ gridTemplateColumns: generateGridTemplateColumns(columns) }}
      className={`border grid rounded-md drop-shadow-sm bg-white `}
    >
      {columns.map((column, index) => {
        const isNotOnlyRow = data.length > 0;
        const isNotLastColumn = index < columns.length - 1;
        return (
          <div
            style={{
              borderBottom: isNotOnlyRow ? "1px solid rgb(229 231 235)" : "0px",
              borderRight: isNotLastColumn
                ? "1px solid rgb(229 231 235)"
                : "0px",
            }}
            className={`p-2 text-center font-semibold border-gray-200`}
            key={column.path}
          >
            {column.header}
          </div>
        );
      })}
      {data.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {columns.map((column, columnIndex) => {
            const isNotLastColumn = columnIndex < columns.length - 1;
            const isNotLastRow = rowIndex < data.length - 1;
            let value = get(column.path || column.key)(row);
            if (column.formatValue) value = column.formatValue(value);
            return (
              <div
                style={{
                  borderRight: isNotLastColumn
                    ? "1px solid rgb(229 231 235)"
                    : undefined,
                  borderBottom: isNotLastRow
                    ? "1px solid rgb(229 231 235)"
                    : undefined,
                  textAlign:
                    column.align === Alignment.right
                      ? "right"
                      : column.align === Alignment.center
                      ? "center"
                      : "left",
                }}
                className={`p-2`}
                key={`${rowIndex}-${column.path}`}
              >
                {column.customCell ? (
                  <column.customCell
                    value={value}
                    subscriber={subscriber}
                    row={row}
                    generateLink={column.generateLink}
                  />
                ) : (
                  value
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DataGridContainer;
