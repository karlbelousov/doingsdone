import clsx from "clsx";

export default function Checkbox({
  className,
  label,
  isChecked,
  onChange,
}: {
  className?: string;
  label: string;
  isChecked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={clsx("checkbox", className && `${className}`)}>
      <input
        className="checkbox__input visually-hidden"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkbox__text">{label}</span>
    </label>
  );
}
