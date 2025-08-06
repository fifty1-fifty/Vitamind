import {useState} from "react";
import { buildPath } from '../../../utils.ts';
import '../components/form-comp/form.css';
//import Test from '../components/test-components/test';
import Form from '../components/form-comp/form';

const TestPage = () => 
{

   //const [loginErrorMessage, setLoginErrorMessage] = useState('');
   
   const [registerErrorMessage, setRegisterErrorMessage] = useState('');
   const [inputsData, setInputsData] = useState<{ [key : string]: string }>({});
   const handleInputChange = (key : string, value : string) => {
    setInputsData(prev => ({
      ...prev,
      [key]: value,
    }));
  };
   
   
   
  
	
	
  async function doRegister()
  {
    var obj = { serverRegisterInput: inputsData.Username, serverPasswordInput: inputsData.Password, serverEmailInput: inputsData.Email};
    var js = JSON.stringify(obj);
	console.log(obj);

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
        setRegisterErrorMessage('something wrong lol l xD');
          
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
	
	
	function dummyFunction()
  {
    console.log('kill youselfg');
  }
	
	
	
	

   return (
		<div className='login-form-container'>
			<div className="row align-items-center" id='login-nowrap'>
			
				<div className='col-sm-5' id="login-splash">
				 <span></span> 
                    <a href="https://www.tripadvisor.com/LocationPhotos-g293924-Hanoi.html#429690406"><img alt="" src="https://media-cdn.tripadvisor.com/media/photo-s/19/9c/8e/26/photo0jpg.jpg"/></a><br/>This photo of Hanoi is courtesy of Tripadvisor
				</div>
			
			
				<div className='col-sm-7 align-self-center'>
					<Form numInputs={3}
						  title='New Account Stuff'
						  subTitle='Idk bullshit subtitle input'
						  primaryButtonTitle='Get Started'
						  primaryButtonFunction={doRegister}
              forgotPasswordButton={false}
						  forgotPasswordButtonFunction={dummyFunction}
						  secondaryButtonTitle=""
						  secondaryButtonLabel='Return to SignIn'
						  secondaryButtonFunction={gotoLogin}
						  errorMessage={registerErrorMessage}
						  userInputs={inputsData}
              handleInputChange={handleInputChange}
						  includeLoginInputField={true}
              includePasswordInputField={true}
							
							/>
				</div>
				
				
			</div>     
		</div>
		
);
};
export default TestPage;











