//import { useEffect, useLayoutEffect, useState } from 'react';
import {  DatePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';

import classes from './calendar.module.css';
import './calendar.css'


type Props = 
{
    toggleOpen: boolean;
    setToggleCalendar: (bool : boolean) => void;
    choosenDate: Date | string | null;
    setChoosenDate: (date : string | null) => void;
};

function Demo({ toggleOpen, setToggleCalendar, choosenDate, setChoosenDate }: Props) {

    function formatDate(dateStr : string) 
    {
        let [year, month, day] = dateStr.split("-");
        month = String(Number(month));
        day = String(Number(day));
        return `${month} - ${day} - ${year}`;
    }


    function handleDateChange(event : any)
    {
        const formattedDate = formatDate(event);
        setToggleCalendar(!toggleOpen);
        setChoosenDate(formattedDate);
    }

    const date = new Date();
    const maxDate = date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + date.getDate();

    return (
    <div style={{display : 'flex', alignItems : 'flex-end', justifyContent : 'center'}}>

        <DatePicker 
            className='opacity-fade'
            value={choosenDate} 
            onChange={handleDateChange} 
            style={{ display: toggleOpen ? 'block' : 'none', zIndex: '5000', position : 'absolute', background : 'white', borderRadius : '5px', bottom : '40%'}} 
            classNames={{
                day : classes.day,
                calendarHeader : classes.root,   
                calendarHeaderControl : classes.buytton,
                presetButton : classes.buytton
                }}
            maxDate={maxDate}
            firstDayOfWeek={0}
            hideOutsideDates
        />

        <div className='calendar-container' style={{display : toggleOpen ? 'block' : 'none'}}>
        </div>
    
    </div>



)};

export default Demo;