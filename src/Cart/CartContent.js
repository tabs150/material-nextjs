import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Add, Remove, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  productImg: {
    width: '100%',
  },
});

export default function CartContent({
  leanCart,
  handleRemoveFromCart,
  increment,
  decrement,
}) {
  const classes = useStyles();

  let carttotal = 0;

  const totalCost = (qty, price) => {
    const cost = qty * price;
    carttotal = carttotal + cost;
    return cost;
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          Image
        </Grid>
        <Grid item xs={3}>
          Item
        </Grid>
        <Grid item xs={2}>
          Quantity
        </Grid>
        <Grid item xs={2}>
          Totals
        </Grid>
        <Grid item xs={2}>
          Remove
        </Grid>
        {leanCart.map((product, idx) => (
          <Grid container key={idx}>
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
            <Grid item xs={2}>
              <IconButton onClick={() => decrement(idx)}>
                <Remove />
              </IconButton>
              {product.qty}
              <IconButton onClick={() => increment(product)}>
                <Add />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              {`$ ${totalCost(product.qty, product.price)}`}
            </Grid>
            <Grid item xs={2}>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleRemoveFromCart(product.id)}
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}></Grid>

        <Grid item xs={3}>
          <Typography component='h2'>Total</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography component='h2'>$ {carttotal}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
