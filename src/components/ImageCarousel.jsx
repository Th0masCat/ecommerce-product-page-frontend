import { Image, Flex, Button, Paper, Modal } from "@mantine/core"
import { useEffect, useState } from "react"
import { useDisclosure } from '@mantine/hooks';

import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"


export default function ImageCarousel() {
    const images = [img1, img2, img3, img4]
    const [imageNumber, setImageNumber] = useState(0)
    const [selectedImage, setSelectedImage] = useState(false)

    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        console.log(imageNumber)
    }, [imageNumber])

    const handleClick = (num) => {
        setSelectedImage(true)
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
            <Button onClick={open} h={'30rem'} p={0} w={'30rem'} radius={'md'} style={{ border: 'none' }} >
                <Image radius={'md'} w={"100%"} src={images[imageNumber]} alt="img1" />
            </Button>

            <Modal size="auto" opened={opened} onClose={close} centered withCloseButton={false}
                overlayProps={{
                    opacity: 0.2,
                    blur: 1,
                }}>
                <ImageCarousel />
            </Modal>

            <Flex mt="lg" w={"100%"} gap="lg" justify="space-between" align="center">
                {
                    images.map((image, index) => (
                        <Button
                            color="sitePrimary.0"
                            key={image}
                            onClick={() => handleClick(index + 1)}
                            h={"6rem"} w={"6rem"}
                            radius={'md'}
                            p={selectedImage && imageNumber == index ? 1.5 : 0}
                            style={{ border: 'none' }}>
                            <Image width={'100%'} src={image} radius={'md'} alt="img1" />
                            <Paper style={{ backgroundColor: selectedImage && imageNumber == index ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)" }} pos={'absolute'} w={'100%'} h={'100%'} />
                        </Button>
                    ))
                }
            </Flex>
        </Flex>

    )
}