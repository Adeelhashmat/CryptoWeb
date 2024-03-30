import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, TabIndicator, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { FiDownload } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./componetns/TransactionTable";
import { FaSearch } from "react-icons/fa";
const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Treade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={FiDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs position="relative" variant="unstyled">
        <TabList py={4} display={"flex"} justifyContent={"space-between"} >
          <HStack>
          
            {tabs.map((tab) => (
              <Tab key={tab.name} display={"Flex"} gap={"2"} pb={1  }>
                {tab.name}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>
              </Tab>
            ))}
               
          </HStack>
            <InputGroup maxW={"200px"}  pr={2}>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
            </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
