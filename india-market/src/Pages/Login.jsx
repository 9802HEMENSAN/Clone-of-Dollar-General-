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
import { Link as RouterLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
//Login Users 
export default function  Login() {
  // const { loginUser } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  async function login(e) {
    e.preventDefault()
    setIsSubmitted(true)
    const Api = "https://reqres.in/api/login"
    try {
      const data = await fetch(Api, {
        method: "POST",
        body: JSON.stringify({
          email, password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await data.json()
      loginUser(response.token)
      if (response.token) {
        console.log(response.token);
        navigate("/")
      }
    } catch (error) {
      console.log(error)
      loginUser(null)
    }
  }

  return (
    // <Flex
    //   minH={'100vh'}
    //   align={'center'}
    //   justify={'center'}
    //   bg={useColorModeValue('gray.50', 'gray.800')}>
    //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    //     <Stack align={'center'}>
    //       <Heading fontSize={'4xl'}>Sign in to your account</Heading>
    //       <Text fontSize={'lg'} color={'gray.600'}>
    //         to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
    //       </Text>
    //     </Stack>
    //     <Box  onSubmit={(e) => login(e)}
    //       rounded={'lg'}
    //       bg={useColorModeValue('white', 'gray.700')}
    //       boxShadow={'lg'}
    //       p={8} >
    //       <Stack spacing={4} >
    //         <FormControl id="email" >
    //           <FormLabel>Email address</FormLabel>
    //           <Input type="email" value={email}
    //           onChange={handleEmail}  />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>Password</FormLabel>
    //           <Input type="password"   placeholder="password"
    //           value={password}
    //           onChange={handlePassword}  />
    //         </FormControl>
    //         <Stack spacing={10}>
    //           <Stack
    //             direction={{ base: 'column', sm: 'row' }}
    //             align={'start'}
    //             justify={'space-between'}>
    //             <Checkbox>Remember me</Checkbox>
    //             <RouterLink to="/signup"> 
    //                <Link color={'blue.400'}>Forgot password?</Link>
    //             </RouterLink>
    //           </Stack>
    //           <Button
    //             bg={'blue.400'}
    //             color={'white'}
    //             _hover={{
    //               bg: 'blue.500',
    //             }} disabled={isSubmitted} >
    //             Sign in
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
    <div >
    <form className = "auth_form"   onSubmit={login}  >
        <input
            style = {{padding:"5px", margin: "10px", width: 200}}
            type = "email"
            className = "email"
            placeholder = "Enter Email"
            value={email}
            onChange={handleEmail}
        />
        <br />
        <input
            style = {{padding:"5px", margin: "10px", width: 200}}
            type = "password"
            className = "password"
            placeholder = "Enter password"
            value={password}
            onChange={handlePassword}
        />
        <br />
        <input className = "submit" type = "submit"
        
        />
       
    </form>  
                  
</div>
  );
}