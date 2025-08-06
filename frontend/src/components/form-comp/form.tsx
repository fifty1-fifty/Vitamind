//import React, { useState } from 'react';
//import { on } from 'events';
import Background from '../../components/background-comp/Background.tsx';
import './form.css';


type formProps = {
	title : string;
	subTitle : string;
	numInputs : number;
	primaryButtonTitle : string;
	primaryButtonFunction : () => void;
	secondaryButtonFunction : () => void;
	secondaryButtonTitle : string;
	secondaryButtonLabel : string;
	forgotPasswordButton : boolean;
	forgotPasswordButtonFunction : () => void;
	errorMessage : string;
	includeLoginInputField : boolean;
	includePasswordInputField : boolean;
	userInputs: { [key: string]: string };
  	handleInputChange: (field: string, value: string) => void;
}

const DynamicFormComponent: React.FC<formProps> = ({ title, 
					   subTitle, 
					   numInputs, 
					   primaryButtonTitle, 
					   primaryButtonFunction,
					   secondaryButtonTitle,
					   secondaryButtonLabel,
					   secondaryButtonFunction,
					   forgotPasswordButton,
					   forgotPasswordButtonFunction,
					   errorMessage,
					   userInputs,
					   handleInputChange,
					   includeLoginInputField,
					   includePasswordInputField

					   
					   
}) => {
	
	const inputConfigs = [
	  { label: 'Email', placeholder: 'email', include: true},
	  { label: 'Username', placeholder: 'username', include: includeLoginInputField },
	  { label: 'Password', placeholder: 'password', include: includePasswordInputField},
	];
	

	function handleSetUserInputs(label : string ,e : any)
	{
		handleInputChange?.(label, e.target.value);
		console.log(userInputs);
	}
    
	

  return (

					<div id='full-form-area'>
					
							<div className='form-title'>
								<h2>{title}</h2>
								<h6>{subTitle}</h6>
							</div>

							<form className='form-container'>
								  {inputConfigs.filter(config => config.include).slice(0,numInputs).map((config, i) => (
									<div className="form-group" key={i}>
									  <h6 id={`input-field-label`}>{config.label}</h6>
									  <input
										type={config.label == 'Password' ? 'password' : 'text'}
										id={`input-field`}
										onChange={(e) => handleSetUserInputs(config.label, e)}
										placeholder={config.placeholder}
									  />
									</div>
								  ))}
							</form>
							
							 <div className='forgot-password-container'>  
                                  {errorMessage && forgotPasswordButton && <button type="button" id="forgot-password-button" onClick={forgotPasswordButtonFunction}>Forgot Password?</button>}
                             </div>
							
							<div className='col' id="login-button-area">
								   <button type="button" id="primary-button" onClick={primaryButtonFunction}>{primaryButtonTitle}</button>
									
								   <div className="error-div">
										<h6 id="error-message">{errorMessage}</h6>
								   </div> 

								   <h6 id="second-button-label">{secondaryButtonTitle}</h6>
								   <button type="button" id="secondary-button" onClick={secondaryButtonFunction}>{secondaryButtonLabel}</button>
							</div>
							
							<Background varColor='#f1ffe7' />
				    </div>

  );
}

export default DynamicFormComponent;
