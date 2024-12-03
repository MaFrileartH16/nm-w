import { Accordion, Avatar, Button, Drawer, Flex, Group, Menu } from '@mantine/core'
import { IconLogout, IconMenu, IconUser } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { router } from '@inertiajs/core'

export const Header = (props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const groceries = [
    {
      value: 'Master',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
  ]

  return (
    <Group h={80} justify="space-between" p={16} style={{ borderBottom: '1px solid var(--mantine-color-gray-4)' }}>
      {/*<Image w={48} src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" />*/}
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/*<Button>Master</Button>*/}
        <Accordion>
          {groceries.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Control>{item.value}</Accordion.Control>
              <Accordion.Panel> <Flex direction="column" gap={8}>
                <Button onClick={() => router.get(route('barang.index'))}>Barang</Button>
             
              </Flex></Accordion.Panel>

            </Accordion.Item>))
          }
        </Accordion>
      </Drawer>

      <Button onClick={open}><IconMenu /></Button>

      <Menu shadow="md"
            styles={{ dropdown: { padding: 8, borderRadius: 20, width: 240 }, item: { height: 48, borderRadius: 32 }, itemSection: { marginRight: 16 } }}>
        <Menu.Target style={{ cursor: 'pointer' }}>
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
