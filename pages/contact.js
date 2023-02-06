import { Container, Heading, Link, List, ListItem, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Posts = () => (
  <Layout title="Contact">
    <Container height={'70vh'}>
      <Heading as="h1" fontSize={32} mb={4}>
        Lets Collaborate!
      </Heading>
      <Section delay={0.3}>
        <List>
        <ListItem>
            <Link href="mailto:john.knowles.dev@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<MdEmail />}
              >
                john.knowles.dev@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/johnaknowles/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                John Knowles
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @johnisadev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
