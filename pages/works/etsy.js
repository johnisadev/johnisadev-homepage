import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Etsy 2022 Awards Newsletter">
    <Container>
      <Title>
      Etsy 2022 Awards Newsletter <Badge>2022</Badge>
      </Title>
      <P>
        Created custom design in Figma and created HTML email using MJML.
      </P>
      <P>
        This demo shows how I use an existing brand and design an original
        email to be used for order conformations and shipping status updates for ecommerce.
      </P>
      <List ml={4} my={4}>
        <ListItem>
        <Meta>See email live</Meta>
          <Link href="https://johnisadev.github.io/etsy-award-winners-email/">
            Etsy 2022 Award Winners{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Skills utilized</Meta>
          <span>MJML, HTML, CSS, GIT</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/etsy-email-01.png" alt="walknote" />
        <WorkImage src="/images/works/etsy-email-02.png" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
