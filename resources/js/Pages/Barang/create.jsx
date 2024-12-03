import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Box, Button, Flex, TextInput } from '@mantine/core'
import { useForm } from '@inertiajs/react'

const Index = (props) => {
  const form = useForm({
    name: '',
    stock: '',
    price: 0,
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('barang.store'))
    }}>
      <AppLayout title="Barang" authed={props.auth.user} meta={props.meta}>
        <Flex justifyContent="end" p={16}>
          <Button type="submit">Simpan Barang</Button>
        </Flex>

        <Box p={16}>
          <TextInput
            label="Nama"
            onChange={(e) => {
              const name = e.target.value
              form.setData('name', name)
            }}
          />

          <TextInput
            label="Stok"
            onChange={(e) => {
              const stock = e.target.value
              form.setData('stock', stock)
            }}
          />

          <TextInput
            label="Harga"
            onChange={(e) => {
              const price = e.target.value
              form.setData('price', price)
            }}
          />
        </Box>
      </AppLayout>
    </form>
  )
}

export default Index
