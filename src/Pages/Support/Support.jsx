import { BiSolidMessageRoundedDots } from "react-icons/bi";
import DashboardLayout from "../../Components/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import ContactCard from "./componenets/ContactCard";
import SupportCard from "./componenets/SupportCard";
import { HiMail } from "react-icons/hi";
import InfoCards from "../Dashboard/components/InfoCards";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
     <Stack spacing="40px">
     <SupportCard
        leftComponenet={<ContactCard />}
        icon={HiMail}
        title={"Contact Us"}
        text={
          "Have a question or just want to know more? Feel free to reach out to us."
        }
      />
      <SupportCard 
        leftComponenet={
          <InfoCards
            inverted={true}
            imgUrl={"/grid_bg.svg"}
            text={
              "Chat with us now"
            }
            tagText="Chatbot"
          />
        }
        icon={BiSolidMessageRoundedDots}
        title={"Live Chat"}
        text={"Don’t have time to wait for the answer? Chat with us now. Now you can contact us."}
      />
     </Stack>
    </DashboardLayout>
  );
};

export default Support;
