/*import React, {useState} from "react";
import { buildPath } from '../../../utils.ts';
import '../components/form-comp/form.css';
//import Test from '../components/test-components/test';
import Form from '../components/form-comp/form';

const TestPage = () => 
{

   const [inputsData, setInputsData] = React.useState({});
   const handleInputChange = (key, value) => {
    setInputsData(prev => ({
      ...prev,
      [key]: value,
    }));
  };
   
   
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
   
   
   
  function gotoLogin()
  {
    window.location.href = '/login';
  }
  
  
  
	
	
	

   return (
		<div className='login-form-container'>
			<div className="row align-items-center" id='login-nowrap'>

				<div className='col-sm-5 align-self-center'>
					<Form numInputs={3}
						  title='Forgot Password?'
						  subTitle='Enter the email address associated with your account'
						  primaryButtonTitle='Request Reset'
						  primaryButtonFunction={doRequestPasswordReset}
						  secondaryButtonTitle=""
						  secondaryButtonLabel='Return to SignIn'
						  secondaryButtonFunction={gotoLogin}
						  errorMessage=''
						  userInputs={handleInputChange}
						  includeLoginInputField={false}
						  includePasswordInputField={false}
							
							/>
				</div>
				
				<div className='col-sm-7' id="login-splash">
					<span></span> 
				</div>
			
				
				
			</div>     
		</div>
		
);
};
export default TestPage;*/











