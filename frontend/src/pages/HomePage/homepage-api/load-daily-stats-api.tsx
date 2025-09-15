import { buildPath } from '../../../../../utils';
//import { useState } from 'react';

// API call to pull users nutrional stats for respective date
export async function loadDailyNutrionalStats(choosenDate : string | null)
{
    const newDate = new Date();
    const date = (newDate.getMonth() + 1).toString() + ' - ' + newDate.getDate().toString() + ' - ' + newDate.getFullYear().toString();

    const obj = { currentDate: (choosenDate ? choosenDate : date)};


    const js = JSON.stringify(obj);
    try 
    {
        const response = await fetch(buildPath('/api/callDailyStats'), {
        method: 'POST',
        body: js,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });

    if (response.status === 403) {
        window.location.href = '/login';
        return;
    }


    //console.log(response);
    //console.log(response.status);
    const res = JSON.parse(await response.text()) || {};
    //console.log(res);
    


    return res;

    }
    catch
    {
        console.log('deez nuts nig');
    }
}

// =================================================================================================================================================

// API call to pull users log for respective date
export async function loadDailyLogStats(choosenDate : string | null)
{
    const newDate = new Date();
    const date = (newDate.getMonth() + 1).toString() + ' - ' + newDate.getDate().toString() + ' - ' + newDate.getFullYear().toString();
    const obj = { currentDate: (choosenDate ? choosenDate : date)};

    const js = JSON.stringify(obj);
    try 
    {
        const response = await fetch(buildPath('/api/callDailyLog'), {
        method: 'POST',
        body: js,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });

    if (response.status === 403) 
    {
        window.location.href = '/login';
        return;
    }

    const res = JSON.parse(await response.text()) || {};

    return res;

    }
    catch
    {
        console.log('deez nuts nig');
    }
}