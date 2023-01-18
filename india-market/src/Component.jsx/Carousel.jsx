import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1649589574693.coreimg.100.1200.jpeg/1673629774452/wk51-home-2280x700-hero-desktop-val-candyr1.jpeg',
    'https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1667574383955.coreimg.100.1200.jpeg/1673499572004/wk51-home-1140x300-hero-desktop-appsuite.jpeg',
    'https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1671569524197.coreimg.100.1200.jpeg/1673629830974/wk51-home-2280x700-hero-desktop-refreshyourbedroomr1.jpeg',
    "https://tpc.googlesyndication.com/simgad/8525851135069553280",
    "https://tpc.googlesyndication.com/simgad/15460310567184055584",
  ];

  return (
    <Box
      position={'relative'}
      height={'400px'}
      marginTop={"100px"}
      margin={"auto"}
      width={'1300px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            width={"80%"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}