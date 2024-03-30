import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCards";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timeTamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  return (
    <CustomCard>
      <Flex justifyContent={"space-between"} align={"start"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize={"sm"}>Current Price</Text>
          </HStack>
          <HStack>
            <Text textStyle={"h2"} fontWeight={"medium"}>
              $ 26,670.25
            </Text>
            <HStack color={"rgba(5, 150, 105, 1)"}>
              <Icon as={FaArrowTrendUp} />
              <Text>0.04%</Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify={"end"} > 
          <TabList bg={"black.5" } p={"3px"} >
            {["1H" , "1D" , "1W" , "1M"].map((tab) =>(
              <Tab 
              _selected={{bg: "white"}}
              key={tab} fontSize={"sm"} p={"6px"} borderRadius={4}>{tab}</Tab>
            ))}
          
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" mt={"48px"} />
            <HStack justify={"space-between"}>
              {timeTamps.map((timeTamps) => (
                <Text key={timeTamps} fontSize={"small"} color={"black.80"}>
                  {timeTamps}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
