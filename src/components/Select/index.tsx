import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export type Option = {
  key: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  id?: string | undefined;
  selectedOption: string;
  onChange: (selectedOption: Option) => void;
  error?: boolean;
  height?: number | string;
  helperText?: string;
  width?: number | string;
  className?: string;
};
export default function Select({
  label,
  id = undefined,
  options,
  selectedOption,
  onChange,
  width = 140,
  height = 50,
  error = false,
  helperText = "",
  ...props
}: SelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const newSelectedOption =
      options.find((option) => option.value === event.target.value) ||
      options[0];
    console.log("newSelected", newSelectedOption, selectedOption);
    onChange(newSelectedOption);
  };

  return (
    <div {...props}>
      <FormControl sx={{ my: 1, width, height }}>
        <InputLabel id={label}>{label}</InputLabel>
        <div>
          <MUISelect
            id={id}
            sx={{ height: 50, width, bgcolor: "white" }}
            labelId={label}
            value={selectedOption}
            onChange={handleChange}
            autoWidth
            size="small"
            label={label}
            className={props.className}
            error={error}
            color="primary"
          >
            {options.map((option) => (
              <MenuItem key={option.key} value={option.value}>
                {option.key}
              </MenuItem>
            ))}
            <FormHelperText>{helperText}</FormHelperText>
          </MUISelect>
        </div>
      </FormControl>
    </div>
  );
}
