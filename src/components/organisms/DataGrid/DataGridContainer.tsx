import { DataGridProps, RowData } from ".";
import get from "lodash/fp/get";
import React from "react";
import generateGridTemplateColumns from "./utils/generateGridTemplateColumns";
import { Alignment } from "./types";
import Provider from "./DatagridContext";
import HeaderCell from "./components/HeaderCell";
import { PuffLoader } from "react-spinners";

const DataGridContainer = <T extends RowData>({
  isLoading,
  columns,
  data,
  subscriber,
  state,
}: DataGridProps<T>): JSX.Element => {
  return (
    <Provider onStateChange={subscriber} state={state}>
      <div
        style={{ gridTemplateColumns: generateGridTemplateColumns(columns) }}
        className={`border grid rounded-md drop-shadow-sm bg-white `}
      >
        {columns.map((column, index) => {
          const isNotOnlyRow = data.length > 0;
          const isNotLastColumn = index < columns.length - 1;
          return (
            <HeaderCell
              key={column.name}
              isNotLastColumn={isNotLastColumn}
              isNotOnlyRow={!isLoading && isNotOnlyRow}
              {...column}
            />
          );
        })}

        {isLoading && (
          <div
            className="flex items-center flex-col border-t py-2"
            style={{ gridColumn: `span ${columns.length}` }}
          >
            <PuffLoader color="#3482F6" />
            <span>načítání...</span>
          </div>
        )}

        {!isLoading &&
          data.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {columns.map((column, columnIndex) => {
                const isNotLastColumn = columnIndex < columns.length - 1;
                const isNotLastRow = rowIndex < data.length - 1;
                let value = get(column.path || column.name)(row);
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
    </Provider>
  );
};

export default DataGridContainer;
