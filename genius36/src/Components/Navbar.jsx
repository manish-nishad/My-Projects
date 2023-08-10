import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorModeValue, Stack, useColorMode, Center, HStack, Spacer, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsSearch, BsTwitter, BsInstagram, BsGithub, BsGlobeCentralSouthAsia, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import logo from "../Data/genius36.png";
import Home from "../Pages/Home";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} p={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} paddingLeft={50} paddingRight={50}>
          <Box>
            <Avatar size='lg' src={logo} />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button><BsSearch/></Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <HStack spacing={"24px"} pl={50} pr={50} pt={3} pb={3}>
          <Box><BsTwitter size={"20"}/></Box>
          <Box><BsInstagram size={"20"}/></Box>
          <Box><BsGithub size={"20"}/></Box>
          <Box><BsGlobeCentralSouthAsia size={"20"}/></Box>
          <Box><BsYoutube size={"20"}/></Box>
          <Box><BsLinkedin size={"20"}/></Box>
          <Spacer />
          <Box><Button bg={useColorModeValue('red.100', 'red.600')} leftIcon={<FiUserPlus size={20}/>} >Follow</Button></Box>
          <Box><LuMailPlus size={"20"}/></Box>
        </HStack>
      </Box>
      <Center padding={5}>
        <Tabs size='lg' variant='enclosed' align='center'>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Community Highlights</Tab>
            <Tab>Case Study</Tab>
            <Tab>Referance</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <Home />
              </Box>
            </TabPanel>
            <TabPanel>
              <p>Community</p>
            </TabPanel>
            <TabPanel>
              <p>Case Study</p>
            </TabPanel>
            <TabPanel>
              <p>Referance</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
}