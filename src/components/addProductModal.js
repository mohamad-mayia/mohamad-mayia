import React from 'react';
import {
    Button, Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import { FormContainer, TextFieldElement, SelectElement } from 'react-hook-form-mui'


function AddProduct({ handleSubmitProduct, handleClose, open }) {


    return (
        <Dialog open={open} onClose={handleClose}>
            <FormContainer
                defaultValues={{}}
                onSuccess={(e) => handleSubmitProduct(e)}
            >
                <DialogTitle color="primary">Add New Product</DialogTitle>
                <DialogContent>


                    <Grid container spacing={2} padding={2}>
                        <Grid item xs={6} md={6}  >
                            <TextFieldElement
                                autoComplete='off'
                                fullWidth
                                label={'Product'}
                                name={'product'}
                                required
                            />
                        </Grid>
                        <Grid item xs={6} md={6}  >
                            <TextFieldElement

                                autoComplete='none'
                                fullWidth
                                label={'Quantity'}
                                name={'quantity'}
                                required
                                type={'number'}
                                InputProps={{
                                    inputProps: {
                                        min: 1
                                    }


                                }}
                                onKeyPress={(e) => {
                                    if (e.key === "e" || e.key === "-") {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6}  >
                            <TextFieldElement
                                autoComplete='none'
                                fullWidth
                                label={'Price'}
                                name={'unitPrice'}
                                required
                                type={'number'}
                                InputProps={{ inputProps: { min: 0, } }}
                                onKeyPress={(e) => {
                                    if (e.key === "e" || e.key === "-") {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6}  >
                            <SelectElement
                                autoComplete='none'
                                fullWidth
                                label="Type"
                                name="type"
                                options={[
                                    {
                                        id: 'drinks',
                                        title: 'Drinks'

                                    },
                                    {
                                        id: 'food',
                                        title: 'Food'
                                    }
                                ]}
                                required
                            />
                        </Grid>
                    </Grid>

                </DialogContent>


                <Grid container spacing={2} padding={2} paddingBlock='0'>

                    <Grid item md={12} padding={2} textAlign='end' columnGap={9} paddingBlock='0' spacing={2}>
                        <DialogActions> <Button type='button' color="secondary" variant="outlined"

                            onClick={() => handleClose()}  >Cancel</Button>
                            <Button type='submit' color="primary" variant="outlined"   >Save</Button>
                        </DialogActions>
                    </Grid>
                </Grid>

            </FormContainer>
        </Dialog >




    );
}

export default AddProduct;
