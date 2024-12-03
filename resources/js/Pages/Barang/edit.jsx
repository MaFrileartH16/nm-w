import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Index = (props) => {
  return (
    <AppLayout title="Barang" authed={props.auth.user} meta={props.meta}>

    </AppLayout>
  )
}

export default Index
