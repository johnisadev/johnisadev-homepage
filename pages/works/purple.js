import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Purple Transactional Email">
    <Container>
      <Title>
        Purple Transactional Email <Badge>2022-</Badge>
      </Title>
      <P>
        A Transactional email that includes shipment update status 
        and invoice of using the Purple company branding.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>See email live</Meta>
          <Link href="https://johnisadev.github.io/purple-transactional-email/" target="_blank">
          Github Page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta>See Figma Design live</Meta>
          <Link href="https://www.figma.com/proto/f0niG1Eq3AA7UVZX7XLdD7/purple-transactional-email-(Copy)?page-id=0%3A1&node-id=2%3A2&viewport=737%2C292%2C0.51&scaling=min-zoom" target='_blank'>
          Figma Design File Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Skills utilized</Meta>
          <span>Figma, MJML, HTML, CSS, GIT</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/purple-email-01.png" alt="Purple" />
      <WorkImage src="/images/works/purple-email-02.png" alt="Purple" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
