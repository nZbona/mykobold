// HEADER
import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import { makeStyles, Button, Fab } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
// END HEADER


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0, 
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


const useStyles = makeStyles((theme) => ({

    toolbar:{
        width: "80%",
        // border: "1px solid red",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        transition: ".7s",
        '@media (max-width: 768px)' : {
            width: "95%",
            flexWrap: 'wrap',
            justifyContent: "center",
          }
    },
    toolbarMin: {
        padding: "0",
    },
    title: {
        '@media (max-width: 768px)': {
            marginTop: "-40px",
        }
    },
    actionButtonGreen:{
        transition: ".7s !important",
        // background: "linear-gradient(to top, #00752c 0%,#009c3b 40%)",
        background: "#009c3B",
        color: "white",
        borderRadius: "5px !important",
        "&:hover":{
            // backgroundColor: "#00752c",
            background: "#00752c", 
        },
        '@media (max-width: 900px) and (min-width: 769px)' : {
            height: "44px",
            fontSize: "0.8rem",
        },
        '@media (max-width: 768px)' : {
            marginBottom: "1%",
        }
    }

}));
  

function Header(props){

    const classes = useStyles();
    
    const [shouldShow, setShouldShow] = useState(null)

    useEffect(() => {
        setShouldShow(true);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    
    
    let lastScroll = null;
    
    const handleScroll = (evt) => {

        const lastScrollAux = window.scrollY;
        

            if (lastScrollAux === lastScroll) {
                return;
            }

            if(lastScroll !== null){
                console.log(lastScrollAux)
            }
            const shouldShowVal = (lastScroll !== null) ?  ((lastScrollAux < lastScroll) || lastScrollAux < 50 ) : null;

            if (shouldShowVal !== shouldShow){
                console.log('should show: ', shouldShowVal);
                setShouldShow(shouldShowVal);
                
            }

            lastScroll = lastScrollAux;
        
        
    }
    
    
    const img = <img style={{marginTop: 9}}src="https://unsplash.it/40/40"/>;
    
    return (

        
        <>
            <CssBaseline />
            <ElevationScroll {...props} >
                <AppBar color="white">
                    <Toolbar className={`${classes.toolbar} ${!shouldShow ? classes.toolbarMin : ''}`}>
                        {/* <img src={`logo-kobold-only.png`}/> */}
                        <Box className={`${!shouldShow ? classes.title : ''} ${'logoText'} ${!shouldShow ? 'logoTextMin' : ''} `} noWrap>
                            Kobold, <span> siguur l-ai visat... </span>
                        </Box>
                        <Fab
                            variant="extended"
                            size={!shouldShow ? 'medium' : 'large'}
                            aria-label="add"
                            className={classes.actionButtonGreen}
                            >Rezerva un demo, Gratuit  </Fab>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar className="header-distancer"/>
        </>
    );
}

export default Header;