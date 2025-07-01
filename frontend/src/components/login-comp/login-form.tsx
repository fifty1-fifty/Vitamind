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

    async function doLogin(event: any): Promise<void> 
    {
        event.preventDefault();
        var obj = { serverLoginInput: clientLoginInput, serverPasswordInput: clientPasswordInput };
        var js = JSON.stringify(obj);
        try
        {
            const response = await fetch(buildPath('/api/login'),
                { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' } })
            var res = JSON.parse(await response.text());
            console.log(res);

            if(res.id < 0)
                setLoginErrorMessage('email or password is incorrect');
                

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


    return (
        <div className='login-background'>
            <div className="row align-items-center" id='gahr'>




                <div className='col'>

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




                <div className='col' id="testtest2">
                   
                </div>





            </div>
        </div>       
    );
};
export default Login;
