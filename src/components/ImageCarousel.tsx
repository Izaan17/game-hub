import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  images: string[];
}

const ImageCarousel = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 900,
    cssEase: "ease",
    autoplay: true,
    pauseOnHover: true,
    focusOnSelect: true,
    centerMode: true,
  };
  return (
    <Box margin="30px">
      <Slider {...settings}>
        {images.map((image) => (
          <Box overflow="hidden" borderColor="gray.450" key={image}>
            <Image src={getCroppedImageUrl(image)} objectFit={"cover"} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
