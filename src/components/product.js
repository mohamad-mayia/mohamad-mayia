import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    CardActions, Card,
    CardContent,
    Typography,
    IconButton, Grid,

} from '@mui/material';



const Prodcut = ({ handleRemoveProduct, item }) => {


    return (


        <Grid item xs={12} md={3}  >

            <Card    >
                <CardActions>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        title="Delete"
                        color="secondary"

                        onClick={() => handleRemoveProduct(item.id)}
                    >
                        <DeleteIcon />
                    </IconButton>

                </CardActions>


                <CardContent >
                    <Typography textAlign="center" gutterBottom variant="h5" component="div">
                        {item.product}
                    </Typography>
                    <Typography color="primary" textAlign="center" gutterBottom variant="p" component="div">
                        {`Price : ${item.unitPrice}`}
                    </Typography>
                    <Typography textAlign="center" gutterBottom variant="p" component="div">
                        {`Quantity : ${item.quantity}`}
                    </Typography>
                    <Typography textAlign="center" variant="p" component="div">
                        {`Type : ${item.type}`}
                    </Typography>
                </CardContent>


            </Card>
        </Grid >



    );
}

export default Prodcut;
