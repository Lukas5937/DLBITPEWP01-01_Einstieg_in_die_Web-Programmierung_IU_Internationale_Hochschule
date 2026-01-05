import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function AmountSelector({ amount, changeAmount }) {
  const amounts = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Please select your amount"
      value={amount}
      onChange={(event) => changeAmount(event.target.value)}
      className="w-44"
    >
      {amounts.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
