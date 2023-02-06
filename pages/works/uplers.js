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
    <Layout title="Uplers Promotional">
      <Container>
        <Title>
          Uplers Promotional <Badge>2023</Badge>
        </Title>
        <P>
          A Promotional email using Uplers branding that displays a coupon code for the
          recipient.
        </P>
        <List ml={4} my={4}>
  
          <ListItem>
          <Meta>See email live</Meta>
            <Link href="https://johnisadev.github.io/uplers-promotional-email/"target="_blank">
            Github Page <ExternalLinkIcon mx="2px" />
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
          src="/images/works/uplers-email-preview.png"
          alt="Uplers email screenshot"
        />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  