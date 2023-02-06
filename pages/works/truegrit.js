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
    <Layout title="True Grit Promotional">
      <Container>
        <Title>
          Apple Transactional <Badge>2023</Badge>
        </Title>
        <P>
          A Transactional email using Apple branding that displays a cost breakdown of
          a recent purchase.
        </P>
        <List ml={4} my={4}>
  
          <ListItem>
          <Meta>See email live</Meta>
            <Link href="https://johnisadev.github.io/truegrit-promotional-email/"target="_blank">
            Github page <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, MJML, GIT</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Screenshots</Center>
        </Heading>
  
  
        <WorkImage
          src="/images/works/truegrit-email-gif.gif"
          alt="email scrolling gif"
        />
        <WorkImage src="/images/works/truegrit-email-preview.png" alt="mobile view screenshot" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  