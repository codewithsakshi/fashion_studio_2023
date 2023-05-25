"use client";
import React, { useState } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import styles from "../../styles/Profile.module.css";

const useStyles = makeStyles(() => ({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    height: "450px !important",
    justifyContent: "flex-end",
    color: "White",
  },
  profileImageContainer: {
    height: "450px",
    width: "100%",
    position: "absolute",
    top: "0px",
    right: "0px",
  },
  profileImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  profileContent: {
    display: "flex",
    zIndex: "1",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0))",
    padding: "15px 12px",
    flexDirection: "column",
  },
  profileInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "8px",
  },
  profileText: {
    display: "flex",
    flexDirection: "Column",
    color: "White",
    width: "70%",
  },
  profileName: {
    fontSize: "24px",
    fontWeight: "900",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  profileHandle: {
    fontSize: "12px",
    fontWeight: "100",
  },
  followers: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
}));

export default function ProfileContainer() {
  const classes = useStyles();
  return (
    <>
      <Box className={styles.profileContainer}>
        <Box className={styles.profileImageContainer}>
          <img
            className={styles.profileImage}
            alt=""
            draggable="false"
            src="https://assets.myntassets.com/w_400,h_444,q_50,dpr_2,fl_progressive/assets/images/2020/10/27/50c49976-be28-4796-806e-711b2d7906ef1603774247204-croppedImage-1603774245263.jpg"
          />
        </Box>
        <Box className={styles.profileContent}>
          <Box className={styles.profileInfo}>
            <Box className={styles.profileText}>
              <Box className={styles.profileName}>Divyanshi Tripathi</Box>
              <Box className={styles.profileHandle}>@divyanshiTripathi</Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{ fontSize: "12px" }}
              >
                + Follow
              </Button>
            </Box>
          </Box>
          <Box className={styles.followers}>
            <Box sx={{ fontWeight: 900 }}>9.4k</Box>
            <Box sx={{ fontWeight: 100 }}>Followers</Box>
            <div
              dir="auto"
              aria-label="attributed_text_view"
              tabindex="0"
              class="css-901oao"
              style={{
                color: "rgba(255, 255, 255, 0.2)",
                fontFamily: "Assistant",
                fontSize: "8px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              ⬤
            </div>
            <Box sx={{ fontWeight: 900 }}>399</Box>
            <Box sx={{ fontWeight: 100 }}>Posts</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
