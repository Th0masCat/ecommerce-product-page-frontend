import { AppShell, Flex, Header } from "@mantine/core";
import NavigationBar from "./NavigationBar";
import ProductDetailsCard from "./ProductDetailsCard";

export default function AppShellMain() {
    return (
        <AppShell
            padding="md"
            header={
                <Header height={120} style={{ display: "flex", justifyContent: "center" }} p="xs">
                    {
                        <NavigationBar />
                    }
                </Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.sitePrimary[8] : theme.colors.sitePrimary[5] },
            })}
        >
        <Flex justify="center" align="center" direction="column">
            <ProductDetailsCard />
        </Flex>
        </AppShell>
    );
}