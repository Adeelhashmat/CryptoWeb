import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";


const PortfolioSection = () => {
  return (
    <HStack bg={"white"} justify={"space-between"} borderRadius={"xl"} p={6} 
    align={{
        base:"flex-start",
        xl: "center"
    }}
    flexDir={{
        base: "column",
        xl: "row"
    }}
spacing={{
    base:4,
    xl: 0,
}}

    >
      <HStack spacing={{
        base: 0,
        xl:16,
      }} 
       align={{
        base:"flex-start",
        xl: "center"
    }}
    flexDir={{
        base: "column",
        xl: "row"
    }}
      >
      <Stack>
        <HStack color="black.80">
          <Text fontSize={"sm"}>Total Portfolio Value</Text>
          <Icon as={MdInfoOutline} />
        </HStack>
        <HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>$ 112,32.24</Text>
        </HStack>
      </Stack>

      <Stack>
        <HStack color="black.80">
          <Text fontSize={"sm"} >Wallet Balances</Text>
        </HStack>

        <HStack spacing={6} align={{
        base:"flex-start",
        sm: "center"
    }}
    flexDir={{
        base: "column",
        sm: "row"
    }}>
        <HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>22.39401000</Text> <Tag>BTC</Tag>
        </HStack>
        <HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>$ 1,300.00</Text> <Tag>DOL</Tag>  
        </HStack>
        </HStack>
      </Stack>
      </HStack>


      <HStack>
        <Button leftIcon={ <Icon as={LuArrowDownToLine} />}>
           
            Deposit</Button>
        <Button leftIcon={ <Icon as={LuArrowUpToLine} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
