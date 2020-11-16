import React, {useState, useEffect} from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from '../src/Header';
import Home from '../src/Home';
import Footer from '../src/Footer';
import { products, sections } from '../src/store';

function Index() {
  const [cart, setCart] = useState([]);
  const [leanCart, setLeanCart] = useState([]);

  useEffect(() => {
    console.log('Setting leanCart...');
    setLeanCart(getUnique(cart));
  }, [cart]);

  const getUnique = (cart) => {
    const uniqueCart = [...new Set(cart)];
    return [...uniqueCart];
  };

  const handleAddToCart = (id) => {
    const product = products.find((prod) => prod.id === id);
    product.qty++;
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const filteredProducts = cart.filter((prod) => prod.id !== id);
    setCart(filteredProducts);
  };

  const increment = (product) => {
    handleAddToCart(product.id);
    console.log('cartAfterIncr', cart);
  };
  const decrement = (idx) => {
    const item = cart[idx];
    item.qty--;
    console.log('idx', idx);
    cart.splice(idx, 1);
    console.log('cart', cart);
    setCart(cart);
    setLeanCart(getUnique(cart));
  };

  return (
    <>
      <CssBaseline />
      <Header
        title='BOUNCER'
        sections={sections}
        cart={cart}
        leanCart={leanCart}
        handleRemoveFromCart={handleRemoveFromCart}
        increment={increment}
        decrement={decrement}
      />

      <Home />

      <Footer />
    </>
  );
}

export default Index;
