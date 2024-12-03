import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Button, Flex, Table } from '@mantine/core'
import { router } from '@inertiajs/core'

const Index = (props) => {
  const rows = props.items.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.stock}</Table.Td>
    </Table.Tr>
  ))
  return (
    <AppLayout title="Barang" authed={props.auth.user} meta={props.meta}>
      <Flex justifyContent="end">
        <Button onClick={() => router.get(route('barang.create'))}>Tambah Barang</Button>
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nama</Table.Th>
            <Table.Th>Stok</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </AppLayout>
  )
}

export default Index
