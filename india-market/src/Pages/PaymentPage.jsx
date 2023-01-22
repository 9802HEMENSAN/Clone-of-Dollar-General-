import React, { useState } from 'react';
import   AlertDialogs from "../Component/AlertPay"
import { Container, Heading  } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react';

const PaymentPage = () => {
 
  return (
    <Container marginTop="40px"  marginBottom="40px"  padding="15px" 
    boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"> 
    <form   minH={'110vh'} 
    align={'center'}
    justify={'center'}
     bg={"orange.400"}
      >
      <Heading >Payment Information</Heading>
      <FormControl   mx={'auto'} maxW={'lg'} >
        <FormLabel >Payment Method</FormLabel>
        <RadioGroup   rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          py={8}  >
          <Radio value="credit" name="paymentMethod"   px={3}>
            Credit Card
          </Radio>
          <Radio value="debit" name="paymentMethod"  px={3} >
            Debit Card
          </Radio>
          <Radio value="paypal" name="paymentMethod" px={3} >
            Paypal
          </Radio>
        </RadioGroup>
      </FormControl>
     
        <>
          <FormControl   mx={'auto'} maxW={'lg'} py={3} px={3}>
            <FormLabel >Card Number</FormLabel>
            <Input name="cardNumber"  />
           
          </FormControl>
          <FormControl spacing={8} mx={'auto'} maxW={'lg'} py={3} px={3}>
            <FormLabel>Expiration Date</FormLabel>
            <Input name="expirationDate" placeholder="MM/YY"   />
  
          </FormControl>
          <FormControl spacing={8} mx={'auto'} maxW={'lg'} py={3} px={3}>
            <FormLabel>CVV</FormLabel>
            <Input name="cvv"  />
   
          </FormControl>
        </>
  
        <FormControl spacing={8} mx={'auto'} maxW={'lg'} py={3} px={3}>
          <FormLabel>Paypal Email</FormLabel>
          <Input name="paypalEmail" />
            
        </FormControl > 
      <Button    colorScheme="orange"
            color= "white"   _hover={{
            transform: 'translateY(4px)',
            boxShadow: 'lg',
            colorScheme:"orange", color:"white"
          }} > < AlertDialogs/>  </Button>
    </form>
    </Container>
  );
};

export default PaymentPage;
