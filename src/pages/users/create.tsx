import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name required'),
  email: yup.string().required('Email required').email('Email invalid'),
  password: yup.string().required('Pass required').min(8, 'Password at least 8 characters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Passwords must be the same')
})

export default function CreateUser() {
  const router = useRouter()

  /*const createUser = useMutation(async (user: CreateUserFormData) => {
    const res = await api.post('users', {
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return res.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })*/

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    //await createUser.mutateAsync(values)

    await new Promise(resolve => setTimeout(resolve, 2000));
    //router.push('/users')
    console.log(values);
  }

  return (
    <Box>
       <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box 
          as='form' 
          flex='1' 
          borderRadius={8} 
          bg='gray.800' 
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>New usuário</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid 
              minChildWidth='240px'
              spacing={['6', '8']}
              w='100%'
            >
              <Input
                {...register('name')}
                name='name' 
                label='Full Name' 
                type='text'
                error={errors.name}
              />
              <Input
                {...register('email')}
                name='email' 
                label='E-mail' 
                type='email'
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid 
              minChildWidth='240px'
              spacing={['6', '8']}
              w='100%'
            >
              <Input
                {...register('password')}
                name='password' 
                label='Senha' 
                type='password'
                error={errors.password}
              />
              <Input
                {...register('password_confirmation')}
                name='password_confirmation' 
                label='Confirmação da senha' 
                type='password'
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button 
                type='submit'
                colorScheme='pink' 
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}