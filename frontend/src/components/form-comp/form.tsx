//import React, { useState } from 'react';
import Background from '../../components/background-comp/Background.tsx';
import './form.css';

const DynamicFormComponent = ({ title='', 
					   subTitle='', 
					   numInputs = 2, 
					   primaryButtonTitle='', 
					   primaryButtonFunction? : () => void;
					   secondaryButtonTitle='',
					   secondaryButtonLabel='',
					   secondaryButtonFunction? : () => void;
					   forgotPasswordButton=true,
					   forgotPasswordButtonFunction? : () => void;
					   errorMessage='',
					   userInputs='',
					   includeLoginInputField=false,
					   includePasswordInputField=true
					   
}); => {
	
	const inputConfigs = [
	  { label: 'Email', placeholder: 'email', include: true},
	  { label: 'Username', placeholder: 'username', include: includeLoginInputField },
	  { label: 'Password', placeholder: 'password', include: includePasswordInputField},
	];
	
    
	

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
										onChange={(e) => userInputs(config.label, e.target.value)}
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
