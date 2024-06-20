import { Box, Container, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaTwitch } from "react-icons/fa";

const streamThumbnails = [
  { id: 1, title: "Stream 1", src: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Stream 2", src: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Stream 3", src: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Stream 4", src: "https://via.placeholder.com/300x200" },
];

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="purple.600" color="white" p={4} align="center" justify="space-between">
        <Flex align="center">
          <Image src="/twitch-logo.svg" alt="Twitch Logo" boxSize="40px" />
          <Text fontSize="2xl" fontWeight="bold" ml={2}>Twitch</Text>
        </Flex>
      </Flex>
      <Container maxW="container.xl" mt={4}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
          {streamThumbnails.map((stream) => (
            <Box key={stream.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={stream.src} alt={stream.title} />
              <Box p={4}>
                <Text fontWeight="bold">{stream.title}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;