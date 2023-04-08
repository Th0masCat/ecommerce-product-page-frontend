import { Carousel } from "@mantine/carousel"
import "./carousel.css"
import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"
import { Image } from "@mantine/core"

export default function ImageCarousel() {
    return (
        <Carousel slideSize="100%" w={"30rem"} slideGap="lg" controlsOffset="xl" controlSize={29} withIndicators>
            <Carousel.Slide>
                <Image src={img1} radius={'md'} alt="img1" />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={img2} radius={'md'} alt="img2" />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={img3} radius={'md'} alt="img3" />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={img4} radius={'md'} alt="img4" />
            </Carousel.Slide>
        </Carousel>
    )
}