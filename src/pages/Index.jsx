import { Box, Flex, Heading, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import { FaRocket, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.900" color="white">
      <VStack spacing={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1541873676-a18131494184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXR8ZW58MHx8fHwxNzE0NjM5ODg4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Astronaut" />
        <Heading as="h1" size="2xl">
          Welcome to Tonic-ai
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Exploring the universe of data with the power of AI.
        </Text>
        <Flex gap="4">
          <Button leftIcon={<FaRocket />} colorScheme="purple" variant="solid">
            Launch App
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
            Contact Us
          </Button>
        </Flex>
        <Flex gap="4">
          <Link href="https://linkedin.com" isExternal>
            <Button colorScheme="blue" variant="ghost">
              <FaLinkedin />
            </Button>
          </Link>
          <Link href="https://github.com" isExternal>
            <Button colorScheme="gray" variant="ghost">
              <FaGithub />
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
