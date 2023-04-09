import logo from '../../images/logo.svg';
import cartImg from '../../images/icon-cart.svg';
import profileImg from '../../images/image-avatar.png';
import { Text, Flex, Image, Popover, Button, Badge } from '@mantine/core';
import CartList from './CartList';
import img1 from "../../images/image-product-1.jpg"
import { useRecoilValue } from 'recoil';
import { Product } from "../atoms/CartState";

export default function NavigationBar() {
    const count = useRecoilValue(Product)

    return (
        <Flex
            mx='15rem'
            w="100%"
            gap="xs"
            justify="space-between"
            align="center"
            direction="row">

            <Flex gap="lg" justify="center" align="center">
                <Image width={"10rem"} src={logo} alt="logo" mr='lg' />
                <Text color='siteNeutral.1'>Collection</Text>
                <Text color='siteNeutral.1'>Men</Text>
                <Text color='siteNeutral.1'>Women</Text>
                <Text color='siteNeutral.1'>About</Text>
                <Text color='siteNeutral.1'>Contact</Text>
            </Flex>
            <Flex gap={'2rem'} align="center">
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
                        <Button color='sitePrimary.0' mt={"10px"} radius={'sm'} w={"100%"}>
                            Checkout
                        </Button>
                    </Popover.Dropdown>
                </Popover>
                <Image width={"3rem"} src={profileImg} alt="cart" />
            </Flex>

        </Flex>
    );
}