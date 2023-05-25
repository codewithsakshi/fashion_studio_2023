"use client";
import React from "react";
import data from "@/utilities/data";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  recommendedProducts: {
    display: "flex",
    flexWrap: "wrap",
    cursor: "pointer",
  },
  eachProduct: {
    width: "49.6%",
    borderBottom: "1px solid rgb(214, 219, 227)",
    "&:nth-child(odd)": {
      borderRight: "1px solid rgb(214, 219, 227)",
    },
  },
  productImageContainer: {
    height: "264px",
  },
  productImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  productInfoContainer: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  productInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productName: {
    fontWeight: "900",
    fontSize: "14px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily: "ProximaNova-Semibold",
  },
  wishList: {
    display: "flex",
  },
  productDescription: {
    fontWeight: "200",
    color: "rgb(148, 150, 159)",
    fontSize: "12px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  productPriceContainer: {
    display: "flex",
    fontSize: "12px",
    gap: "4px",
  },
  productPrice: {
    textDecorationLine: "line-through",
    color: "rgb(148, 150, 159)",
  },
  productDiscountedPrice: {
    color: "rgb(40, 44, 63)",
    fontWeight: "900",
  },
  productOfferPercentage: {
    color: "rgb(255, 87, 34)",
  },
}));

export default function RecommendedProducts() {
  const classes = useStyles();
  const { recommended_products } = data;
  const products =
    recommended_products?.response?.components[0]?.props?.contentProps?.items;
  console.log("products", products);
  return (
    <>
      <Box className={classes.recommendedProducts}>
        {products.map((product, index) => (
          <Box key={index} className={classes.eachProduct}>
            <Box className={classes.productImageContainer}>
              <img
                className={classes.productImage}
                draggable="false"
                src={product.searchImage}
                loading="lazy"
              />
            </Box>
            <Box className={classes.productInfoContainer}>
              <Box className={classes.productInfo}>
                <Box className={classes.productName}>{product.brand}</Box>
                <Box className={classes.wishList}>
                  {" "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="rgba(40, 44, 63, 0.7)"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z"
                      fill="rgba(40, 44, 63, 0.7)"
                    ></path>
                  </svg>
                </Box>
              </Box>
              <Box className={classes.productDescription}>
                {product.productName}
              </Box>
              <Box className={classes.productPriceContainer}>
                <Box className={classes.productPrice}>
                  AED {Math.round(product.mrp / 22)}
                </Box>
                <Box className={classes.productDiscountedPrice}>
                  AED {Math.round(product.price / 22)}
                </Box>
                <Box className={classes.productOfferPercentage}>
                  {product.discountDisplayLabel}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
