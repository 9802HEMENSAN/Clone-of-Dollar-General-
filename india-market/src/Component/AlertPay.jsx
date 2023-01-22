import React  from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

  function AlertDialogs() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      <Button colorScheme='orange'   onClick={onOpen}>
         Pay Now 
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               Order SuccessFull ! Hurrey ...
            </AlertDialogHeader>

            <AlertDialogBody>
                   Delivery within 2-3 days .
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button   colorScheme="orange" onClick={onClose} ml={3}>
                 Thank you !
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default AlertDialogs;