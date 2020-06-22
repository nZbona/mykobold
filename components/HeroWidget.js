import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    hero_widget: {
        border: "1px solid red",
        zIndex: 100,
        position: "absolute",
        left: "20%",
        top: "10%",

    }
})



export default function (){
    const classes = useStyles();
    
    return (
        <Box className={classes.hero_widget}>
            herosaf widget
        </Box>
    )
}