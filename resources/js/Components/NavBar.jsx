import {Button, Group} from "@mantine/core";
import {IconHome, IconPackages, IconReport} from "@tabler/icons-react";
import {router} from "@inertiajs/core";

export const NavBar = (props) => {
  const navList = [
    {
      icon: <IconHome />,
      label: 'Beranda',
      route: 'dashboard',
    },
    {
      icon: <IconPackages />,
      label: 'Barang',
      route: 'items',
    },
    {
      icon: <IconReport />,
      label: 'Laporan',
      route: 'reports',
    }
  ]
  
  return (
    <Group gap={0}>
      {navList.map((nav) => (
        <Button
          leftSection={nav.icon}
          px={16}
          styles={{section: {marginRight: 16}}}
          h={48}
          color="red.1"
          radius={32}
          variant="subtle"
          onClick={() => router.get(route(nav.route))}
        >
          {nav.label}
        </Button>
      ))}
    </Group>
  )
}
