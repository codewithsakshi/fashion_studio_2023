"use client";
import React, { useState } from "react";
import data from "@/utilities/data";
import { makeStyles } from "@material-ui/core";
import RecommendedProducts from "./recommendedProducts";
import ProfileContainer from "./profileContainer";
import Posts from "../feed/posts";

const useStyles = makeStyles(() => ({
  profilePage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  profileTabs: {
    display: "flex",
    position: "sticky",
    top: "0px",
    background: "white",
  },
  postTabSelected: {
    padding: "12px 15px",
    borderBottom: "2px solid #3f51b5",
    color: "#3f51b5;",
    fontFamily: "ProximaNova-Semibold",
  },
  postTabNotSelected: {
    padding: "12px 15px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  console.log("classes", classes);
  const { recommended_products } = data;
  const [isPostTabSelected, setIsPostTabSelected] = useState(true);
  const products =
    recommended_products?.response?.components[0]?.props?.contentProps?.items;
  console.log("products", products);
  return (
    <>
      <div className={classes.profilePage}>
        <ProfileContainer></ProfileContainer>
        <div className={classes.profileTabs}>
          <div
            className={
              isPostTabSelected
                ? classes.postTabSelected
                : classes.postTabNotSelected
            }
            onClick={() => {
              setIsPostTabSelected(true);
            }}
          >
            Posts
          </div>
          <div
            className={
              isPostTabSelected
                ? classes.postTabNotSelected
                : classes.postTabSelected
            }
            onClick={() => {
              setIsPostTabSelected(false);
            }}
          >
            Recommended Products
          </div>
        </div>
        {isPostTabSelected ? (
          <Posts></Posts>
        ) : (
          <RecommendedProducts></RecommendedProducts>
        )}
      </div>
    </>
  );
}
