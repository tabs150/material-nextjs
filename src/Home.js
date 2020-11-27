import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../components/Hero'
import ProductBox from '../components/ProductBox';
import ProductFilter from '../components/ProductFilter';
import macbook from '../public/images/macbook-pro.jpg';
import macbookAir from '../public/images/macbook-air.jpeg';
import iphone from '../public/images/iphone-cat.jpg';

const topProducts = [
  {
    name: 'iPhone 6',
    brand: 'Apple',
    model: 'iPhone 6',
    category: 'iphone',
    type: 'smart-phone',
    price: 399,
    description: 'This is a wider card.',
    image: iphone,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'Oculus Rift',
    brand: 'Oculus',
    model: 'Rift 4',
    category: 'accessories',
    type: 'accessories',
    price: 349,
    description: 'This is a wider card.',
    image: macbook,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'GoPro 6',
    brand: 'GoPro',
    model: 'Hero 6',
    category: 'accessory',
    type: 'camera',
    price: 299,
    description: 'This is a wider card.',
    image: macbookAir,
    imageText: 'Image Text',
    rating: 5,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
];


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '80%',
    margin: 'auto',
  },
  section: {
    padding: theme.spacing(8, 0),
  },
  sectionTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  topProducts: {
    margin: '-100px auto auto',
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>

    <section className={classes.section}>
        <Hero />
        <Container>
          <Grid container spacing={0} className={classes.topProducts}>
            {topProducts.map((product) => (
              <ProductBox key={product.name} product={product} />
            ))}
          </Grid>
        </Container>
      </section>
      <section id='product-filter' className={classes.section}>
        <ProductFilter />
      </section>
    </>
  )
}

export default Home
