//import {useState} from 'react';
import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { autoTokenLogin } from './auto-token-login-api';
import doLogin from './login-api'

import './login.css';

function Demo() {

  //const [submittedFields, setSubmittedFields] = useState<typeof form.values | null>(null);
  const form = useForm
  ({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',

    },

    validate: 
    {
      email: (value : string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value : string) => (value.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });


  //console.log(submittedFields);

  // BLOCK THAT CHECKS FOR COOKIE AND LOGINS IF FOUND, IDK IF IT WORKING PROPER
  try
  {
    autoTokenLogin();
    console.log("worky");
  }
  catch (err)
  {
    console.log(err);
  }








  function handleUserLoginSubmit(credentials : any)
  {
    //console.log(credentials);
    //console.log('test' + credentials.email);
    try
    {
      const response = doLogin(credentials)
      console.log(response);
    }
    catch(error : any)
    {
      alert(error.toString())
      return;                  
    } 


  }

  
  
  
  
  return (
    <form onSubmit={form.onSubmit(handleUserLoginSubmit)}>
      <Group justify='center' mt="md" style={{ display: 'flex' , flexDirection: 'column', gap : '0px', marginBottom: '20px'}}>
        <span className='title-home'>Welcome Back</span>
        <span>Please enter your email and password to get started</span>
      </Group>


      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
        className='input-field-sizing'
        style={{ textAlign: 'left', marginBottom: '2%' }}
      />

      <PasswordInput
        withAsterisk
        label="Password"
        placeholder="password"
        key={form.key('password')}
        {...form.getInputProps('password')}
        className='input-field-sizing'
        style={{ textAlign: 'left', marginTop: '2%' }}
      />
      <Group justify="center" mt="md">
        <Button type="submit">Login</Button>
      </Group>

      <Group justify='center' mt="md" style={{ display: 'flex' , flexDirection: 'column', gap : '0px'}}>
        <span className='sign-up-text'>Don't have an account?</span>
        <button className='sign-up-button'>Sign Up</button>
      </Group>

    </form>
  );
}

export default Demo;