import {Link as RouterLink} from "react-router-dom"
import { useEffect } from "react"
import axios from "axios";
import { useReducer } from "react";
 import { useParams } from "react-router-dom";
 import Model from "../Component/Model";
 import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
 
let initialState={
  products:[],
  isLoading:false,
  isErr:false
}
const reducer=(state,action)=>{
  console.log("state",state);
  console.log("action",action.type)
  switch(action.type){
    case "FETCH_SUCCESS":{
      return {
         ...state,
         products:action.payload,
         isLoading:false,
         isErr: false,
      }
    }
    case "FETCH_FAILURE":{
      return {
         products:[],
         isLoading:false,
         isErr: false,
      }
    }
    default : 
      throw new Error()
  }
}
function ProductDetails(){
    const [state, dispatch] = useReducer(reducer,initialState);
  
    const {products,isLoading,isErr}=state;
    const {id}=useParams();
    // console.log(id);
    const getData=async function getUser(){
      axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>  
        dispatch({type : "FETCH_SUCCESS", payload : res.data})
       
     ).then((data)=>console.log(data)).catch((err)=>
    dispatch({type : "FETCH_FAILURE" })
    )
    
    }

    useEffect(()=>{
      getData();
    },[id])
  
    const {image,title,category,description,price,rating}=products;
 
    return isLoading ? 
     <h1>Loading ...</h1> :
    
    isErr  ?  <h1>Something went wrong ! </h1>      : 
    (
      <div>
          <div>Products Details page</div>
          <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              image
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {title}
            </Heading>
            <Text
              color="black"
              fontWeight={300}
              fontSize={'2xl'}>
              {`Price : ${price}`}
            </Text>
            <Text
              color="black"
              fontWeight={300}
              fontSize={'2xl'}>
            {/* { `Rating : ${rating.rate}`} */} yes
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor="black"
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {category}
            </Heading>
              <Text fontSize={'lg'}>
              {description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color= "black"
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color="black"
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>
  
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg="black"
            color= "white"
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              bg:"black"
            }}   colorScheme='black'
             >
              <Model 
              image={image}
              title={title}
              category={category}
              description={description}
              price={price}
              rating={rating}
              />
          </Button>
 
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
              
      </div>
    )
  }
 
  export default  ProductDetails;
//   {products?.length>0 && products.map((e)=>(
//   <Model 
//   category={e.category}
//   description={e.description}
//   image={e.image}
//   price={e.price}
//   title={e.title}
//   rating={e.rating.rate}
//   />
// ))}       
 