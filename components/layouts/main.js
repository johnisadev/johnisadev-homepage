import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelCarLoader from '../voxel-car-loader'

const LazyVoxelCar = dynamic(() => import('../voxel-car'), {
  ssr: false,
  loading: () => <VoxelCarLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="John's homepage" />
        <meta name="author" content="John Knowles" />
        <meta name="author" content="Johnisadev" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="John Knowles" />
        <meta name="og:title" content="John Knowles" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.johnisadev/images/profile.jpg" />
        <title>Johnisadev - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCar />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
