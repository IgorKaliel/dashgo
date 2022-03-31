import { Text, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface LinkNavProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function LinkNav({icon, children, href, ...rest}: LinkNavProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}