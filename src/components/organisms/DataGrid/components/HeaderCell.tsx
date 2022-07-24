import Input from "@elements/Input";
import { ChangeEvent, FC } from "react";
import { Consumer } from "../DatagridContext";
import { Column, FilterTypes, SelectFilter } from "../types";
import { BsFunnel } from "react-icons/bs";
import Select from "@elements/Select";

export type HeaderCellProps = Column & {
  isNotOnlyRow: boolean;
  isNotLastColumn: boolean;
};

const HeaderCell: FC<HeaderCellProps> = ({
  isNotLastColumn,
  isNotOnlyRow,
  ...column
}) => {
  return (
    <Consumer>
      {({ state, setFilter, toggleFilter }) => {
        return (
          <div
            style={{
              borderBottom: isNotOnlyRow ? "1px solid rgb(229 231 235)" : "0px",
              borderRight: isNotLastColumn
                ? "1px solid rgb(229 231 235)"
                : "0px",
            }}
            className={`p-2 font-semibold border-gray-200 flex flex-col`}
          >
            <div className="flex items-center">
              {column.header}
              {column.filter && (
                <button onClick={() => toggleFilter(column)} className="ml-2">
                  <BsFunnel />
                </button>
              )}
            </div>

            {state.openedFilters.includes(column.name) && (
              <>
                {column.filter?.type === FilterTypes.text && (
                  <Input
                    value={state.filter[column.name] || ""}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setFilter(column, event.target.value)
                    }
                  />
                )}
                {column.filter?.type === FilterTypes.select && (
                  <Select
                    value={state.filter[column.name]}
                    onChange={(event) =>
                      setFilter(
                        column,
                        (column.filter as SelectFilter).options[
                          event.target.selectedIndex
                        ].value
                      )
                    }
                    options={column.filter.options}
                  />
                )}
              </>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};

export default HeaderCell;
