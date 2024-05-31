import {AppLayout} from '@/Layouts/AppLayout.jsx'
import {Box, Button, Center, Image, TextInput, Title} from '@mantine/core'
import {IconLock, IconLockOpen, IconMail, IconPassword} from '@tabler/icons-react'
import {useForm} from '@inertiajs/react'

const Login = (props) => {
  const form = useForm({
    email: '',
    password: '',
  })
  console.log(props)
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.post(route('login'))
    }}>
      <AppLayout title="Log In" authed={props.auth.user} meta={props.meta}>
        <Center h="100vh">
          <Box w={320} p={16}>
            <Image mx="auto" fit="contain" w={80} src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" mb={32} />
            
            <Title mb={32}>Masuk Akun</Title>
            
            <TextInput variant="filled" leftSection={<IconMail />} styles={{
              label: {marginBottom: 8},
              input: {height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16},
              section: {marginLeft: 0, width: 48, height: 48},
              error: {marginTop: 8},
            }} label="Alamat Surel" placeholder="Masukkan alamat surel..." mb={16} onChange={(e) => {
              const email = e.target.value.toLowerCase()
              form.setData('email', email)
              
              if (!email) {
                form.setError({email: 'Alamat surel tidak boleh kosong.'})
              } else if (!/\S+@\S+\.\S+/.test(email)) {
                form.setError({email: 'Alamat surel tidak sah.'})
              } else {
                form.clearErrors('email')
              }
            }} error={form.errors.email} />
            
            <TextInput type="password" variant="filled" leftSection={<IconPassword />} styles={{
              label: {marginBottom: 8},
              input: {height: 48, borderRadius: 32, paddingLeft: 50, paddingRight: 16},
              section: {marginLeft: 0, width: 48, height: 48},
              error: {marginTop: 8},
            }} label="Kata Sandi" placeholder="Masukkan kata sandi..." mb={24} onChange={(e) => {
              form.setData('password', e.target.value)
              
              if (!e.target.value) {
                form.setError({password: 'Kata sandi tidak boleh kosong.'})
              } else {
                form.clearErrors('password')
              }
            }} error={form.errors.password} />
            
            <Button px={16} styles={{section: {marginRight: 16}}}
                    leftSection={(!form.data.email || !form.data.password || form.hasErrors) ? <IconLock /> : <IconLockOpen />}
                    disabled={!form.data.email || !form.data.password || form.hasErrors} loading={form.processing} variant="filled" type="submit"
                    color="red.1" h={48} fullWidth radius={32}>
              Masuk
            </Button>
          </Box>
        </Center>
      </AppLayout>
    </form>
  );
}

export default Login;
