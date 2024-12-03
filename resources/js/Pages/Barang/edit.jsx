import { AppLayout } from '@/Layouts/AppLayout.jsx'
import { Box, Button, Flex, TextInput } from '@mantine/core'
import { useForm } from '@inertiajs/react'

const Index = (props) => {
  const form = useForm({
    code: props.barang.code,
    name: props.barang.name,
    quantity: props.barang.quantity,
    unit: props.barang.unit,
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('barang.update', props.barang.id))
    }}>
      <AppLayout title="Barang" authed={props.auth.user} meta={props.meta}>
        <Flex justifyContent="end" p={16}>
          <Button type="submit">Simpan Barang</Button>
        </Flex>

        <Box p={16}>
          <TextInput
            label="Kode"
            onChange={(e) => {
              const code = e.target.value
              form.setData('code', code)
            }}
            value={form.data.code}
          />

          <TextInput
            label="Nama"
            onChange={(e) => {
              const name = e.target.value
              form.setData('name', name)
            }}
            value={form.data.name}
          />

          <TextInput
            label="Kuantitas"
            onChange={(e) => {
              const quantity = e.target.value
              form.setData('quantity', quantity)
            }}
            value={form.data.quantity}
          />

          <TextInput
            label="Satuan"
            onChange={(e) => {
              const unit = e.target.value
              form.setData('unit', unit)
            }}
            value={form.data.unit}
          />
        </Box>
      </AppLayout>
    </form>
  )
}

export default Index
