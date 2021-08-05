import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Marcelo</Text>
          <Text color="gray.300" fontSize="small">
            joaonininho.twt@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="João Marcelo" />
    </Flex>
  );
}
