import { ChangeEventHandler, forwardRef } from "react";

export type InputProps = {
  value: HTMLInputElement["value"];
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = (
  props: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => {
  return <input className="p-2 border rounded" {...props} ref={ref} />;
};

export default forwardRef(Input);
