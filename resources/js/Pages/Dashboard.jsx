import { AppLayout } from '@/Layouts/AppLayout.jsx'

const Dashboard = (props) => {
  return (
    <AppLayout title="Beranda" authed={props.auth.user} meta={props.meta}>
 
    </AppLayout>
  )
}

export default Dashboard
