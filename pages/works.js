import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPurple from '../public/images/works/purple-email-eyecatch.png'
import thumbEtsy from '../public/images/works/etsy-email-eyecatch.png'
import thumbApple from '../public/images/works/apple-transactional-eyecatch.png'
import thumbLitmus from '../public/images/works/litmus-email-eyecatch.png'
import thumbTruegrit from '../public/images/works/truegrit-email-eyecatch.png'
import thumbUplers from '../public/images/works/uplers-email-eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="purple"
            title="Purple Transactional Email"
            thumbnail={thumbPurple}
          >
            Designed & Developed Purple mattress transactional email using Figma
            & MJML.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="etsy"
            title="Etsy Award Winners Newsletter Email"
            thumbnail={thumbEtsy}
          >
            Reconstructed Etsy newsletter email using MJML.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="apple"
            title="Apple Transactional Email"
            thumbnail={thumbApple}
          >
            A transactional email developed using MJML.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="litmus"
            thumbnail={thumbLitmus}
            title="Litmus Newsletter Email"
          >
            A customized newsletter email template.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="truegrit"
            title="True Grit Texture Supply Promotional Email"
            thumbnail={thumbTruegrit}
          >
            A Promotional email using True Grit Texture Supply branding.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="uplers"
            thumbnail={thumbUplers}
            title="Uplers Promotional Email"
          >
            A Promotional email using Uplers company branding.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
