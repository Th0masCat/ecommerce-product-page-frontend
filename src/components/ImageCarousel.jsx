import "./carousel.css"
import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"
import { Image, Flex, Button } from "@mantine/core"
import { useEffect, useState } from "react"

export default function ImageCarousel() {
    const images = [img1, img2, img3, img4]
    const [imageNumber, setImageNumber] = useState(0)

    useEffect(() => {
        console.log(imageNumber)
    }, [imageNumber])

    const handleClick = (num) => {
        switch (num) {
            case 1:
                setImageNumber(0)
                break;
            case 2:
                setImageNumber(1)
                break;
            case 3:
                setImageNumber(2)
                break;
            case 4:
                setImageNumber(3)
                break;
            default:
                break;
        }
    }

    return (
        <Flex direction="column" align="center" justify="center"
        >
            <Image width={'30rem'} src={images[imageNumber]} radius={'md'} alt="img1" />
            <Flex mt="lg" w={"100%"} gap="lg" justify="space-between" align="center">
                {
                    images.map((image, index) => (
                        <Button key={image} onClick={() => handleClick(index + 1)} h={"6rem"} w={"6rem"} radius={'md'} p={0} style={{ border: 'none' }}>
                            <Image width={'100%'} src={image} radius={'md'} alt="img1" />
                        </Button>
                    ))

                }
            </Flex>
        </Flex>

    )
}