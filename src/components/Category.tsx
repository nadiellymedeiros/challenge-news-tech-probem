import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Link from "next/link";

export default function ControlledOpenSelect() {
  const [category, setCategory] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 110 }}>
        <InputLabel
          sx={{ color: "inherit" }}
          id="demo-controlled-open-select-label"
        >
          category
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"Tech"}>
            <Link href={"/categoryTech"}>Tech</Link>
          </MenuItem>

          <MenuItem value={"Business"}>
            <Link href={"/categoryBusinnes"}>Business</Link>
          </MenuItem>

          <MenuItem value={"Wall Street"}>
            <Link href={"/categoryWallStreet"}>Wall Street</Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
