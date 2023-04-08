import logo from '../../images/logo.svg';
import cartImg from '../../images/icon-cart.svg';
import profileImg from '../../images/image-avatar.png';
import { Text, Flex, Image } from '@mantine/core';

export default function NavigationBar() {
    return (
        <Flex
            mx='15rem'
            w="100%"
            gap="xs"
            justify="space-between"
            align="center"
            direction="row">
            
            <Flex gap="lg" justify="center" align="center">
            <Image width={"10rem"}  src={logo} alt="logo" mr='lg'/>
                <Text color='siteNeutral.1'>Collection</Text>
                <Text color='siteNeutral.1'>Men</Text>
                <Text color='siteNeutral.1'>Women</Text>
                <Text color='siteNeutral.1'>About</Text>
                <Text color='siteNeutral.1'>Contact</Text>
            </Flex>
            <Flex gap={'2rem'} align="center">
                <Image width={"2rem"} src={cartImg} alt="cart" />
                <Image width={"3rem"} src={profileImg} alt="cart"/>
            </Flex>

        </Flex>
    );
}