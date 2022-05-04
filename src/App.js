import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Grid, } from '@mui/material';
import Prodcut from './components/product'
import IconLine from './components/iconLine'
import AddProduct from './components/addProductModal'
import BarsLine from './components/barsLine'
import { ThemeProvider } from '@mui/material/styles';

import light from './theme';

import './App.scss';

function App() {

  const [open, setOpen] = useState(false);

  let [products, setProducts] = useState([{
    id: nanoid(), product: 'water', type: 'drinks', quantity: 10, unitPrice: 1
  },
  { id: nanoid(), product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5 },
  { id: nanoid(), product: 'steak', type: 'food', quantity: 1, unitPrice: 9 },
  { id: nanoid(), product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2 },
  { id: nanoid(), product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7 }])
  const values = {
    greenRate: 10,
    blackRate: 125,
    barsValues: [60, 30, 60, 15, 60, 85, 85]
  }


  // remove Product
  const handleRemoveProduct = (id) => {
    setProducts(prev => [...prev].filter(item => item.id !== id));
  }

  // add product To Array
  const handleSubmitProduct = (data) => {
    setProducts([...products, { ...data, id: nanoid() }])
    handleClose()
  }

  // open Modal
  const AddNewProductHandler = () => {
    setOpen(true);
  };

  // close Modal
  const handleClose = () => {
    setOpen(false);
  };
  console.log("products Array", products)
  return (


    <ThemeProvider theme={light}>
      <div className="App">

        <Grid container spacing={2} padding={2} justifyContent="center">
          <Grid item xs={12} md={10}  >
            <Grid container justifyContent="center" padding={2} >

              <Button color="primary"
                variant="outlined"
                onClick={() => { AddNewProductHandler(); }}
              >Add New Product</Button>


            </Grid>
          </Grid>
          {/*  Products Grid with animations   */}
          <Grid item xs={12} md={10}  >
            <Grid container spacing={2} padding={2}  >
              <TransitionGroup component={null}    >
                {products.map((item) => (
                  <CSSTransition key={item.id} timeout={300} component={null} classNames="transition">
                    <Prodcut
                      handleRemoveProduct={handleRemoveProduct}
                      item={item}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </Grid>
          </Grid>

        </Grid>

        {/* Card Component */}
        <Grid container spacing={2} padding={2} justifyContent="center">
          <Grid item xs={12} md={10}  >
            <div className='d-flex  flexDirectionColumn cardPrent '>
              <IconLine />
              <BarsLine values={values} />
            </div>
          </Grid>

        </Grid>


        {/* Add Product Modal */}
        {open && <div>

          <AddProduct
            handleSubmitProduct={handleSubmitProduct}
            handleClose={handleClose}
            open={open}
          />

        </div>}

      </div >
    </ThemeProvider >

  );
}

export default App;
