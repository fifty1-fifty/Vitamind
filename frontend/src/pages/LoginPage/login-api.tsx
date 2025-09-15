    import { buildPath } from '../../../../utils';
    
    
    export default async function doLogin(credentials : any): Promise<void> 
    {
        console.log('login API' + credentials);
        var obj = { serverLoginInput: credentials.email, serverPasswordInput: credentials.password };
        var js = JSON.stringify(obj);
        try
        {
            const response = await fetch(buildPath('/api/login'),
                { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include' });
            var res = JSON.parse(await response.text());
            //res.id > 0 ? localStorage.setItem('storage', res.id) : console.log("tits");
            if(res.id <= 0)
                /*setLoginErrorMessage('email or password is incorrect'); */ console.log('login failed -- login api');
            else
                window.location.href = '/home';
        }      
        catch(error : any)
        {
          alert(error.toString())
          return;                  
        }
    }