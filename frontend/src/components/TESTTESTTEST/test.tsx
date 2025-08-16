import React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button } from '@mui/material';

type Props = {
  setValue: (date) => void;
};

const CustomOpenDatePicker: React.FC<Props> = ({ setValue }) => {
  const [open, setOpen] = React.useState(false);

  function handleSetDate(newValue: Date | null) {
    if (newValue) {
      setValue(newValue); 
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Button onClick={() => setOpen(true)} style={{ padding: '2px' }}>
        <span className="material-icons navi-icon-formatting">
          calendar_today
        </span>
      </Button>

      <MobileDatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(newValue) => handleSetDate(newValue)}
        disableFuture
        desktopModeMediaQuery="(pointer: fine)"
        slotProps={{
          textField: { style: { display: 'none' } },
          dayCalendar: {
            sx: { ".MuiDayCalendar-weekDayLabel": { color: "red" } }
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomOpenDatePicker;
