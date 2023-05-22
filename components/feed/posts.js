import React from "react";
import data from "@/utilities/data";
import {Box,makeStyles,Button} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/styles/post.css"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const useStyles = makeStyles(()=>({
  postList:{
    listStyle: "none",
    overflowY: "scroll",
    overflowX: "hidden",
    padding: 0,
    margin: 0
  },
  postHeader:{
    display: "flex",
    position: "sticky",
    background: "rgb(247, 248, 247)",
    height: "45px",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: "5",
    width: "100%",
    top: "0"
  },
  headerLeft:{
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginLeft: "16px"
  },
  headerRight:{
    display: "flex",
    gap: "10px",
    marginRight: "16px",
  },
  headerText:{
    fontSize: "16px",
    fontFamily: "ProximaNova-Semibold",
  },
  headerIcon:{
    marginTop: "5px"
  },
  eachPostHeader:{
    display: "flex",
    padding: "12px",
    alignItems: "flex-start",
    gap: "8px",
  },
  profileName:{
    fontFamily: "ProximaNova-Semibold"
  },
  postTime:{
    fontSize: "12px"
  },
  followBtn:{
    fontFamily: "ProximaNova-Semibold",
    color: "#303ab2",
    textTransform: "capitalize",
    padding: "0",
    justifyContent: "flex-start",
    "&:hover":{
      background: "transparent"
    }
  },
  media:{
    display: "flex",
    flexDirection: "row"
  },
  mediaImg:{
    width: "100%"
  },
  shopAllIcon:{
    display: "inline-flex",
    borderRadius: "10px",
    borderColor:  "#303ab2",
    borderRadius: "15px",
    border: "1px solid #303ab2",
    padding: "5px",
  }
}));

export default function Posts() {
  const classes = useStyles();
  const { feed } = data;
  return (
    <>
      <Box className={classes.postHeader}>
          <Box className={classes.headerLeft}>
              <Box className={classes.headerIcon}>
                <svg class="header-icon menu-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="#3E4152" fillrule="evenodd" d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"></path></svg>
              </Box>
              <Box className={classes.headerText}>
                Studio
              </Box>
          </Box>
          <Box className={classes.headerRight}>
              <Box className={classes.headerIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#3E4152"><g><path d="M21.435 12.922l-1.868.313c-.296.05-.534.268-.607.556-.17.656-.43 1.278-.77 1.85-.151.258-.137.582.035.827l1.098 1.547-1.307 1.308-1.542-1.098c-.242-.175-.567-.187-.828-.035-.57.34-1.193.598-1.85.768-.293.074-.512.314-.557.609l-.316 1.867h-1.846l-.311-1.867c-.05-.297-.27-.535-.557-.608-.626-.162-1.235-.412-1.812-.742-.254-.144-.598-.124-.82.039L6.02 19.363l-1.307-1.308 1.094-1.534c.173-.245.186-.57.033-.83-.35-.585-.611-1.207-.778-1.849-.078-.286-.315-.504-.606-.555l-1.882-.32v-1.846l1.855-.31c.299-.052.539-.271.612-.563.167-.662.42-1.287.755-1.854.15-.258.136-.58-.04-.822L4.65 6.016l1.307-1.308 1.535 1.095c.246.171.572.186.83.032.585-.35 1.205-.61 1.848-.777.287-.079.505-.316.556-.606l.32-1.882h1.846l.31 1.853c.05.3.272.54.563.614.668.168 1.306.428 1.896.777.257.15.58.138.825-.035l1.534-1.103 1.308 1.308-1.098 1.543c-.174.242-.188.565-.034.827.34.572.598 1.194.768 1.85.073.292.312.511.607.556l1.868.316-.004 1.846zm.278-3.337l-1.424-.24c-.147-.458-.331-.902-.548-1.327l.839-1.174c.424-.596.356-1.4-.161-1.91l-1.344-1.345c-.502-.502-1.34-.568-1.906-.16l-1.18.84c-.45-.232-.913-.423-1.38-.568l-.236-1.405c-.12-.718-.736-1.24-1.464-1.24h-1.9c-.727 0-1.343.521-1.463 1.24L9.3 3.739c-.452.146-.896.333-1.322.556l-1.164-.838c-.572-.412-1.42-.342-1.912.16L3.554 4.96c-.515.516-.582 1.319-.161 1.912l.849 1.193c-.215.42-.396.867-.54 1.329l-1.406.236c-.718.121-1.24.736-1.24 1.465v1.898c0 .729.522 1.345 1.239 1.466l1.444.245c.147.454.334.896.556 1.322l-.834 1.16c-.424.596-.356 1.4.16 1.912l1.344 1.344c.502.502 1.336.57 1.907.16l1.192-.849c.4.204.83.38 1.28.526l.237 1.424c.12.72.737 1.24 1.465 1.24h1.903c.728 0 1.344-.52 1.465-1.24l.242-1.424c.459-.148.904-.331 1.325-.547l1.173.838c.567.407 1.407.345 1.912-.16l1.344-1.343c.515-.515.583-1.32.16-1.913l-.84-1.178c.226-.442.41-.887.55-1.325l1.425-.237c.717-.12 1.238-.737 1.238-1.466v-1.896c.01-.729-.507-1.345-1.23-1.466zM12 15.24c-1.787 0-3.241-1.454-3.241-3.24.002-1.786 1.456-3.24 3.24-3.242 1.788 0 3.242 1.455 3.242 3.242S13.787 15.24 12 15.24zm-.001-7.982c-2.611.003-4.737 2.13-4.74 4.741 0 2.614 2.127 4.742 4.74 4.742 2.615 0 4.742-2.127 4.742-4.742 0-2.614-2.127-4.74-4.742-4.74z" transform="translate(-280 -16) translate(280 16)"></path></g></g></g></svg>
              </Box>
              <Box className={classes.headerIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#3E4152" stroke="#3E4152" stroke-width=".2"><g><g><path d="M1.435 7.846c0-3.254 2.648-5.902 5.902-5.902 3.255 0 5.902 2.648 5.902 5.902 0 3.255-2.647 5.902-5.902 5.902-3.254 0-5.902-2.647-5.902-5.902m16.956 10.247l-5.517-5.51c1.092-1.276 1.754-2.93 1.754-4.737 0-4.02-3.27-7.29-7.29-7.29-4.021 0-7.292 3.27-7.292 7.29s3.27 7.291 7.291 7.291c1.714 0 3.291-.596 4.537-1.59l5.535 5.529c.136.135.313.203.49.203.179 0 .357-.068.492-.204.271-.271.271-.71 0-.982" transform="translate(-320 -16) translate(320 16) translate(3 2)"></path></g></g></g></g></svg>
              </Box>
          </Box>
      </Box>
      <Box className={classes.posts}>
          <ul className={classes.postList}>
            <li key={1} className={classes.listItem}>
              <Box  className={classes.eachPost}>
                <Box className={classes.eachPostHeader}>
                  <Box className={classes.profileIcon}>
                    <img alt="" width="38" height="38" draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_32,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png" loading="lazy" srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 1233w,https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 1080w,https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 750w"/>
                  </Box>
                  <Box className={classes.nameAndTime}>
                    <Box className={classes.profileName}>Yash Katyal</Box>
                    <Box className={classes.postTime}>13 Hours ago</Box>
                  </Box>
                  <Box dir="auto" style={{color: "rgba(40, 44, 63, 0.2)", marginTop: "5px",fontSize: "8px"}}>⬤</Box>
                  <Button className={classes.followBtn}>Follow</Button>
                </Box>
                <Box className={classes.media}>
                  <>
                    <Swiper
                      cssMode={true}
                      navigation={false}
                      pagination={true}
                      mousewheel={true}
                      keyboard={true}
                      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                      className="mySwiper"
                    >
                      <SwiperSlide className={classes.sliderImage}> <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                      <SwiperSlide> <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                      <SwiperSlide> <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                      <SwiperSlide> <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                    </Swiper>
                  </>
                </Box>
                <Box className={classes.taggedProducts}>
                  <Box className={classes.shopAll}>
                    <Box className={classes.shopAllIcon}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#303ab2"><g fill="none" fill-rule="evenodd"><g fill="#303ab2"><g><g><path d="M3.364 17.242L4.389 6.107H6.07V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h5.422V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h1.681l1.025 11.135H3.364zM10 2.758c1.296 0 2.38.914 2.647 2.13H7.353c.266-1.216 1.351-2.13 2.647-2.13zm6.771 2.68c-.03-.311-.292-.55-.606-.55h-2.283C13.6 2.996 11.969 1.54 10 1.54c-1.97 0-3.6 1.457-3.882 3.35H3.835c-.314 0-.576.238-.606.55L2.087 17.793c-.016.171.04.341.155.468.116.127.28.2.451.2h14.614c.171 0 .335-.073.45-.2.116-.127.172-.297.156-.468L16.77 5.44z" transform="translate(-21 -708) translate(15 702) translate(6 6)"></path></g></g></g></g></svg>
                    </Box>
                  </Box>
                </Box>
              </Box>
           </li>
           <li key={2} className={classes.listItem}>
              <Box className={classes.eachPost}>
                <Box className={classes.eachPostHeader}>
                  <Box className={classes.profileIcon}>
                    <img alt="" width="38" height="38" draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_32,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png" loading="lazy" srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 1233w,https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 1080w,https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2022/4/7/97edabd0-dbeb-4107-8a1e-19be888d19481649318363022-Yash-Katyal.png 750w"/>
                  </Box>
                  <Box className={classes.nameAndTime}>
                    <Box className={classes.profileName}>Yash Katyal</Box>
                    <Box className={classes.postTime}>13 Hours ago</Box>
                  </Box>
                  <Box dir="auto" style={{color: "rgba(40, 44, 63, 0.2)", marginTop: "5px",fontSize: "8px"}}>⬤</Box>
                  <Button className={classes.followBtn}>Follow</Button>
                </Box>
                <Box className={classes.media}>
                  <>
                    <Swiper
                      cssMode={true}
                      navigation={false}
                      pagination={true}
                      mousewheel={true}
                      keyboard={true}
                      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                      className="mySwiper"
                    >
                      <SwiperSlide> 
                        <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                      <SwiperSlide> 
                        <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture></SwiperSlide>
                      <SwiperSlide> 
                        <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture>
                      </SwiperSlide>
                      <SwiperSlide> 
                        <picture>
                          <source type="image/webp" srcset="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg"/>
                          <img alt="" className={classes.mediaImg} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_400,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg" loading="lazy" 
                          srcset="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1233w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 1080w,
                          https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/5/18/668b3305-0b5a-41bb-817d-4685e7bf6ad51684399902160-CF91394E-BD29-4F72-9882-46DE317D543A.jpeg 750w"/>
                        </picture>
                      </SwiperSlide>
                    </Swiper>
                  </>
                </Box>
                <Box className={classes.taggedProducts}>
                  <Box className={classes.shopAll}>
                    <Box className={classes.shopAllIcon}>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="#303ab2"><g fill="none" fill-rule="evenodd"><g fill="#303ab2"><g><g><path d="M3.364 17.242L4.389 6.107H6.07V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h5.422V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h1.681l1.025 11.135H3.364zM10 2.758c1.296 0 2.38.914 2.647 2.13H7.353c.266-1.216 1.351-2.13 2.647-2.13zm6.771 2.68c-.03-.311-.292-.55-.606-.55h-2.283C13.6 2.996 11.969 1.54 10 1.54c-1.97 0-3.6 1.457-3.882 3.35H3.835c-.314 0-.576.238-.606.55L2.087 17.793c-.016.171.04.341.155.468.116.127.28.2.451.2h14.614c.171 0 .335-.073.45-.2.116-.127.172-.297.156-.468L16.77 5.44z" transform="translate(-21 -708) translate(15 702) translate(6 6)"></path></g></g></g></g></svg>
                    </Box>
                  </Box>
                </Box>
              </Box>
           </li>
          </ul>
      </Box>
    </>
  )
}