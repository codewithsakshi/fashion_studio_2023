"use client";
import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

// const bgColor = {
//     max: '#303AB2',
//     babyshop: '#1eb9e3',
//     mothercare: '#1eb9e3',
//     centrepoint: '#1eb9e3',
//     lifestyle: '#242428',
//     shoemart: '#242428',
//     splash: '#242428',
//     homebox: '#242428'
// };
  
const useStyles = makeStyles((theme) => ({
    headerWrapper: {
      display: "flex",
      paddingTop: "8px",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      background: "rgb(247, 248, 247)",
      height: "30px",
      padding: "20px 10px",
      position: "fixed",
      top: "0"
    },
    navBarDepartments:{
        width: "100%",
        display: "inline-flex",
        listStyle: "none",
        gap: "20px",
        alignItems: "center",
    },
    navBarLeft:{
        display: "inline-flex",
        alignItems: "center",
        gap: '5%'
    },
    navBarRight:{
        display: "inline-flex",
        alignItems: "center"
    },
    navBarWrapper:{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        marginTop: "10px"
    },
    navLinks: {
        textDecoration: "none",
        color: "#000",
        padding: "20px 10px",
        '&:hover': {
            backgroundColor: '#fff',
          },
    },
    navBtn: {
        background: "none",
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        width: "200px",
        border: "none",
        padding: "12px"
    },
    lineEl: {
        border: "0.5px solid rgb(200, 201, 198)",
        height: "20px",
        margin: "0 10px"
    }
}));

const Header = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <>
    <Box className={classes.headerWrapper}>
        <Box className={classes.navBarWrapper}>
            <Box className={classes.navBarLeft}>
                <Box className={classes.logo}>
                    <a href="">
                        <Image alt="" src="https://i1.lmsin.net/website_images/ae/logos/header/logo-max.svg" width="70" height="70"/>
                    </a>
                </Box>
                
                <ul className={classes.navBarDepartments}>
                    <li>
                        <a href="/ae/en/department/women" title="women" data-title="women" className={classes.navLinks}>Women</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/mxkids" title="kids" data-title="kids" className={classes.navLinks}>Kids</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/men" title="men" data-title="men" className={classes.navLinks}>Men</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/beauty" title="beauty" data-title="beauty" className={classes.navLinks}>Beauty</a>
                    </li>
                    <li onClick={() => router.push('/studio/feed')}>
                    <a href="/ae/en/department/beauty" title="beauty" data-title="beauty" className={classes.navLinks}>Studio</a> 
                    </li>
                </ul>
                <Box className={classes.searchBox}>
                    <input className={classes.searchInput} type="text" id="js-site-search-input" name="q" maxlength="100" placeholder="What are you looking for?" autocomplete="off" data-options="{&quot;autocompleteUrl&quot; : &quot;/ae/en/search/autocomplete/SearchBox&quot;,&quot;minCharactersBeforeRequest&quot; : &quot;
                    3&quot;,&quot;waitTimeBeforeRequest&quot; : &quot;500&quot;,&quot;displayProductImages&quot; : true}"></input>
                </Box>
            </Box>       
            <Box className={classes.navBarRight}>
                <span className={classes.accountActions} id="account-actions">
                    <a id="account-actions-signup" href="#" data-href="/ae/en/register" data-initiatedby="signup" className={classes.navLinks}>Sign Up</a>
                    <span className={classes.SiginOr} style={{"margin": "0 5px"}}>or</span>
                    <a id="account-actions-signin" href="#" data-href="/ae/en/login"  data-initiatedby="signin" className={classes.navLinks}>Sign In</a>
                </span>
                <span className={classes.lineEl}></span>
                <button tabindex="0" type="button" className={classes.navBtn}>
                    <span class="MuiButton-label">
                        Basket
                    </span>
                    <Image alt="" src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/basket-black-24.svg" width="24" height="22"/>
                </button>
            </Box>
        </Box>
    </Box>
    </>
  )
}


export default Header;