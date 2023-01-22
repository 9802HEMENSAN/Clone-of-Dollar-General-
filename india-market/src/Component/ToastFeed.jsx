import { Button, useToast } from '@chakra-ui/react';

function ToastFeed() {
    const toast = useToast()
    return (
      <Button   bg={'orange.400'}  _hover={{
        bg: 'orange.500',       
      }}
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
         Sign in 
      </Button>
    )
  }
  export default ToastFeed;