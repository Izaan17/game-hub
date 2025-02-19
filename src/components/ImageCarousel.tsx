import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  images: string[];
}

const ImageCarousel = ({ images }: Props) => {
  // Responsive settings based on screen size
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const centerMode = useBreakpointValue({ base: false, md: true });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    speed: 900,
    cssEase: "ease",
    autoplay: true,
    pauseOnHover: true,
    focusOnSelect: true,
    centerMode: centerMode,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      margin={{ base: "10px", md: "30px" }}
      maxWidth="100%"
      overflow="hidden"
    >
      <Slider {...settings}>
        {images.map((image) => (
          <Box
            key={image}
            padding="5px"
            overflow="hidden"
            borderColor="gray.450"
          >
            <Image
              src={getCroppedImageUrl(image)}
              objectFit="cover"
              width="fit-content"
              height="fit-content"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
