import { Flex, Text, Image, Button } from "@mantine/core";
import deleteImg from '../../images/icon-delete.svg';
import { useRecoilState } from "recoil";
import { Product } from "../atoms/CartState";

export default function CartList(props) {
    const [count, setCount] = useRecoilState(Product);

    if (count == 0) {
        return (
            <Flex direction={'column'} gap="xs" mb="lg">
                <Text size={"xs"} h={"9px"} color='siteNeutral.1'>Your cart is empty</Text>
            </Flex>
        );
    }
    return (
        <Flex gap="xs" justify={'center'} align={"center"}>
            <Image radius={"sm"} width={"3rem"} src={props.productImg} alt="cart" />
            <Flex direction={'column'} gap="xs">

                <Text size={"xs"} h={"9px"} color='siteNeutral.1'>{props.text}</Text>
                <Text size={"xs"} color='siteNeutral.1'>${props.price} x {count}
                    <Text weight={700} component="span" size={"xs"} color='siteNeutral.1'> ${parseInt(count) * parseInt(props.price)}
                    </Text>
                </Text>
            </Flex>
            <Button onClick={()=>setCount(0)} color='siteNeutral.4' radius={'50px'} variant='default' size="xs" style={{ border: '0px' }}>
                <Image width={"1rem"} src={deleteImg} alt="cart" />
            </Button>
        </Flex >
    );
}