import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Outlet } from "react-router-dom";

interface Nav {
  label: string;
  url: string;
}
export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const [nav, setNav] = useState<Nav[]>([
    { label: "Dragging", url: "Draging" },
    { label: "Chart", url: "Chart" },
    { label: "Blur", url: "Blur" },
    { label: "TextEditor", url: "TextEditor" },
    { label: "VirtualTable", url: "VirtualTable" },
    { label: "Infinity", url: "Infity" },
    { label: "Chart", url: "Chart" },
    { label: "CustomHeader", url: "CustomHeader" },
    { label: "OrderingTable", url: "OrderingTable" },
    { label: "ExpandTable", url: "ExpandTable" },
  ]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {nav.map((item, index) => (
          <NavLink
            key={index}
            href={item.url}
            label={item.label}
            variant="filled"
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
