 
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate} from 'react-router-dom';
import { useState } from 'react';
import {
      Flex,
      Box,
      FormControl,
      FormLabel,
      Input,
      Checkbox,
      Stack,
      Link,
      Button,
      Heading,
      Text,
      useColorModeValue,
    } from '@chakra-ui/react';
function Login(){
// const {setToken,login,isAuth}=useContext(AuthContext);
const {setToken,login,isAuth}=useContext(AuthContext);
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");




const handleEmail=(e)=>{
setEmail(e.target.value)
};
const handlePassword=(e)=>{
  setPassword(e.target.value)
  };


  const handleClick=()=>{
    const userDetail={
      email,password
    };
    fetchLoginData(userDetail);
     
  } ;
  //  "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
  if(isAuth){
    return <Navigate to="/"/>
   };
  const fetchLoginData=(obj)=>{
    return fetch(`https://reqres.in/api/login`,{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      },
    }).then((res)=>res.json()).then((data)=>{
      setToken(data.token);
      login();
    })
  };
 
     return <>

     <h3>Login from here..</h3>
     <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" onChange={handleEmail}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" onChange={handlePassword}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  Sign in 
                </Button>
                {/* <Link href='/signup'>SignUp</Link> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
     </>
     
     
 }
 export default Login;