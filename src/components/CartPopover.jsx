import { Text, Flex, Image, Popover, Button, Badge } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { Product } from "../atoms/CartState";

import img1 from "../../images/image-product-1.jpg"
import cartImg from '../../images/icon-cart.svg';

import CartList from './CartList';

export default function CartPopover() {
    const count = useRecoilValue(Product)

    return (
        <Popover>
            <Popover.Target>
                <Button color='siteNeutral.4' radius={'50px'} variant='default' style={{ border: '0px' }}>
                    <Badge color='sitePrimary.0' top={0} right={0} pos={'absolute'} style={{ zIndex: '2' }} size="xs" w={"1.6rem"} variant="filled">
                        {count}
                    </Badge>
                    <Image width={"2rem"} src={cartImg} alt="cart" />
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Flex direction="column" gap="xs" w={'20rem'} p={"lg"} justify={"center"}>
                    <Text weight={700} color='siteNeutral.0' >Cart</Text>
                    <CartList productImg={img1} text="Fall Limited Edition Sneakers" price="125" />
                </Flex>
                {count == 0 ? null :
                    <Button color='sitePrimary.0' mt={"10px"} radius={'sm'} w={"100%"}>
                        Checkout
                    </Button>
                }
            </Popover.Dropdown>
        </Popover>
    )
}