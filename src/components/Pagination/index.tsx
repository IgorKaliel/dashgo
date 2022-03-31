import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination () {
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justifyContent="space-between"
            alignItems="center"
            spacing="6"
        >
            <Box>
                <b>0</b> - <b>10</b> de <b>100</b>
            </Box>
            <Stack direction="row" spacing="2">

               <PaginationItem number={1} isCurrent />
               <PaginationItem number={2} />
               <PaginationItem number={3} />
               <PaginationItem number={4} />
               <PaginationItem number={5} /> 
               
            </Stack>
        </Stack>
    );
}