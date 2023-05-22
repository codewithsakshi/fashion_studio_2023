"use client"
import React from "react";
import data from "@/utilities/data";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  profilePage:{
    display: "flex",
    flexDirection:"column",
    width: "100%",fontFamily: "ProximaNova-Semibold,ProximaNova-Regular,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
  },
  profileContainer: {
    display: "flex",
    flexDirection: 'column',
    width: "100%",
    position: "relative",
    height:"450px !important",
    justifyContent: "flex-end",
    color: "White"
  },
  profileImageContainer:{
    height:"450px",
    width: "100%",
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  profileImage:{
    height:"100%",
    width: "100%",
    objectFit: "cover"
  },
  profileContent:{
    display: "flex",
    zIndex: "1",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0))",
    padding: "15px 12px",
    flexDirection: "column"
  },
  profileInfo:{
    display: "flex",
    justifyContent:"space-between",
    alignItems:"center",
    width: "100%",
    marginBottom: "8px"
  },
  profileText:{
    display: "flex",
    flexDirection:"Column",
    color: "White",
    width:"70%"
  },
  profileName:{
    fontSize: "24px",
    fontWeight: "900",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  profileHandle:{
    fontSize: "12px",
    fontWeight: "100"
  },
  followers:{
    display:"flex",
    gap:"4px",
    alignItems:"center"
  },
  profileTabs:{
    display:"flex"
  },
  profileTab:{
    padding: "12px 15px",
    borderBottom: "1px solid #3f51b5",
    color: "#3f51b5;"
  }

}));

export default function Profile() {
  const classes = useStyles();
  const { feed } = data;
    return (
      <>
        <Box className={classes.profilePage}>
          <Box className={classes.profileContainer}>
              <Box className={classes.profileImageContainer}>
                <img className={classes.profileImage} alt="" draggable="false" src="https://assets.myntassets.com/w_400,h_444,q_50,dpr_2,fl_progressive/assets/images/2020/10/27/50c49976-be28-4796-806e-711b2d7906ef1603774247204-croppedImage-1603774245263.jpg"/>
              </Box>
              <Box className={classes.profileContent}>
                <Box className={classes.profileInfo}>
                  <Box className={classes.profileText}>
                    <Box className={classes.profileName}>Divyanshi Tripathi</Box>
                    <Box className={classes.profileHandle}>@divyanshiTripathi</Box>
                  </Box>
                  <Box>
                    <Button variant="contained" size="small" color="primary" style={{fontSize: '12px'}}>+ Follow</Button>
                  </Box>
                </Box>
                <Box className={classes.followers}>
                  <Box sx={{ fontWeight: 900 }}>9.4k</Box>
                  <Box sx={{ fontWeight: 100 }}>Followers</Box>
                  <div dir="auto" aria-label="attributed_text_view" tabindex="0" class="css-901oao" style={{color: 'rgba(255, 255, 255, 0.2)', fontFamily: 'Assistant', fontSize: '8px', marginRight: '5px', marginLeft: '5px'}}>⬤</div>
                  <Box sx={{ fontWeight: 900 }}>399</Box>
                  <Box sx={{ fontWeight: 100 }}>Posts</Box>
                </Box> 
              </Box>
          </Box>
          <Box className={classes.profileTabs}>
            <Box className={classes.profileTab}>Posts</Box>
            <Box className={classes.profileTab}>Recommended Products</Box>
          </Box>
        </Box>
      </>
    )
}