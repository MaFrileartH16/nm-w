import {Avatar, Group, Image, Menu} from "@mantine/core";
import {NavBar} from "@/Components/NavBar.jsx";
import {IconLogout, IconUser} from "@tabler/icons-react";
import {router} from "@inertiajs/core";

export const Header = (props) => {
  return (
    <Group h={80} justify="space-between" p={16} style={{borderBottom: '1px solid var(--mantine-color-gray-4)'}}>
      <Image w={48} src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" />
      
      <NavBar />
      
      <Menu shadow="md" styles={{dropdown: {padding: 8, borderRadius: 20, width: 240}, item: {height: 48, borderRadius: 32}, itemSection: {marginRight: 16}}}>
        <Menu.Target style={{cursor: 'pointer'}}>
          <Avatar size={48} color="red.1">{props.authed.name[0]}</Avatar>
        </Menu.Target>
        
        <Menu.Dropdown>
          <Menu.Item leftSection={<IconUser />} px={16} py={0} color="netral">Profil Saya</Menu.Item>
          <Menu.Item leftSection={<IconLogout />} color="red" px={16} py={0} onClick={() => router.post(route('logout'))}>Keluar Akun</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    
    
    </Group>
  )
}
