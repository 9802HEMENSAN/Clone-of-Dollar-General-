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
        <Button   bg="orange.400"
           _hover={{
            transform: 'translateY(4px)',
            boxShadow: 'lg',
            bg:"orange.400"
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
             <Text  marginLeft="10px" fontSize='20px'>Category : {category}</Text>
             <Text  marginLeft="10px" fontSize='20px'>Price : $ {price * count}</Text>
             {/* <Text fontSize='2xl'>Rating={rating}</Text> */}
             </Box>
               <br />
               <Box marginLeft="150px"> 
             <Button m="5px" bg="orange.200" disabled={count=== 1 }onClick={()=>setCount(count-1)}>-</Button>
             <Button >{count}</Button>
             <Button  m="5px" bg="orange.200" onClick={()=>setCount(count+1)}>+</Button>
             </Box>
            </ModalBody>
           
            <ModalFooter>
              <RouterLink to="/payment"> 
              <Button colorScheme="orange" >Checkout </Button>
              </RouterLink>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model;