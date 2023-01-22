 
import { Button } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
export default function ToastExample() {
    const toast = useToast()
    return (
      <Button  _hover={{
        transform: 'translateY(4px)',
        boxShadow: 'lg',
        bg:"black"
      }}
      bg="black.100"
      color= "white"
        onClick={() =>
          toast({
            title: 'Order Succeessful.',
            description: "Your Order Has been Successful .It will be delivered withing 2-3 days.",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        }
      > Place Order
      </Button>
    )
  }