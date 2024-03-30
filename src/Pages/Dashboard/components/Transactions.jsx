import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCards";
import { BiSolidDollarCircle } from "react-icons/bi";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BiSolidDollarCircle,
      text: "USDT Deposit",
      amount: "+ $81,1.10",
      timestamp: "2022-06-09 7:06 PM",
    },

    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },

    {
      id: "3",
      icon: BiSolidDollarCircle,
      text: "USDT Deposit",
      amount: "+ $708,1.10",
      timestamp: "2023-06-09 8:06 PM",
    },
  ];

  return (
    <CustomCard>
      <Text mb={6} fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transactions , i) => (
            
         <Fragment key={transactions.id}>
            {i =! 0 && <Divider/>}
             <Flex  gap={4} w={"full"}>
            <Grid placeItems="center" bg={"black.5"} boxSize={"40px"}  borderRadius="full">
                <Icon as = {transactions.icon}/>
            </Grid>
            <Flex justify={"space-between"} w={"full"} >
                <Stack spacing={0}>
                    <Text textStyle={"h6"}>
                        {transactions.text}
                    </Text>
                    <Text fontSize={"sm"} color={"black.40"}>
                        {transactions.timestamp}
                    </Text>
                </Stack>
                <Text textStyle={"h6"} >
                        {transactions.amount}
                    </Text>
            </Flex>
          </Flex>
         </Fragment>
        ))}
      </Stack>
      <Button w={"full"} mt={5} colorScheme="gray">View All</Button>
    </CustomCard>
  );
};

export default Transactions;
