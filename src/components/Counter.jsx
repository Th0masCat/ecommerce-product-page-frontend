import { Button, Text, Flex, Image } from "@mantine/core";
import { useState } from "react";
import cartImg from '../../images/icon-cart.svg';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <Flex
            h={'5rem'}
            w={'100%'}
            mt={'lg'}
            align={'center'}
            justify={'space-between'}
        >

            <Flex
                p={'0.4rem'}
                gap={'lg'}
                bg={'siteNeutral.3'}
                align={'center'}
                justify={'center'}
                style={
                    {
                        borderRadius: '10px',
                    }
                }
            >

                <Button color="siteNeutral.3" onClick={count > 0 ? decrement : null}>
                    <Text color="sitePrimary.0">-</Text>
                </Button>
                <Text fw={700}>{count}</Text>
                <Button color="siteNeutral.3" onClick={increment}>
                    <Text color="sitePrimary.0">+</Text>
                </Button>
            </Flex>
            <Button radius={"md"} fullWidth ml="sm" h={"3rem"} size="md" color="sitePrimary.0" styles={{
                root: {
                    boxShadow: '0px 10px 10px hsl(25, 100%, 94%)',
                },
            }}>

                <Image mr={'1rem'} width={"1rem"} src={cartImg} alt="cart" />
                <Text color="siteNeutral.4" fw={400} w='100%'>Add to cart</Text>
            </Button>
        </Flex>
    );
}