import Link from '../../src/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Container maxWidth="sm">
        <Box my={6}>
        <Typography variant="h1" component="h1" gutterBottom>
            First Post
          </Typography>
          <Link href="/" color="primary">
            Go back Home
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}
