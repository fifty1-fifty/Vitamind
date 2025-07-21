import { useState } from 'react';
import { buildPath } from '../../../../utils.ts';
import '../forgotpass-comp/forget.css';


const ForgotPass = () => 
{
  const [clientEmailInput, setClientEmailInput] = useState('');
  const [emailSentFlag, setEmailSentFlag] = useState('');
  //const [newPassword, setNewPassword] = useState('');



  function handleSetClientEmail(e : any) : void
  {
    setClientEmailInput(e.target.value);
  }

  /*function handleSetNewPassword(e : any) : void
  {
    setNewPassword(e.target.value);
  }*/

  function gotoLogin()
  {
    window.location.href = '/login';
  }

 
  async function doRequestPasswordReset(): Promise<void>
  {
    var js = JSON.stringify({ serverPasswordRequestEmail : clientEmailInput })
    try 
    {
      const response = await fetch(buildPath('/api/RequestReset'),
              { method:'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include' });
      var res = JSON.parse(await response.text());
      if(res.message == 'Password reset link sent!')
      {
        console.log('Email succesufulyl set');
        setEmailSentFlag('set');
      }
      else
        console.log('kys faggot it dit not work');
        
    } 
    catch (error) 
    {
      console.log(error);
    }




    
  }



    return (
        <div className='password-background'>
            <div className="row align-items-center" id='password-area-formatting'>




                <div className='col-sm-5 align-self-center' id='full-form-background'>

                    {!emailSentFlag && <div id='full-form-area'>
                        <div>
                            <h2>Forgot Password?</h2>
                            <h6>Please enter the email address associated with your account</h6>
                        </div>

                        <form className="form-container" >
                            <div className="form-group" >
                                <h6 id="input-field-label">Email</h6>
                                <input type="text" id="input-field" placeholder="email" onChange={handleSetClientEmail}/>
                            </div>
                            <div className='col' id="password-button-area">
                                 <button type="button" id="send-password-button" onClick={doRequestPasswordReset}>Request Reset</button>
                                 <button type="button" id="secondary-button" onClick={gotoLogin} >Return to Login</button>
                            </div>
                        </form>
                    </div>}


                    {emailSentFlag && <div id='full-form-area'>
                        <div>
                            <h2>Forgot Password?</h2>
                            <h6>Enter the code sent to the email address</h6>
                        </div>

                        <form className="form-container" >
                            <div className="form-group" >
                                <input type="text" id="input-code" placeholder="code" />
                            </div>
                            <div className='col' id="password-button-area">
                                 <button type="button" id="send-password-button" >Submit</button>
                                 <button type="button" id="secondary-button" >Return to Login</button>
                            </div>
                        </form>
                    </div>}                                      


                 </div>




<div className='col-sm-7' id="login-pic-background">
                   
                </div>





            </div>
        </div>       
    );
};
export default ForgotPass;
