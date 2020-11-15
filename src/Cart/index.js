import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Add, Remove } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  productImg: {
    width: '100%',
  },
});

function QtyAdjuster({ qty, increment, decrement }) {
  return (
    <>
      <IconButton>
        <Remove onClick={() => decrement()} />
      </IconButton>
      {qty}
      <IconButton>
        <Add onClick={() => increment()} />
      </IconButton>
    </>
  );
}

export default function Cart({ cart, handleOnRemoveFromCart }) {
  const classes = useStyles();
  const [cart, setCart] = useState([]);

  const increment = (product) => {
    setCart({ ...cart, product });
  };
  const decrement = (product) => {
    setCart({ ...cart, product });
  };

  return (
    <div>
      <Container maxWidth='lg'>
        <Typography component='h1' variant='h2'>
          Shopping Cart ({cart.length})
        </Typography>
        <Grid container>
          <Grid item xs={3}>
            Image
          </Grid>
          <Grid item xs={3}>
            Item
          </Grid>
          <Grid item xs={3}>
            Quantity
          </Grid>
          <Grid item xs={3}>
            Totals
          </Grid>
        </Grid>
        {cart.map((product) => (
          <Grid container key={product.name}>
            <Grid item xs={3}>
              <img
                src={product.image}
                alt={product.imageText}
                className={classes.productImg}
              />
            </Grid>
            <Grid item xs={3}>
              {product.name}
            </Grid>
            <Grid item xs={3}>
              {console.log('Cart', cart)}
              <QtyAdjuster
                qty={product.qty}
                increment={increment}
                decrement={decrement}
              />
            </Grid>
            <Grid item xs={3}>
              {console.log('cartlength', cart.length)}
              {console.log('product.price', product.price)}
              {console.log(parseInt(product.qty * product.price))}
              {parseInt(product.qty * product.price)}
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
}
