//import React, {useState} from 'react';
import React from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button } from '@mui/material';
//import { createTheme } from '@mui/material/styles';




type Props = {
  setValue : () => void;
}

const CustomOpenDatePicker : React.FC<Props> = ({setValue}) => {
  //const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);



  function handleSetDate(newValue : string)
  {
    setValue(newValue);
  }


	
  //console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {/* Your custom button to trigger the datepicker */}
      <Button onClick={() => setOpen(true)} style={{'padding' : '2px'}}>
        <span className="material-icons navi-icon-formatting">calendar_today</span>
      </Button>

      {/* The DatePicker itself */}
		  {<MobileDatePicker

        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        
        onChange={(newValue) => handleSetDate(newValue)}
		    disableFuture={true}
		    slotProps={{
            field: {
                sx: { display: 'none',},},
            dayCalendar: {
                sx: {'./MuiDayCalendar-weekDarlabel': {color : 'red',},},
            }
            

        }}
            

    		onClick={() => console.log('beans')}
		    desktopModeMediaQuery
/>}
    </LocalizationProvider>
  );
}; export default CustomOpenDatePicker;




//         renderInput={(params) => <input {...params} style={{ display: 'none' }} />}
