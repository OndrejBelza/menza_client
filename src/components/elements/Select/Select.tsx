import { ChangeEvent, FC } from "react";

export type SelectProps = {
  value?: string;
  options?: { label: string; value: string | undefined }[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: FC<SelectProps> = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border p-2 rounded"
      placeholder="Vyberte..."
    >
      {options?.map((selectOption) => (
        <option value={selectOption.value} key={selectOption.label}>
          {selectOption.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
