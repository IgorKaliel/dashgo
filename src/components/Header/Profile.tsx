import { Box, Flex, Text, Avatar} from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean; 
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex alignItems="center">
            { showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Igor Kaliel</Text>
                <Text color="gray.500" fontSize="small">igorkaliel@gmail.com</Text>
            </Box>
            )}
            <Avatar 
                size="md"
                name="Igor Kaliel"
                src="https://github.com/IgorKaliel.png" 
            />
        </Flex>
    );
}