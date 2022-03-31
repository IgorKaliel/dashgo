import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { LinkNav } from "./LinkNav";
import { SectionNav } from "./SectionNav";

export function SidebarNav() {
    return (
        <Stack spacing="12" alignItems="flex-start">  
            <SectionNav title="GENERAL">
                <LinkNav icon={RiDashboardLine} children="Dashboard" href="/dashboard" />
                <LinkNav icon={RiContactsLine} children="Users" href="/users" />
            </SectionNav>

            <SectionNav title="AUTOMATION">
                <LinkNav icon={RiInputMethodLine} children="Forms" href="/forms" />
                <LinkNav icon={RiGitMergeLine} children="Automation" href="/automation" />
            </SectionNav>
        </Stack>
    );
}