import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

const ResponsiveLayout = () => {
 
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
   
      <Box bg="teal.500" p={4} color="white">
        <Heading size="md" textAlign="center">Responsive Layout</Heading>
      </Box>

      <Flex direction={{ base: 'column', md: 'row' }} minH="100vh">
       
        <Box
          bg="gray.100"
          w={{ base: '100%', md: '250px' }}
          p={4}
          display={{ base: isMobile ? 'none' : 'block', md: 'block' }}
        >
          <Heading size="sm" mb={4}>
            Sidebar
          </Heading>
          <Stack spacing={3}>
            <Text>Dashboard</Text>
            <Text>Profile</Text>
            <Text>Settings</Text>
            <Text>Logout</Text>
          </Stack>
        </Box>
 
        <Box flex="1" p={4}>
          <Heading size="lg" mb={4}>
            Main Content
          </Heading>
          <Text>
            This is a responsive layout example using Chakra UI. The sidebar is
            hidden on mobile screens, and the layout adjusts based on the screen
            size.
          </Text>
          <Box mt={4} bg="gray.50" p={4} borderRadius="md">
            <Text>Additional content can go here.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ResponsiveLayout;
