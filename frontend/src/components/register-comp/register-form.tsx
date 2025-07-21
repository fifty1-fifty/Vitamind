//import "./form.css";
import { buildPath } from '../../../../utils.ts';
import { useState } from 'react';
import '../register-comp/register.css';


function Register()
{

  // Hooks for setting user input
  const [clientRegisterInput, setRegisterInput] = useState('');
  const [clientPasswordInput, setPasswordInput] = useState('');
  const [clientEmailInput, setEmailInput] = useState('');

  // Hooks for setting possible error messages
  //const 
  //
  //

  async function doRegister()
  {
    var obj = { serverRegisterInput: clientRegisterInput, serverPasswordInput: clientPasswordInput, serverEmailInput: clientEmailInput};
    var js = JSON.stringify(obj);

    try 
    {
      const response = await fetch(buildPath('/api/register'),
                        { method: 'POST', credentials: 'include', body: js, headers: { 'Content-Type': 'application/json' }});
      var res = JSON.parse(await response.text());
      if(res.id > 0)
      {
        console.log('hey hye hye');
        console.log(res);
      }
        
      else
        console.log('failed to register');
          
    } 
    catch (error) 
    {
      console.log(error);
    }
  }
  
  function handleSetRegisterInput( e: any ) : void
  {
    setRegisterInput(e.target.value);
  }

  function handleSetPasswordInput( e: any) : void
  {
    setPasswordInput(e.target.value);
  }

  function handleSetEmailInput( e:any ) : void
  {
    setEmailInput(e.target.value);
  }

  function gotoLogin()
  {
    window.location.href = '/login';
  }

    return (


        <div className='register-background'>
            <div className = 'row align-items-center' id='do-center'> 


                <div className = 'col-sm-5 align-self-center' id='register-graphic-background'>
                    <span></span> 
                    <a href="https://www.tripadvisor.com/LocationPhotos-g293924-Hanoi.html#429690406"><img alt="" src="https://media-cdn.tripadvisor.com/media/photo-s/19/9c/8e/26/photo0jpg.jpg"/></a><br/>This photo of Hanoi is courtesy of Tripadvisor
                </div>



                <div className = 'col-sm-7'>
                    <div id='full-register-form'>

                        <div>
                            <h2>New Account Stuff</h2>
                            <h6>Input all of your bullshit to get started</h6>
                        </div>


                        <form className="register-form-container">

                                
                                
                                <div className="form-group">
                                    <h6 id='input-field-label'>Email</h6>
                                    <input type="text" id="input-field" placeholder="email" onChange={handleSetEmailInput}/>
                                </div>

                                
                                
                                <div className="form-group">
                                    <h6 id='input-field-label'>Username</h6>
                                    <input type="text" id="input-field" placeholder="username" onChange={handleSetRegisterInput}/>
                                </div>
                                
                                
                                
                                <div className="form-group">
                                    <h6 id='input-field-label'>Password</h6>
                                    <input type="password" id="input-field" placeholder="password" onChange={handleSetPasswordInput}/>
                                </div>
                        
                                
                                <div className='col' id='register-button-area'>
                                    <button type="button"id='primary-button' onClick={doRegister}>Get Started</button>
                                    
                                    <div className='error-div'>
                                    </div>

                                    <button type='button' id='secondary-button' onClick={gotoLogin}>Return to Login</button>
                                </div>
                              

                          </form>


                    </div>
                </div>      
            </div>
        </div>


    );
};
export default Register;
