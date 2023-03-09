import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePicker() {
  const [selected, setSelected] = useState<Date>();

  return (
    <label>
      <DayPicker
        mode="single"
        showOutsideDays
        selected={selected}
        onSelect={setSelected}
        captionLayout="dropdown-buttons"
        fromYear={2015}
        toYear={2025}
        className=" w-fit text-white/80 "
      />
    </label>
  );
}
