import {useState} from "react";
import { buildPath } from '../../../utils.ts';
import '../components/form-comp/form.css';
//import Test from '../components/test-components/test';
import Form from '../components/form-comp/form';

const TestPage = () => 
{

   const [loginErrorMessage, setLoginErrorMessage] = useState('');
   
   
   const [inputsData, setInputsData] = useState<{ [key : string]: string }>({});
   const handleInputChange = (key : string, value : string) => 
    {
      //console.log(key);
      //console.log(value);

    setInputsData(prev => ({
      ...prev,
      [key]: value,
    }));
  };



  
   
   
    async function autoTokenLogin()
    {
      const body = document.getElementById('body-body');
	  if(body != null) 
		body.style.backgroundColor = '#f1ffe7'; 

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
	
	
	
	async function doLogin()
    {
       // event.preventDefault();
        var obj = { serverLoginInput: inputsData.Email, serverPasswordInput: inputsData.Password };
        var js = JSON.stringify(obj);
		console.log(obj);
        try
        {
            const response = await fetch(buildPath('/api/login'),
                { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' }, credentials: 'include' });
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
	
	
	function gotoRegister()
    {
      window.location.href = '/register';
    }
	
	function gotoForgotPassword()
    {
      window.location.href = '/forgotpassword';
    }
	
	
	
	
   autoTokenLogin();
   return (
		<div className='login-form-container'>
			<div className="row align-items-center" id='login-nowrap'>
			
				<div className='col-sm-5 align-self-center'>
					<Form numInputs={3}
						  title='Welcome Back'
						  subTitle='Please enter your email and password to access your account'
						  primaryButtonTitle='Login'
						  primaryButtonFunction={doLogin}
						  secondaryButtonTitle="Don't have an account?"
						  secondaryButtonLabel='Signup Today'
						  secondaryButtonFunction={gotoRegister}
              forgotPasswordButton={true}
						  forgotPasswordButtonFunction={gotoForgotPassword}
						  errorMessage={loginErrorMessage}
						  userInputs={inputsData}
              handleInputChange={handleInputChange}
              includeLoginInputField={false}
	            includePasswordInputField={true}
							
							
							/>
				</div>
				
				<div className='col-sm-7' id="login-splash">
				</div>


			</div>     
		</div>
		
);
};
export default TestPage;











