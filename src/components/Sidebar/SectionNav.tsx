import { ReactNode } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

interface SectionNavProps {
  title: string;
  children: ReactNode;
}

export function SectionNav({ title, children }: SectionNavProps) {
  return(
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>{title}</Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}