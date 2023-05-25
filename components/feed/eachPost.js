import React from "react";
import data from "@/utilities/data";
import { Box, makeStyles, Button } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/styles/post.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import parse from "html-react-parser";
import styles from "../../styles/Feed.module.css";

export default function EachPost() {
  const { feed } = data;
  const myInstaPosts = Array.from(feed.components)
    .filter((item) => item.type === "MynstaPost")
    .filter((item) => item.props.contentProps.elementId != "POST_VIDEO");
  return (
    <Box className={styles.posts}>
      <ul className={styles.postList}>
        {myInstaPosts.map((item, index) => {
          const prodGallery = item.props.contentProps.media || [];
          const titleProps = item.props.titleProps;
          const contentProps = item.props.contentProps;
          return (
            <li key={index} className={styles.listItem}>
              <Box className={styles.eachPost}>
                <Box className={styles.eachPostHeader}>
                  <Box className={styles.profileIcon}>
                    <img
                      className={styles.profileIconImg}
                      alt=""
                      width="38"
                      height="38"
                      draggable="false"
                      src={titleProps.author.profileImage.src}
                    />
                  </Box>
                  <Box className={styles.nameAndTime}>
                    <Box className={styles.profileName}>
                      {titleProps.author.name}
                    </Box>
                    <Box className={styles.postTime}>
                      {titleProps.subTitle}
                    </Box>
                  </Box>
                  <Box
                    dir="auto"
                    style={{
                      color: "rgba(40, 44, 63, 0.2)",
                      marginTop: "5px",
                      fontSize: "8px",
                    }}
                  >
                    ⬤
                  </Box>
                  <Button className={styles.followBtn}>Follow</Button>
                </Box>
                <Box className={styles.media}>
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
                      {prodGallery.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className={styles.sliderImage}
                        >
                          <picture>
                            <source type="image/webp" srcset={item.src} />
                            <img
                              alt=""
                              className={styles.mediaImg}
                              draggable="false"
                              src={item.src}
                              loading="lazy"
                            />
                          </picture>
                        </SwiperSlide>
                      ))}
                      <SwiperSlide>
                        <video
                          height={"673px"}
                          width={"100%"}
                          autoplay
                          poster="https://i8.amplience.net/v/landmarkpoc/Max MW V1"
                          autoPlay
                          loop
                          muted
                        >
                          <source
                            src="https://i8.amplience.net/v/landmarkpoc/Max MW V1/mp4_720p"
                            type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
                          />
                        </video>
                      </SwiperSlide>
                    </Swiper>
                  </>
                </Box>
                <Box className={styles.taggedProducts}>
                  <Box className={styles.shopAll}>
                    <Box className={styles.shopAllIcon}>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 21 21"
                        fill="#303ab2"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g fill="#303ab2">
                            <g>
                              <g>
                                <path
                                  d="M3.364 17.242L4.389 6.107H6.07V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h5.422V7.57c0 .337.273.61.61.61.336 0 .609-.273.609-.61V6.107h1.681l1.025 11.135H3.364zM10 2.758c1.296 0 2.38.914 2.647 2.13H7.353c.266-1.216 1.351-2.13 2.647-2.13zm6.771 2.68c-.03-.311-.292-.55-.606-.55h-2.283C13.6 2.996 11.969 1.54 10 1.54c-1.97 0-3.6 1.457-3.882 3.35H3.835c-.314 0-.576.238-.606.55L2.087 17.793c-.016.171.04.341.155.468.116.127.28.2.451.2h14.614c.171 0 .335-.073.45-.2.116-.127.172-.297.156-.468L16.77 5.44z"
                                  transform="translate(-21 -708) translate(15 702) translate(6 6)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Box>
                    <Box className={styles.shopAllText}>SHOP ALL</Box>
                  </Box>
                  <ul className={styles.ulProductPill}>
                    {contentProps.productPills.map((item, index) => (
                      <li key={index} className={styles.pillItem}>
                        <picture>
                          <source
                            type="image/webp"
                            srcset={item.searchImage.replace("http", "https")}
                          />
                          <img
                            width="63"
                            height="85"
                            alt=""
                            draggable="false"
                            src={item.searchImage.replace("http", "https")}
                            loading="lazy"
                          />
                        </picture>
                        <Box className={styles.productDetails}>
                          <Box className={styles.prdName}>{item.brand}</Box>
                          <Box className={styles.prdPrice}>
                            <span
                              className={styles.discountPrice}
                            >{`AED ${parseInt(item.mrp / 22)}`}</span>
                            <span
                              className={styles.salePrice}
                            >{`AED ${parseInt(item.price / 22)}`}</span>
                          </Box>
                          <Box className={styles.discountAndRating}>
                            <Box className={styles.discount}>
                              {item.displayDiscountLabel &&
                                item.displayDiscountLabel
                                  .replace("(", "")
                                  .replace(")", "")}
                            </Box>
                            <Box className={styles.rating}>
                              {item.rating ? item.rating : ""}
                              <span className={styles.ratingStar}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="#303ab2"
                                  width="12"
                                  height="12"
                                >
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                              </span>
                            </Box>
                          </Box>
                        </Box>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box className={styles.likeAndSavePost}>
                  <Box className={styles.likePost}>
                    {item.props.contentProps.isLiked != "NONE" ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="rgba(255, 63, 108, 1)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g fill="rgba(255, 63, 108, 1)" fill-rule="nonzero">
                            <g>
                              <g>
                                <path
                                  d="M10.143 14.669c-.947-1.009-2.534-3.014-2.534-5.11 0-2.428 1.975-4.403 4.402-4.403.851 0 1.677.246 2.38.695.701-.449 1.527-.695 2.378-.695 1.24 0 2.363.516 3.164 1.345.044-.315.067-.624.067-.928C20 2.517 17.514.031 14.458.031c-1.06 0-2.089.3-2.977.867-.577.368-1.078.836-1.481 1.381-.403-.545-.904-1.013-1.48-1.381C7.63.33 6.6.03 5.541.03 2.486.03 0 2.517 0 5.573c0 3.107 2.809 6.436 4.016 7.723 1.03 1.097 2.175 2.1 3.225 2.825 1.146.79 2.075 1.192 2.759 1.192.585 0 1.38-.297 2.271-.817-.911-.591-1.708-1.38-2.128-1.827z"
                                  transform="translate(-12 -664) translate(12 664) translate(2 3)"
                                ></path>
                                <path
                                  d="M16.769 6.328c-.925 0-1.778.384-2.379 1.041-.6-.657-1.453-1.04-2.379-1.04-1.781 0-3.23 1.449-3.23 3.23 0 1.755 1.55 3.598 2.217 4.308.965 1.029 2.432 2.23 3.392 2.23.924 0 2.367-1.066 3.387-2.122.83-.86 2.223-2.576 2.223-4.416 0-1.781-1.45-3.23-3.231-3.23z"
                                  transform="translate(-12 -664) translate(12 664) translate(2 3)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="rgba(40, 44, 63, 1)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g fill="rgba(40, 44, 63, 1)" fill-rule="nonzero">
                            <g>
                              <path
                                d="M16.458 2.75c3.193 0 5.792 2.557 5.792 5.702 0 .665-.108 1.361-.32 2.076l-.081.254.05.095c.164.33.273.684.322 1.05l.022.222.007.224c0 1.575-.934 3.133-2.295 4.519-1.215 1.238-2.639 2.162-3.565 2.162-.288 0-.612-.087-.966-.252l-.044-.021-.123.087c-1.057.725-2.048 1.226-2.873 1.352l-.202.023-.182.007c-.746 0-1.716-.412-2.9-1.216-1.065-.723-2.224-1.721-3.265-2.813-2.351-2.465-4.085-5.227-4.085-7.769 0-3.145 2.6-5.702 5.792-5.702 1.106 0 2.182.308 3.11.89.344.216.662.466.95.745l.211.215.187.211.187-.211c.205-.22.427-.425.665-.61l.243-.181.253-.168c.928-.583 2.004-.891 3.11-.891zm0 1.653c-1.591 0-3.01.873-3.707 2.279-.14.283-.432.463-.751.463s-.61-.18-.75-.463c-.698-1.406-2.117-2.28-3.708-2.28-2.272 0-4.12 1.818-4.12 4.05 0 1.757 1.354 4.249 3.63 6.635 1.914 2.008 4.133 3.51 4.948 3.51.327 0 .985-.26 1.792-.755l.094-.06c-.28-.233-.556-.483-.815-.74l-.254-.259c-1.317-1.38-2.287-2.937-2.287-4.41 0-1.892 1.563-3.429 3.481-3.429.834 0 1.622.287 2.242.801l.137.122.138-.122c.563-.467 1.265-.747 2.015-.793l.226-.008c.575 0 1.129.14 1.624.398l.093.052.033-.186c.026-.173.044-.343.053-.51l.006-.246c0-2.232-1.848-4.05-4.12-4.05zm2.311 6.194c-.7 0-1.322.383-1.628 1-.14.284-.432.463-.75.463-.32 0-.61-.179-.751-.462-.306-.618-.93-1-1.629-1-.998 0-1.809.797-1.809 1.775 0 .834.682 2.071 1.831 3.276.985 1.033 2.07 1.752 2.357 1.752.314 0 1.404-.68 2.366-1.66 1.162-1.184 1.822-2.42 1.822-3.368 0-.978-.81-1.776-1.809-1.776z"
                                transform="translate(-12 -622) translate(12 622)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    )}
                    <Box className={styles.likeCount}>
                      {item.props.contentProps.likeCount}
                    </Box>
                  </Box>
                  <Box className={styles.savePost}>
                    {!item.props.contentProps.isBookmarked ? (
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="rgba(40, 44, 63, 1)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g fill="rgba(40, 44, 63, 1)" fill-rule="nonzero">
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M15 0H3.002C1.344 0 0 1.344 0 3.001V17.25c0 .644.759.988 1.244.564l5.506-4.818 5.506 4.818c.485.424 1.244.08 1.244-.564v-8.25h3.75c.414 0 .75-.335.75-.75V3C18 1.344 16.657 0 15 0zm-3 15.596l-4.756-4.161c-.283-.248-.705-.248-.988 0L1.5 15.595V3.002c0-.829.672-1.501 1.501-1.501h9.4l-.031.057-.01.018-.059.113-.013.027-.047.104-.007.017c-.017.04-.032.08-.047.12l-.01.03c-.014.036-.027.073-.038.11l-.005.015c-.013.042-.025.083-.036.125l-.008.031-.027.12-.003.01-.023.13-.005.033-.016.128v.006c-.005.045-.008.09-.01.135l-.003.033L12 3v12.596zm4.5-8.097h-3V3c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5z"
                                    transform="translate(-324 -622) translate(12 622) translate(312) translate(3 3)"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        fill="rgba(40, 44, 63, 1)"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <g fill="rgba(40, 44, 63, 1)" fill-rule="nonzero">
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M14.971 0c1.595 0 2.899 1.246 2.99 2.818l.005.176v5.24c0 .379-.282.692-.647.742l-.102.006h-3.743v8.234c0 .608-.675.948-1.158.627l-.083-.063-5.495-4.809-5.496 4.809c-.457.4-1.158.115-1.234-.46L0 17.217V2.996C0 1.4 1.248.096 2.82.006L2.995 0h11.975zm0 1.497c-.826 0-1.497.67-1.497 1.497v4.491h2.995v-4.49c0-.828-.67-1.498-1.497-1.498z"
                                    transform="translate(-324 -664) translate(12 664) translate(312) translate(3 3)"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    )}
                  </Box>
                </Box>
                <Box className={styles.postCaptionWithHashtags}>
                  <span className={styles.postCaption}>
                    {parse(
                      item.props.contentProps.text.replaceAll("myntra", "max")
                    )}
                  </span>
                </Box>
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}
