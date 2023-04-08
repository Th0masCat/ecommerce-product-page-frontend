import { Flex, Text } from "@mantine/core"
import { Button } from "bootstrap"
import Counter from "./Counter"

export default function ProductInfo() {
    return (
        <Flex
            p={'3rem'}
            direction="column"
            w={'30rem'}
        >
            <Text
                color='sitePrimary.0'
                fz={'1rem'}
                fw={'700'}
                p={0}
                m={0}
            >
                SNEAKER COMPANY
            </Text>
            <Text
                color='siteNeutral.0'
                fz={'2rem'}
                fw={'700'}
            >
                Fall Limited Edition
                Sneakers
            </Text>
            <Text
                pt={'1rem'}
                color='siteNeutral.1'
                fz={'md'}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit libero, a pharetra augue.
                Nullam quis risus eget urna mollis ornare vel eu leo.
                Nullam id dolor id nibh ultricies vehicula ut id elit.

            </Text>

            <Text
                pt={"2rem"}
                color='siteNeutral.0'
                fz={'2rem'}
                fw={'700'}
            >
                $125
            </Text>
            <Text
                color='siteNeutral.2'
                fz={'md'}
                fw={'bold'}
            >
                $250
            </Text>
            <Counter />
        </Flex>

    )
}