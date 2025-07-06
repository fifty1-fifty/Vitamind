import { useState } from 'react';
import { buildPath } from '../../../../utils.ts'
import "./form.css"

function Login()
{
    const [clientLoginInput,setClientLoginInput] = useState('');
    const [clientPasswordInput,setClientPasswordInput] = useState('');

    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    //const [emailErrorMessage, setEmailErrorMessage] = useState('');
    //const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    async function autoTokenLogin()
    {

      const savedCookies = document.cookie;
      var jwtResponse = '';
      //console.log(savedCookies.toString());
      if(savedCookies.toString().includes('authorized'))
      {
        const responseToken = await fetch(buildPath('/api/verifytoken'),
           { method: 'GET', credentials: 'include'});
        jwtResponse = JSON.parse(await responseToken.text());
       if(jwtResponse != '' && jwtResponse.message == 'user-verified' && savedCookies.toString().includes(jwtResponse.user.id))
          window.location.href = '/home';
        else
        {
          console.log(jwtResponse.status);
          console.log('fail');
          console.log(jwtResponse);
          console.log(jwtResponse.seed);
          console.log(savedCookies.toString());
        } 
      }
      else
        console.log('No Cookie Present Within Browser');
    }



 //window.location.href = '/home'; 

    
 

    async function doLogin(event: any): Promise<void> 
    {
        event.preventDefault();
        var obj = { serverLoginInput: clientLoginInput, serverPasswordInput: clientPasswordInput };
        var js = JSON.stringify(obj);
        try
        {
            const response = await fetch(buildPath('/api/login'),
                { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include' })
            var res = JSON.parse(await response.text());
            //res.id > 0 ? localStorage.setItem('storage', res.id) : console.log("tits");
            if(res.id <= 0)
                setLoginErrorMessage('email or password is incorrect');
            else
                window.location.href = '/home';
        }      
        catch(error : any)
        {
          alert(error.toString())
          return;                  
        }
    }


    function handleSetClientLoginInput( e: any ) : void
    {
        setClientLoginInput(e.target.value);
    }

    function handleSetClientPasswordInput( e: any ) : void
    {
        setClientPasswordInput(e.target.value);
    }

    autoTokenLogin();


    return (
        <div className='login-background'>
            <div className="row align-items-center" id='gahr'>




                <div className='col-sm-4 align-self-center' id='full-form-background'>

                    <div id='full-form-area'>
                        <div>
                            <h2>Welcome Back</h2>
                            <h6>Please enter your email and password to access your account</h6>
                        </div>

                        <form className="form-container" >

                            <div className="form-group" >
                                <h6 id="input-field-label">Email</h6>
                                <input type="text" id="input-field" placeholder="email" onChange={handleSetClientLoginInput} />
                            </div>


                            <div className="form-group" >
                                <h6 id="input-field-label">Password</h6>
                                <input type="password" id="input-field" placeholder="password" onChange={handleSetClientPasswordInput} />
                            </div>


                            <div className='col' id="login-button-area">
                                 <button type="button" id="primary-button" onClick={doLogin}>Log In</button>
                                
                                 <div className="error-div">
                                    {loginErrorMessage && <h6 id="error-message">{loginErrorMessage}</h6>}
                                 </div> 

                                 <h6 id="second-button-label">Don't have an account?</h6>
                                 <button type="button" id="secondary-button" onClick={doLogin}>Signup Today</button>
                            </div>
                        

                        </form>
                    </div>

                </div>




                <div className='col-sm-8' id="login-pic-background">
                   
                </div>





            </div>
        </div>       
    );
};
export default Login;
