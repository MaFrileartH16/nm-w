import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Box, Button, Flex, Table } from '@mantine/core'
import { router } from '@inertiajs/core'

const Index = (props) => {
  const rows = props.items.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.code}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.unit}</Table.Td>
    </Table.Tr>
  ))
  return (
    <AppLayout title="Barang" authed={props.auth.user} meta={props.meta}>
      <Flex justifyContent="end" p={16}>
        <Button onClick={() => router.get(route('barang.create'))}>Tambah Barang</Button>
      </Flex>

      <Box p={16}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode</Table.Th>
              <Table.Th>Nama</Table.Th>
              <Table.Th>Kuantitas</Table.Th>
              <Table.Th>Satuan</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </AppLayout>
  )
}

export default Index
