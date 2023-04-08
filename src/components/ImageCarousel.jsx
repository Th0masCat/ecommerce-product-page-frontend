import { Carousel } from "@mantine/carousel"
import "./carousel.css"
import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"
import { Image, Flex, Button } from "@mantine/core"
import { useEffect, useState } from "react"

export default function ImageCarousel() {
    const [imageNumber, setImageNumber] = useState(1)
    const totalImages = 4

    const nextSlide = () => {
        setImageNumber((num) => num + 1)
    }

    const prevSlide = () => {
        setImageNumber((num) => num - 1)

    }

    useEffect(() => {
        if (imageNumber > totalImages) setImageNumber(totalImages)
        if (imageNumber < 1) setImageNumber(1)
        console.log(imageNumber)
    }, [imageNumber])

    return (
        <Flex direction="column" align="center" justify="center"
        >
            <Carousel
                onNextSlide={nextSlide}
                onPreviousSlide={prevSlide}
                slideSize="100%"
                w={"30rem"}
                slideGap="lg"
                controlsOffset="xl"
                controlSize={29}
                withIndicators
                initialSlide={2}
            >
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
            <Flex mt="lg" w={"100%"} gap="lg" justify="space-between" align="center">
                <Button h={"6rem"} w={"6rem"} radius={'md'} p={0} style={{ border: 'none' }}>
                    <Image width={'100%'} src={img1} radius={'md'} alt="img1" />
                </Button>
                <Button h={"6rem"} w={"6rem"} radius={'md'} p={0} style={{ border: 'none' }}>
                    <Image width={'100%'} src={img2} radius={'md'} alt="img1" />
                </Button>
                <Button h={"6rem"} w={"6rem"} radius={'md'} p={0} style={{ border: 'none' }}>
                    <Image width={'100%'} src={img3} radius={'md'} alt="img1" />
                </Button>
                <Button h={"6rem"} w={"6rem"} radius={'md'} p={0} style={{ border: 'none' }}>
                    <Image width={'100%'} src={img4} radius={'md'} alt="img1" />
                </Button>
            </Flex>
        </Flex>

    )
}