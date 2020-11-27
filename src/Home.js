import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductFilter from '../components/ProductFilter';

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
      <section id='product-filter' className={classes.section}>
        <ProductFilter />
      </section>
    </>
  )
}

export default Home
