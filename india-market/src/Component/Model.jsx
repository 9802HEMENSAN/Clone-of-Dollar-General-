import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react';
  import { Text } from '@chakra-ui/react'
  import { Image ,Box} from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";
  import { useState } from 'react';
  function  Model(props) {
    const { category ,
      image ,
      price, 
      title, 
      rating 
    }=props
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [count,setCount]=useState(1);
    return (
      <>
        <Button  bg="black"
           _hover={{
            transform: 'translateY(4px)',
            boxShadow: 'lg',
            bg:"black"
          }} onClick={onOpen}>Add To Cart</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
         
            <ModalCloseButton />
            <ModalBody>
            <Box boxSize='sm'>
           <Image src= {image} alt='Dan Abramov'  height='100%' />
             </Box>
             <Box> 
             <Text  fontSize='2xl'>{category}</Text>
             <Text fontSize='2xl'>Price={price}</Text>
             {/* <Text fontSize='2xl'>Rating={rating}</Text> */}
             </Box>
             <Button disabled={count=== 1 }onClick={()=>setCount(count-1)}>-</Button>
             <Button >{count}</Button>
             <Button onClick={()=>setCount(count+1)}>+</Button>
            </ModalBody>
           
            <ModalFooter>
              <RouterLink to="/payment"> 
              <Button >Checkout </Button>
              </RouterLink>
              <Button colorScheme='blue' onClick={onClose}> Thank you </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model;