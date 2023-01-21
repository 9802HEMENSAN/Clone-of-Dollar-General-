import React, { useState } from 'react';
import  ToastExample from "../Component/Toasts"
import { useToast } from '@chakra-ui/react'
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
    <form   minH={'100vh'}
    align={'center'}
    justify={'center'}
     bg={"blue.400"}
      >
      <h1 >Payment Information</h1>
      <FormControl   mx={'auto'} maxW={'lg'} >
        <FormLabel>Payment Method</FormLabel>
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
      <Button    bg={'blue.400'} variantColor="blue.500" type="submit"  >< ToastExample/> Place Order </Button>
    </form>
  );
};

export default PaymentPage;
