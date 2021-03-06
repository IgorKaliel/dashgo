import { Box, Text, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, ButtonGroup, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Flex direction='column' h='100vh'>
                <Header />

                <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                    <Sidebar />

                    <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                        <Flex 
                            mb="8" 
                            justifyContent="space-between" 
                            alignItems="center"
                        >
                            <Heading size="lg" fontWeight="normal">User list</Heading>
                            <Link href="/users/create" passHref>
                                <Button 
                                    as="a" 
                                    size="sm" 
                                    fontSize="sm" 
                                    colorScheme="pink"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >
                                    New user
                                </Button>
                            </Link>
                        </Flex>

                        <Table
                            colorScheme="whiteAlpha"
                        >
                            <Thead>
                                <Tr>
                                    <Th px={["4","4","6"]} color="gray.300" width="8" >
                                        <Checkbox colorScheme="pink"/>
                                    </Th>
                                    <Th>User</Th>
                                   { isWideVersion && ( <Th>Data de cadastro</Th> ) }
                                    <Th w="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["4","4","6"]}>
                                        <Checkbox colorScheme="pink"/> 
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Igor Kaliel</Text>
                                            <Text fontSize="sm" color="gray.500">Igor Kaliel</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && (
                                    <Td>
                                        01 de Abril de 2022
                                    </Td>
                                    )}
                                    <Td>
                                        <ButtonGroup size='sm' isAttached>
                                            { isWideVersion && (
                                            <Button
                                                as="a" 
                                                size="sm"
                                                fontSize="sm" 
                                                colorScheme="purple"
                                            >
                                                Edit
                                            </Button>
                                            )}
                                            <IconButton as="a" aria-label='Edit' colorScheme="purple" icon={<Icon as={RiPencilLine} fontSize="16" />} />
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}