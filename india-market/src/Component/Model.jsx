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
  function  Model(props) {
    const { category ,
      image ,
      price, 
      title, 
      rating 
    }=props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
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
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
             Added to cart
              </Button>
              <Button colorScheme='blue' onClick={onClose}> Thank you </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model;