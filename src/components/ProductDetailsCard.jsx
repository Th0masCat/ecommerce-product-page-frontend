import { Flex, Text } from "@mantine/core";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";

export default function ProductDetailsCard() {
    return (
        <Flex
            gap={'lg'}
            align={'center'}
            justify={'center'}
        >
            <ImageCarousel />
            <ProductInfo/>
        </Flex>
    )

}