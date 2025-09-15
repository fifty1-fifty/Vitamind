    import { buildPath } from '../../../../utils';
    
    
    export async function autoTokenLogin()
    {

        const savedCookies = document.cookie;
        //var jwtResponse = {};
        //console.log(savedCookies.toString());
        if(savedCookies.toString().includes('authorized'))
        {
            const responseToken = await fetch(buildPath('/api/verifytoken'),
            { method: 'GET', credentials: 'include'});
            const jwtResponse = JSON.parse(await responseToken.text());
            if(jwtResponse != '' && jwtResponse.message == 'user-verified' && savedCookies.toString().includes(jwtResponse.user.id))
                window.location.href = '/home';
            else
            {
                console.log(jwtResponse);
                console.log('fail');
                //console.log(jwtResponse);
                //console.log(jwtResponse.seed);
                //console.log(savedCookies.toString());
            } 
        }
        else
            console.log('No Cookie Present Within Browser');
    }