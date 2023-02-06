import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Litmus Newsletter <Badge>2023</Badge>
      </Title>
      <P>
        A Customized newsletter using Litmus company branding. This email is also
        dark mode friendly!
      </P>
      <List ml={4} my={4}>

        <ListItem>
        <Meta>See email live</Meta>
          <Link href="https://johnisadev.github.io/litmus-newsletter-email/"target="_blank">
          Github Page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, GIT</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>


      <WorkImage
        src="/images/works/litmus-email-gif.gif"
        alt="email scrolling gif"
      />
      <WorkImage src="/images/works/litmus-email-preview.png" alt="mobile view screenshot" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
