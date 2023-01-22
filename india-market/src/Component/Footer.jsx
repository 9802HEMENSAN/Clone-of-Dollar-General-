import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  image,
  Image
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
 

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('white', 'white')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
             <Image src="data:image/png;base64,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"/>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 india's Market. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}