import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            John Knowles
          </Heading>
          <p>Email Architect ( Design & Develop)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Web Developer with a focus on HTML emails & microsites!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          John is a freelance and Email developer based in North Carolina with a
          passion for creating eye-catching HTML emails and microsites. He has a knack
          for all things in the niche field of email marketing. From Designing, Devloping and Testing.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          HTML, CSS, Figma, PhotoShop, JavaScript, AJAX, JQuery, MJML, MailChimp, CAN-SPAM,
           HTML Tables, Litmus, Email Acessability, A/B Testing
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          History
        </Heading>
        <BioSection>
          <BioYear>2018</BioYear>
          Full stack Web Devlopment Certification Completion @ UNCC 
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Senior Full Stack Web Development Tutor @ edX
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          SAP Variant Configuration Dveloper @ Columbus McKinnon Corp.
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          HTML Email Developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Open Source, Linux, Artificial Intellegence,{' '}
          <Link href="https://www.youtube.com/watch?v=ouYtHEyMcHY&t=575s" target="_blank">
            Drifting
          </Link>
          , Music,{' '}
          <Link href="https://www.youtube.com/watch?v=y8_AaQTG4Hw" target="_blank">
            The Persona Video Game Series
          </Link>
          , Modding/Jailbreaking just about any electronic device I can... I void Warrenties B)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
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
          <ListItem>
            <Link href="https://www.linkedin.com/in/johnaknowles/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                John Knowles Linkedin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
