const data = {
    "feed": {
        "screen": {
        "elementId": "ListTemplate",
        "analyticsHandler": "FeedAnalyticsHandler",
        "next": {
            "requestObject": {
            "requestType": "POST",
            "path": "/feed",
            "requestBody": {
                "idsPerPage": 100,
                "nextIds": [
                117041,
                116771,
                117201,
                116403,
                117113,
                117714,
                116654,
                117017,
                117371,
                117335,
                116540,
                116782,
                115960,
                116747,
                117480,
                117327,
                117632,
                117117,
                116986,
                117298,
                117025,
                117065,
                114848,
                117120,
                116243,
                117609,
                116828,
                116668,
                117338,
                116597,
                116750,
                117614,
                116404,
                116553,
                117708,
                117681,
                116662,
                113975,
                117147,
                117066,
                115610,
                117660,
                117805,
                116220,
                114081,
                117364,
                116898,
                116461,
                117038,
                116624,
                117659,
                116743,
                117281,
                116797,
                116387,
                117111,
                116523,
                117059,
                117376,
                117070,
                117706,
                117063,
                116961,
                109746,
                117648,
                116821,
                116660,
                117694,
                115863,
                117634,
                116571,
                117055,
                117642,
                117586,
                117035,
                116749,
                117122,
                117044,
                117530,
                116796,
                117553,
                116748,
                116716,
                116790,
                117112,
                116764,
                117638,
                117125
                ],
                "feedType": "PAGINATION",
                "gender": "All",
                "ids": [
                117399,
                117674,
                117664,
                116563,
                85765,
                115402
                ],
                "page": 2,
                "pageNumber": 1,
                "recoType": "AUTHOR",
                "type": "womenmakeup"
            }
            }
        },
        "templateMeta": {
            "batchRequestAPIConfigs": {
            "STUDIO-POST": {
                "requireLogin": true,
                "apiEndpoint": "/v1/mynsta/markPostsAsSeen"
            }
            },
            "config": {
            "refresh": {
                "staleContentHandler": {
                "rendition": "staleContentIndicator",
                "autoRefreshLimit": 7200,
                "renditionLimit": 300
                }
            }
            },
            "staleContentIndicator": {
            "props": {
                "action": {
                "type": "refresh"
                },
                "extraParams": {
                "layout": {
                    "position": "TopCenter"
                }
                },
                "elementId": "PillView",
                "mapperId": "BoldBlackPill",
                "text": "New Posts"
            },
            "type": "SINGLE_PILL",
            "elementId": "SimpleCard"
            },
            "genderFilters": false,
            "scrollToTopOnRefresh": true,
            "enableRefreshOnList": true
        },
        "headerMeta": {
            "colorTheme": "",
            "bgColor": ""
        },
        "name": "Mynsta User Feed"
        },
        "components": [
        {
            "type": "LiveVideoDiscovery",
            "elementId": "ItemsHorizontalList",
            "props": {
            "titleProps": {
                "leftText": "Extra Discounts On Sale Prices",
                "rightText": "VIEW ALL",
                "elementId": "TitleView",
                "mapperId": "StudioLiveActionableTitleMapper"
            },
            "contentProps": {
                "elementId": "MediaInfoCardWithTimerLabel",
                "itemMapperId": "StudioLiveDiscoveryItem",
                "items": [
                {
                    "eventId": "645a1478b2db093fd18140e6",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/8c5fa220-45c6-4928-90ed-f4accfb426201683628773195-jkkkk.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Brut",
                    "description": "Summer Must Have Deos At Extra 5% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683869400,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1511f6765b5e3ea61a39",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/6382c2ea-eee5-45ff-a1db-a2c18d88c72c1683629122987-ffsfs.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Libas",
                    "description": "Graceful silk suits  At Extra 15% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683873000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1586b2db093fd18140f5",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/72e90b98-bf2a-4e80-8ef3-e6de0b599e011683629234989-sfasf.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Benetton India",
                    "description": "Summer Wear Specials",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683876600,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a16f1b2db093fd1814107",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/1d9db228-8ee5-4e0a-9385-ab9e58ac59ad1683629456212-D1D00BD4-50C7-43D2-8BF0-50E4C0C1002E.jpg",
                    "aspectRatio": 0.8,
                    "resolution": "1440X1800"
                    },
                    "title": "Juhi Chawla",
                    "description": "Super affordable summer ethnic fits At Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683883800,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a182287b9ff183bded778",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/d298ab9b-f9ce-4117-a2a7-294ede73a1391683629944524-image00001---Craig-Anto-Dsouza.jpeg",
                    "aspectRatio": 0.75,
                    "resolution": "3859X5145"
                    },
                    "title": "Asmita Kaushik",
                    "description": "Everyday Brezzy Kurta Sets At  Extra 15% off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683887400,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1985b2db093fd181411a",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/556dda6a-2a5f-4b5e-8f4c-566f926c8a071683629971337-IMG_4102.JPG",
                    "aspectRatio": 0.8,
                    "resolution": "4000X5000"
                    },
                    "title": "Prabh Singh",
                    "description": "Affordable Classy Fashion At Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683889200,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1a42f6765b5e3ea61a70",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/c3457381-ecb9-4128-b0c4-be1d8ac420a91683629984394-fgt.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Arata",
                    "description": "Gorgeous Healthy Curls Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683891000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1ab787b9ff183bded78a",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/059fe471-bfdb-4232-b940-eb0e9a14eeef1683629998718-reheth.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Titan",
                    "description": "New launch Watches",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683894600,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645c74c187b9ff183bdee362",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/11/e279e68c-2721-4a0a-9399-80826ce2dc5c1683792371092-ghjj.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "NYX Professional Makeup",
                    "description": "Make -up Must Haves ",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683898200,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "6458e449f6765b5e3ea612ad",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/a5aca0d1-ce11-41e2-8779-3376724a7c1c1683617161471-jkkkkkk.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "H&M",
                    "description": "H&M Mugler Collab - Style Reveal",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683900000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                }
                ]
            }
            },
            "componentUId": "188d56a1-ba74-49b0-b9db-a18adcdfc98f",
            "mapperId": "WhiteBackgroundMapper"
        },
        {
            "type": "CAROUSEL_BANNER",
            "props": {
            "titleProps": {
                "elementId": "TitleSubtitleView",
                "mapperId": "LeftAlignedTitle",
                "title": "Guide to Influencers' Most Coveted Looks"
            },
            "contentProps": {
                "refId": "19:63249ccbe0696230f7d1830b",
                "bannerRatioToScreen": 0.2,
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/7fb4ecda-a5da-41a2-b4e7-79efe951da4f1683638230167-10MAY23-MSSD-NAV.gif",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/HASHTAG/menfashion/%23menfashion"
                    },
                    "id": "19:a3ed769c-dffa-4a04-a195-4718aaec4594"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/09bd505a-368f-4cba-8a3a-d7f269ed87291683638230269-10MAY23-SB-Casual-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b84/Men%20Casual"
                    },
                    "id": "19:7a213252-3e51-4744-ad03-c1915477d335"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/5c42b90e-4974-4cd1-b809-2ae23b5df1c51683638230663-10MAY23-SB-Party-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b8f/Men%20Party"
                    },
                    "id": "19:8286e703-a8e5-4fb3-a654-18b978975bf3"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/ec89140e-2867-4f13-8510-d52622ce8d001683638230379-10MAY23-SB-Formal-Wear--Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b88/Men%20Formal"
                    },
                    "id": "19:34dbf04b-c4e1-4dd7-8a81-e43c8bc40b48"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/82572d81-1568-4997-9f5c-441e4ce24e0a1683638230355-10MAY23-SB-Ethnic-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b86/Men%20Ethnic"
                    },
                    "id": "19:5952209e-a89f-434f-89df-921960adf5cc"
                }
                ],
                "position": 0,
                "meta": {
                "title": "Guide to Influencers' Most Coveted Looks",
                "name": "carousel-banner",
                "contentType": "List",
                "publisherTag": "ads,List",
                "source": "ads"
                },
                "elementId": "StudioMediaPager"
            }
            },
            "componentUId": "c6508e10-7f2c-4fc6-b8f0-12373bc31001"
        },
        {
            "type": "CAROUSEL_BANNER",
            "props": {
            "titleProps": {
                "elementId": "TitleSubtitleView",
                "mapperId": "LeftAlignedTitle",
                "title": "Exciting Offers On Curated Brands"
            },
            "contentProps": {
                "position": 1,
                "meta": {
                "title": "Exciting Offers On Curated Brands",
                "name": "carousel-banner",
                "contentType": "List",
                "publisherTag": "ads,List",
                "source": "ads"
                },
                "elementId": "StudioMediaPager",
                "refId": "19:62ce5f1c7350cb4f088bf205",
                "bannerRatioToScreen": 0.7,
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/5ac0300f-4f68-4d7c-b801-dfe5c487cb571683638230621-10MAY23-SB-m_H-Golld-Men-Brand-2.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in/Mast-%26-Harbour?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:794944d6-7422-46fb-965e-8e8de1801d53"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/d052d828-64ff-421d-93ec-ddc2b5b734be1683638230401-10MAY23-SB-HOP-Gold-Men-Brand-4.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/24981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH/House-of-Pataudi?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F24981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%2224981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:d2308b8f-bd06-47ee-a99b-6db71d4b3d31"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/6dcb1f5e-d2e3-4ffa-adb9-d3ecd4debd2d1683638230178-10MAY23-SB-Anouk-Gold-Men-Brand-1.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/41df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb/Anouk?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F41df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%2241df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:f97465c1-9e4e-4e67-958b-5154865d3cd0"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/844bc5f0-2e0a-45db-8ab6-a0381499b15f1683638230727-10MAY23-SB-Wrogn-Gold-Men-Brand-3.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/05c675ef.a228.4dbd.af6d.7d477d1543e0oqsl9K7kcT/Wrogn?"
                    },
                    "id": "19:23375120-39ae-4047-b133-91e94265f618"
                }
                ]
            }
            },
            "componentUId": "27b6b369-bf28-43b8-9321-1ec36c617f06"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "isBookmarked": false,
                "text": "Dress up your mind, and you’ll be able to make all sorts of fashion statements. <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=mencasualwear>mencasualwear</Hashtag> <Hashtag id=mentshirts>mentshirts</Hashtag> <Hashtag id=mentrousers>mentrousers</Hashtag> <Hashtag id=wrong>wrong</Hashtag> <Hashtag id=taavi>taavi</Hashtag> <Hashtag id=hnm>hnm</Hashtag> <Hashtag id=single>single</Hashtag> <Hashtag id=mangoman>mangoman</Hashtag> <Hashtag id=casualshirt>casualshirt</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Typography-Printed-Drop-Shoulder-Sleeves-Slim-Fit-T-shirt/16992116/buy",
                    "productId": 16992116,
                    "product": "SINGLE Men White Typography Printed Drop-Shoulder Sleeves Slim Fit T-shirt",
                    "productName": "SINGLE Men White Typography Printed Drop-Shoulder Sleeves Slim Fit T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992116/2022/3/9/c72e5ee9-82a4-4723-968e-8f953648021e1646823890351NauticaMenWhiteNavyBlueStripedPoloCollarPureCottonT-shirtTsh1.jpg",
                    "mrp": 999,
                    "price": 399,
                    "discount": 600,
                    "brand": "SINGLE",
                    "rating": 3.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/HM/HM-Men-Regular-Fit-Linen-Blend-Trousers/21881958/buy",
                    "productId": 21881958,
                    "product": "H&M Men Regular Fit Linen-Blend Trousers",
                    "productName": "H&M Men Regular Fit Linen-Blend Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21881958/2023/2/7/9cd1afff-f255-4baa-a97a-8ef36e026f4e1675776393525RegularFitLinen-blendtrousers1.jpg",
                    "mrp": 2299,
                    "price": 0,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/HM/HM-Men-Loose-Fit-Cotton-joggers/20412582/buy",
                    "productId": 20412582,
                    "product": "H&M Men Loose Fit Cotton joggers",
                    "productName": "H&M Men Loose Fit Cotton joggers",
                    "searchImage": "http://assets.myntassets.com/assets/images/20412582/2022/10/15/4388d9e0-11a3-4e8d-9d0d-6aea0f0f5ec51665817489260LooseFitCottonjoggers3.jpg",
                    "mrp": 2299,
                    "price": 0,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4.1,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/WROGN/WROGN-Men-White-Slim-Fit-Chinos/12222386/buy",
                    "productId": 12222386,
                    "product": "WROGN Men White Slim Fit Chinos",
                    "productName": "WROGN Men White Slim Fit Chinos",
                    "searchImage": "http://assets.myntassets.com/assets/images/12222386/2022/4/11/f635d852-2afa-4713-99b3-642c540b6b631649672135945WROGNMenWhiteSlimFitChinos1.jpg",
                    "mrp": 2599,
                    "price": 1689,
                    "discount": 910,
                    "brand": "WROGN",
                    "rating": 4.2,
                    "displayDiscountLabel": "(35% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Taavi/Taavi-Men-Indigo-Printed-Pure-Cotton-Casual-Shirt/19318978/buy",
                    "productId": 19318978,
                    "product": "Taavi Men Indigo Printed Pure Cotton Casual Shirt",
                    "productName": "Taavi Men Indigo Printed Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19318978/2022/9/29/02a4ee5a-c8e4-4632-936a-fe7c6946c6dd1664441830265-Taavi-Men-Shirts-8421664441829874-1.jpg",
                    "mrp": 2499,
                    "price": 999,
                    "discount": 1500,
                    "brand": "Taavi",
                    "rating": 4.5,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/MANGO-MAN/MANGO-MAN-Sustainable-Cotton-Slim-Fit-Casual-Shirt/21938374/buy",
                    "productId": 21938374,
                    "product": "MANGO MAN Sustainable Cotton Slim Fit Casual Shirt",
                    "productName": "MANGO MAN Sustainable Cotton Slim Fit Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21938374/2023/3/6/3b4f4b89-bdd6-45b4-b344-05ecb6da488a1678094080766ShirtsMANGOWomenShirtsMANGOWomenDressesMANGOWomenTrousersMAN1.jpg",
                    "mrp": 4790,
                    "price": 3113,
                    "discount": 1677,
                    "brand": "MANGO MAN",
                    "rating": 3.4,
                    "displayDiscountLabel": "(35% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Printed-Slim-Fit-Round-Neck-Pure-Cotton-T-shirt/13975292/buy",
                    "productId": 13975292,
                    "product": "SINGLE Men White Printed Slim Fit Round Neck Pure Cotton T-shirt",
                    "productName": "SINGLE Men White Printed Slim Fit Round Neck Pure Cotton T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/13975292/2021/6/1/d02bc1d0-c022-42b8-84e4-75d96cf798141622542024047-SINGLE-Men-White-Printed-Slim-Fit-Round-Neck-T-shirt-1521622-1.jpg",
                    "mrp": 899,
                    "price": 449,
                    "discount": 450,
                    "brand": "SINGLE",
                    "rating": 0,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/EVERDION/EVERDION-Men-White-Printed-Drop-Shoulder-Sleeves-Bio-Finish-Loose-T-shirt/19998220/buy",
                    "productId": 19998220,
                    "product": "EVERDION Men White Printed Drop-Shoulder Sleeves Bio Finish Loose T-shirt",
                    "productName": "EVERDION Men White Printed Drop-Shoulder Sleeves Bio Finish Loose T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19998220/2022/9/15/c5f9f5a1-b400-4106-8cbd-4df24c872cd31663232983253EVERDIONMenWhitePrintedMonochromeBioFinishLooseT-shirt1.jpg",
                    "mrp": 1499,
                    "price": 419,
                    "discount": 1080,
                    "brand": "EVERDION",
                    "rating": 0,
                    "displayDiscountLabel": "(72% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Printed-Drop-Shoulder-Sleeves-Pure-Cotton-T-shirt/16992146/buy",
                    "productId": 16992146,
                    "product": "SINGLE Men White Printed Drop-Shoulder Sleeves Pure Cotton T-shirt",
                    "productName": "SINGLE Men White Printed Drop-Shoulder Sleeves Pure Cotton T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992146/2022/3/9/e2abbfc2-86af-45f5-9691-87666f8fcadd1646820961480-SINGLE-Men-Tshirts-2631646820960955-1.jpg",
                    "mrp": 999,
                    "price": 399,
                    "discount": 600,
                    "brand": "SINGLE",
                    "rating": 3.7,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White--Navy-Blue-Typography-Printed-Pure-Cotton-Slim-Fit-T-shirt/16992132/buy",
                    "productId": 16992132,
                    "product": "SINGLE Men White & Navy Blue Typography Printed Pure Cotton Slim Fit T-shirt",
                    "productName": "SINGLE Men White & Navy Blue Typography Printed Pure Cotton Slim Fit T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992132/2022/5/19/efb3c80c-c242-4ae5-a93c-cb08341070111652962995708-SINGLE-Men-Tshirts-8281652962995262-1.jpg",
                    "mrp": 799,
                    "price": 319,
                    "discount": 480,
                    "brand": "SINGLE",
                    "rating": 4,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116628/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_VIDEO",
                "isLiked": "NONE",
                "likeCount": 1,
                "products": [
                16992116,
                21881958,
                20412582,
                12222386,
                19318978,
                21938374,
                13975292,
                19998220,
                16992146,
                16992132,
                21869836,
                21681888,
                20021356,
                15193444,
                12083876,
                17575790,
                20163682,
                18298408,
                22150206,
                17641898,
                20448958,
                19737648,
                19318890,
                19318976,
                20841004,
                20530416
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/152ad048-4c1c-4438-91a2-3991673fcd771683417658814-DSC05920.jpg",
                    "resolution": "4672X6229",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "6456e7f6a6fb465328767bd2",
                    "url": "https://matrix.myntassets.com/general/6456e7f692b2aa2b8f176c41/master.m3u8"
                    }
                }
                ],
                "postId": 116628
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "1eb3aeb6.3b52.4789.89be.e2cada66fb960ztfklXgjF",
                "uniqueHandle": "varunverma",
                "name": "Varun Verma",
                "description": "Mr SupraNational '19 with a love for fashion, fitness and all things to do with jackets!",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/11/29/fd799e7d-c976-4ac0-954b-749890dce88f1669699035424-VarunP.jpg",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/11/29/5228c926-f43e-4b6c-8d60-0b505a9959d11669698879390-VarunC.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 241,
                "followers": 21534,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "bed8d0bf-ded2-4d9e-ba9e-94221a4261f2"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "d89101db.879e.4441.a948.9054fd18b7c8Uu9O8alg4A",
                "uniqueHandle": "Shraddharane",
                "name": "Shraddharane",
                "description": "Style is always in Fashion ✨",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/10/28/59aaa6c8-b94b-418b-9768-3c7f1d3260341666937026678-croppedImage-1666936918657.jpg",
                    "resolution": "463X463",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/10/28/88052e9b-baa0-4d5c-a790-5fab9f33fcb31666937037709-croppedImage-1666936928666.jpg",
                    "resolution": "4024X4471",
                    "aspectRatio": 0.9
                },
                "posts": 20,
                "followers": 62,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            },
            "contentProps": {
                "likeCount": 1,
                "text": "I promise I am not that basic 💗✨ <Hashtag id=notsobasicoutfit>notsobasicoutfit</Hashtag> <Hashtag id=myntrafwdfam>myntrafwdfam</Hashtag> <Hashtag id=myntrafwd>myntrafwd</Hashtag> <Hashtag id=myntrastyle>myntrastyle</Hashtag> <Hashtag id=myntrafashion>myntrafashion</Hashtag> <Hashtag id=mymyntralook>mymyntralook</Hashtag> <Hashtag id=ketch>ketch</Hashtag> <Hashtag id=coordsetsforwomen>coordsetsforwomen</Hashtag> <Hashtag id=coords>coords</Hashtag> <Hashtag id=myntrastylecastcrew>myntrastylecastcrew</Hashtag>",
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/7feffbfe-be5f-4953-b150-a9aecf3974fd1683382951917-InShot_20230506_193655257.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/903b9c49-9a00-4461-aca1-f5cfc3df32801683382951959-InShot_20230506_193601559.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/ca6630a4-8dfb-43d1-b71f-5df5efbd2f5f1683382951940-InShot_20230506_193638581.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116564/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_IMAGE",
                "postId": 116564,
                "isLiked": "NONE",
                "isBookmarked": false,
                "products": [
                21678266,
                22056820,
                20651052,
                21678274,
                21448468,
                20715686,
                21448470,
                21522338,
                19373436,
                19563294,
                21741618,
                20429310,
                21263318,
                21229646
                ],
                "productPills": [
                {
                    "landingPageUrl": "Co-Ords/KETCH/KETCH-Women-Floral-Printed-Shirt-with-Trousers/21678266/buy",
                    "productId": 21678266,
                    "product": "KETCH Women Floral Printed Shirt with Trousers",
                    "productName": "KETCH Women Floral Printed Shirt with Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21678266/2023/1/24/f665e10e-cd43-4f5e-8e10-1ae17ebfa7c71674559983890Co-Ords1.jpg",
                    "mrp": 1899,
                    "price": 759,
                    "discount": 1140,
                    "brand": "KETCH",
                    "rating": 4.4,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Athena/Athena-Women-Floral-Printed-Linen-Shirt-With-Trouser-Co-Ords-Set/22056820/buy",
                    "productId": 22056820,
                    "product": "Athena Women Floral Printed Linen Shirt With Trouser Co-Ords Set",
                    "productName": "Athena Women Floral Printed Linen Shirt With Trouser Co-Ords Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/22056820/2023/2/20/68c14c47-c3e5-41fd-9fd8-711e95abf4ad1676907840977AthenaLavenderlinenco-ordset1.jpg",
                    "mrp": 3295,
                    "price": 1812,
                    "discount": 1483,
                    "brand": "Athena",
                    "rating": 0,
                    "displayDiscountLabel": "(45% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/SHAYE/SHAYE-Women-Pink-Floral--Printed-Shirt--Trouser-Co-Ords/20651052/buy",
                    "productId": 20651052,
                    "product": "SHAYE Women Pink Floral  Printed Shirt & Trouser Co-Ords",
                    "productName": "SHAYE Women Pink Floral  Printed Shirt & Trouser Co-Ords",
                    "searchImage": "http://assets.myntassets.com/assets/images/20651052/2022/11/7/b337dfcc-4385-4d78-9e47-97d5fcea5f6a1667814613784ShayeCombinationofShirtandTrousersPrintedLongSleevesCasualCo5.jpg",
                    "mrp": 5999,
                    "price": 2699,
                    "discount": 3300,
                    "brand": "SHAYE",
                    "rating": 0,
                    "displayDiscountLabel": "(55% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/KETCH/KETCH-Women-Floral-Printed-Shirt-With-Trouser/21678274/buy",
                    "productId": 21678274,
                    "product": "KETCH Women Floral Printed Shirt With Trouser",
                    "productName": "KETCH Women Floral Printed Shirt With Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/21678274/2023/1/24/d0d688ce-58ac-4429-b26b-2afa31ac7f6e1674562424889AhegaoAnimePrintedCottonTankTopVest-SmallCo-OrdsKETCHWomen1.jpg",
                    "mrp": 1899,
                    "price": 759,
                    "discount": 1140,
                    "brand": "KETCH",
                    "rating": 4.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/PrettyPlus-by-Desinoorcom/PrettyPlus-by-Desinoorcom-Women-Plus-Size-Striped-Shirt-with-Trouser-Co-ord-Set/21448468/buy",
                    "productId": 21448468,
                    "product": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "productName": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21448468/2023/1/6/42f98066-59c2-45bc-af98-e769d10a0ebe1673014302759PlusSizeBeigeStripedCo-ordSet1.jpg",
                    "mrp": 5795,
                    "price": 1564,
                    "discount": 4231,
                    "brand": "PrettyPlus by Desinoor.com",
                    "rating": 0,
                    "displayDiscountLabel": "(73% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Kapraaha/Kapraaha-Women-White-Pure-Cotton-Relaxed-Fit-Shirt--Trouser-Co-Ord-Set/20715686/buy",
                    "productId": 20715686,
                    "product": "Kapraaha Women White Pure Cotton Relaxed-Fit Shirt & Trouser Co-Ord Set",
                    "productName": "Kapraaha Women White Pure Cotton Relaxed-Fit Shirt & Trouser Co-Ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/20715686/2022/11/11/3fb53bab-812a-4348-8484-0d989de9550b1668169427837WhiteEmbroideredCo-ordSetof21.jpg",
                    "mrp": 3820,
                    "price": 0,
                    "discount": 0,
                    "brand": "Kapraaha",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/PrettyPlus-by-Desinoorcom/PrettyPlus-by-Desinoorcom-Women-Plus-Size-Striped-Shirt-with-Trouser-Co-ord-Set/21448470/buy",
                    "productId": 21448470,
                    "product": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "productName": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21448470/2023/1/6/95642c91-9a28-44aa-b519-af3dddca7d671673014221296PlusSizeBlueStripedCo-ordSet1.jpg",
                    "mrp": 5795,
                    "price": 1564,
                    "discount": 4231,
                    "brand": "PrettyPlus by Desinoor.com",
                    "rating": 0,
                    "displayDiscountLabel": "(73% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Fashfun/Fashfun--Women-Shirt--Trouser-Co-ord-Set/21522338/buy",
                    "productId": 21522338,
                    "product": "Fashfun  Women Shirt & Trouser Co-ord Set",
                    "productName": "Fashfun  Women Shirt & Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21522338/2023/1/12/0b340840-07c1-4229-92e4-71f401a5b5d11673517702079Bluesolidcrepelooseshirtwithwaisttie-upbeltcollaredneckwithb1.jpg",
                    "mrp": 1999,
                    "price": 1059,
                    "discount": 940,
                    "brand": "Fashfun",
                    "rating": 3,
                    "displayDiscountLabel": "(47% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/ANI/ANI-Women-White--Black-Abstract-Print-Shirt-with-Trouser/19373436/buy",
                    "productId": 19373436,
                    "product": "ANI Women White & Black Abstract Print Shirt with Trouser",
                    "productName": "ANI Women White & Black Abstract Print Shirt with Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19373436/2022/8/26/bb625264-d9ab-4fb5-8b3f-283f01998e521661517036952ANIWomenWhiteBlackAbstractPrintShirtwithTrouser1.jpg",
                    "mrp": 4999,
                    "price": 1249,
                    "discount": 3750,
                    "brand": "ANI",
                    "rating": 0,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/iki-chic/iki-chic-Women-Green-Printed-Shirt--Trouser/19563294/buy",
                    "productId": 19563294,
                    "product": "iki chic Women Green Printed Shirt & Trouser",
                    "productName": "iki chic Women Green Printed Shirt & Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19563294/2022/8/19/581cd07c-bbbd-4237-bc83-0d27e903b6451660904481385ClothingSet1.jpg",
                    "mrp": 6299,
                    "price": 2015,
                    "discount": 4284,
                    "brand": "iki chic",
                    "rating": 0,
                    "displayDiscountLabel": "(68% OFF)",
                    "available": true
                }
                ]
            }
            },
            "componentUId": "e786113c-4881-4263-a4d6-ea27de33e4fc"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "elementId": "POST_VIDEO",
                "text": "A pair of cool blue trousers that you can easily take from a casual chic look to a semi-formal one. Which look do you like better? <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=bluetrousers>bluetrousers</Hashtag> <Hashtag id=womentrousers>womentrousers</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=bluewomen>bluewomen</Hashtag> <Hashtag id=tokyotalkies>tokyotalkies</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Flared-High-Rise-Pleated-Parallel-Trousers/15092134/buy",
                    "productId": 15092134,
                    "product": "Tokyo Talkies Women Blue Flared High-Rise Pleated Parallel Trousers",
                    "productName": "Tokyo Talkies Women Blue Flared High-Rise Pleated Parallel Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/15092134/2021/8/10/8bc431e7-a525-45b7-a6ca-5856cb49bc211628582461963TokyoTalkiesWomenBlueFlaredHigh-RisePleatedParallelTrousers1.jpg",
                    "mrp": 2049,
                    "price": 758,
                    "discount": 1291,
                    "brand": "Tokyo Talkies",
                    "rating": 4,
                    "displayDiscountLabel": "(63% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Roadster/The-Roadster-Lifestyle-Co-Women-Flared-Cargos-Trousers-With-Drawstring-Closure-/17398604/buy",
                    "productId": 17398604,
                    "product": "The Roadster Lifestyle Co. Women Flared Cargos Trousers With Drawstring Closure",
                    "productName": "The Roadster Lifestyle Co. Women Flared Cargos Trousers With Drawstring Closure",
                    "searchImage": "http://assets.myntassets.com/assets/images/17398604/2023/3/30/eff286b7-2887-4655-9ee2-4edfb68d17e31680157396787-Roadster-Women-Trousers-8281680157395983-1.jpg",
                    "mrp": 2999,
                    "price": 899,
                    "discount": 2100,
                    "brand": "Roadster",
                    "rating": 0,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/SASSAFRAS/SASSAFRAS-Women-Blue-Comfort-Flared-Easy-Wash-Trousers/19202762/buy",
                    "productId": 19202762,
                    "product": "SASSAFRAS Women Blue Comfort Flared Easy Wash Trousers",
                    "productName": "SASSAFRAS Women Blue Comfort Flared Easy Wash Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/19202762/2022/7/29/2a3c246d-c46a-4806-a00d-f19b1822740e1659096544668-SASSAFRAS-Women-Trousers-8511659096544082-1.jpg",
                    "mrp": 1799,
                    "price": 773,
                    "discount": 1026,
                    "brand": "SASSAFRAS",
                    "rating": 4.3,
                    "displayDiscountLabel": "(57% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/ether/Ether-Women-Blue-Washed-Denim-Flared-Trousers/1741898/buy",
                    "productId": 1741898,
                    "product": "Ether Women Blue Washed Denim Flared Trousers",
                    "productName": "Ether Women Blue Washed Denim Flared Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/1741898/2017/5/4/11493890793739-Ether-Women-Blue-Loose-Solid-Culottes-2601493890793449-1.jpg",
                    "mrp": 1999,
                    "price": 499,
                    "discount": 1500,
                    "brand": "ether",
                    "rating": 4.1,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Vero-Moda/Vero-Moda-Women-Blue-Solid-High-Rise-Trouser/19544984/buy",
                    "productId": 19544984,
                    "product": "Vero Moda Women Blue Solid High-Rise Trouser",
                    "productName": "Vero Moda Women Blue Solid High-Rise Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19544984/2022/8/18/d188f8ef-1480-4da2-8cf7-601c13ef98711660801494144VeroModaWomenBlueHigh-RiseTrousers1.jpg",
                    "mrp": 2299,
                    "price": 689,
                    "discount": 1610,
                    "brand": "Vero Moda",
                    "rating": 4.1,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Straight-Fit-Trousers/17162204/buy",
                    "productId": 17162204,
                    "product": "Tokyo Talkies Women Blue Straight Fit Trousers",
                    "productName": "Tokyo Talkies Women Blue Straight Fit Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/17162204/2022/2/15/f762e9b2-09fd-4572-b88a-3ea89f6340421644918404499TokyoTalkiesWomenBlueStraightFitTrousers1.jpg",
                    "mrp": 1449,
                    "price": 565,
                    "discount": 884,
                    "brand": "Tokyo Talkies",
                    "rating": 4.1,
                    "displayDiscountLabel": "(61% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Mast--Harbour/Mast--Harbour-Women-Chambray-Cargos-Trousers/21504532/buy",
                    "productId": 21504532,
                    "product": "Mast & Harbour Women Chambray Cargos Trousers",
                    "productName": "Mast & Harbour Women Chambray Cargos Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21504532/2023/2/8/1890b2e0-3e0b-4d80-ba1a-f2a9632485aa1675837099691-Mast--Harbour-Women-Blue-Chambray-Cargos-Trousers-3041675837-3.jpg",
                    "mrp": 2199,
                    "price": 879,
                    "discount": 1320,
                    "brand": "Mast & Harbour",
                    "rating": 4.1,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Vero-Moda/Vero-Moda-Women-Blue-High-Rise-Pleated-Crop-Trouser/19600470/buy",
                    "productId": 19600470,
                    "product": "Vero Moda Women Blue High-Rise Pleated Crop Trouser",
                    "productName": "Vero Moda Women Blue High-Rise Pleated Crop Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19600470/2022/8/22/b246ea5c-52f9-443f-bfd9-986631668c011661164052954Trousers1.jpg",
                    "mrp": 2799,
                    "price": 1259,
                    "discount": 1540,
                    "brand": "Vero Moda",
                    "rating": 4.5,
                    "displayDiscountLabel": "(55% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Flared-Trousers/15026848/buy",
                    "productId": 15026848,
                    "product": "Tokyo Talkies Women Blue Flared Trousers",
                    "productName": "Tokyo Talkies Women Blue Flared Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/15026848/2021/8/4/0f09489c-f2c0-401a-8b96-896846dd81991628076404331Trousers1.jpg",
                    "mrp": 1499,
                    "price": 524,
                    "discount": 975,
                    "brand": "Tokyo Talkies",
                    "rating": 3.8,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Mast--Harbour/Mast--Harbour-Women-Solid-Parallel-Trousers/21504504/buy",
                    "productId": 21504504,
                    "product": "Mast & Harbour Women Solid Parallel Trousers",
                    "productName": "Mast & Harbour Women Solid Parallel Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21504504/2023/2/9/35d4af80-94f2-4f7a-9004-756384e53ee21675943993352-Mast--Harbour-Women-Trousers-7031675943992566-4.jpg",
                    "mrp": 2199,
                    "price": 1099,
                    "discount": 1100,
                    "brand": "Mast & Harbour",
                    "rating": 4.2,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116766/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "postId": 116766,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 0,
                "products": [
                15092134,
                17398604,
                19202762,
                1741898,
                19544984,
                17162204,
                21504532,
                19600470,
                15026848,
                21504504,
                14136072,
                19871154,
                16233430,
                15221814,
                20466420,
                20811944,
                2039873,
                16233442,
                15136532,
                16699328,
                20735716,
                17787870
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/a657fdf3-3bf0-4638-822f-93d3a4d99f281683482549270-IMG_1030.jpg",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "6457e7464fe1226fb393a0e0",
                    "url": "https://matrix.myntassets.com/general/6457e746a6fb465328767bf9/master.m3u8"
                    }
                }
                ]
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "a3afdb7c.a6c3.445b.bdd9.2577f7132582eFnh37UTUs",
                "uniqueHandle": "outlanSrish",
                "name": "Srishti Nadhani",
                "description": "StyleSquad\nBlogger. Foodie. Traveller. Meme lover",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/a55edc64-0f6d-4c0b-ae4e-606be51018331649327764529-Srishti-Nadhani.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/9/8/1f726c1c-d81b-4bec-b079-3090da96ae341599554792832-croppedImage-1599554792184.jpg",
                    "resolution": "1198X1331",
                    "aspectRatio": 0.9
                },
                "posts": 473,
                "followers": 5986,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "daf0c607-35f4-44bf-b6b4-68533565e5e5"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "text": "Always a fan of brands that turn classic pieces into fresh, new styles with reimagined twists and knot details while raising the style quotient. <Hashtag id=womenshirts>womenshirts</Hashtag> <Hashtag id=mastandharbour>mastandharbour</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=whiteshirt>whiteshirt</Hashtag> <Hashtag id=solidswomen>solidswomen</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Shirts/Roadster/Roadster-Women-White-Regular-Fit-Casual-Shirt/18489356/buy",
                    "productId": 18489356,
                    "product": "Roadster Women White Regular Fit Casual Shirt",
                    "productName": "Roadster Women White Regular Fit Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/18489356/2022/6/10/b6a316f9-9a86-4189-9ae4-0ed77de383ac1654841690784-Roadster-Women-Shirts-9011654841690242-1.jpg",
                    "mrp": 1599,
                    "price": 799,
                    "discount": 800,
                    "brand": "Roadster",
                    "rating": 3.9,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Remanika/Remanika-Women-Comfort-Pure-Cotton-Casual-Shirt/21104880/buy",
                    "productId": 21104880,
                    "product": "Remanika Women Comfort Pure Cotton Casual Shirt",
                    "productName": "Remanika Women Comfort Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21104880/2022/12/7/e5a3e774-1577-44e4-b4aa-17f4b436d35f1670436504707RemanikaWomenWhiteComfortCasualShirt1.jpg",
                    "mrp": 2200,
                    "price": 1540,
                    "discount": 660,
                    "brand": "Remanika",
                    "rating": 0,
                    "displayDiscountLabel": "(30% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/The-Roadster-Lifestyle-Co-Pure-Cotton-Oversized-Shirt/21981930/buy",
                    "productId": 21981930,
                    "product": "The Roadster Lifestyle Co. Pure Cotton Oversized Shirt",
                    "productName": "The Roadster Lifestyle Co. Pure Cotton Oversized Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21981930/2023/3/1/7f5ceaf0-3682-4dd5-a424-afc777de12b91677659940118-Roadster-Women-Shirts-9591677659939590-1.jpg",
                    "mrp": 1499,
                    "price": 1499,
                    "discount": 0,
                    "brand": "Roadster",
                    "rating": 4.1,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/The-Roadster-Lifestyle-Co-Pure-Cotton-Waist-Tie-Up-Shirt/21981954/buy",
                    "productId": 21981954,
                    "product": "The Roadster Lifestyle Co. Pure Cotton Waist Tie-Up Shirt",
                    "productName": "The Roadster Lifestyle Co. Pure Cotton Waist Tie-Up Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21981954/2023/3/1/e64749c3-0e3f-48c8-bae4-a35b728e02991677656525842-Roadster-Women-Shirts-8221677656525242-1.jpg",
                    "mrp": 1899,
                    "price": 999,
                    "discount": 900,
                    "brand": "Roadster",
                    "rating": 0,
                    "displayDiscountLabel": "(Rs. 900 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Tokyo-Talkies/Tokyo-Talkies-Typography-Printed-Cotton-Casual-Shirt/22427538/buy",
                    "productId": 22427538,
                    "product": "Tokyo Talkies Typography Printed Cotton Casual Shirt",
                    "productName": "Tokyo Talkies Typography Printed Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/22427538/2023/3/19/3d2e0a8e-6b59-4433-bfa2-1d557a83cfe31679165971469TokyoTalkiesWomenWhiteOpaqueCasualShirt1.jpg",
                    "mrp": 1799,
                    "price": 467,
                    "discount": 1332,
                    "brand": "Tokyo Talkies",
                    "rating": 0,
                    "displayDiscountLabel": "(74% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/encore-by-INVICTUS/encore-by-INVICTUS-Women-White--Solid-Casual-Shirt/19086786/buy",
                    "productId": 19086786,
                    "product": "encore by INVICTUS Women White  Solid Casual Shirt",
                    "productName": "encore by INVICTUS Women White  Solid Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19086786/2022/9/2/fc1b50e8-c5ba-470f-84c4-58ceae321b031662094146756-encore-by-INVICTUS-Women-Shirts-5271662094146136-1.jpg",
                    "mrp": 1298,
                    "price": 389,
                    "discount": 909,
                    "brand": "encore by INVICTUS",
                    "rating": 4.1,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Tokyo-Talkies/Tokyo-Talkies-Women-White-Regular-Fit-Cotton-Casual-Shirt/17445980/buy",
                    "productId": 17445980,
                    "product": "Tokyo Talkies Women White Regular Fit Cotton Casual Shirt",
                    "productName": "Tokyo Talkies Women White Regular Fit Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/17445980/2022/3/9/9870152a-8717-4e25-a25f-d9e38bdef0751646819211725TokyoTalkiesWomenWhiteCasualShirt1.jpg",
                    "mrp": 1199,
                    "price": 419,
                    "discount": 780,
                    "brand": "Tokyo Talkies",
                    "rating": 4.3,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/Roadster-Women-White-Classic-Pure-Cotton-Casual-Shirt/18173280/buy",
                    "productId": 18173280,
                    "product": "Roadster Women White Classic Pure Cotton Casual Shirt",
                    "productName": "Roadster Women White Classic Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/18173280/2022/5/30/b877215b-9905-448b-947b-7e91b118d2dd1653895291676-Roadster-Womens-Casual-Shirt-9641653895291150-1.jpg",
                    "mrp": 1599,
                    "price": 799,
                    "discount": 800,
                    "brand": "Roadster",
                    "rating": 4.4,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Styli/Styli-Women-Tie-Up-Shirt-Style-Top/22192106/buy",
                    "productId": 22192106,
                    "product": "Styli Women Tie-Up Shirt Style Top",
                    "productName": "Styli Women Tie-Up Shirt Style Top",
                    "searchImage": "http://assets.myntassets.com/assets/images/22192106/2023/3/2/b7d5c625-f0ac-471a-b616-d621da608e8a1677746571700StyliWomenWhiteShirt1.jpg",
                    "mrp": 849,
                    "price": 721,
                    "discount": 128,
                    "brand": "Styli",
                    "rating": 0,
                    "displayDiscountLabel": "(15% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/HERENOW/HERENOW-Women-White-Casual-Button-Shirt/20797684/buy",
                    "productId": 20797684,
                    "product": "HERE&NOW Women White Casual Button Shirt",
                    "productName": "HERE&NOW Women White Casual Button Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/20797684/2022/11/17/77ee5d88-b63a-425e-9a2f-b128a5831d9d1668698720512Shirts1.jpg",
                    "mrp": 2490,
                    "price": 871,
                    "discount": 1619,
                    "brand": "HERE&NOW",
                    "rating": 0,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                }
                ],
                "postId": 117668,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 1,
                "elementId": "POST_IMAGE",
                "products": [
                21258348,
                18489356,
                21104880,
                21981930,
                21981954,
                22427538,
                19086786,
                17445980,
                18173280,
                22192106,
                20797684,
                20168884,
                14077924,
                18173282,
                21751218,
                13398886,
                21559168,
                19494140,
                21728336,
                17608676,
                21881752
                ],
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/11/d4f5cd19-b2b8-412c-84ed-a843c403c0b21683785669870-croppedImage-1683785668169.jpg",
                    "resolution": "3648X4864",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/9ec1912d-dd9e-46b3-89dc-2ff67465aef21683728062717-R6A_7998.JPG",
                    "resolution": "3648X5472",
                    "aspectRatio": 0.67
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/8229e8a7-00cc-4df2-9c29-9b0fed54e7351683728062740-R6A_8006.JPG",
                    "resolution": "3648X5472",
                    "aspectRatio": 0.67
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/117668/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                }
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "9de977f3.5da4.4398.9cba.86fc95dd1a2ewB3wPmf1Id",
                "uniqueHandle": "aswathibalakrishnann",
                "name": "Aswathi Balakrishnan",
                "description": "StyleSquad\nCivil engineer turned fashion and lifestyle influencer with an interest in beauty",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/55c132aa-a3ba-493c-8155-27351cc9c05d1649325063248-Mayur-Saroj-Rajput.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/3/28/07939544-6d8d-47a1-a9ee-b125dd83e28a1585387171845-croppedImage-1585387542461.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 428,
                "followers": 5894,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "a06de1ba-454d-42a0-bca1-0e50a5f294ab"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "27e14527.a17d.4c41.861a.4f7152f9c0dd35MXBkbHV5",
                "uniqueHandle": "nupurmunot",
                "name": "Nupur Munot",
                "description": "StyleSquad\nHere to have some fun with fashion & beauty! Follow for loads of cool tips and tricks.",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/4343d748-299a-45da-921b-9a9528b2fb681649327982959-Nupur-Munot.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/2/24/00240a06-b9ca-4be2-962c-cc6eb3206e941582537580949-croppedImage.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 553,
                "followers": 9101,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            },
            "contentProps": {
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/8117bf8b-b450-47d3-af49-fa14c691a2351683739611641-IMG_2023_05_03-9_50_36_8340-am_AE8F3DD7.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/89da5a6f-81e1-4c36-825c-1ad1d2900cba1683739611593-IMG_2023_05_03-9_50_32_5220-am_53E49946.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/f9d1ed74-b5ee-4baa-86f1-20f378a4ebc31683739611685-IMG_2023_05_03-9_50_48_6230-am_F67466CD.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/44e0e10f-53e2-4b73-aa63-b8a536dba4721683739611731-IMG_2023_05_03-9_50_52_9880-am_8C181137.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/117701/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "postId": 117701,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 2,
                "text": "When your outfit is a work of art! This dhoti set look is everything! 🦋🌼 <Hashtag id=dhotiset>dhotiset</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womenfusionwear>womenfusionwear</Hashtag> <Hashtag id=womenethnicwear>womenethnicwear</Hashtag> <Hashtag id=womenkurtasets>womenkurtasets</Hashtag> <Hashtag id=sangria>sangria</Hashtag> <Hashtag id=womenfootwear>womenfootwear</Hashtag> <Hashtag id=tokyotalkies>tokyotalkies</Hashtag> <Hashtag id=tealwomen>tealwomen</Hashtag> <Hashtag id=sangriawomen>sangriawomen</Hashtag>",
                "products": [
                20497918,
                20500656,
                19268072,
                22402536,
                22402522,
                19226802,
                22856818,
                13830404,
                12134770,
                7751844,
                18602782,
                13830384,
                19964322,
                14550232,
                20500648,
                14550230,
                19964342,
                20076954,
                19964358,
                16682316,
                20572086,
                20500660
                ],
                "elementId": "POST_IMAGE",
                "productPills": [
                {
                    "landingPageUrl": "Kurta-Sets/Sangria/Sangria-Printed-Shoulder-Straps-A-Line-Kurti-with-Dhoti-Pants/20497918/buy",
                    "productId": 20497918,
                    "product": "Sangria Printed Shoulder Straps A-Line Kurti with Dhoti Pants",
                    "productName": "Sangria Printed Shoulder Straps A-Line Kurti with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/20497918/2023/2/2/de3898cf-d457-460f-bd6e-457af0d0adad1675315292659-Sangria-Women-Kurta-Sets-9411675315291833-1.jpg",
                    "mrp": 3799,
                    "price": 949,
                    "discount": 2850,
                    "brand": "Sangria",
                    "rating": 0,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dhotis/Shae-by-SASSAFRAS/Shae-by-SASSAFRAS-Women-Olive-Green-Embroidered-Mirror-Work-Dhoti-Pants/19268072/buy",
                    "productId": 19268072,
                    "product": "Shae by SASSAFRAS Women Olive Green Embroidered Mirror Work Dhoti Pants",
                    "productName": "Shae by SASSAFRAS Women Olive Green Embroidered Mirror Work Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/19268072/2022/8/1/02098b38-da4f-4dc9-bd85-bcb26809c1991659360230053-Shae-by-SASSAFRAS-Women-Trousers-5701659360229536-1.jpg",
                    "mrp": 2199,
                    "price": 879,
                    "discount": 1320,
                    "brand": "Shae by SASSAFRAS",
                    "rating": 3.6,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Label-Shaurya-Sanadhya/Label-Shaurya-Sanadhya-Ethnic-Motifs-Embroidered-Sequined-Kurta-with-Dhoti-Pants--Dupatta/22402536/buy",
                    "productId": 22402536,
                    "product": "Label Shaurya Sanadhya Ethnic Motifs Embroidered Sequined Kurta with Dhoti Pants & Dupatta",
                    "productName": "Label Shaurya Sanadhya Ethnic Motifs Embroidered Sequined Kurta with Dhoti Pants & Dupatta",
                    "searchImage": "http://assets.myntassets.com/assets/images/22402536/2023/3/18/fa80b127-827e-499e-8feb-f2a3d009c7bf1679146296013MauveDhotiSet1.jpg",
                    "mrp": 5599,
                    "price": 0,
                    "discount": 0,
                    "brand": "Label Shaurya Sanadhya",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Label-Shaurya-Sanadhya/Label-Shaurya-Sanadhya-Embroidered-Zari-Kurta-with-Dhoti-Pants--Dupatta/22402522/buy",
                    "productId": 22402522,
                    "product": "Label Shaurya Sanadhya Embroidered Zari Kurta with Dhoti Pants & Dupatta",
                    "productName": "Label Shaurya Sanadhya Embroidered Zari Kurta with Dhoti Pants & Dupatta",
                    "searchImage": "http://assets.myntassets.com/assets/images/22402522/2023/3/18/32ab21f2-3887-48f4-8863-2e8b7de3c0901679146590932PeachAndPistaDhotiSet1.jpg",
                    "mrp": 5650,
                    "price": 0,
                    "discount": 0,
                    "brand": "Label Shaurya Sanadhya",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Vishudh/Vishudh-Women-Green-Solid-Kaftan-Kurta-With-Printed-Dhoti-Pants/19226802/buy",
                    "productId": 19226802,
                    "product": "Vishudh Women Green Solid Kaftan Kurta With Printed Dhoti Pants",
                    "productName": "Vishudh Women Green Solid Kaftan Kurta With Printed Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/19226802/2022/7/22/ec75b6ce-6f0e-41a0-9850-1f45b40fd8c81658501214715KurtaSets1.jpg",
                    "mrp": 3299,
                    "price": 1249,
                    "discount": 2050,
                    "brand": "Vishudh",
                    "rating": 3.8,
                    "displayDiscountLabel": "(Rs. 2050 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/AKKRITI-BY-PANTALOONS/AKKRITI-BY-PANTALOONS-Geometric-Printed-Pleated-Sequinned-Kurti-With-Dhoti-Pants/22856818/buy",
                    "productId": 22856818,
                    "product": "AKKRITI BY PANTALOONS Geometric Printed Pleated Sequinned Kurti With Dhoti Pants",
                    "productName": "AKKRITI BY PANTALOONS Geometric Printed Pleated Sequinned Kurti With Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/22856818/2023/4/21/c3141e5f-8f74-43a4-9244-6e74607330191682089069154KurtaSets1.jpg",
                    "mrp": 2499,
                    "price": 2499,
                    "discount": 0,
                    "brand": "AKKRITI BY PANTALOONS",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Sangria/Sangria-Women-Purple-Ethnic-Motifs-Printed-Pure-Cotton-Kurta-with-Dhoti-Pants--Stole/13830404/buy",
                    "productId": 13830404,
                    "product": "Sangria Women Purple Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants & Stole",
                    "productName": "Sangria Women Purple Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants & Stole",
                    "searchImage": "http://assets.myntassets.com/assets/images/13830404/2021/8/2/15a08a8e-7a1b-4c92-8b9a-112c6a1647981627899282552-Sangria-Women-Kurta-Sets-7451627899281839-1.jpg",
                    "mrp": 2999,
                    "price": 1199,
                    "discount": 1800,
                    "brand": "Sangria",
                    "rating": 4.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Off-White--Pink-Printed-Kurta-with-Dhoti-Pants/12134770/buy",
                    "productId": 12134770,
                    "product": "Anouk Women Off-White & Pink Printed Kurta with Dhoti Pants",
                    "productName": "Anouk Women Off-White & Pink Printed Kurta with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/12134770/2020/12/14/85089acf-4159-410c-b173-26d8ad7f9eeb1607950721245-Anouk-Women-Kurta-Sets-1761607950719320-6.jpg",
                    "mrp": 3399,
                    "price": 1189,
                    "discount": 2210,
                    "brand": "Anouk",
                    "rating": 3.9,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Indigo-Printed-Kurti-with-Dhoti-Pants/7751844/buy",
                    "productId": 7751844,
                    "product": "Anouk Women Indigo Printed Kurti with Dhoti Pants",
                    "productName": "Anouk Women Indigo Printed Kurti with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/7751844/2019/2/25/abf4e2d3-d7ce-4ae5-985b-b0332ad943241551081998835-Anouk-Women-Navy-Blue--Cream-Coloured-Printed-Kurti-with-Pat-1.jpg",
                    "mrp": 3299,
                    "price": 1154,
                    "discount": 2145,
                    "brand": "Anouk",
                    "rating": 4.2,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Green-Ethnic-Motifs-Printed-Pure-Cotton-Kurta-with-Dhoti-Pants/18602782/buy",
                    "productId": 18602782,
                    "product": "Anouk Women Green Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants",
                    "productName": "Anouk Women Green Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/18602782/2022/10/6/7e8ec6af-9580-49fe-a853-8c2ed86600ac1665057052682-Anouk-Women-Kurta-Sets-7541665057052165-1.jpg",
                    "mrp": 3999,
                    "price": 999,
                    "discount": 3000,
                    "brand": "Anouk",
                    "rating": 4.1,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                }
                ]
            }
            },
            "componentUId": "13929b96-9303-4eb7-83db-3ce3d9ce24b6"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "isBookmarked": false,
                "productPills": [
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Chic-Brown-Checked-Summer-Gingham-Dress/17295896/buy",
                    "productId": 17295896,
                    "product": "KASSUALLY Women Chic Brown Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Chic Brown Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295896/2022/3/9/bf471116-3a0d-46a6-8358-62244cab41a01646824948492-KASSUALLY-Women-Dresses-291646824947931-1.jpg",
                    "mrp": 2299,
                    "price": 827,
                    "discount": 1472,
                    "brand": "KASSUALLY",
                    "rating": 3.9,
                    "displayDiscountLabel": "(64% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Elegant-Purple-Checked-Summer-Gingham-Dress/17295902/buy",
                    "productId": 17295902,
                    "product": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295902/2022/3/9/7ab45c39-3167-4dc0-b6bc-7775948b3d841646824961559-KASSUALLY-Women-Dresses-9541646824960963-1.jpg",
                    "mrp": 2199,
                    "price": 1499,
                    "discount": 700,
                    "brand": "KASSUALLY",
                    "rating": 3.6,
                    "displayDiscountLabel": "(Rs. 700 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KETCH/KETCH-V-Neck-Checked-Pinafore-Dress/21234800/buy",
                    "productId": 21234800,
                    "product": "KETCH V-Neck Checked Pinafore Dress",
                    "productName": "KETCH V-Neck Checked Pinafore Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/21234800/2022/12/17/d724c052-7fbd-4c9c-80f7-90a725c5139d1671294599613Dresses1.jpg",
                    "mrp": 749,
                    "price": 399,
                    "discount": 350,
                    "brand": "KETCH",
                    "rating": 4.4,
                    "displayDiscountLabel": "(Rs. 350 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/HERENOW/HERENOW-Women-Brown--Black-Checked-Sheath-Dress/18367008/buy",
                    "productId": 18367008,
                    "product": "HERE&NOW Women Brown & Black Checked Sheath Dress",
                    "productName": "HERE&NOW Women Brown & Black Checked Sheath Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/18367008/2022/10/12/a175310c-7f00-42f7-9eae-0b6ac611a1d81665548479248-HERENOW-Women-Dresses-6301665548478710-1.jpg",
                    "mrp": 1699,
                    "price": 424,
                    "discount": 1275,
                    "brand": "HERE&NOW",
                    "rating": 4.2,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Trendyol/Trendyol-Brown--Off-White-Checked-A-Line-Dress/19311968/buy",
                    "productId": 19311968,
                    "product": "Trendyol Brown & Off White Checked A-Line Dress",
                    "productName": "Trendyol Brown & Off White Checked A-Line Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/19311968/2022/8/8/2fdbca4c-e805-4042-b30e-ee27a7b989351659934160477ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ1.jpg",
                    "mrp": 2299,
                    "price": 919,
                    "discount": 1380,
                    "brand": "Trendyol",
                    "rating": 0,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/HM/HM-Brown-Twill-Shirt-Dress/19892814/buy",
                    "productId": 19892814,
                    "product": "H&M Brown Twill Shirt Dress",
                    "productName": "H&M Brown Twill Shirt Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/19892814/2022/9/9/1dec670d-8cf1-4078-b007-68234628b4e11662742927147Twillshirtdress1.jpg",
                    "mrp": 2299,
                    "price": 2299,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4.3,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Style-Quotient/Style-Quotient-Purple--White-Checked-Dress/16847484/buy",
                    "productId": 16847484,
                    "product": "Style Quotient Purple & White Checked Dress",
                    "productName": "Style Quotient Purple & White Checked Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/16847484/2022/2/24/08929526-d78b-45b4-a119-b07942b4543f1645681890326-Style-Quotient-Women-Dresses-6301645681889859-1.jpg",
                    "mrp": 1999,
                    "price": 699,
                    "discount": 1300,
                    "brand": "Style Quotient",
                    "rating": 0,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/iki-chic/Iki-Chic-Women-Purple-Checked-Fril-Hem-Dress/15023214/buy",
                    "productId": 15023214,
                    "product": "Iki Chic Women Purple Checked Fril Hem Dress",
                    "productName": "Iki Chic Women Purple Checked Fril Hem Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/15023214/2021/8/4/a69d1f8f-aff0-4db7-b5d9-a6bef05bbd391628065613806ikichicPurpleDress1.jpg",
                    "mrp": 2599,
                    "price": 1065,
                    "discount": 1534,
                    "brand": "iki chic",
                    "rating": 0,
                    "displayDiscountLabel": "(59% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Elegant-Purple-Checked-Summer-Gingham-Dress/17295888/buy",
                    "productId": 17295888,
                    "product": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295888/2022/3/10/97ee9aed-daa4-4599-a147-a7f8b6d8c9971646888810351-KASSUALLY-Women-Dresses-2941646888809876-1.jpg",
                    "mrp": 2399,
                    "price": 1499,
                    "discount": 900,
                    "brand": "KASSUALLY",
                    "rating": 3.2,
                    "displayDiscountLabel": "(Rs. 900 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Trendyol/Trendyol-Women-Purple--White-Checked-A-Line-Dress/17800490/buy",
                    "productId": 17800490,
                    "product": "Trendyol Women Purple & White Checked A-Line Dress",
                    "productName": "Trendyol Women Purple & White Checked A-Line Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17800490/2022/5/2/36748e23-78b7-487b-8df7-4734a333454f1651470634161DressesTrendyolWomenDressesTrendyolWomen1.jpg",
                    "mrp": 2399,
                    "price": 959,
                    "discount": 1440,
                    "brand": "Trendyol",
                    "rating": 0,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/114647/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_VIDEO",
                "postId": 114647,
                "text": "dressed up for a party called summer <Hashtag id=myntrastlecastcrew>myntrastlecastcrew</Hashtag> <Hashtag id=kassually>kassually</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=dressesforwomen>dressesforwomen</Hashtag> <Hashtag id=springsummer>springsummer</Hashtag> <Hashtag id=dresses>dresses</Hashtag>",
                "products": [
                17295896,
                17295902,
                21234800,
                18367008,
                19311968,
                19892814,
                16847484,
                15023214,
                17295888,
                17800490
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/6c8b4bf4-ccb8-4734-8a01-f28596fd667d1683445089436-videoId-6457555106dcecb8eaebae45.png",
                    "resolution": "1080X1440",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "64575551a6fb465328767be2",
                    "url": "https://matrix.myntassets.com/general/6457555192b2aa2b8f176c52/master.m3u8"
                    }
                }
                ],
                "isLiked": "NONE",
                "likeCount": 0
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "8aa4319f.346a.465f.8e87.3907b984401dtdU7FseQN6",
                "uniqueHandle": "yogitadahiya14",
                "name": "yogitadahiya14",
                "description": "Fashion is just another accessory for someone with great style.",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/1/2/76b07ed8-6cde-4b96-b108-8ee1c2e20c9f1672644656804-croppedImage-1672644606300.jpg",
                    "resolution": "3024X3024",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/1/2/5e487d79-0580-4152-9900-f5861663d80a1672644686910-croppedImage-1672644636389.jpg",
                    "resolution": "3000X3333",
                    "aspectRatio": 0.9
                },
                "posts": 21,
                "followers": 52,
                "type": "INFLUENCER"
                },
                "subTitle": "2 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "38927864-38bc-4075-849b-d4e87a76d593"
        },
        {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "contentProps": {
                  "isBookmarked": false,
                  "likeCount": 1,
                  "products": [
                      20862258,
                      22898238,
                      22898116,
                      21312920,
                      21226558,
                      17061354,
                      21116382,
                      21313092,
                      19360896,
                      22898248,
                      18998874,
                      22076492,
                      19584978,
                      22898216,
                      16974546,
                      22076588,
                      20862424
                  ],
                  "elementId": "POST_IMAGE",
                  "isLiked": "NONE",
                  "productPills": [
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Women-Gold-Toned--White-Gold-Plated-Necklace/20862258/buy",
                          "productId": 20862258,
                          "product": "SOHI Women Gold-Toned & White Gold-Plated Necklace",
                          "productName": "SOHI Women Gold-Toned & White Gold-Plated Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/20862258/2022/11/22/944614c3-84b3-436a-9bb2-1719a4590d0d1669116751622SOHIGold-TonedWhiteGold-PlatedNecklace1.jpg",
                          "mrp": 1897,
                          "price": 455,
                          "discount": 1442,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(76% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Statement-Necklace/22898238/buy",
                          "productId": 22898238,
                          "product": "SOHI Gold-Plated Statement Necklace",
                          "productName": "SOHI Gold-Plated Statement Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/22898238/2023/4/25/29315a2e-7436-4f5b-894c-6292cd8460a01682438927297Multicolourdesignerstatementstonesnecklace1.jpg",
                          "mrp": 2925,
                          "price": 877,
                          "discount": 2048,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(70% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Stone-Studded-Necklace/22898116/buy",
                          "productId": 22898116,
                          "product": "SOHI Gold-Plated Stone Studded Necklace",
                          "productName": "SOHI Gold-Plated Stone Studded Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/22898116/2023/4/25/5dc75345-01d7-4430-bcba-7a1a2187bcb81682437428269Multicolourdesignerstatementstonesnecklace1.jpg",
                          "mrp": 2925,
                          "price": 819,
                          "discount": 2106,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(72% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Necklace/21312920/buy",
                          "productId": 21312920,
                          "product": "SOHI Gold-Plated Necklace",
                          "productName": "SOHI Gold-Plated Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/21312920/2022/12/26/8e504756-ffda-4465-930c-b62d7b135cd71672069282824SOHIGold-TonedGold-PlatedNecklace1.jpg",
                          "mrp": 1983,
                          "price": 416,
                          "discount": 1567,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(79% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Silver-Plated-Necklace/21226558/buy",
                          "productId": 21226558,
                          "product": "SOHI Silver-Plated Necklace",
                          "productName": "SOHI Silver-Plated Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/21226558/2022/12/17/0ca51384-57ba-4763-8624-a0566254cd191671267545003SOHISilver-TonedSilver-PlatedNecklace1.jpg",
                          "mrp": 1999,
                          "price": 499,
                          "discount": 1500,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(75% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Multicoloured-Beaded-Brass-Gold-Plated-Layered-Necklace/17061354/buy",
                          "productId": 17061354,
                          "product": "SOHI Multicoloured Beaded Brass Gold-Plated Layered Necklace",
                          "productName": "SOHI Multicoloured Beaded Brass Gold-Plated Layered Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/17061354/2022/2/5/7ff207b7-12fd-42f9-8ad4-3bc431b0c7dd1644049401110NecklaceandChains1.jpg",
                          "mrp": 1199,
                          "price": 335,
                          "discount": 864,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(72% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Necklace/21116382/buy",
                          "productId": 21116382,
                          "product": "SOHI Gold-Plated Necklace",
                          "productName": "SOHI Gold-Plated Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/21116382/2023/1/5/b0e48c8d-c379-466e-9cfb-c893b577a10c1672901414307SOHIGold-PlatedNecklace1.jpg",
                          "mrp": 1467,
                          "price": 572,
                          "discount": 895,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(61% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Minimal-Necklace/21313092/buy",
                          "productId": 21313092,
                          "product": "SOHI Gold-Plated Minimal Necklace",
                          "productName": "SOHI Gold-Plated Minimal Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/21313092/2022/12/27/d2d70013-8127-430d-99af-996b573042e61672085568260GoldPlatedDesignerCasualNecklaceForWomen1.jpg",
                          "mrp": 1816,
                          "price": 381,
                          "discount": 1435,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(79% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Women-Gold-Toned--White-Gold-Plated-Necklace/19360896/buy",
                          "productId": 19360896,
                          "product": "SOHI Women Gold-Toned & White Gold-Plated Necklace",
                          "productName": "SOHI Women Gold-Toned & White Gold-Plated Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/19360896/2022/8/3/53d765bc-afc1-4240-a6c6-d392b9012e5a1659465263530NecklaceandChains1.jpg",
                          "mrp": 2191,
                          "price": 547,
                          "discount": 1644,
                          "brand": "SOHI",
                          "rating": 4.2,
                          "displayDiscountLabel": "(75% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Necklace-and-Chains/SOHI/SOHI-Gold-Plated-Statement-Necklace/22898248/buy",
                          "productId": 22898248,
                          "product": "SOHI Gold-Plated Statement Necklace",
                          "productName": "SOHI Gold-Plated Statement Necklace",
                          "searchImage": "http://assets.myntassets.com/assets/images/22898248/2023/4/25/cb634a72-264f-4335-87b6-7b62a02fedb21682439172990Multicolourdesignerstatementstonesnecklace1.jpg",
                          "mrp": 4455,
                          "price": 1202,
                          "discount": 3253,
                          "brand": "SOHI",
                          "rating": 0,
                          "displayDiscountLabel": "(73% OFF)",
                          "available": true
                      }
                  ],
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/22/b55b598a-b528-4582-a239-0f2800f13a761684758111475-SS23_SOHNCK6942_3.jpg",
                          "resolution": "1200X1600",
                          "aspectRatio": 0.75
                      }
                  ],
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/120868/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "postId": 120868,
                  "text": "\"Seaside Serenity\" <Hashtag id=SeasideSerenity>SeasideSerenity</Hashtag> <Hashtag id=OceanicElegance>OceanicElegance</Hashtag> <Hashtag id=NaturesTreasures>NaturesTreasures</Hashtag> <Hashtag id=BeachsideBeauty>BeachsideBeauty</Hashtag> <Hashtag id=ShelliciousAdornments>ShelliciousAdornments</Hashtag> <Hashtag id=CoastalChic>CoastalChic</Hashtag> <Hashtag id=SeaInspiredSplendor>SeaInspiredSplendor</Hashtag> <Hashtag id=ShellsAndPearls>ShellsAndPearls</Hashtag> <Hashtag id=ExquisiteSeaJewels>ExquisiteSeaJewels</Hashtag> <Hashtag id=EmbraceTheShoreline>EmbraceTheShoreline</Hashtag> <Hashtag id=SeashellDelights>SeashellDelights</Hashtag> <Hashtag id=NauticalCharm>NauticalCharm</Hashtag> <Hashtag id=ShelltasticFashion>ShelltasticFashion</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag> <Hashtag id=necklaces>necklaces</Hashtag>"
              },
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "f9953f10.2cba.46c0.9667.e146b60791b1b2nq8AHWtC",
                      "uniqueHandle": "SOHI",
                      "name": "SOHI",
                      "description": "SOHI is a new-age jewellery brand for the women of now, with unique and trend-setting styles at attractive prices.",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/1/7/ebbf9fc5-1679-4cb8-859c-61245fa93d221673075542544-Sohi-post-90-days.png",
                          "resolution": "1080X1080",
                          "aspectRatio": 1
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/1/7/24b99da6-10a6-407e-819d-08fbf55f92b61673075549703-sw.jpg",
                          "resolution": "1080X1200",
                          "aspectRatio": 0.9
                      },
                      "posts": 30,
                      "followers": 55,
                      "type": "BRAND"
                  },
                  "subTitle": "4 hours ago",
                  "followDisplayType": "TEXT"
              }
          },
          "componentUId": "78e0b923-4dbe-4a9d-9832-6e7963db1076"
      },
      {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "contentProps": {
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/71533da5-c2c0-4182-a3b2-23e97f49501d1684601528648-DSC_2039.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/eaec3e74-3795-4879-b721-3194bfe3b9e11684601528679-DSC_2040.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/d89d7e97-0a8e-4d78-b4bf-57a5a1c3e77f1684601528705-DSC_2043.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/720c6483-22a7-4da9-981e-b4f96b638a671684601528729-DSC_2045.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/cdae4dd8-e629-4d56-bb8a-4f101c3aea0e1684601528755-DSC_2048.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/20/3b71c973-cf60-4e1a-a2d7-fae54beec6bc1684601528781-DSC_2050.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      }
                  ],
                  "elementId": "POST_IMAGE",
                  "postId": 116926,
                  "isLiked": "NONE",
                  "likeCount": 0,
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/116926/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "isBookmarked": false,
                  "text": "Men Pink Regular Dupion Silk Kurta with Churidar <Hashtag id=hangup>hangup</Hashtag> <Hashtag id=menbrands>menbrands</Hashtag> <Hashtag id=menkurtasets>menkurtasets</Hashtag> <Hashtag id=indianwear>indianwear</Hashtag> <Hashtag id=blazer>blazer</Hashtag>",
                  "products": [
                      15533150,
                      13877476,
                      20157464,
                      6766461,
                      20157572,
                      21546512,
                      20151236,
                      13243714,
                      14923918,
                      20578678,
                      21664168,
                      21664166,
                      21663970,
                      21566434,
                      21566356,
                      20157640,
                      20157344,
                      20151258,
                      20062822,
                      20062818,
                      16772376,
                      11820958,
                      6766497,
                      4922399,
                      2311458,
                      21664148,
                      21664134,
                      21664080,
                      21566392,
                      21566384,
                      21566368,
                      21546536,
                      20157634,
                      20157582,
                      20157480,
                      20157340,
                      20151278,
                      20151252,
                      20062860,
                      20062832,
                      20062814,
                      14172478,
                      14172470,
                      13241044,
                      6958797,
                      4922401,
                      6766422,
                      14937214,
                      2280400,
                      14172466,
                      20157486,
                      21664128,
                      21566414,
                      21546538,
                      20027346,
                      14172494,
                      6766437
                  ],
                  "productPills": [
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Regular-Dupion-Silk-Kurta-with-Churidar/15533150/buy",
                          "productId": 15533150,
                          "product": "Hangup Men Pink Regular Dupion Silk Kurta with Churidar",
                          "productName": "Hangup Men Pink Regular Dupion Silk Kurta with Churidar",
                          "searchImage": "http://assets.myntassets.com/assets/images/15533150/2021/9/21/98dee9cc-70a6-486b-8e32-87a7971c93131632227894288HangupMenPinkRegularDupionSilkKurtawithChuridar1.jpg",
                          "mrp": 7999,
                          "price": 1519,
                          "discount": 6480,
                          "brand": "Hangup",
                          "rating": 3.6,
                          "displayDiscountLabel": "(81% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink--White-Solid-Kurta-with-Pyjamas/13877476/buy",
                          "productId": 13877476,
                          "product": "Hangup Men Pink & White Solid Kurta with Pyjamas",
                          "productName": "Hangup Men Pink & White Solid Kurta with Pyjamas",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2021/3/15/be45d969-08d2-4630-b104-b2b16b256b5c1615827489934-1.jpg",
                          "mrp": 7299,
                          "price": 1824,
                          "discount": 5475,
                          "brand": "Hangup",
                          "rating": 3.1,
                          "displayDiscountLabel": "(75% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Printed-Cotton-Blend-Kurta-with-Pyjamas/20157464/buy",
                          "productId": 20157464,
                          "product": "Hangup Men Pink Printed Cotton Blend Kurta with Pyjamas",
                          "productName": "Hangup Men Pink Printed Cotton Blend Kurta with Pyjamas",
                          "searchImage": "http://assets.myntassets.com/assets/images/20157464/2022/9/24/2fe379a8-def3-403b-8c32-f86df8dce3821664019522179HangupMensCasualKurtaSetCottonBlendRegularFit1.jpg",
                          "mrp": 3499,
                          "price": 944,
                          "discount": 2555,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(73% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Solid-Kurta-with-Dhoti-Pants/6766461/buy",
                          "productId": 6766461,
                          "product": "Hangup Men Pink Solid Kurta with Dhoti Pants",
                          "productName": "Hangup Men Pink Solid Kurta with Dhoti Pants",
                          "searchImage": "http://assets.myntassets.com/assets/images/6766461/2018/6/18/a2b0d7d1-b7a3-48a5-bc76-fe2a9682311b1529323232297-hangup-3pics-mens-dhoti-kurta-sets-6021529323232134-1.jpg",
                          "mrp": 2999,
                          "price": 929,
                          "discount": 2070,
                          "brand": "Hangup",
                          "rating": 3.8,
                          "displayDiscountLabel": "(69% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Printed-Kurta-with-Pyjamas--With-Nehru-Jacket/20157572/buy",
                          "productId": 20157572,
                          "product": "Hangup Men Printed Kurta with Pyjamas & With Nehru Jacket",
                          "productName": "Hangup Men Printed Kurta with Pyjamas & With Nehru Jacket",
                          "searchImage": "http://assets.myntassets.com/assets/images/20157572/2022/9/24/a5dfce91-7078-4df2-a9d7-9f1bf2dde6da1664020267968HangupMensPartyKurtaSetCottonBlendRegularFit1.jpg",
                          "mrp": 6999,
                          "price": 1329,
                          "discount": 5670,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(81% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Kurta-with-Trousers--Printed-Nehru-Jacket/21546512/buy",
                          "productId": 21546512,
                          "product": "Hangup Men Kurta with Trousers & Printed Nehru Jacket",
                          "productName": "Hangup Men Kurta with Trousers & Printed Nehru Jacket",
                          "searchImage": "http://assets.myntassets.com/assets/images/21546512/2023/1/13/0e9949af-470e-44b7-8a41-ed40fbc0e8181673620861211hangupplusMenCasual3PcKurtaWaistcoatTrouserPolysterCottonReg1.jpg",
                          "mrp": 7299,
                          "price": 1459,
                          "discount": 5840,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(80% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Kurta-with-Pyjamas-With-Nehru-Jacket/20151236/buy",
                          "productId": 20151236,
                          "product": "Hangup Men Pink Kurta with Pyjamas With Nehru Jacket",
                          "productName": "Hangup Men Pink Kurta with Pyjamas With Nehru Jacket",
                          "searchImage": "http://assets.myntassets.com/assets/images/20151236/2022/9/24/a79c1883-082d-4275-9878-ebe044eabbc21663993395543HangupMensParty3PcsKurtaPajamaWaistcoatBlendRegular1.jpg",
                          "mrp": 7999,
                          "price": 1759,
                          "discount": 6240,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(78% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Printed-Kurta-with-Pyjamas/13243714/buy",
                          "productId": 13243714,
                          "product": "Hangup Men Pink Printed Kurta with Pyjamas",
                          "productName": "Hangup Men Pink Printed Kurta with Pyjamas",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2020/12/15/78fbc6d2-6ef6-4b79-8176-1b9eb22db8ef1608011476085-1.jpg",
                          "mrp": 7999,
                          "price": 1759,
                          "discount": 6240,
                          "brand": "Hangup",
                          "rating": 3.6,
                          "displayDiscountLabel": "(78% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Floral-Printed-Kurta-with-Pyjamas--Nehru-Jacket/14923918/buy",
                          "productId": 14923918,
                          "product": "Hangup Men Pink Floral Printed Kurta with Pyjamas & Nehru Jacket",
                          "productName": "Hangup Men Pink Floral Printed Kurta with Pyjamas & Nehru Jacket",
                          "searchImage": "http://assets.myntassets.com/assets/images/14923918/2021/7/24/9acdc2c2-7f16-4a04-9f81-e4946e221dd01627100935831HangupMenPinkFloralPrintedKurtawithPyjamas1.jpg",
                          "mrp": 6999,
                          "price": 1749,
                          "discount": 5250,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(75% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Kurta-Sets/Hangup/Hangup-Men-Pink-Solid-Pathani-Kurta-with-Pyjamas/20578678/buy",
                          "productId": 20578678,
                          "product": "Hangup Men Pink Solid Pathani Kurta with Pyjamas",
                          "productName": "Hangup Men Pink Solid Pathani Kurta with Pyjamas",
                          "searchImage": "http://assets.myntassets.com/assets/images/20578678/2022/11/1/e4fa45b3-19c5-48d1-8ceb-980f3b753fd41667311151702HangupMensPartywearKurtaHaremBlazerPolyesterRegular1.jpg",
                          "mrp": 2999,
                          "price": 1139,
                          "discount": 1860,
                          "brand": "Hangup",
                          "rating": 0,
                          "displayDiscountLabel": "(62% OFF)",
                          "available": true
                      }
                  ]
              },
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "7353910d.946a.492c.96f6.2ed03f46f38bnxmdEN79f1",
                      "uniqueHandle": "Hangup",
                      "name": "Hangup",
                      "description": "Hangup is a online fashion retailer that focuses majorly on stylish and trendsetting collections of ready-to-wear collection.",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/3/bb7041fb-97a2-4492-b48a-81673ff593c61683114511686-WhatsApp-Image-2023-05-03-at-5.05.50-PM.jpeg",
                          "resolution": "1500X1500",
                          "aspectRatio": 1
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/3/f37f0842-08cc-49b5-90d0-44a2c87c28b01683112935544-croppedImage-1683112934523.jpg",
                          "resolution": "1500X1667",
                          "aspectRatio": 0.9
                      },
                      "posts": 24,
                      "followers": 40,
                      "type": "BRAND"
                  },
                  "subTitle": "4 hours ago",
                  "followDisplayType": "TEXT"
              }
          },
          "componentUId": "1f408ea7-369f-42c9-a6b7-1c478317b959"
      },
      {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "f9c29475.5a95.44b9.a5c3.714dc21658d1yz0fel1MfR",
                      "uniqueHandle": "Suta",
                      "name": "Suta_Bombay",
                      "description": "Suta- A mindful lifestyle brand               \ncombining India's centuries-old weaving traditions with contemporary style-so what looks good",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/8/27/afc52c56-bae4-4e0a-ab19-323d5664ae771661575221777-logo--1-.png",
                          "resolution": "1544X857",
                          "aspectRatio": 1.8
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/8/27/8689dc5b-5ca9-4d7e-b25d-80ec84b131d61661575317572-croppedImage-1661575241213.jpg",
                          "resolution": "649X721",
                          "aspectRatio": 0.9
                      },
                      "posts": 108,
                      "followers": 1195,
                      "type": "BRAND"
                  },
                  "subTitle": "4 hours ago",
                  "followDisplayType": "TEXT"
              },
              "contentProps": {
                  "postId": 121493,
                  "likeCount": 1,
                  "products": [
                      22827536,
                      15244334,
                      15243986,
                      15243980,
                      21642760,
                      18166838,
                      14988248,
                      15243994,
                      22827394,
                      15243900,
                      16909636,
                      15244018,
                      21642644,
                      15243974,
                      16036148,
                      18230054,
                      16018564,
                      18390644,
                      18166864,
                      21642664,
                      15244628,
                      16053782,
                      19130656,
                      22827484,
                      18230056,
                      23127264,
                      19885286,
                      21642670,
                      23127244,
                      16909438,
                      18390844,
                      22827534,
                      18390680,
                      16909512,
                      16909358,
                      15435476,
                      18390914,
                      18390660,
                      18390600,
                      16018592,
                      18229956,
                      18424326,
                      18229960,
                      19511844,
                      18230014,
                      18229914,
                      19511778
                  ],
                  "productPills": [
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--White-Floral-Printed-Pure-Cotton-Saree/22827536/buy",
                          "productId": 22827536,
                          "product": "Suta Maroon & White Floral Printed Pure Cotton Saree",
                          "productName": "Suta Maroon & White Floral Printed Pure Cotton Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/22827536/2023/4/20/19df7056-a1b6-4761-b14f-d0e86ada2b601681957799183Sarees1.jpg",
                          "mrp": 2900,
                          "price": 2610,
                          "discount": 290,
                          "brand": "Suta",
                          "rating": 0,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--Beige-Colourblocked-Saree/15244334/buy",
                          "productId": 15244334,
                          "product": "Suta Maroon & Beige Colourblocked Saree",
                          "productName": "Suta Maroon & Beige Colourblocked Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/15244334/2022/7/29/37cc2886-d406-4203-a0ad-168a6c55e49c1659081581175SutaMaroonBeigeColourblockedSaree1.jpg",
                          "mrp": 3745,
                          "price": 3370,
                          "discount": 375,
                          "brand": "Suta",
                          "rating": 4.7,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--Green-Colourblocked-Saree/15243986/buy",
                          "productId": 15243986,
                          "product": "Suta Maroon & Green Colourblocked Saree",
                          "productName": "Suta Maroon & Green Colourblocked Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/15243986/2021/8/24/708582b8-1188-4bca-a883-a5b3c717e1781629818636180SutaWomenMaroon1.jpg",
                          "mrp": 3300,
                          "price": 2970,
                          "discount": 330,
                          "brand": "Suta",
                          "rating": 4.6,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon-Solid-Pure-Cotton-Saree/15243980/buy",
                          "productId": 15243980,
                          "product": "Suta Maroon Solid Pure Cotton Saree",
                          "productName": "Suta Maroon Solid Pure Cotton Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/15243980/2021/8/24/11a9e850-bedb-4435-8aeb-71be7d344ac41629818261561SutaWomenMaroon1.jpg",
                          "mrp": 2350,
                          "price": 2115,
                          "discount": 235,
                          "brand": "Suta",
                          "rating": 4.7,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Woven-Design-Zari-Pure-Cotton-Saree/21642760/buy",
                          "productId": 21642760,
                          "product": "Suta Woven Design Zari Pure Cotton Saree",
                          "productName": "Suta Woven Design Zari Pure Cotton Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/21642760/2023/1/20/526a6850-4d03-4182-8cc5-f0251d0611841674222975689SutaMaroonBlackWovenDesignZariPureCottonSaree1.jpg",
                          "mrp": 3300,
                          "price": 2970,
                          "discount": 330,
                          "brand": "Suta",
                          "rating": 3.7,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Saree-Blouse/Suta/Suta-Maroon-Solid-Saree-Blouse/18166838/buy",
                          "productId": 18166838,
                          "product": "Suta Maroon Solid Saree Blouse",
                          "productName": "Suta Maroon Solid Saree Blouse",
                          "searchImage": "http://assets.myntassets.com/assets/images/18166838/2022/5/5/8a535780-3946-4224-bc13-aa80b3ee8c621651756379385SareeBlouse1.jpg",
                          "mrp": 2400,
                          "price": 2160,
                          "discount": 240,
                          "brand": "Suta",
                          "rating": 0,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon-Black-Colourblocked-Cotton-Acrylic-Saree/14988248/buy",
                          "productId": 14988248,
                          "product": "Suta Maroon Black Colourblocked Cotton Acrylic Saree",
                          "productName": "Suta Maroon Black Colourblocked Cotton Acrylic Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/14988248/2021/7/30/fde6ea67-520b-4612-935f-8c548a87cd251627660877398Sarees1.jpg",
                          "mrp": 3745,
                          "price": 2996,
                          "discount": 749,
                          "brand": "Suta",
                          "rating": 4.8,
                          "displayDiscountLabel": "(20% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--White-Floral-Printed-Pure-Cotton-Saree/15243994/buy",
                          "productId": 15243994,
                          "product": "Suta Maroon & White Floral Printed Pure Cotton Saree",
                          "productName": "Suta Maroon & White Floral Printed Pure Cotton Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/15243994/2022/10/19/f8658282-91cd-4802-ab46-5f10b6cad7271666169428579-Suta-Maroon--White-Floral-Printed-Pure-Cotton-Saree-33816661-1.jpg",
                          "mrp": 2500,
                          "price": 2250,
                          "discount": 250,
                          "brand": "Suta",
                          "rating": 4.3,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--Grey-Cotton-Blend-Saree/22827394/buy",
                          "productId": 22827394,
                          "product": "Suta Maroon & Grey Cotton Blend Saree",
                          "productName": "Suta Maroon & Grey Cotton Blend Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/22827394/2023/4/20/59f62d4a-4063-4279-adb2-d4cf23dbd6291681953174511Sarees1.jpg",
                          "mrp": 3500,
                          "price": 3150,
                          "discount": 350,
                          "brand": "Suta",
                          "rating": 0,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sarees/Suta/Suta-Maroon--Green-Solid-Cotton-Saree/15243900/buy",
                          "productId": 15243900,
                          "product": "Suta Maroon & Green Solid Cotton Saree",
                          "productName": "Suta Maroon & Green Solid Cotton Saree",
                          "searchImage": "http://assets.myntassets.com/assets/images/15243900/2021/8/24/884737dd-9140-4bb9-a865-f94c19ced3861629818431456SutaWomenMaroon1.jpg",
                          "mrp": 2605,
                          "price": 2344,
                          "discount": 261,
                          "brand": "Suta",
                          "rating": 4.5,
                          "displayDiscountLabel": "(10% OFF)",
                          "available": true
                      }
                  ],
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/e031fd8f-4f1b-4b03-94a8-a589ed05bf811684913907970-88.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/26881dcd-9c73-4b6c-abae-4167be6edb721684913907996-6--4-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/33b1ab8a-dbc2-4633-a246-e719314a1dfc1684913908018-5--16-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/5e3c0c8e-3627-4ee6-9e3f-a0f2b8cfa5ae1684913908042-4--17-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/314caabc-1270-4b4d-9b56-0fe655b7e92f1684913908066-3--15-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/ce6f37a5-562f-4fcc-a1ee-6b2a4f6dabb01684913908088-2--19-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/7ee4b18d-9ad2-4e02-9dcf-15929c6eb7ab1684913908113-1--20-.JPG",
                          "resolution": "1080X1440",
                          "aspectRatio": 0.75
                      }
                  ],
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/121493/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "elementId": "POST_IMAGE",
                  "isLiked": "NONE",
                  "isBookmarked": false,
                  "text": "Pretty prints and prettier colors, a combination you just can't resist! Upgrade your wardrobe with this absolutely gorgeous saree. <Hashtag id=suta>suta</Hashtag> <Hashtag id=Suta>Suta</Hashtag> <Hashtag id=sutasaree>sutasaree</Hashtag> <Hashtag id=sutalook>sutalook</Hashtag> <Hashtag id=maroon>maroon</Hashtag> <Hashtag id=printedsaree>printedsaree</Hashtag> <Hashtag id=elegantlook>elegantlook</Hashtag> <Hashtag id=indiansarees>indiansarees</Hashtag> <Hashtag id=lightweightsaare>lightweightsaare</Hashtag> <Hashtag id=cottonsarees>cottonsarees</Hashtag> <Hashtag id=womenindianwear>womenindianwear</Hashtag> <Hashtag id=saree>saree</Hashtag> <Hashtag id=sarees>sarees</Hashtag> <Hashtag id=sareeforwomen>sareeforwomen</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag>"
              }
          },
          "componentUId": "cec03dce-cbc5-4796-a305-0a723737ddb7"
      },
      {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "contentProps": {
                  "isBookmarked": false,
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/23/767b14e4-fd4d-415d-903c-873930fddd541684830345969-INTEL00000131--1.jpg",
                          "resolution": "1500X2000",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/23/5fdb4a61-41e3-400b-a9f3-e7267c8da6521684830345999-INTEL00000131--4.JPG",
                          "resolution": "1500X2000",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/23/b3ce9679-a0c3-47ce-ad74-16643ac483c91684830346015-INTEL00000131--5.JPG",
                          "resolution": "1500X2000",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/23/bdf917f7-d878-4322-b5f9-42430fe958e11684830346031-INTEL00000131--6.JPG",
                          "resolution": "1500X2000",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/23/25d4d344-7d4d-464e-8fc1-d5f702f230751684830346048-M_5.jpg",
                          "resolution": "1500X2000",
                          "aspectRatio": 0.75
                      }
                  ],
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/121138/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "elementId": "POST_IMAGE",
                  "postId": 121138,
                  "isLiked": "NONE",
                  "likeCount": 1,
                  "text": "Statement Sunglasses <linebreak></linebreak><Hashtag id=menbrands>menbrands</Hashtag> <Hashtag id=mensunglasses>mensunglasses</Hashtag> <Hashtag id=intellilens>intellilens</Hashtag>",
                  "products": [
                      19557092,
                      19557102,
                      20241126,
                      20241120,
                      19557030,
                      20241102,
                      19557084,
                      17294900,
                      20241114,
                      19557068,
                      19557014,
                      19557040,
                      20241124,
                      19557098,
                      19557050,
                      19557062,
                      19557024,
                      20241134,
                      19557082,
                      19172986,
                      19557090,
                      19557074,
                      19557036,
                      19557096,
                      19557018,
                      19557056,
                      19557064,
                      20241118,
                      20241122,
                      19557044,
                      19557048,
                      19557020,
                      19557058,
                      20241128,
                      20241132,
                      19557070,
                      20241116,
                      19557066,
                      19557076,
                      19557080,
                      19557034,
                      19557072,
                      19557022,
                      19557086,
                      19557054,
                      20241136,
                      20241106,
                      20241100,
                      19557106,
                      19557046,
                      20241110,
                      19557088,
                      19557038
                  ],
                  "productPills": [
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Butterfly-UV-Protected-HD-Sunglasses-1000000060947/19557092/buy",
                          "productId": 19557092,
                          "product": "Intellilens Unisex Black Lens & Butterfly UV Protected HD Sunglasses 1000000060947",
                          "productName": "Intellilens Unisex Black Lens & Butterfly UV Protected HD Sunglasses 1000000060947",
                          "searchImage": "http://assets.myntassets.com/assets/images/19557092/2022/8/19/e83a9e2d-e630-4c7d-a038-2782bfee22781660886506249IntellilensUnisexBlackLensBlackRectangleSunglasseswithUVProt1.jpg",
                          "mrp": 2999,
                          "price": 419,
                          "discount": 2580,
                          "brand": "Intellilens",
                          "rating": 4.6,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Black-Square-Sunglasses-with-Polarised-and-UV-Protected-Lens/19557102/buy",
                          "productId": 19557102,
                          "product": "Intellilens Unisex Black Lens & Black Square Sunglasses with Polarised and UV Protected Lens",
                          "productName": "Intellilens Unisex Black Lens & Black Square Sunglasses with Polarised and UV Protected Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/19557102/2022/8/19/a2b7b2ab-98b6-410a-8324-56c6c30c5c361660874817200Sunglasses1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 4.7,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Brown-Lens--Gold-Toned-Rectangle-Sunglasses-with-Polarised-Lens/20241126/buy",
                          "productId": 20241126,
                          "product": "Intellilens Unisex Brown Lens & Gold-Toned Rectangle Sunglasses with Polarised Lens",
                          "productName": "Intellilens Unisex Brown Lens & Gold-Toned Rectangle Sunglasses with Polarised Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/20241126/2022/11/11/897f2d2a-4170-414e-9cde-8cab1f1902561668164966285IntellilensUnisexBrownLensGold-TonedRectangleSunglasseswithP1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 4.3,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Black-Rectangle-Sunglasses/20241120/buy",
                          "productId": 20241120,
                          "product": "Intellilens Unisex Black Lens & Black Rectangle Sunglasses",
                          "productName": "Intellilens Unisex Black Lens & Black Rectangle Sunglasses",
                          "searchImage": "http://assets.myntassets.com/assets/images/20241120/2022/11/11/9b016e94-807f-434a-8f66-0831faac50fb1668164977439IntellilensUnisexBlackLensBlackRectangleSunglasses1.jpg",
                          "mrp": 2999,
                          "price": 419,
                          "discount": 2580,
                          "brand": "Intellilens",
                          "rating": 4.2,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Grey-Lens--Black-Square-Sunglasses-with-Polarised-and-UV-Protected-Lens/19557030/buy",
                          "productId": 19557030,
                          "product": "Intellilens Unisex Grey Lens & Black Square Sunglasses with Polarised and UV Protected Lens",
                          "productName": "Intellilens Unisex Grey Lens & Black Square Sunglasses with Polarised and UV Protected Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/19557030/2022/8/19/273081a3-92c8-44dd-a600-857c71461db21660902089713IntellilensUnisexBlackLensBlackSquareSunglasseswithPolarised1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 4.4,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Black-Sports-Sunglasses-with-Polarised-Lens/20241102/buy",
                          "productId": 20241102,
                          "product": "Intellilens Unisex Black Lens & Black Sports Sunglasses with Polarised Lens",
                          "productName": "Intellilens Unisex Black Lens & Black Sports Sunglasses with Polarised Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/20241102/2022/11/11/bb0cbe8e-9e87-49e8-987f-625673a4ba6c1668164947213IntellilensUnisexBlackLensBlackSportsSunglasseswithPolarised1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 4.4,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Aviator-UV-Protected-HD-Sunglasses-1000000060773/19557084/buy",
                          "productId": 19557084,
                          "product": "Intellilens Unisex Black Lens & Aviator UV Protected HD Sunglasses 1000000060773",
                          "productName": "Intellilens Unisex Black Lens & Aviator UV Protected HD Sunglasses 1000000060773",
                          "searchImage": "http://assets.myntassets.com/assets/images/19557084/2022/8/19/b08c1248-db2b-4e93-96b9-a4ae673c6c7b1660903134157IntellilensUnisexBlackLensBlackAviatorSunglasseswithUVProtec1.jpg",
                          "mrp": 2999,
                          "price": 419,
                          "discount": 2580,
                          "brand": "Intellilens",
                          "rating": 4.4,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Black-UV-Polarized-Anti-Glare-Night-Driving-Glasses-INTEL109/17294900/buy",
                          "productId": 17294900,
                          "product": "Intellilens Black UV Polarized Anti Glare Night Driving Glasses INTEL109",
                          "productName": "Intellilens Black UV Polarized Anti Glare Night Driving Glasses INTEL109",
                          "searchImage": "http://assets.myntassets.com/assets/images/17294900/2022/2/25/946e8a64-ed6c-4cd5-8580-2b10819c85431645789407948IntellilensUnisexBlackSunglasses1.jpg",
                          "mrp": 2999,
                          "price": 689,
                          "discount": 2310,
                          "brand": "Intellilens",
                          "rating": 4.3,
                          "displayDiscountLabel": "(77% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Black-Lens--Gold-Toned-Square-Sunglasses-with-Polarised-Lens/20241114/buy",
                          "productId": 20241114,
                          "product": "Intellilens Unisex Black Lens & Gold-Toned Square Sunglasses with Polarised Lens",
                          "productName": "Intellilens Unisex Black Lens & Gold-Toned Square Sunglasses with Polarised Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/20241114/2022/11/11/9cc933a3-58a9-4948-8245-05bc3fda55231668165015730IntellilensUnisexBlackLensGold-TonedSquareSunglasseswithPola1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 3.8,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Sunglasses/Intellilens/Intellilens-Unisex-Green-Lens--Gold-Toned-Round-Sunglasses-with-Polarised-and-UV-Protected-Lens/19557068/buy",
                          "productId": 19557068,
                          "product": "Intellilens Unisex Green Lens & Gold-Toned Round Sunglasses with Polarised and UV Protected Lens",
                          "productName": "Intellilens Unisex Green Lens & Gold-Toned Round Sunglasses with Polarised and UV Protected Lens",
                          "searchImage": "http://assets.myntassets.com/assets/images/19557068/2022/8/19/54ebf8a9-14a7-44e1-927b-cad69c8461b21660894558320IntellilensUnisexGreenLensGold-TonedRoundSunglasseswithPolar1.jpg",
                          "mrp": 3499,
                          "price": 489,
                          "discount": 3010,
                          "brand": "Intellilens",
                          "rating": 4.3,
                          "displayDiscountLabel": "(86% OFF)",
                          "available": true
                      }
                  ]
              },
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "77d245bf.0a5a.4862.b305.4f04fd88b578J4NkjRdcvV",
                      "uniqueHandle": "Prolixr",
                      "name": "Intellilens",
                      "description": "Intelligent Eyewear Brand",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/11/30/81a2f8f7-8260-422e-b3dd-62eef7555e861669819361278-Pom.jpg",
                          "resolution": "1080X1080",
                          "aspectRatio": 1
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/11/30/95a0d993-fc17-4a1b-b1fd-c4c140fa3cb61669819375687-pom-copy.jpg",
                          "resolution": "1080X1200",
                          "aspectRatio": 0.9
                      },
                      "posts": 5,
                      "followers": 3,
                      "type": "BRAND"
                  },
                  "subTitle": "3 hours ago",
                  "followDisplayType": "TEXT"
              }
          },
          "componentUId": "6eb418ab-01fd-4bf8-abd2-b5ff41ddef2e"
      },
      {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "5870de98.01f0.45fe.b7a3.b5f1f77d3cb6r15nKfiBuR",
                      "uniqueHandle": "pradainisurva1",
                      "name": "Pradaini",
                      "description": "StyleSquad\nYOGA-flowing SMOOTHIE-making MOTIVATING spiritual being with a love for looking my best and feeling even better",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/4/7/b7cea6d8-ca12-4622-b5b3-25f85d12a65b1649316170256-Pradaini-Surva.png",
                          "resolution": "500X500",
                          "aspectRatio": 1
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2020/2/20/e76a12d1-7638-4b4c-b854-e9a80bc454ac1582186966329-croppedImage.jpg",
                          "resolution": "540X600",
                          "aspectRatio": 0.9
                      },
                      "posts": 417,
                      "followers": 17774,
                      "type": "INFLUENCER"
                  },
                  "subTitle": "3 hours ago",
                  "followDisplayType": "TEXT"
              },
              "contentProps": {
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/121726/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "postId": 121726,
                  "isLiked": "NONE",
                  "isBookmarked": false,
                  "text": "This one for the corset lovers. a versatile corset Iin soft blue denim with a white lace to cinch the fit. <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womentops>womentops</Hashtag> <Hashtag id=croptops>croptops</Hashtag> <Hashtag id=theclothingfactory>theclothingfactory</Hashtag>",
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/202d8a6f-92ef-4e1b-abae-bf0ab845c4bd1684949431862-9A604C2C-F0CD-4860-93E8-B8D7C7538FF8.jpeg",
                          "resolution": "1944X2592",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/9f9b1eaf-4e84-4f4d-97da-316772bc1ab81684949431879-85580784-271F-43C2-844E-44F68DD13F65.jpeg",
                          "resolution": "1944X2592",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/94f74cc3-db6d-4fc0-8047-7e3bcc9c7af91684949431898-62DD8DFC-A725-401E-B79B-6629AD1656DC.jpeg",
                          "resolution": "1944X2592",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/68375ffd-e304-4534-81a2-3c11d3d917941684949431912-39796903-0142-4332-A685-83039ACF5A50.jpeg",
                          "resolution": "1944X2592",
                          "aspectRatio": 0.75
                      },
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/24/44f78bb4-6d0a-494e-a644-77d197747abb1684949431925-9C89CB6A-D655-44C5-84E8-774C3BC6F67A.jpeg",
                          "resolution": "1944X2592",
                          "aspectRatio": 0.75
                      }
                  ],
                  "elementId": "POST_IMAGE",
                  "likeCount": 0,
                  "products": [
                      19830640,
                      21211838,
                      19885956,
                      20344726,
                      17671350,
                      20319508,
                      20924840,
                      21148984,
                      16043108,
                      17129262,
                      19413874,
                      19866238,
                      22223018,
                      19076654,
                      21136246,
                      20957252,
                      17129322,
                      17671338,
                      13935882,
                      15672942,
                      13935996
                  ],
                  "productPills": [
                      {
                          "landingPageUrl": "Tops/THE-CLOTHING-FACTORY/THE-CLOTHING-FACTORY-Women-Blue-Denim-Pure-Cotton-Corset-Crop-Top/19830640/buy",
                          "productId": 19830640,
                          "product": "THE CLOTHING FACTORY Women Blue Denim Pure Cotton Corset Crop Top",
                          "productName": "THE CLOTHING FACTORY Women Blue Denim Pure Cotton Corset Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/19830640/2022/9/7/dc8511eb-2bfe-4167-90c2-9412b8e2f7391662496080860Tops1.jpg",
                          "mrp": 2590,
                          "price": 0,
                          "discount": 0,
                          "brand": "THE CLOTHING FACTORY",
                          "rating": 0,
                          "displayDiscountLabel": "",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/FOREVER-21/FOREVER-21-Corset-Bralette-Top/21211838/buy",
                          "productId": 21211838,
                          "product": "FOREVER 21 Corset Bralette Top",
                          "productName": "FOREVER 21 Corset Bralette Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/21211838/2022/12/16/3cee60c5-7143-4f41-9287-4fa260a438ed1671160292877Forever21SolidCropTops1.jpg",
                          "mrp": 1699,
                          "price": 849,
                          "discount": 850,
                          "brand": "FOREVER 21",
                          "rating": 4.5,
                          "displayDiscountLabel": "(50% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/SHOWOFF/SHOWOFF-Blue-Denim-Shirt-Style-Crop-Top/19885956/buy",
                          "productId": 19885956,
                          "product": "SHOWOFF Blue Denim Shirt Style Crop Top",
                          "productName": "SHOWOFF Blue Denim Shirt Style Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/19885956/2022/9/23/b07b3e9e-3418-407c-9308-901112da4c881663933950495-SHOWOFF-Blue-Denim-Shirt-Style-Top-7781663933949510-1.jpg",
                          "mrp": 3280,
                          "price": 1148,
                          "discount": 2132,
                          "brand": "SHOWOFF",
                          "rating": 0,
                          "displayDiscountLabel": "(65% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/VASTRADO/VASTRADO-Navy-Blue-Sweetheart-Neck-Denim-Crop-Top/20344726/buy",
                          "productId": 20344726,
                          "product": "VASTRADO Navy Blue Sweetheart Neck Denim Crop Top",
                          "productName": "VASTRADO Navy Blue Sweetheart Neck Denim Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/20344726/2022/10/10/e6cf28b8-83a0-44de-84ab-0d9b6ae9d4f71665396544346CuteDenimCropTop1.jpg",
                          "mrp": 999,
                          "price": 549,
                          "discount": 450,
                          "brand": "VASTRADO",
                          "rating": 0,
                          "displayDiscountLabel": "(45% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/FREAKINS/FREAKINS-Women-Stunning-Blue-Solid-Top/17671350/buy",
                          "productId": 17671350,
                          "product": "FREAKINS Women Stunning Blue Solid Top",
                          "productName": "FREAKINS Women Stunning Blue Solid Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/17671350/2022/3/29/54cce664-c1cb-4d44-beb5-58947827a78e1648548312367FREAKINSBlueDenimTop1.jpg",
                          "mrp": 1799,
                          "price": 809,
                          "discount": 990,
                          "brand": "FREAKINS",
                          "rating": 0,
                          "displayDiscountLabel": "(55% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/Trendyol/Trendyol-Lavender-Square-Neck-Crop-Top/20319508/buy",
                          "productId": 20319508,
                          "product": "Trendyol Lavender Square Neck Crop Top",
                          "productName": "Trendyol Lavender Square Neck Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/20319508/2022/10/8/bce7d123-9885-4880-a775-738f1191a72d1665207870887TrendyolVioletCropTop1.jpg",
                          "mrp": 1999,
                          "price": 1199,
                          "discount": 800,
                          "brand": "Trendyol",
                          "rating": 3.2,
                          "displayDiscountLabel": "(40% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/Boohoo/Boohoo-Black-Cotton-Halter-Neck-Denim-Crop-Top/20924840/buy",
                          "productId": 20924840,
                          "product": "Boohoo Black Cotton Halter Neck Denim Crop Top",
                          "productName": "Boohoo Black Cotton Halter Neck Denim Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/20924840/2022/12/2/aa4cf059-0df9-488e-b01f-b9a0b8325c361669957763654-Boohoo-Black-Cotton-Halter-Neck-Denim-Crop-Top-7141669957763-1.jpg",
                          "mrp": 3770,
                          "price": 2450,
                          "discount": 1320,
                          "brand": "Boohoo",
                          "rating": 0,
                          "displayDiscountLabel": "(35% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/NASTY-GAL/NASTY-GAL-Halter-Neck-Cotton-Denim-Bralette-Crop-Top/21148984/buy",
                          "productId": 21148984,
                          "product": "NASTY GAL Halter Neck Cotton Denim Bralette Crop Top",
                          "productName": "NASTY GAL Halter Neck Cotton Denim Bralette Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/21148984/2022/12/12/5d783646-f085-4637-be51-bf1ffd4280ae1670837804264TshirtsNASTYGALWomenTopsNASTYGALWomenTopsNASTYGALWomenTopsNA1.jpg",
                          "mrp": 3530,
                          "price": 1941,
                          "discount": 1589,
                          "brand": "NASTY GAL",
                          "rating": 0,
                          "displayDiscountLabel": "(45% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/STREET-9/STREET-9-Woman-Stunning-Blue-Solid-Cropped-Top/16043108/buy",
                          "productId": 16043108,
                          "product": "STREET 9 Woman Stunning Blue Solid Cropped Top",
                          "productName": "STREET 9 Woman Stunning Blue Solid Cropped Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/16043108/2021/12/6/f7ebd170-1595-4df2-8900-cbe63c3f271f1638770239296-STREET-9-Women-Tops-8561638770238846-1.jpg",
                          "mrp": 1499,
                          "price": 599,
                          "discount": 900,
                          "brand": "STREET 9",
                          "rating": 4.1,
                          "displayDiscountLabel": "(60% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Tops/DressBerry/DressBerry-Blue-Puff-Sleeves-Denim-Crop-Top/17129262/buy",
                          "productId": 17129262,
                          "product": "DressBerry Blue Puff Sleeves Denim Crop Top",
                          "productName": "DressBerry Blue Puff Sleeves Denim Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/17129262/2022/9/23/8e7e16af-080a-4499-ad72-a22cce6e12101663926856885-DressBerry-Blue-Puff-Sleeves-Denim-Crop-Top-331663926856481-1.jpg",
                          "mrp": 1599,
                          "price": 399,
                          "discount": 1200,
                          "brand": "DressBerry",
                          "rating": 3.4,
                          "displayDiscountLabel": "(75% OFF)",
                          "available": true
                      }
                  ]
              }
          },
          "componentUId": "0032bdd0-302a-4fe2-a10b-8bb6e092ce4b"
      },
      {
          "type": "MynstaPost",
          "elementId": "TitleCard",
          "props": {
              "contentProps": {
                  "postId": 118649,
                  "likeCount": 0,
                  "media": [
                      {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2023/5/15/20e31e7f-b4ca-4b71-b1c0-5bd720cc178c1684142410628-Artboard-4.png",
                          "resolution": "768X1024",
                          "aspectRatio": 0.75
                      }
                  ],
                  "commentsData": {
                      "totalComments": 0,
                      "viewAllCommentsUrl": "/studio/118649/comments",
                      "comment": {
                          "authorName": "",
                          "commentText": ""
                      },
                      "inputBox": {
                          "placeHolderText": "Be the first to comment",
                          "addCommentUrl": "/v1/mynsta/comment/create"
                      },
                      "topCommentHidden": false
                  },
                  "elementId": "POST_IMAGE",
                  "isLiked": "NONE",
                  "isBookmarked": false,
                  "text": "Spring ready Alps available in fun prints and colours. Wear TOMS. WEAR GOOD. <Hashtag id=tomsindia>tomsindia</Hashtag> <Hashtag id=toms>toms</Hashtag> <Hashtag id=weargood>weargood</Hashtag> <Hashtag id=sustainablefashion>sustainablefashion</Hashtag> <Hashtag id=newseason>newseason</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag>",
                  "products": [
                      18489150,
                      18489108,
                      19284270,
                      22813766,
                      18321508,
                      18489086,
                      18429574,
                      22813790,
                      18489112,
                      22813772,
                      18321522,
                      19519450,
                      18429648,
                      22813796,
                      18489144,
                      19024856,
                      19284276,
                      22813786,
                      18429624,
                      18429620,
                      18489200,
                      22813770,
                      18489154,
                      22801008,
                      18489088,
                      22801000,
                      18489134,
                      19024908,
                      18489090,
                      21967192,
                      19024862,
                      18429572,
                      21968038,
                      22800990,
                      18489184,
                      18429558,
                      19024880,
                      21967174,
                      19024896,
                      18489206,
                      21968042,
                      18489164,
                      18489128,
                      18429556,
                      21060894,
                      19284286,
                      18489172,
                      21967180,
                      22801010,
                      21967178,
                      18489156,
                      18489138,
                      19519328,
                      19519422,
                      18489102,
                      19024874,
                      22800988,
                      19024904,
                      18489096,
                      18489094,
                      21968018,
                      18489100,
                      19519444,
                      19519412,
                      22813794,
                      19024858,
                      19519448,
                      18429576,
                      21968022,
                      18429560,
                      18429592,
                      18429614,
                      18489188,
                      18429600,
                      18429590,
                      18429644,
                      19024902,
                      18429618,
                      19284274,
                      19284284,
                      22801024,
                      19284272,
                      18489142,
                      18489116,
                      22801022,
                      18489218,
                      18489204,
                      18489136,
                      22813788,
                      18489152,
                      18489202,
                      18489130,
                      22813792,
                      18489146,
                      18489168,
                      18489176,
                      22813782,
                      18489110,
                      18489148,
                      18489114
                  ],
                  "productPills": [
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Women-Pink-Retro-Floral-Print-Alpargata-Slip-On-Sneakers/18489150/buy",
                          "productId": 18489150,
                          "product": "TOMS Women Pink Retro Floral Print Alpargata Slip-On Sneakers",
                          "productName": "TOMS Women Pink Retro Floral Print Alpargata Slip-On Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/18489150/2022/10/11/a507b285-7b66-4d5d-96c1-d45cc20a02fc1665480167067TOMSWomenPinkRetroFloralPrintAlpargataSlip-OnSneakers1.jpg",
                          "mrp": 5499,
                          "price": 3299,
                          "discount": 2200,
                          "brand": "TOMS",
                          "rating": 4,
                          "displayDiscountLabel": "(40% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Women-Printed-Floral-Alpargata-Loafers/18489108/buy",
                          "productId": 18489108,
                          "product": "TOMS Women Printed Floral Alpargata Loafers",
                          "productName": "TOMS Women Printed Floral Alpargata Loafers",
                          "searchImage": "http://assets.myntassets.com/assets/images/18489108/2022/5/30/f7df9817-68ed-4715-b641-8a05761623a91653898910231TOMSWomenWhitePrintedLoafers1.jpg",
                          "mrp": 4999,
                          "price": 2499,
                          "discount": 2500,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "(50% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Black-Slip-On-Sneakers/19284270/buy",
                          "productId": 19284270,
                          "product": "TOMS Men Black Slip-On Sneakers",
                          "productName": "TOMS Men Black Slip-On Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/19284270/2022/12/3/526aa0e2-ab76-4eee-a59a-4ec7e76a11931670010900846TOMSMenBlackSlip-OnSneakers1.jpg",
                          "mrp": 5299,
                          "price": 3709,
                          "discount": 1590,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "(30% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Textured-Slip-On-Sneakers/22813766/buy",
                          "productId": 22813766,
                          "product": "TOMS Men Textured Slip-On Sneakers",
                          "productName": "TOMS Men Textured Slip-On Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/22813766/2023/4/18/a2d7699d-9a60-46d4-adf8-01757e284f211681829083335BajaCanvasEarthwiseSlipOns1.jpg",
                          "mrp": 5299,
                          "price": 0,
                          "discount": 0,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Beige-Solid-Alpargata-Slip-on-Sneakers/18321508/buy",
                          "productId": 18321508,
                          "product": "TOMS Men Beige Solid Alpargata Slip-on Sneakers",
                          "productName": "TOMS Men Beige Solid Alpargata Slip-on Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/18321508/2022/5/19/30c0eb1f-95c8-4d67-96bf-bf52d6edb74c1652944653198TOMSMenBeigeWovenDesignFashion1.jpg",
                          "mrp": 4999,
                          "price": 2499,
                          "discount": 2500,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "(50% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Canvas-Alpargata-Fenix-Slip-On-Sneakers/18489086/buy",
                          "productId": 18489086,
                          "product": "TOMS Men Canvas Alpargata Fenix Slip-On Sneakers",
                          "productName": "TOMS Men Canvas Alpargata Fenix Slip-On Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/18489086/2023/4/3/d97722c2-8afb-4b8b-83ae-5eae9ea53b741680518983605TOMSWomenBlackMoroccanCrochetAlpargataSlip-OnSneakers1.jpg",
                          "mrp": 5499,
                          "price": 5499,
                          "discount": 0,
                          "brand": "TOMS",
                          "rating": 4,
                          "displayDiscountLabel": "",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Striped-Alpargata-Rope-Espadrilles/18429574/buy",
                          "productId": 18429574,
                          "product": "TOMS Men Striped Alpargata Rope Espadrilles",
                          "productName": "TOMS Men Striped Alpargata Rope Espadrilles",
                          "searchImage": "http://assets.myntassets.com/assets/images/18429574/2022/5/26/9b1f65bd-5694-40ed-bd67-5fc41356578c1653570249068TOMSAlpargataRopeEspadrilleinTan1.jpg",
                          "mrp": 5499,
                          "price": 5499,
                          "discount": 0,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Solid-Casual-Espadrilles/22813790/buy",
                          "productId": 22813790,
                          "product": "TOMS Men Solid Casual Espadrilles",
                          "productName": "TOMS Men Solid Casual Espadrilles",
                          "searchImage": "http://assets.myntassets.com/assets/images/22813790/2023/4/18/2220ba3a-5c6f-4966-9598-a7012dd6e6411681825749397RecycledCottonCanvasEspadrilles1.jpg",
                          "mrp": 4999,
                          "price": 0,
                          "discount": 0,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Women-Pink-Printed-Alpargata-Tie-Dye-Canvas-Slip-On-Sneakers/18489112/buy",
                          "productId": 18489112,
                          "product": "TOMS Women Pink Printed Alpargata Tie Dye Canvas Slip-On Sneakers",
                          "productName": "TOMS Women Pink Printed Alpargata Tie Dye Canvas Slip-On Sneakers",
                          "searchImage": "http://assets.myntassets.com/assets/images/18489112/2022/10/11/94bbaa68-7d46-4bd4-911e-144bb28c8c1c1665480162467TOMSWomenPinkPrintedAlpargataTieDyeCanvasSlip-OnSneakers1.jpg",
                          "mrp": 4999,
                          "price": 2999,
                          "discount": 2000,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "(40% OFF)",
                          "available": true
                      },
                      {
                          "landingPageUrl": "Casual-Shoes/TOMS/TOMS-Men-Casual-Slip-On-Espadrilles/22813772/buy",
                          "productId": 22813772,
                          "product": "TOMS Men Casual Slip On Espadrilles",
                          "productName": "TOMS Men Casual Slip On Espadrilles",
                          "searchImage": "http://assets.myntassets.com/assets/images/22813772/2023/4/18/50bd1f7d-5669-4458-bf92-ddb611b68e471681826826128RecycledCottonCanvasEspadrilles1.jpg",
                          "mrp": 4999,
                          "price": 0,
                          "discount": 0,
                          "brand": "TOMS",
                          "rating": 0,
                          "displayDiscountLabel": "",
                          "available": true
                      }
                  ]
              },
              "titleProps": {
                  "elementId": "ImageAttributedTitleCard",
                  "id": "ImageAttributedTitleCard",
                  "author": {
                      "uidx": "79ac1784.a767.4a7c.9d99.9c2d62b8eaaaeZI5wfvIoC",
                      "uniqueHandle": "TomsIndia",
                      "name": "TomsIndia",
                      "description": "Made with the planet in mind that makes most of fashionable shoes out of recycled materials. Shoes for a better tomorrow !!",
                      "profileImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/8/19/23d711c4-7229-44d9-927f-b5bbe61e37641660904614587-Toms-Brand-logo.png",
                          "resolution": "512X512",
                          "aspectRatio": 1
                      },
                      "coverImage": {
                          "type": "IMAGE",
                          "src": "https://assets.myntassets.com/assets/images/2022/8/19/4bb8d015-bf53-47a4-b1c3-5696c59019461660904662792-Copy-of-SP22_L_W_alpmallownavytyedye__1109.jpg",
                          "resolution": "5947X3965",
                          "aspectRatio": 1.5
                      },
                      "posts": 76,
                      "followers": 130,
                      "type": "BRAND"
                  },
                  "subTitle": "4 hours ago",
                  "followDisplayType": "TEXT"
              }
          },
          "componentUId": "ac4cf240-3450-4527-9902-80b4b10c2eb7"
      },
      {
        "type": "TopicSuggestionList",
        "elementId": "TransparentTitleCard",
        "props": {
            "titleProps": {
                "elementId": "TitleView",
                "mapperId": "ActionableTitle",
                "leftText": "More topics to follow"
            },
            "contentProps": {
                "elementId": "ItemsPillViewWrapper",
                "items": [
                    {
                        "id": "5e3d12fb6c63697fc3335b78",
                        "name": "Celebrity Looks",
                        "followers": 527303,
                        "posts": 2104
                    },
                    {
                        "id": "5e7cb9143cb1fa14aa481c47",
                        "name": "Slaying at-home",
                        "followers": 445163,
                        "posts": 3071
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335b99",
                        "name": "Casualwear-women",
                        "followers": 347615,
                        "posts": 32706
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335b9e",
                        "name": "Unmissable Trends",
                        "followers": 337011,
                        "posts": 3614
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335ba0",
                        "name": "Women's Ethnicwear",
                        "followers": 336213,
                        "posts": 10025
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335b9f",
                        "name": "Streetstyle for Women",
                        "followers": 302402,
                        "posts": 3597
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335ba2",
                        "name": "Women's Indianwear",
                        "followers": 302235,
                        "posts": 4233
                    },
                    {
                        "id": "5e3d12fb6c63697fc3335ba1",
                        "name": "Women's Fusionwear",
                        "followers": 285311,
                        "posts": 1726
                    }
                ]
            }
        },
        "componentUId": "bd6e5cad-be59-4dc9-96cb-1522162480b1"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "99f9d197.62a5.4cc8.b069.f3ca3f21fd58SlGOsRZ81u",
                    "uniqueHandle": "thenattybrowngirl",
                    "name": "SAILI SATWE",
                    "description": "StyleSquad\nExperimenting with my styles and looks according to my daily mood.",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/4/7/2ff85631-3a90-4a34-af46-5d51f138e79f1649316128144-Saili-Satwe.png",
                        "resolution": "500X500",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2021/7/19/48022d7e-f358-4b34-b8c0-377fb62141b61626677756997-croppedImage-1626677694815.jpg",
                        "resolution": "1632X1813",
                        "aspectRatio": 0.9
                    },
                    "posts": 341,
                    "followers": 5895,
                    "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            },
            "contentProps": {
                "likeCount": 1,
                "productPills": [
                    {
                        "landingPageUrl": "Makeup-Remover/Estee-Lauder/Estee-Lauder-Take-It-Away-Makeup-Remover-Lotion-200-ml/1981974/buy",
                        "productId": 1981974,
                        "product": "Estee Lauder Take It Away Makeup Remover Lotion 200 ml",
                        "productName": "Estee Lauder Take It Away Makeup Remover Lotion 200 ml",
                        "searchImage": "http://assets.myntassets.com/assets/images/1981974/2017/8/10/11502354564962-Estee-Lauder-Take-It-Away-Makeup-Remover-Lotion-4491502354564952-1.jpg",
                        "mrp": 3200,
                        "price": 3200,
                        "discount": 0,
                        "brand": "Estee Lauder",
                        "rating": 0,
                        "displayDiscountLabel": "",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/Renee/Renee-Makeup-Removing-Balm-30g/14295594/buy",
                        "productId": 14295594,
                        "product": "Renee Makeup Removing Balm 30g",
                        "productName": "Renee Makeup Removing Balm 30g",
                        "searchImage": "http://assets.myntassets.com/assets/images/14295594/2021/6/9/c6b4932a-eaa6-4ee6-abca-61c24db5a2541623231044468-Renee-Makeup-Removing-Balm-30g-5671623231044335-1.jpg",
                        "mrp": 290,
                        "price": 252,
                        "discount": 38,
                        "brand": "Renee",
                        "rating": 4.2,
                        "displayDiscountLabel": "(13% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/nat-Habit/nat-Habit-Geranium-Kiss-Makeup-Melt-Remover-with-Fresh-Geranium---25-ml/20187658/buy",
                        "productId": 20187658,
                        "product": "nat Habit Geranium Kiss Makeup Melt Remover with Fresh Geranium - 25 ml",
                        "productName": "nat Habit Geranium Kiss Makeup Melt Remover with Fresh Geranium - 25 ml",
                        "searchImage": "http://assets.myntassets.com/assets/images/20187658/2022/9/27/579d5799-ab52-4660-8502-55ffa769ac571664284142322MakeupRemover1.jpg",
                        "mrp": 180,
                        "price": 180,
                        "discount": 0,
                        "brand": "nat Habit",
                        "rating": 4.6,
                        "displayDiscountLabel": "",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/MAC/MAC-Hyper-Real-Fresh-Canvas-Cleansing-Oil---200-ml/21070274/buy",
                        "productId": 21070274,
                        "product": "M.A.C Hyper Real Fresh Canvas Cleansing Oil - 200 ml",
                        "productName": "M.A.C Hyper Real Fresh Canvas Cleansing Oil - 200 ml",
                        "searchImage": "http://assets.myntassets.com/assets/images/21070274/2022/12/5/591a9404-3070-4b7d-8dd3-4918166c6ed11670224104067HyperRealFreshCanvasCleansingOil1.jpg",
                        "mrp": 4200,
                        "price": 4200,
                        "discount": 0,
                        "brand": "M.A.C",
                        "rating": 0,
                        "displayDiscountLabel": "",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/Revlon/Revlon-Eye--Lip-Makeup-Remover---60ml/308147/buy",
                        "productId": 308147,
                        "product": "Revlon Eye & Lip Makeup Remover - 60ml",
                        "productName": "Revlon Eye & Lip Makeup Remover - 60ml",
                        "searchImage": "http://assets.myntassets.com/assets/images/308147/2021/3/25/e0dd23ad-47a0-4c2b-bfa5-edd3819ed4f21616674100721-Revlon-Eye--Lip-Makeup-Remover-5341616674100617-1.jpg",
                        "mrp": 350,
                        "price": 210,
                        "discount": 140,
                        "brand": "Revlon",
                        "rating": 4.2,
                        "displayDiscountLabel": "(40% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/InnateWhites/InnateWhites-Set-Of-4-Unscented-Aloe-Vera-Makeup-Remover-Wipes/17924894/buy",
                        "productId": 17924894,
                        "product": "InnateWhites Set Of 4 Unscented Aloe Vera Makeup Remover Wipes",
                        "productName": "InnateWhites Set Of 4 Unscented Aloe Vera Makeup Remover Wipes",
                        "searchImage": "http://assets.myntassets.com/assets/images/17924894/2022/4/19/abfe56c5-82c7-4da2-a026-8a48fa3da4351650343976095MakeupRemover1.jpg",
                        "mrp": 236,
                        "price": 0,
                        "discount": 0,
                        "brand": "InnateWhites",
                        "rating": 0,
                        "displayDiscountLabel": "",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/FACES-CANADA/FACES-CANADA-Hydro-Makeup-Remover/1452979/buy",
                        "productId": 1452979,
                        "product": "FACES CANADA Hydro Makeup Remover",
                        "productName": "FACES CANADA Hydro Makeup Remover",
                        "searchImage": "http://assets.myntassets.com/assets/images/1452979/2021/6/30/8f65ce0b-5b6e-4cc0-9166-4cf1b9f0e23f1625026883693FACESCANADAHydroMakeupRemover1.jpg",
                        "mrp": 479,
                        "price": 335,
                        "discount": 144,
                        "brand": "FACES CANADA",
                        "rating": 4.5,
                        "displayDiscountLabel": "(30% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/BIODERMA/BIODERMA-Sensibio-H2O-Micellar-Cleansing-Water--Makeup-Removing-Solution---250-ml/2052298/buy",
                        "productId": 2052298,
                        "product": "BIODERMA Sensibio H2O Micellar Cleansing Water & Makeup Removing Solution - 250 ml",
                        "productName": "BIODERMA Sensibio H2O Micellar Cleansing Water & Makeup Removing Solution - 250 ml",
                        "searchImage": "http://assets.myntassets.com/assets/images/2052298/2022/10/13/9e289a2f-c455-4c9c-a22d-72c5ffdb06c51665641002068-BIODERMA-Sensibio-H2O-Micellar-Cleansing-Water--Makeup-Remov-1.jpg",
                        "mrp": 990,
                        "price": 990,
                        "discount": 0,
                        "brand": "BIODERMA",
                        "rating": 4.7,
                        "displayDiscountLabel": "",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/Blue-Heaven/Blue-Heaven-Over--Out-Makeup-Remover-Stick-with-Vitamin-E--Aloe-Vera---85g/19765328/buy",
                        "productId": 19765328,
                        "product": "Blue Heaven Over & Out Makeup Remover Stick with Vitamin E & Aloe Vera - 8.5g",
                        "productName": "Blue Heaven Over & Out Makeup Remover Stick with Vitamin E & Aloe Vera - 8.5g",
                        "searchImage": "http://assets.myntassets.com/assets/images/19765328/2022/9/7/53351f08-4ec1-43c8-a17f-165eb73316191662537552410BlueHeavenOverOutMakeupRemoverSticks85gm1.jpg",
                        "mrp": 200,
                        "price": 130,
                        "discount": 70,
                        "brand": "Blue Heaven",
                        "rating": 4.4,
                        "displayDiscountLabel": "(35% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Makeup-Remover/Garnier/Garnier-Skin-Naturals-Micellar-Cleansing-Water-125-ml--Pink/6610914/buy",
                        "productId": 6610914,
                        "product": "Garnier Skin Naturals Micellar Cleansing Water 125 ml- Pink",
                        "productName": "Garnier Skin Naturals Micellar Cleansing Water 125 ml- Pink",
                        "searchImage": "http://assets.myntassets.com/assets/images/6610914/2022/10/31/33be49cf-9232-4d76-9d0b-5903f7d449261667215687915-Garnier-Skin-Naturals-Micellar-Cleansing-Water-125-ml--Pink--1.jpg",
                        "mrp": 225,
                        "price": 191,
                        "discount": 34,
                        "brand": "Garnier",
                        "rating": 4.5,
                        "displayDiscountLabel": "(15% OFF)",
                        "available": true
                    }
                ],
                "media": [
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/990c54d2-1b61-465f-9a58-1277b55d98b01684927134846-DSC_7007.jpg",
                        "resolution": "2008X2677",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/fa8a2ab0-c334-4d35-ba09-89ae1c68dbea1684927134823-DSC_7009.jpg",
                        "resolution": "1583X2110",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/991eed00-9ec8-4cd7-98a0-9f494981315f1684927134775-IMG_4982.JPG",
                        "resolution": "1381X1841",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/b2452935-d1b1-4a17-bc6c-550e0883b4c21684927134751-IMG_4983.JPG",
                        "resolution": "1474X1965",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/47c07888-1d67-4e03-b15c-e255223978161684927134799-DSC_7022.jpg",
                        "resolution": "1967X2623",
                        "aspectRatio": 0.75
                    }
                ],
                "elementId": "POST_IMAGE",
                "isLiked": "NONE",
                "text": "I trust 's the Makeup Remover Lotion from @EsteelauderindiaIt's gentle yet effective, and it helps me keep my skin feeling clean and refreshed. Plus, it's free of harsh chemicals, so it's a great choice for those who prefer natural skincare. <Hashtag id=womenbeauty>womenbeauty</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=esteelauder>esteelauder</Hashtag> <Hashtag id=makeupremover>makeupremover</Hashtag> <Hashtag id=womenmakeup>womenmakeup</Hashtag> <Hashtag id=makeupkit>makeupkit</Hashtag> <Hashtag id=MyntraStyleSquadBeauty>MyntraStyleSquadBeauty</Hashtag>",
                "products": [
                    1981974,
                    14295594,
                    20187658,
                    21070274,
                    308147,
                    17924894,
                    1452979,
                    2052298,
                    19765328,
                    6610914,
                    9589553,
                    8886471,
                    16231296,
                    6610915,
                    7638887,
                    18694482,
                    21070276,
                    11633146,
                    6610916,
                    17614182,
                    6674980
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/121662/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                },
                "postId": 121662,
                "isBookmarked": false
            }
        },
        "componentUId": "7473f441-37af-4930-b6a6-d2f34b507a26"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "contentProps": {
                "postId": 119699,
                "products": [
                    22833640,
                    19407330,
                    15352574,
                    22177360,
                    15555162,
                    20991284,
                    21495852,
                    22177352,
                    22833644,
                    20991292,
                    15258004,
                    19407308,
                    22177358,
                    22177354,
                    20991298,
                    15257998,
                    19221896,
                    20991286,
                    16042632,
                    16042624,
                    22177350,
                    22177356,
                    20991294,
                    16970784,
                    19407316,
                    16042642,
                    16042646,
                    16042640,
                    22833646,
                    16042636,
                    16042622,
                    16042620,
                    20991290,
                    22833652,
                    22833650,
                    22833648,
                    22833642,
                    19407314,
                    20991300
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/119699/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                },
                "elementId": "POST_VIDEO",
                "isBookmarked": false,
                "likeCount": 1,
                "text": "Tick tock, it's time for style with the Spiky Kids Attractive Square Analog Watch in Blue! ⌚💙 Shop now on Myntra and give your little one a watch they'll love to wear. <Hashtag id=kidswatches>kidswatches</Hashtag> <Hashtag id=myntrakids>myntrakids</Hashtag> <Hashtag id=TimelessStyle>TimelessStyle</Hashtag> <Hashtag id=spiky>spiky</Hashtag>",
                "productPills": [
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Unisex-Kids-Straps-Analogue-Automatic-Watch-SPKEVA10C3BLU/22833640/buy",
                        "productId": 22833640,
                        "product": "Spiky Unisex Kids Straps Analogue Automatic Watch SPKEVA10_C3_BLU",
                        "productName": "Spiky Unisex Kids Straps Analogue Automatic Watch SPKEVA10_C3_BLU",
                        "searchImage": "http://assets.myntassets.com/assets/images/22833640/2023/4/20/27617cff-d0b8-4344-9d50-30846237eb781681983422073Watches1.jpg",
                        "mrp": 999,
                        "price": 599,
                        "discount": 400,
                        "brand": "Spiky",
                        "rating": 0,
                        "displayDiscountLabel": "(40% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Unisex-Kids-Grey-Dial--Black-Straps-Digital-Multi-Function-Automatic-Watch/19407330/buy",
                        "productId": 19407330,
                        "product": "Spiky Unisex Kids Grey Dial & Black Straps Digital Multi Function Automatic Watch",
                        "productName": "Spiky Unisex Kids Grey Dial & Black Straps Digital Multi Function Automatic Watch",
                        "searchImage": "http://assets.myntassets.com/assets/images/19407330/2022/8/5/51df01bb-2d72-4fd1-b414-4e43b03daaca1659708237632SpikyBlackSportyDigitalWristWatch1.jpg",
                        "mrp": 599,
                        "price": 539,
                        "discount": 60,
                        "brand": "Spiky",
                        "rating": 4.3,
                        "displayDiscountLabel": "(10% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Unisex-Kids-Pink-Dial-White-Straps-Analogue-Watch-2DiryaLpinkWht/15352574/buy",
                        "productId": 15352574,
                        "product": "Spiky Unisex Kids Pink Dial& White Straps Analogue Watch 2Dirya_Lpink_Wht",
                        "productName": "Spiky Unisex Kids Pink Dial& White Straps Analogue Watch 2Dirya_Lpink_Wht",
                        "searchImage": "http://assets.myntassets.com/assets/images/15352574/2021/9/3/e57a73e1-e97a-4a73-a967-4217dad152021630663337429SpikyUnisexKidsPinkEmbellishedDialWhiteStrapsAnalogueWatch2D1.jpg",
                        "mrp": 1499,
                        "price": 1199,
                        "discount": 300,
                        "brand": "Spiky",
                        "rating": 4.4,
                        "displayDiscountLabel": "(20% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-Printed-Round-Dial--Textured-Strap-Analogue-Watch--SPKEVA9UNIWHT/22177360/buy",
                        "productId": 22177360,
                        "product": "Spiky Kids Printed Round Dial & Textured Strap Analogue Watch- SPKEVA9_UNI_WHT",
                        "productName": "Spiky Kids Printed Round Dial & Textured Strap Analogue Watch- SPKEVA9_UNI_WHT",
                        "searchImage": "http://assets.myntassets.com/assets/images/22177360/2023/3/1/0d248899-319e-40ca-9be5-310a3db527331677661512972SpikyUnisexKidsSilver-TonedDialWhiteStrapsAnalogueWatchSPKEV1.jpg",
                        "mrp": 999,
                        "price": 499,
                        "discount": 500,
                        "brand": "Spiky",
                        "rating": 0,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Unisex-Kids-Pink-Printed-Dial--Pink-Straps-Analogue-Watch/15555162/buy",
                        "productId": 15555162,
                        "product": "Spiky Unisex Kids Pink Printed Dial & Pink Straps Analogue Watch",
                        "productName": "Spiky Unisex Kids Pink Printed Dial & Pink Straps Analogue Watch",
                        "searchImage": "http://assets.myntassets.com/assets/images/15555162/2022/5/19/e00a01ca-018b-430d-b9b2-abdb85560ba01652959840735-Spiky-Unisex-Kids-Pink-Printed-Dial--Pink-Straps-Analogue-Wa-1.jpg",
                        "mrp": 599,
                        "price": 491,
                        "discount": 108,
                        "brand": "Spiky",
                        "rating": 4.4,
                        "displayDiscountLabel": "(18% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-Printed-Dial-Digital-Automatic-Watch-SPKEVA7/20991284/buy",
                        "productId": 20991284,
                        "product": "Spiky Kids Printed Dial Digital Automatic Watch SPKEVA7",
                        "productName": "Spiky Kids Printed Dial Digital Automatic Watch SPKEVA7",
                        "searchImage": "http://assets.myntassets.com/assets/images/20991284/2022/11/30/f8a17936-ffec-4e01-9317-7334abbe2f901669795857525SpikyUnisexKidsPrintedDialYellowStrapsDigitalAutomaticWatchS1.jpg",
                        "mrp": 999,
                        "price": 699,
                        "discount": 300,
                        "brand": "Spiky",
                        "rating": 0,
                        "displayDiscountLabel": "(30% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-White-Dial--White-Straps-Digital-Multi-Function-Automatic-Watch-Wrest/21495852/buy",
                        "productId": 21495852,
                        "product": "Spiky Kids White Dial & White Straps Digital Multi Function Automatic Watch Wrest",
                        "productName": "Spiky Kids White Dial & White Straps Digital Multi Function Automatic Watch Wrest",
                        "searchImage": "http://assets.myntassets.com/assets/images/21495852/2023/1/10/7f681324-1152-4ffb-aaf5-d83056df49071673354442991SpikyUnisexKidsDialWhiteStrapsDigitalMultiFunctionAutomaticW1.jpg",
                        "mrp": 599,
                        "price": 539,
                        "discount": 60,
                        "brand": "Spiky",
                        "rating": 0,
                        "displayDiscountLabel": "(10% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-Printed-Round-Dial--Textured-Strap-Analogue-Watch--SPKEVA9UNIBLK/22177352/buy",
                        "productId": 22177352,
                        "product": "Spiky Kids Printed Round Dial & Textured Strap Analogue Watch- SPKEVA9_UNI_BLK",
                        "productName": "Spiky Kids Printed Round Dial & Textured Strap Analogue Watch- SPKEVA9_UNI_BLK",
                        "searchImage": "http://assets.myntassets.com/assets/images/22177352/2023/3/1/41b87180-8a3a-44cd-be2c-d85313bb70de1677663573415SpikyUnisexKidsSilver-TonedDialBlackStrapsAnalogueWatchSPKEV1.jpg",
                        "mrp": 999,
                        "price": 499,
                        "discount": 500,
                        "brand": "Spiky",
                        "rating": 3.2,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-Straps-Analogue-Automatic-Watch-SPKEVA10C4PNK/22833644/buy",
                        "productId": 22833644,
                        "product": "Spiky Kids Straps Analogue Automatic Watch SPKEVA10_C4_PNK",
                        "productName": "Spiky Kids Straps Analogue Automatic Watch SPKEVA10_C4_PNK",
                        "searchImage": "http://assets.myntassets.com/assets/images/22833644/2023/4/20/4b4fa4a0-22fb-4bb7-950a-b2cd352d09b31681983601137Watches1.jpg",
                        "mrp": 999,
                        "price": 599,
                        "discount": 400,
                        "brand": "Spiky",
                        "rating": 0,
                        "displayDiscountLabel": "(40% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Watches/Spiky/Spiky-Kids-Printed-Dial-Digital-Automatic-Watch-SPKEVA8/20991292/buy",
                        "productId": 20991292,
                        "product": "Spiky Kids Printed Dial Digital Automatic Watch SPKEVA8",
                        "productName": "Spiky Kids Printed Dial Digital Automatic Watch SPKEVA8",
                        "searchImage": "http://assets.myntassets.com/assets/images/20991292/2022/11/30/439fea0c-6896-47b7-a6af-1eaace721be51669787838860SpikyUnisexKidsPrintedDialYellowStrapsDigitalAutomaticWatchS1.jpg",
                        "mrp": 999,
                        "price": 499,
                        "discount": 500,
                        "brand": "Spiky",
                        "rating": 3.9,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    }
                ],
                "media": [
                    {
                        "type": "VIDEO",
                        "videoBcId": "STUDIO",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/18/fdc6a4ba-8111-4b41-a616-446437f8ac761684393414463-videoId-6465cda92add456431ffecc2.png",
                        "resolution": "1080X1440",
                        "aspectRatio": 0.75,
                        "brightcove": {
                            "id": "STUDIO"
                        },
                        "matrix": {
                            "id": "6465cda94fe1226fb393a3b2",
                            "url": "https://matrix.myntassets.com/general/6465cda992b2aa2b8f176f52/master.m3u8"
                        }
                    }
                ],
                "isLiked": "NONE"
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "7a58cdd7.b9cb.493c.9695.0eb489c997efjCEMvjlU0i",
                    "uniqueHandle": "Spiky",
                    "name": "Spiky",
                    "description": "Spiky brand is passionate and equally enthusiastic for bringing technological for all our Indian consumers.",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/12/15/6fc3046c-c138-487f-83f9-17c7a4f92abe1671090266540-logo.jpg",
                        "resolution": "2500X2500",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/12/15/d0cfcddd-fde4-4d79-8be1-8ef2f04e6bb71671094080508-hjhhh.jpg",
                        "resolution": "1080X1200",
                        "aspectRatio": 0.9
                    },
                    "posts": 34,
                    "followers": 33,
                    "type": "BRAND"
                },
                "subTitle": "4 hours ago",
                "followDisplayType": "TEXT"
            }
        },
        "componentUId": "347b8014-dc2d-49c0-a12b-c81c2549e91b"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "contentProps": {
                "products": [
                    17680250,
                    17680294,
                    17680328,
                    17680292,
                    17680282,
                    17680306,
                    17680326,
                    17680286,
                    17680276,
                    15657932,
                    15657964,
                    18009298,
                    13566710,
                    17680262,
                    17680246,
                    17680322,
                    17680308,
                    17680260,
                    17680300,
                    17680278,
                    17680298,
                    17680290,
                    17680324,
                    17680274,
                    17680284,
                    17680252,
                    17680264,
                    17680332,
                    23261590,
                    23261604,
                    23261600,
                    23261596,
                    23261606,
                    23261602,
                    23261584,
                    23261586,
                    23261598,
                    23261588,
                    23261608,
                    17680304,
                    17680296,
                    17680316,
                    17680254,
                    17680314,
                    17680248,
                    15657934,
                    15657970,
                    16187726,
                    15657980,
                    15657956
                ],
                "productPills": [
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Heeled-Mules-with-Patent-Finish/17680250/buy",
                        "productId": 17680250,
                        "product": "her by invictus Heeled Mules with Patent Finish",
                        "productName": "her by invictus Heeled Mules with Patent Finish",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680250/2023/5/19/778dfd2f-bc09-495a-ad24-804a14e6d7fb1684487072205-her-by-invictus-Heeled-Mules-with-Patent-Finish-885168448707-1.jpg",
                        "mrp": 2899,
                        "price": 1304,
                        "discount": 1595,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(55% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Heeled-Mules-with-Patent-Finish/17680294/buy",
                        "productId": 17680294,
                        "product": "her by invictus Heeled Mules with Patent Finish",
                        "productName": "her by invictus Heeled Mules with Patent Finish",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680294/2023/3/9/7e786f30-1e3e-4aaf-b2e1-9e8c2e96c8e11678362080478-her-by-invictus-Heeled-Mules-with-Patent-Finish-966167836208-7.jpg",
                        "mrp": 2899,
                        "price": 1014,
                        "discount": 1885,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(65% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Cut-Out-Heeled-Mules/17680328/buy",
                        "productId": 17680328,
                        "product": "her by invictus Cut-Out Heeled Mules",
                        "productName": "her by invictus Cut-Out Heeled Mules",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680328/2023/5/19/ae64c65b-48bc-4343-af96-b3983adf41bc1684487272517-her-by-invictus-Cut-Out-Heeled-Mules-3531684487272203-1.jpg",
                        "mrp": 2999,
                        "price": 1349,
                        "discount": 1650,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(55% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Cut-Out-Heeled-Mules/17680292/buy",
                        "productId": 17680292,
                        "product": "her by invictus Cut-Out Heeled Mules",
                        "productName": "her by invictus Cut-Out Heeled Mules",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680292/2023/5/19/f9f5d048-0367-4cb0-8820-1b1fbb6174a51684487524613-her-by-invictus-Cut-Out-Heeled-Mules-9101684487524241-1.jpg",
                        "mrp": 2999,
                        "price": 1349,
                        "discount": 1650,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(55% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Women-Heeled-Mules/17680282/buy",
                        "productId": 17680282,
                        "product": "her by invictus Women Heeled Mules",
                        "productName": "her by invictus Women Heeled Mules",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680282/2023/5/19/539ffce6-a999-4d88-bbc3-e78e74879ff01684487149398-her-by-invictus-Women-Heeled-Mules-3701684487149104-1.jpg",
                        "mrp": 2899,
                        "price": 1304,
                        "discount": 1595,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(55% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Pumps-with-Contrast-Striped-Detail/17680306/buy",
                        "productId": 17680306,
                        "product": "her by invictus Pumps with Contrast Striped Detail",
                        "productName": "her by invictus Pumps with Contrast Striped Detail",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680306/2023/2/13/70d18759-c3bb-49a2-a7a3-fc9685225d901676289623141-her-by-invictus-Pumps-with-Contrast-Striped-Detail-173167628-1.jpg",
                        "mrp": 2899,
                        "price": 1594,
                        "discount": 1305,
                        "brand": "her by invictus",
                        "rating": 4.2,
                        "displayDiscountLabel": "(45% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Pointed-Toe-Pumps/17680326/buy",
                        "productId": 17680326,
                        "product": "her by invictus Pointed Toe Pumps",
                        "productName": "her by invictus Pointed Toe Pumps",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680326/2023/2/13/f4e682f0-53ab-40a7-a4d9-7d128dc1ce691676289705937-her-by-invictus-Pointed-Toe-Pumps-3721676289705389-1.jpg",
                        "mrp": 2899,
                        "price": 1014,
                        "discount": 1885,
                        "brand": "her by invictus",
                        "rating": 4.3,
                        "displayDiscountLabel": "(65% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Women-Block-Heel-Mules/17680286/buy",
                        "productId": 17680286,
                        "product": "her by invictus Women Block Heel Mules",
                        "productName": "her by invictus Women Block Heel Mules",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680286/2023/2/13/755b6e78-c9af-4e7c-87fb-e94343ecff9a1676289387923-her-by-invictus-Women-Block-Heel-Mules-1721676289387508-1.jpg",
                        "mrp": 2699,
                        "price": 944,
                        "discount": 1755,
                        "brand": "her by invictus",
                        "rating": 0,
                        "displayDiscountLabel": "(65% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Block-Heel-Mules/17680276/buy",
                        "productId": 17680276,
                        "product": "her by invictus Block Heel Mules",
                        "productName": "her by invictus Block Heel Mules",
                        "searchImage": "http://assets.myntassets.com/assets/images/17680276/2023/2/13/daee506f-bb58-4737-8fa9-328c5592ba061676289348604-her-by-invictus-Block-Heel-Mules-4561676289348198-1.jpg",
                        "mrp": 2699,
                        "price": 809,
                        "discount": 1890,
                        "brand": "her by invictus",
                        "rating": 3.8,
                        "displayDiscountLabel": "(70% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Heels/her-by-invictus/her-by-invictus-Women-Beige-Solid-Pumps/15657932/buy",
                        "productId": 15657932,
                        "product": "her by invictus Women Beige Solid Pumps",
                        "productName": "her by invictus Women Beige Solid Pumps",
                        "searchImage": "http://assets.myntassets.com/assets/images/15657932/2022/11/29/e493b743-a019-42e9-961f-7f2877614ffc1669724228246-her-by-invictus-Women-Beige-Solid-Pumps-7911669724228162-7.jpg",
                        "mrp": 2699,
                        "price": 1079,
                        "discount": 1620,
                        "brand": "her by invictus",
                        "rating": 4,
                        "displayDiscountLabel": "(60% OFF)",
                        "available": true
                    }
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/121583/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                },
                "elementId": "POST_IMAGE",
                "isLiked": "NONE",
                "isBookmarked": false,
                "text": "Mules that mean business: Upgrade your workwear with ease!🖤👩‍💻 <Hashtag id=myntrafashion>myntrafashion</Hashtag> <Hashtag id=invictus>invictus</Hashtag> <Hashtag id=mules>mules</Hashtag> <Hashtag id=black>black</Hashtag> <Hashtag id=slingback>slingback</Hashtag> <Hashtag id=heels>heels</Hashtag> <Hashtag id=kittenheels>kittenheels</Hashtag> <Hashtag id=cushioned>cushioned</Hashtag> <Hashtag id=womensfootwear>womensfootwear</Hashtag> <Hashtag id=herbyinvictus>herbyinvictus</Hashtag> <Hashtag id=everydaywear>everydaywear</Hashtag> <Hashtag id=workready>workready</Hashtag> <Hashtag id=patent>patent</Hashtag> <Hashtag id=wardrobeessentials>wardrobeessentials</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag>",
                "postId": 121583,
                "likeCount": 1,
                "media": [
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/b253cfce-b93a-4861-91b4-1b401b01d83a1684925631460-INV.jpg",
                        "resolution": "900X1200",
                        "aspectRatio": 0.75
                    }
                ]
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "b8277a5a.76fc.4d8b.a003.8f2dd8ed5d14re6K3yCKgz",
                    "uniqueHandle": "INVICTUS",
                    "name": "I N V I C T U S",
                    "description": "Our designs elevate workwear with updated trends \nto create clothing that is multi-purpose, comfortable, and compatible for a dynamic lifestyle.",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2021/7/8/8f7077f8-af44-4563-b636-1e06d76d81551625743116913-croppedImage-1625743116315.jpg",
                        "resolution": "951X951",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2021/7/8/89913d9e-fc2e-4621-a780-853950d2e7ec1625741335331-croppedImage-1625741334846.jpg",
                        "resolution": "1438X1598",
                        "aspectRatio": 0.9
                    },
                    "posts": 101,
                    "followers": 4007,
                    "type": "BRAND"
                },
                "subTitle": "4 hours ago",
                "followDisplayType": "TEXT"
            }
        },
        "componentUId": "50f0e3bc-b188-46ff-a0ef-162da5605e5c"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "contentProps": {
                "products": [
                    17784150,
                    17859296,
                    17859356,
                    16618544,
                    14703698,
                    17784166,
                    21469842,
                    21927886,
                    20469906,
                    19439998,
                    18650958,
                    14589242,
                    17664538,
                    20972710,
                    18650968,
                    22540952,
                    17409086,
                    20757320,
                    21469816,
                    22391948,
                    21954850
                ],
                "productPills": [
                    {
                        "landingPageUrl": "Track-Pants/HRX-by-Hrithik-Roshan/HRX-By-Hrithik-Roshan-Lifestyle-Men-Quartz-Pink-Bio-Wash-Solid-Track-Pants/17784150/buy",
                        "productId": 17784150,
                        "product": "HRX By Hrithik Roshan Lifestyle Men Quartz Pink Bio-Wash Solid Track Pants",
                        "productName": "HRX By Hrithik Roshan Lifestyle Men Quartz Pink Bio-Wash Solid Track Pants",
                        "searchImage": "http://assets.myntassets.com/assets/images/17784150/2022/7/13/163166a1-89e3-4ef6-ac42-2acd49b73ba61657709109261-HRX-by-Hrithik-Roshan-Men-Track-Pants-2061657709108525-1.jpg",
                        "mrp": 1499,
                        "price": 599,
                        "discount": 900,
                        "brand": "HRX by Hrithik Roshan",
                        "rating": 4,
                        "displayDiscountLabel": "(60% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/HRX-by-Hrithik-Roshan/HRX-By-Hrithik-Roshan-Men-Clay-Pure-Cotton-Printed-Yoga-Sustainable-Joggers/17859296/buy",
                        "productId": 17859296,
                        "product": "HRX By Hrithik Roshan Men Clay Pure Cotton Printed Yoga Sustainable Joggers",
                        "productName": "HRX By Hrithik Roshan Men Clay Pure Cotton Printed Yoga Sustainable Joggers",
                        "searchImage": "http://assets.myntassets.com/assets/images/17859296/2022/10/3/ff2d4ae6-0ee0-4850-9cb6-46c9f1bda0f41664800964932-HRX-by-Hrithik-Roshan-Men-Track-Pants-7691664800964267-1.jpg",
                        "mrp": 1699,
                        "price": 679,
                        "discount": 1020,
                        "brand": "HRX by Hrithik Roshan",
                        "rating": 4.6,
                        "displayDiscountLabel": "(60% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/HRX-by-Hrithik-Roshan/HRX-By-Hrithik-Roshan-Yoga-Men-Jade-Organic-Cotton-Typography-Track-Pants/17859356/buy",
                        "productId": 17859356,
                        "product": "HRX By Hrithik Roshan Yoga Men Jade Organic Cotton Typography Track Pants",
                        "productName": "HRX By Hrithik Roshan Yoga Men Jade Organic Cotton Typography Track Pants",
                        "searchImage": "http://assets.myntassets.com/assets/images/17859356/2022/5/19/7afb206d-4b81-4b06-afc8-835cc1444a301652947435078-HRX-By-Hrithik-Roshan-Yoga-Men-Jade-Organic-Cotton-Typograph-4.jpg",
                        "mrp": 1799,
                        "price": 629,
                        "discount": 1170,
                        "brand": "HRX by Hrithik Roshan",
                        "rating": 4,
                        "displayDiscountLabel": "(65% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/Kook-N-Keech/Kook-N-Keech-Disney-Men-Lavender-Colourblocked-Printed-Mid-Rise-Elasticated-Track-Pants/16618544/buy",
                        "productId": 16618544,
                        "product": "Kook N Keech Disney Men Lavender Colourblocked Printed Mid Rise Elasticated Track Pants",
                        "productName": "Kook N Keech Disney Men Lavender Colourblocked Printed Mid Rise Elasticated Track Pants",
                        "searchImage": "http://assets.myntassets.com/assets/images/16618544/2022/3/8/f4db259f-de90-4289-a524-5d938ceba49c1646741208201-Kook-N-Keech-Men-Track-Pants-5631646741207573-1.jpg",
                        "mrp": 1899,
                        "price": 474,
                        "discount": 1425,
                        "brand": "Kook N Keech",
                        "rating": 4,
                        "displayDiscountLabel": "(75% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/HRX-by-Hrithik-Roshan/HRX-By-Hrithik-Roshan-Yoga-Men-Myrobolan-Rapid-Dry-Colourblock--Sustainable-Joggers/14703698/buy",
                        "productId": 14703698,
                        "product": "HRX By Hrithik Roshan Yoga Men Myrobolan Rapid-Dry Colourblock  Sustainable Joggers",
                        "productName": "HRX By Hrithik Roshan Yoga Men Myrobolan Rapid-Dry Colourblock  Sustainable Joggers",
                        "searchImage": "http://assets.myntassets.com/assets/images/14703698/2021/12/27/133b883f-1fdd-4b71-8767-772455ba12d51640594942045-HRX-by-Hrithik-Roshan-Men-Track-Pants-2881640594941375-1.jpg",
                        "mrp": 2099,
                        "price": 629,
                        "discount": 1470,
                        "brand": "HRX by Hrithik Roshan",
                        "rating": 4.1,
                        "displayDiscountLabel": "(70% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/HRX-by-Hrithik-Roshan/HRX-By-Hrithik-Roshan-Lifestyle-Men-Quartz-Pink-Bio-Wash-Brand-Carrier-Track-Pants/17784166/buy",
                        "productId": 17784166,
                        "product": "HRX By Hrithik Roshan Lifestyle Men Quartz Pink Bio-Wash Brand Carrier Track Pants",
                        "productName": "HRX By Hrithik Roshan Lifestyle Men Quartz Pink Bio-Wash Brand Carrier Track Pants",
                        "searchImage": "http://assets.myntassets.com/assets/images/17784166/2022/4/28/51bc7d53-ae06-4241-a74d-92b6901d7edb1651127440927-HRX-by-Hrithik-Roshan-Men-Track-Pants-4981651127440299-4.jpg",
                        "mrp": 1499,
                        "price": 449,
                        "discount": 1050,
                        "brand": "HRX by Hrithik Roshan",
                        "rating": 4.4,
                        "displayDiscountLabel": "(70% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/CHKOKKO/CHKOKKO-Men-Relaxed-Fit-Cotton-Track-Pants/21469842/buy",
                        "productId": 21469842,
                        "product": "CHKOKKO Men Relaxed-Fit Cotton Track Pants",
                        "productName": "CHKOKKO Men Relaxed-Fit Cotton Track Pants",
                        "searchImage": "http://assets.myntassets.com/assets/images/21469842/2023/1/9/d1e42385-b0f0-47f7-b8ec-021e2ce49b2c1673257156750TrackPants1.jpg",
                        "mrp": 1999,
                        "price": 1099,
                        "discount": 900,
                        "brand": "CHKOKKO",
                        "rating": 0,
                        "displayDiscountLabel": "(45% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/Allen-Solly-Tribe/Allen-Solly-Tribe-Men-Regular-Fit-Mid-Rise-Joggers/21927886/buy",
                        "productId": 21927886,
                        "product": "Allen Solly Tribe Men Regular Fit Mid Rise Joggers",
                        "productName": "Allen Solly Tribe Men Regular Fit Mid Rise Joggers",
                        "searchImage": "http://assets.myntassets.com/assets/images/21927886/2023/2/10/e336ad8f-98a6-4014-9346-9199ec9297371676031677870MenSolidRegularFitPinkJoggerPants1.jpg",
                        "mrp": 1999,
                        "price": 999,
                        "discount": 1000,
                        "brand": "Allen Solly Tribe",
                        "rating": 4.8,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/ADIDAS-Originals/ADIDAS-Originals-Men-Trefoil-Essential-Joggers/20469906/buy",
                        "productId": 20469906,
                        "product": "ADIDAS Originals Men Trefoil Essential Joggers",
                        "productName": "ADIDAS Originals Men Trefoil Essential Joggers",
                        "searchImage": "http://assets.myntassets.com/assets/images/20469906/2023/3/20/a7aa8f61-a384-4dfd-adff-075e539d8a4f1679312695965-ADIDAS-Originals-Men-Track-Pants-2611679312695300-1.jpg",
                        "mrp": 5599,
                        "price": 3919,
                        "discount": 1680,
                        "brand": "ADIDAS Originals",
                        "rating": 0,
                        "displayDiscountLabel": "(30% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Track-Pants/RARE-RABBIT/RARE-RABBIT-Men-Pink-Solid-Cotton-Slim-Fit-Joggers/19439998/buy",
                        "productId": 19439998,
                        "product": "RARE RABBIT Men Pink Solid Cotton Slim-Fit Joggers",
                        "productName": "RARE RABBIT Men Pink Solid Cotton Slim-Fit Joggers",
                        "searchImage": "http://assets.myntassets.com/assets/images/19439998/2022/8/8/c4cf4775-6829-4e69-bf50-2dee400810731659964582842MensSolidSlimFitTrackPant1.jpg",
                        "mrp": 2999,
                        "price": 2249,
                        "discount": 750,
                        "brand": "RARE RABBIT",
                        "rating": 0,
                        "displayDiscountLabel": "(25% OFF)",
                        "available": true
                    }
                ],
                "media": [
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/0de3fa63-4c59-4bc7-8af0-2f3c629e50a31684961082729-IMG_2859.JPG",
                        "resolution": "2792X3722",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/2f66792f-7ac9-457c-9e4b-c091ce4271f41684961082704-IMG_2858.JPG",
                        "resolution": "2577X3436",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/d8cc12ec-6ccd-4547-adc2-16b5a3bd120d1684961082750-IMG_2860.JPG",
                        "resolution": "3024X4032",
                        "aspectRatio": 0.75
                    }
                ],
                "elementId": "POST_IMAGE",
                "postId": 121802,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 0,
                "text": "When I wear comfortable clothes in the evening, I feel like I’m flying.\u0001\u0001 <Hashtag id=mencasualwear>mencasualwear</Hashtag> <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=mentrackpants>mentrackpants</Hashtag> <Hashtag id=hrx>hrx</Hashtag> <Hashtag id=hrxmen>hrxmen</Hashtag>",
                "topics": [
                    {
                        "id": "5e3d12fb6c63697fc3335b84",
                        "name": "Men's Casualwear ",
                        "followers": 283573,
                        "posts": 8696,
                        "isFollowing": true
                    }
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/121802/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                }
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "c73b830a.9f43.417f.9976.900a5d1a33fctXwXtUuuPp",
                    "uniqueHandle": "ankitvaid",
                    "name": "Ankit Vaid",
                    "description": "StyleSquad\nFRAPPER 👻",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/4/7/59327170-5302-459a-a789-f7836a8024d21649323816480-Ankit-Vaid.png",
                        "resolution": "500X500",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2021/11/3/5892fdc3-c6c2-47d7-9e13-9be33e4da9611635915878641-FB2AF2F4-0B0A-4898-B8DA-820A864448D6.jpeg",
                        "resolution": "3024X4032",
                        "aspectRatio": 0.75
                    },
                    "posts": 400,
                    "followers": 8531,
                    "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
        },
        "componentUId": "435eadd2-2892-4e0e-8965-4040a6b3abf7"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "contentProps": {
                "elementId": "POST_IMAGE",
                "isLiked": "NONE",
                "likeCount": 1,
                "text": "Low high- floral dress with cut-out and a one shoulder baloon sleeve..Seems like someone said, let's put all the coolest trends in one dress. What a fun fit! <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=dresses>dresses</Hashtag> <Hashtag id=mididress>mididress</Hashtag> <Hashtag id=floralprint>floralprint</Hashtag> <Hashtag id=cutoutdress>cutoutdress</Hashtag> <Hashtag id=puffsleeves>puffsleeves</Hashtag> <Hashtag id=highlowdress>highlowdress</Hashtag> <Hashtag id=tokyotalkies>tokyotalkies</Hashtag> <Hashtag id=multicolorwomen>multicolorwomen</Hashtag> <Hashtag id=floralwomen>floralwomen</Hashtag>",
                "products": [
                    21980884,
                    22669342,
                    22858934,
                    17511626,
                    21780024,
                    19513146,
                    22408118,
                    21054250,
                    22430690,
                    23085056,
                    22432768,
                    17576074,
                    11364138,
                    19185510,
                    20258414,
                    22408154,
                    17821232,
                    18655834,
                    19803654,
                    20665214,
                    20676476
                ],
                "media": [
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/79e1fe1e-412d-4a37-aaca-917526ef0b121684949131711-DSC08321.JPG",
                        "resolution": "1536X2048",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/f9dfcd35-be8a-4e84-bbc5-1b9fe6c88f281684949131825-DSC08387.JPG",
                        "resolution": "1536X2048",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/24/00c745df-6d5a-42b0-a0cb-26d975903afc1684949131800-DSC08394.JPG",
                        "resolution": "1536X2048",
                        "aspectRatio": 0.75
                    }
                ],
                "postId": 121723,
                "isBookmarked": false,
                "productPills": [
                    {
                        "landingPageUrl": "Dresses/Tokyo-Talkies/Tokyo-Talkies-Puff-Sleeves-Floral-High-Low-Maxi-Dress/21980884/buy",
                        "productId": 21980884,
                        "product": "Tokyo Talkies Puff Sleeves Floral High-Low Maxi Dress",
                        "productName": "Tokyo Talkies Puff Sleeves Floral High-Low Maxi Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/21980884/2023/2/15/3b730caa-c7d9-4aaa-8483-c7b5444be5941676436862913TokyoTalkiesRedFloralMaxiDress1.jpg",
                        "mrp": 2199,
                        "price": 967,
                        "discount": 1232,
                        "brand": "Tokyo Talkies",
                        "rating": 4.4,
                        "displayDiscountLabel": "(56% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Tokyo-Talkies/Tokyo-Talkies-Peach--Pink-Floral-Printed-One-Shoulder-Cut-Out-A-Line-Midi-Dress/22669342/buy",
                        "productId": 22669342,
                        "product": "Tokyo Talkies Peach & Pink Floral Printed One Shoulder Cut-Out A-Line Midi Dress",
                        "productName": "Tokyo Talkies Peach & Pink Floral Printed One Shoulder Cut-Out A-Line Midi Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/22669342/2023/4/6/d0e751ac-685f-4fd1-b061-3aea38e9131e1680769974503Dresses1.jpg",
                        "mrp": 2199,
                        "price": 699,
                        "discount": 1500,
                        "brand": "Tokyo Talkies",
                        "rating": 0,
                        "displayDiscountLabel": "(Rs. 1500 OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Tokyo-Talkies/Tokyo-Talkies-Peach-Floral-Printed-Cut-Out-Tiered-Fit--Flare-Dress/22858934/buy",
                        "productId": 22858934,
                        "product": "Tokyo Talkies Peach Floral Printed Cut-Out Tiered Fit & Flare Dress",
                        "productName": "Tokyo Talkies Peach Floral Printed Cut-Out Tiered Fit & Flare Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/22858934/2023/4/24/c80ef85e-5148-4c13-8ab2-9950bcdac55b1682337204575TokyoTalkiesPeach-ColouredFloralPrintFlaredSleeveFitFlareDre1.jpg",
                        "mrp": 2199,
                        "price": 699,
                        "discount": 1500,
                        "brand": "Tokyo Talkies",
                        "rating": 0,
                        "displayDiscountLabel": "(Rs. 1500 OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/SASSAFRAS/SASSAFRAS-Women-Classic-White-Floral-Cut-Out-Dress/17511626/buy",
                        "productId": 17511626,
                        "product": "SASSAFRAS Women Classic White Floral Cut-Out Dress",
                        "productName": "SASSAFRAS Women Classic White Floral Cut-Out Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/17511626/2022/3/24/feb807e3-5d2b-4300-8307-afb0a0c2b4a71648119654813-SASSAFRAS-Women-Dresses-6601648119654301-1.jpg",
                        "mrp": 1599,
                        "price": 527,
                        "discount": 1072,
                        "brand": "SASSAFRAS",
                        "rating": 4.2,
                        "displayDiscountLabel": "(67% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Stylecast-X-Hersheinbox/Stylecast-X-Hersheinbox-Floral-Print-Maxi-Dress-With-Cut-Out-Back-Detail/21780024/buy",
                        "productId": 21780024,
                        "product": "Stylecast X Hersheinbox Floral Print Maxi Dress With Cut-Out Back Detail",
                        "productName": "Stylecast X Hersheinbox Floral Print Maxi Dress With Cut-Out Back Detail",
                        "searchImage": "http://assets.myntassets.com/assets/images/21780024/2023/5/23/c2fac588-ac72-4ac4-add1-59ddae2f3fe31684844499044StylecastXHersheinboxFloralPrintMaxiDressWithCut-OutBackDeta1.jpg",
                        "mrp": 2509,
                        "price": 1881,
                        "discount": 628,
                        "brand": "Stylecast X Hersheinbox",
                        "rating": 0,
                        "displayDiscountLabel": "(25% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Stylecast-X-Hersheinbox/Stylecast-X-Hersheinbox-Shoulder-Straps-Floral-Georgette-Maxi-Dress-With-Cut-Out-Detail/19513146/buy",
                        "productId": 19513146,
                        "product": "Stylecast X Hersheinbox Shoulder Straps Floral Georgette Maxi Dress With Cut-Out Detail",
                        "productName": "Stylecast X Hersheinbox Shoulder Straps Floral Georgette Maxi Dress With Cut-Out Detail",
                        "searchImage": "http://assets.myntassets.com/assets/images/19513146/2023/1/30/58d67bd3-0d13-43a4-84a0-b6fe080c59e51675062211651DressesStylecastXHersheinboxWomenDressesStylecastXHersheinbo1.jpg",
                        "mrp": 2456,
                        "price": 1719,
                        "discount": 737,
                        "brand": "Stylecast X Hersheinbox",
                        "rating": 0,
                        "displayDiscountLabel": "(30% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/SASSAFRAS/SASSAFRAS-Floral-Printed-Off-Shoulder-Cut-Out-Detail-Fit--Flare-Mini-Dress/22408118/buy",
                        "productId": 22408118,
                        "product": "SASSAFRAS Floral Printed Off-Shoulder Cut-Out Detail Fit & Flare Mini Dress",
                        "productName": "SASSAFRAS Floral Printed Off-Shoulder Cut-Out Detail Fit & Flare Mini Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/22408118/2023/3/18/79c83067-e5bd-40a7-a55e-427aa814e9d51679100213618Dresses1.jpg",
                        "mrp": 1999,
                        "price": 919,
                        "discount": 1080,
                        "brand": "SASSAFRAS",
                        "rating": 0,
                        "displayDiscountLabel": "(54% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Stylecast-X-Hersheinbox/Stylecast-X-Hersheinbox-Square-Neck-Floral-Sheath-Mini-Dress-With-Cut-Out-Detail/21054250/buy",
                        "productId": 21054250,
                        "product": "Stylecast X Hersheinbox Square Neck Floral Sheath Mini Dress With Cut-Out Detail",
                        "productName": "Stylecast X Hersheinbox Square Neck Floral Sheath Mini Dress With Cut-Out Detail",
                        "searchImage": "http://assets.myntassets.com/assets/images/21054250/2023/1/9/a3634c57-f0fe-4085-ab0d-4576c94f39c01673261631871-Stylecast-X-Hersheinbox-Women-Dresses-6201673261631432-1.jpg",
                        "mrp": 1899,
                        "price": 1234,
                        "discount": 665,
                        "brand": "Stylecast X Hersheinbox",
                        "rating": 0,
                        "displayDiscountLabel": "(35% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/Styli/Styli-Floral-Print-Cut-Out-Maxi-Dress/22430690/buy",
                        "productId": 22430690,
                        "product": "Styli Floral Print Cut-Out Maxi Dress",
                        "productName": "Styli Floral Print Cut-Out Maxi Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/22430690/2023/3/20/e2f380e3-61b3-49e2-9847-c32b74fdbeb01679286843707StyliWhiteFloralPrintMaxiDress1.jpg",
                        "mrp": 1499,
                        "price": 1049,
                        "discount": 450,
                        "brand": "Styli",
                        "rating": 0,
                        "displayDiscountLabel": "(30% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Dresses/20Dresses/20Dresses-Floral-Printed-Ruched-Cut-Out-A-Line-Maxi-Dress/23085056/buy",
                        "productId": 23085056,
                        "product": "20Dresses Floral Printed Ruched Cut-Out A-Line Maxi Dress",
                        "productName": "20Dresses Floral Printed Ruched Cut-Out A-Line Maxi Dress",
                        "searchImage": "http://assets.myntassets.com/assets/images/23085056/2023/5/8/e8ea3ebd-7c1d-49f7-ab62-38c1e15aacb4168355940050320DressesMulticolouredFloralPrintOff-ShoulderMaxiDress1.jpg",
                        "mrp": 2995,
                        "price": 2695,
                        "discount": 300,
                        "brand": "20Dresses",
                        "rating": 0,
                        "displayDiscountLabel": "(10% OFF)",
                        "available": true
                    }
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/121723/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                }
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "bdd8a28e.fd51.4914.93fb.103401cab333OUYchkfkun",
                    "uniqueHandle": "swagata_dev",
                    "name": "Swagata Dev",
                    "description": "Forever orbiting around trends, dogs, vacations & sci-fi",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/4/7/60fc40ea-fd43-4322-857a-46ec82963a031649327745853-Swagata-Dev.png",
                        "resolution": "500X500",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2020/2/20/82c1dfc0-b47c-496d-916e-a746e284d1cb1582182427697-croppedImage.jpg",
                        "resolution": "480X533",
                        "aspectRatio": 0.9
                    },
                    "posts": 374,
                    "followers": 20529,
                    "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
        },
        "componentUId": "861c6821-482f-46c9-b7bd-fd0ead08eb29"
    },
    {
        "type": "MynstaPost",
        "elementId": "TitleCard",
        "props": {
            "contentProps": {
                "elementId": "POST_IMAGE",
                "postId": 121805,
                "isLiked": "NONE",
                "productPills": [
                    {
                        "landingPageUrl": "Shirts/Hancock/Hancock-Men-Sky-Blue-Slim-Fit-French-Cuff-Formal-Shirt/14947476/buy",
                        "productId": 14947476,
                        "product": "Hancock Men Sky Blue Slim Fit French Cuff Formal Shirt",
                        "productName": "Hancock Men Sky Blue Slim Fit French Cuff Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/14947476/2021/8/26/9afe9d5c-6ecc-4765-be70-fa2e2aa97ca41629956681049-Hancock-Men-Blue-Pure-Cotton-Slim-Fit-Solid-Formal-Shirt-242-1.jpg",
                        "mrp": 2499,
                        "price": 823,
                        "discount": 1676,
                        "brand": "Hancock",
                        "rating": 3.5,
                        "displayDiscountLabel": "(Rs. 1676 OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Louis-Philippe/Louis-Philippe-Men-Blue-Formal-Shirt/18714138/buy",
                        "productId": 18714138,
                        "product": "Louis Philippe Men Blue Formal Shirt",
                        "productName": "Louis Philippe Men Blue Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/18714138/2022/6/13/e9362c2c-83b3-4883-92d5-982a57933efc1655108499566LouisPhilippeBlueShirt1.jpg",
                        "mrp": 2399,
                        "price": 1559,
                        "discount": 840,
                        "brand": "Louis Philippe",
                        "rating": 4.3,
                        "displayDiscountLabel": "(35% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Peter-England-Elite/Peter-England-Elite-Men-Blue-Formal-Cotton-Shirt/16938922/buy",
                        "productId": 16938922,
                        "product": "Peter England Elite Men Blue Formal Cotton Shirt",
                        "productName": "Peter England Elite Men Blue Formal Cotton Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/16938922/2022/10/4/95847b7d-b936-4f50-a83b-9599d40db6531664864855133PeterEnglandEliteMenBlueSlimFitPureCottonFormalShirt1.jpg",
                        "mrp": 1799,
                        "price": 1079,
                        "discount": 720,
                        "brand": "Peter England Elite",
                        "rating": 4.3,
                        "displayDiscountLabel": "(40% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Arrow/Arrow-Men-Blue-Formal-Shirt/17084720/buy",
                        "productId": 17084720,
                        "product": "Arrow Men Blue Formal Shirt",
                        "productName": "Arrow Men Blue Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/17084720/2022/2/8/47fa04d5-334d-41cf-8362-678d70a5a6da1644299608443ArrowMenBlueCasualShirt1.jpg",
                        "mrp": 2699,
                        "price": 1214,
                        "discount": 1485,
                        "brand": "Arrow",
                        "rating": 4.3,
                        "displayDiscountLabel": "(55% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Arrow/Arrow-Men-Slim-Fit-Formal-Shirt/21751614/buy",
                        "productId": 21751614,
                        "product": "Arrow Men Slim Fit Formal Shirt",
                        "productName": "Arrow Men Slim Fit Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/21751614/2023/3/30/ea55c6e8-1f32-4893-a62a-14793d25a4da1680172995717-Arrow-Men-Slim-Fit-Formal-Shirt-4891680172994860-1.jpg",
                        "mrp": 2499,
                        "price": 1249,
                        "discount": 1250,
                        "brand": "Arrow",
                        "rating": 0,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Jack--Jones/Jack--Jones-Men-Blue-CottonFormal-Shirt/20846268/buy",
                        "productId": 20846268,
                        "product": "Jack & Jones Men Blue Cotton Formal Shirt",
                        "productName": "Jack & Jones Men Blue Cotton Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/20846268/2022/11/21/e07e106d-89e7-4004-b6c2-5d12d124df941669020822565Shirts1.jpg",
                        "mrp": 2499,
                        "price": 1249,
                        "discount": 1250,
                        "brand": "Jack & Jones",
                        "rating": 4.8,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Van-Heusen/Van-Heusen-Men-Blue-Cotton-Formal-Shirt/19733988/buy",
                        "productId": 19733988,
                        "product": "Van Heusen Men Blue Cotton Formal Shirt",
                        "productName": "Van Heusen Men Blue Cotton Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/19733988/2022/8/30/5887afc4-73df-43bf-a315-93e4b3442a4e1661866046731VanHeusenBlueShirt1.jpg",
                        "mrp": 1999,
                        "price": 1099,
                        "discount": 900,
                        "brand": "Van Heusen",
                        "rating": 0,
                        "displayDiscountLabel": "(45% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Louis-Philippe/Louis-Philippe-Men-Blue-Formal-Shirt/18714136/buy",
                        "productId": 18714136,
                        "product": "Louis Philippe Men Blue Formal Shirt",
                        "productName": "Louis Philippe Men Blue Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/18714136/2022/6/13/4ee15f29-6f18-42e9-b542-c6a22bf70bf11655110113241LouisPhilippeBlueShirt1.jpg",
                        "mrp": 2449,
                        "price": 1591,
                        "discount": 858,
                        "brand": "Louis Philippe",
                        "rating": 4.6,
                        "displayDiscountLabel": "(35% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/Van-Heusen/Van-Heusen-Men-Blue-Checked-Formal-Shirt/20728008/buy",
                        "productId": 20728008,
                        "product": "Van Heusen Men Blue Checked Formal Shirt",
                        "productName": "Van Heusen Men Blue Checked Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/20728008/2022/11/12/29e7c3d1-66da-4277-bbf5-90a65ec512f31668248762572VanHeusenBlueShirt1.jpg",
                        "mrp": 2999,
                        "price": 1499,
                        "discount": 1500,
                        "brand": "Van Heusen",
                        "rating": 4.1,
                        "displayDiscountLabel": "(50% OFF)",
                        "available": true
                    },
                    {
                        "landingPageUrl": "Shirts/INVICTUS/INVICTUS-Men-Slim-Fit-Formal-Shirt/19373514/buy",
                        "productId": 19373514,
                        "product": "INVICTUS Men Slim Fit Formal Shirt",
                        "productName": "INVICTUS Men Slim Fit Formal Shirt",
                        "searchImage": "http://assets.myntassets.com/assets/images/19373514/2022/12/14/d9fa536b-918f-4b2a-b9aa-17e09e8399ef1671009222935-INVICTUS-Men-Blue-Slim-Fit-Casual-Shirt-7351671009222022-1.jpg",
                        "mrp": 1398,
                        "price": 419,
                        "discount": 979,
                        "brand": "INVICTUS",
                        "rating": 3.9,
                        "displayDiscountLabel": "(70% OFF)",
                        "available": true
                    }
                ],
                "commentsData": {
                    "totalComments": 0,
                    "viewAllCommentsUrl": "/studio/121805/comments",
                    "comment": {
                        "authorName": "",
                        "commentText": ""
                    },
                    "inputBox": {
                        "placeHolderText": "Be the first to comment",
                        "addCommentUrl": "/v1/mynsta/comment/create"
                    },
                    "topCommentHidden": false
                },
                "isBookmarked": false,
                "likeCount": 0,
                "text": "There’s nothing like a crisp formal shirt and a bright smile.\u0001\u0001 <Hashtag id=menformalwear>menformalwear</Hashtag> <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=menshirts>menshirts</Hashtag> <Hashtag id=hancock>hancock</Hashtag> <Hashtag id=bluemen>bluemen</Hashtag>",
                "products": [
                    14947476,
                    18714138,
                    16938922,
                    17084720,
                    21751614,
                    20846268,
                    19733988,
                    18714136,
                    20728008,
                    19373514,
                    21670790,
                    21683448,
                    20236736,
                    18352060,
                    21136994,
                    20194696,
                    19085982,
                    19383506,
                    21218462,
                    22012462,
                    19954744
                ],
                "media": [
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/33f8903d-2de3-4ca5-8dee-e88fa2edfb8e1684961680455-IMG_2865.JPG",
                        "resolution": "2313X3084",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/20e496ee-9e18-46a2-91cb-4fb26dd1cf371684961680475-IMG_2866.JPG",
                        "resolution": "2073X2764",
                        "aspectRatio": 0.75
                    },
                    {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2023/5/25/cf4b5384-5773-4270-a35e-77ba822b27281684961680492-IMG_2864.JPG",
                        "resolution": "3024X4032",
                        "aspectRatio": 0.75
                    }
                ]
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                    "uidx": "c73b830a.9f43.417f.9976.900a5d1a33fctXwXtUuuPp",
                    "uniqueHandle": "ankitvaid",
                    "name": "Ankit Vaid",
                    "description": "StyleSquad\nFRAPPER 👻",
                    "profileImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2022/4/7/59327170-5302-459a-a789-f7836a8024d21649323816480-Ankit-Vaid.png",
                        "resolution": "500X500",
                        "aspectRatio": 1
                    },
                    "coverImage": {
                        "type": "IMAGE",
                        "src": "https://assets.myntassets.com/assets/images/2021/11/3/5892fdc3-c6c2-47d7-9e13-9be33e4da9611635915878641-FB2AF2F4-0B0A-4898-B8DA-820A864448D6.jpeg",
                        "resolution": "3024X4032",
                        "aspectRatio": 0.75
                    },
                    "posts": 400,
                    "followers": 8531,
                    "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
        },
        "componentUId": "d021b161-a8b8-4f71-a1a3-292c6cd14645"
    },

    {
      "type": "CAROUSEL_BANNER",
      "props": {
          "titleProps": {
              "elementId": "TitleSubtitleView",
              "mapperId": "LeftAlignedTitle",
              "title": "Guide to Influencers' Most Coveted Looks"
          },
          "contentProps": {
              "elementId": "StudioMediaPager",
              "refId": "19:63249ccbe0696230f7d1830b",
              "bannerRatioToScreen": 0.2,
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/261f591d-e8c9-4f5f-b940-c1bc593388951684832293545-23MAY23-SB-Nav-Eors-Comin-Soon.jpg",
                      "aspectRatio": 0.7659575,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/HASHTAG/menslay/%23menslay"
                      },
                      "id": "19:c3c5d410-5ef2-4e33-bc53-d8d86f3f29dd"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/87ab264e-b891-46e3-8ca1-2aa4e4dbb65c1684832293167-23MAY23-SB-Casual-Wear-Men.jpg",
                      "aspectRatio": 0.7659575,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b84/Men%20Casual"
                      },
                      "id": "19:ae9b3005-5567-49ad-9053-f2713eb711ad"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/aaeeda9f-dde1-49b4-833b-18806d17c3581684832293212-23MAY23-SB-Ethnic-Wear-Men.jpg",
                      "aspectRatio": 0.7659575,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b86/Men%20Ethnic "
                      },
                      "id": "19:c038f7ec-eded-4ab8-a4b6-cc6cccb9a701"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/e7687804-3323-4405-a3f7-510fa645e2111684832293565-23MAY23-SB-Party-Wear-Men.jpg",
                      "aspectRatio": 0.7659575,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b8f/Men%20Party"
                      },
                      "id": "19:9a317be3-25c7-4a5c-8af1-6403198beaf3"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/d39f4045-b97e-45e8-a31e-449e0c00e1a81684832293122-23MAY23-SB-Athleisure-Men.jpg",
                      "aspectRatio": 0.7659575,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b82/Men%20Athleisure "
                      },
                      "id": "19:1aba33f0-cfc7-4fb1-aebb-216d4922669b"
                  }
              ],
              "position": 0,
              "meta": {
                  "title": "Guide to Influencers' Most Coveted Looks",
                  "name": "carousel-banner",
                  "contentType": "List",
                  "publisherTag": "ads,List",
                  "source": "ads"
              }
          }
      },
      "componentUId": "0806cc20-c745-41b6-8429-9bc122e7a50d"
  },
  {
      "type": "LiveVideoDiscovery",
      "elementId": "ItemsHorizontalList",
      "props": {
          "titleProps": {
              "elementId": "TitleView",
              "mapperId": "StudioLiveActionableTitleMapper",
              "leftText": "Get EORS prices before EORS",
              "rightText": "VIEW ALL"
          },
          "contentProps": {
              "elementId": "MediaInfoCardWithTimerLabel",
              "itemMapperId": "StudioLiveDiscoveryItem",
              "items": [
                  {
                      "eventId": "646f2825ced4e42a0f39b882",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/21dc42dc-ca4d-4cc0-b46f-357b64af0bde1685007243656-rhtrgertge.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Solethreads",
                      "description": "Comfortable & Good Looking Footwear for Men At Extra 10% Off",
                      "infoTagText": "LIVE",
                      "animatableTag": true,
                      "videoScheduleType": "LIVE",
                      "startTime": 1685080800,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f18f3ced4e42a0f39b86a",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/fbaf09cb-a808-4126-b657-569a59ee27591685007238420-rgwefwfw.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "MyGlamm",
                      "description": "Summer Makeup must have  At Extra 50% Off ",
                      "infoTagText": "LIVE",
                      "animatableTag": true,
                      "videoScheduleType": "LIVE",
                      "startTime": 1685082600,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f1f191195533f9cffe633",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/26/cc927ce4-e094-46ff-b712-b5f84e5bb2f71685072938017-kiikkd.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Nike",
                      "description": "Elevate your style with Nike At Extra 50% Off",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685086200,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f20ed1195533f9cffe634",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/7bdacebe-8b75-4e3e-8f20-a63e9213eabc1685007269786-egetgetg.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Saloni Sehra",
                      "description": "Organic and Sustainable Beauty  At Extra 10% Off",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685097000,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f217e1195533f9cffe63c",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/2a01bae1-acc9-4544-a2de-56e4d01bbab11685007314617-thrt.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Highlander",
                      "description": "Tshirts Shirts Trousers Jeans Shorts At Extra 20% Off",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685100600,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f22001195533f9cffe644",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/e0bda497-976b-4330-ab91-fdc2811bde971685007323223-ethtee.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "H&M",
                      "description": "Gear up for summers At Extra 10% off ",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685102400,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f22571195533f9cffe645",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/7a08fb51-a6c7-4dc5-aa83-04e16f70c8e31685007338937-wfrferfe.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Hangup",
                      "description": "Hangup is a online fashion retailer that focuses majorly on stylish and trendsetting collections of ready-to-wear collection At Extra 5% Off ",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685104200,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f3356ffedbb35d706ce8e",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/8707a7b8-8489-4578-a969-fa808a2dda271685011825942-ggggrerwww.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Titan",
                      "description": "Effortlessly fabulous from daytime chic to night-time glam",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685106000,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f22ddced4e42a0f39b880",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/1c1acc65-fde1-49b3-9f6c-7ed4f9625d441685007377739-ghhhghtq.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Levi's",
                      "description": "Elevate your Wardrobe with Levis At Extra 20% Off",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685107800,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  },
                  {
                      "eventId": "646f2298ffedbb35d706ce7d",
                      "media": {
                          "type": "Image",
                          "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/25/0e9d7d1e-9768-44ec-bffa-80e334f313e41685007417235-fdtjyyu.jpg",
                          "aspectRatio": 0.67,
                          "resolution": "1152X1728"
                      },
                      "title": "Fastrack World",
                      "description": " Bringing Back the Classics with a Modern Twist ",
                      "infoTagText": "Starts in",
                      "animatableTag": false,
                      "videoScheduleType": "SCHEDULED",
                      "startTime": 1685111400,
                      "timerStartThresholdInMinutes": 60,
                      "timerEndText": "LIVE SOON",
                      "timerStopThresholdInSeconds": 10,
                      "resizeMode": "cover"
                  }
              ]
          }
      },
      "componentUId": "69e5b904-860b-4ab8-8243-0afc4f5e00e0",
      "mapperId": "WhiteBackgroundMapper"
  },
  {
      "type": "BANNER",
      "props": {
          "titleProps": {},
          "contentProps": {
              "refId": "19:b00427cb-42e9-4c1b-a1fd-1d2e778a60a1",
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/ec6aa99e-f6cf-4e2a-b44c-91fe0d62f4941684721530763-Everyday-Page_980x300.gif",
                      "aspectRatio": 3.2666667,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/shop/prebuzz"
                      },
                      "id": "19:b00427cb-42e9-4c1b-a1fd-1d2e778a60a1"
                  }
              ],
              "position": 1,
              "meta": {
                  "title": "",
                  "name": "banner",
                  "contentType": "Studio-strip",
                  "publisherTag": "ads,Studio-strip",
                  "source": "ads"
              },
              "elementId": "StudioMediaPager"
          }
      },
      "componentUId": "430f2583-68b0-4b14-a00f-3b15bfefe944"
  },
  {
      "type": "CAROUSEL_BANNER",
      "props": {
          "titleProps": {
              "elementId": "TitleSubtitleView",
              "mapperId": "LeftAlignedTitle",
              "title": "Exciting Offers On Curated Brands"
          },
          "contentProps": {
              "elementId": "StudioMediaPager",
              "refId": "19:62ce5f1c7350cb4f088bf205",
              "bannerRatioToScreen": 0.7,
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/134fa3f0-5b53-4e98-af11-beb0179503db1684837961674-23MAY23-SB-Anouk-Gold-Men-Brand-1.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/41df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb/Anouk"
                      },
                      "id": "19:2bdeb4fc-1d61-4b55-87ee-da62f0be25e4"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/03dfe537-2333-485b-a954-722fd13e54711684832293488-23MAY23-SB-m_H-Golld-Men-Brand-2.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in/Mast-%26-Harbour"
                      },
                      "id": "19:ff7feee6-6cee-493f-9cde-f09b94b0caeb"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/16991832-4c84-4de4-bc37-d96888854a4f1684832293632-23MAY23-SB-Wrogn-Gold-Men-Brand-3.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/05c675ef.a228.4dbd.af6d.7d477d1543e0oqsl9K7kcT/Wrogn"
                      },
                      "id": "19:6b5be679-c019-4cb7-b08f-f6b7c5d36305"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/16221194-9b45-4bcd-b189-0feb04d32f0e1684832293258-23MAY23-SB-HOP-Gold-Men-Brand-4.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/24981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH/House-of-Pataudi"
                      },
                      "id": "19:a150ea80-cad0-4e38-ab7d-d57e773e8e3d"
                  }
              ],
              "position": 2,
              "meta": {
                  "title": "Exciting Offers On Curated Brands",
                  "name": "carousel-banner",
                  "contentType": "List",
                  "publisherTag": "ads,List",
                  "source": "ads"
              }
          }
      },
      "componentUId": "e699735b-9910-46d5-9a5a-b61c3fbfbc82"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "contentProps": {
              "likeCount": 0,
              "text": "Style your formal look with confidence, fully embracing the true power of your personal style.\u0001\u0001 <Hashtag id=menformalwear>menformalwear</Hashtag> <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=menshirts>menshirts</Hashtag> <Hashtag id=louisphilippe>louisphilippe</Hashtag> <Hashtag id=bluemen>bluemen</Hashtag>",
              "products": [
                  19299798,
                  19023968,
                  22643822,
                  22672232,
                  22670610,
                  20520464,
                  16868600,
                  19872806,
                  19086162,
                  20443856,
                  7204996,
                  20214868,
                  19482068,
                  17761644,
                  19730114,
                  13209140,
                  19086152,
                  22670468,
                  18624912,
                  22670504,
                  19289126
              ],
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/6a2d07fc-2959-4783-92de-63893e2a7cc31684964685272-IMG_2883.JPG",
                      "resolution": "2658X3544",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/bb8ac5d2-a6d0-4fe1-829c-078abeeb20861684964685321-IMG_2885.JPG",
                      "resolution": "2795X3727",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/d172aaaf-4952-4134-9fd1-102a865b4cae1684964685302-IMG_2884.JPG",
                      "resolution": "2773X3697",
                      "aspectRatio": 0.75
                  }
              ],
              "elementId": "POST_IMAGE",
              "isLiked": "NONE",
              "isBookmarked": false,
              "productPills": [
                  {
                      "landingPageUrl": "Shirts/Louis-Philippe/Louis-Philippe-Men-Navy-Blue-Solid-Slim-Fit-Formal-Shirt/19299798/buy",
                      "productId": 19299798,
                      "product": "Louis Philippe Men Navy Blue Solid Slim Fit Formal Shirt",
                      "productName": "Louis Philippe Men Navy Blue Solid Slim Fit Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/19299798/2022/7/29/05d7c01e-fbd0-4486-b159-77a866af09591659096536961LouisPhilippeNavyShirt1.jpg",
                      "mrp": 2799,
                      "price": 2491,
                      "discount": 308,
                      "brand": "Louis Philippe",
                      "rating": 4.2,
                      "displayDiscountLabel": "(11% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Blackberrys/Blackberrys-Men-Cotton-Slim-Fit-Formal-Shirt/19023968/buy",
                      "productId": 19023968,
                      "product": "Blackberrys Men Cotton Slim Fit Formal Shirt",
                      "productName": "Blackberrys Men Cotton Slim Fit Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/19023968/2022/12/16/519cd711-54a9-496b-929e-0e59ac898e931671177660408-Blackberrys-Men-Shirts-2311671177659814-1.jpg",
                      "mrp": 2595,
                      "price": 1167,
                      "discount": 1428,
                      "brand": "Blackberrys",
                      "rating": 4.4,
                      "displayDiscountLabel": "(55% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Raymond/Raymond-Men-Pure-Cotton-Slim-Fit-Opaque-Formal-Shirt/22643822/buy",
                      "productId": 22643822,
                      "product": "Raymond Men Pure Cotton Slim Fit Opaque Formal Shirt",
                      "productName": "Raymond Men Pure Cotton Slim Fit Opaque Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22643822/2023/4/24/610af7ae-3db6-4761-994d-05aab17123361682310856725-Raymond-Men-Shirts-7191682310856324-1.jpg",
                      "mrp": 2099,
                      "price": 1049,
                      "discount": 1050,
                      "brand": "Raymond",
                      "rating": 5,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Louis-Philippe/Louis-Philippe-Textured-Slim-Fit-Pure-Cotton-Formal-Shirt/22672232/buy",
                      "productId": 22672232,
                      "product": "Louis Philippe Textured Slim Fit Pure Cotton Formal Shirt",
                      "productName": "Louis Philippe Textured Slim Fit Pure Cotton Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22672232/2023/5/3/9e48b098-46ca-44f9-8e66-18e4d06e957f1683115761046-Louis-Philippe-Men-Shirts-2771683115760638-1.jpg",
                      "mrp": 2599,
                      "price": 1169,
                      "discount": 1430,
                      "brand": "Louis Philippe",
                      "rating": 0,
                      "displayDiscountLabel": "(55% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Arrow/Arrow-Men-Pure-Cotton-Slim-Fit-Self-Design-Formal-Shirt/22670610/buy",
                      "productId": 22670610,
                      "product": "Arrow Men Pure Cotton Slim Fit Self Design Formal Shirt",
                      "productName": "Arrow Men Pure Cotton Slim Fit Self Design Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22670610/2023/5/8/c1047e18-6ba7-4db0-9453-8a22584db6f01683547233385-Arrow-Men-Pure-Cotton-Slim-Fit-Self-Design-Formal-Shirt-4361-1.jpg",
                      "mrp": 2499,
                      "price": 1374,
                      "discount": 1125,
                      "brand": "Arrow",
                      "rating": 0,
                      "displayDiscountLabel": "(45% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Tommy-Hilfiger/Tommy-Hilfiger-Men-Navy-Blue-Self-Striped-Formal-Shirt/20520464/buy",
                      "productId": 20520464,
                      "product": "Tommy Hilfiger Men Navy Blue Self Striped Formal Shirt",
                      "productName": "Tommy Hilfiger Men Navy Blue Self Striped Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/20520464/2022/11/4/b6ca6eaa-78a2-403b-9b0a-ebef5d615c311667533637564TommyHilfigerMenNavyBlueSolidPoloCollarPureCottonSlimFitT-sh1.jpg",
                      "mrp": 5599,
                      "price": 3919,
                      "discount": 1680,
                      "brand": "Tommy Hilfiger",
                      "rating": 0,
                      "displayDiscountLabel": "(30% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Louis-Philippe-Sport/Louis-Philippe-Sport-Men-Slim-Fit-Opaque-Printed-Formal-Shirt/16868600/buy",
                      "productId": 16868600,
                      "product": "Louis Philippe Sport Men Slim Fit Opaque Printed Formal Shirt",
                      "productName": "Louis Philippe Sport Men Slim Fit Opaque Printed Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/16868600/2023/5/12/87ce0991-96a1-4659-aa54-ded5452e81f71683885570930-Louis-Philippe-Sport-Men-Slim-Fit-Opaque-Printed-Formal-Shir-1.jpg",
                      "mrp": 2799,
                      "price": 2099,
                      "discount": 700,
                      "brand": "Louis Philippe Sport",
                      "rating": 0,
                      "displayDiscountLabel": "(25% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Blackberrys/Blackberrys-Men-Navy-Blue-Slim-Fit-Windowpane-Checks-Checked-Pure-Cotton-Formal-Shirt/19872806/buy",
                      "productId": 19872806,
                      "product": "Blackberrys Men Navy Blue Slim Fit Windowpane Checks Checked Pure Cotton Formal Shirt",
                      "productName": "Blackberrys Men Navy Blue Slim Fit Windowpane Checks Checked Pure Cotton Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/19872806/2022/9/9/095af28a-9dcb-49ba-bc42-99a1e0578ce21662706732880BlackberrysMenNavyBlueSlimFitGridTattersallChecksCheckedCasu1.jpg",
                      "mrp": 2795,
                      "price": 1537,
                      "discount": 1258,
                      "brand": "Blackberrys",
                      "rating": 5,
                      "displayDiscountLabel": "(45% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Van-Heusen/Van-Heusen-Men-Pure-Cotton-Slim-Fit-Opaque-Checked-Formal-Shirt/19086162/buy",
                      "productId": 19086162,
                      "product": "Van Heusen Men Pure Cotton Slim Fit Opaque Checked Formal Shirt",
                      "productName": "Van Heusen Men Pure Cotton Slim Fit Opaque Checked Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/19086162/2023/4/3/9962e704-2bc9-49bd-b42c-662f517c384c1680517337221ShirtsVanHeusenMenShirtsVanHeusenMenShirtsVanHeusenMen1.jpg",
                      "mrp": 1899,
                      "price": 949,
                      "discount": 950,
                      "brand": "Van Heusen",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Louis-Philippe/Louis-Philippe-Men-Solid-Classic-Fit-Pure-Cotton-Formal-Shirt/20443856/buy",
                      "productId": 20443856,
                      "product": "Louis Philippe Men Solid Classic Fit Pure Cotton Formal Shirt",
                      "productName": "Louis Philippe Men Solid Classic Fit Pure Cotton Formal Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/20443856/2022/12/5/24bb2af2-6c5e-40cf-b285-5f0ac81f94ff1670239957500-Louis-Philippe-Men-Shirts-4881670239956858-1.jpg",
                      "mrp": 3499,
                      "price": 3114,
                      "discount": 385,
                      "brand": "Louis Philippe",
                      "rating": 4.5,
                      "displayDiscountLabel": "(11% OFF)",
                      "available": true
                  }
              ],
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/121811/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "postId": 121811
          },
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "c73b830a.9f43.417f.9976.900a5d1a33fctXwXtUuuPp",
                  "uniqueHandle": "ankitvaid",
                  "name": "Ankit Vaid",
                  "description": "StyleSquad\nFRAPPER 👻",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/4/7/59327170-5302-459a-a789-f7836a8024d21649323816480-Ankit-Vaid.png",
                      "resolution": "500X500",
                      "aspectRatio": 1
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2021/11/3/5892fdc3-c6c2-47d7-9e13-9be33e4da9611635915878641-FB2AF2F4-0B0A-4898-B8DA-820A864448D6.jpeg",
                      "resolution": "3024X4032",
                      "aspectRatio": 0.75
                  },
                  "posts": 400,
                  "followers": 8531,
                  "type": "INFLUENCER"
              },
              "subTitle": "3 hours ago",
              "followDisplayType": "TEXT"
          }
      },
      "componentUId": "af8623c6-ea0d-4ba3-9340-ee965f585ecb"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "862dbca3.e1bf.46bf.bbb2.495720ea72d5iUEfLq0L87",
                  "uniqueHandle": "maaesaclothing",
                  "name": "Maaesa",
                  "description": "Crafting Fashion For Everyday Trends 🌺",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/2/14/9bbcfbdc-49d3-4e4e-ab9a-471cef2ff53f1644816082188-croppedImage-1644816080826.jpg",
                      "resolution": "2401X2401",
                      "aspectRatio": 1
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/2/14/1f9d5ee3-7adb-4e26-9c83-72bc84e4f0231644816602902-DSC_0789.jpg",
                      "resolution": "5982X3988",
                      "aspectRatio": 1.5
                  },
                  "posts": 109,
                  "followers": 706,
                  "type": "BRAND"
              },
              "subTitle": "4 hours ago",
              "followDisplayType": "TEXT"
          },
          "contentProps": {
              "isLiked": "NONE",
              "isBookmarked": false,
              "text": "Channel your inner diva with this glamorous flared kurta and dupatta ensemble. <Hashtag id=maaesa>maaesa</Hashtag> <Hashtag id=maaesaclothing>maaesaclothing</Hashtag> <Hashtag id=fashion>fashion</Hashtag> <Hashtag id=womenkurtasets>womenkurtasets</Hashtag> <Hashtag id=womenethnicwear>womenethnicwear</Hashtag> <Hashtag id=ethnicwear>ethnicwear</Hashtag> <Hashtag id=ootd>ootd</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag> <Hashtag id=handmade>handmade</Hashtag> <Hashtag id=indianwear>indianwear</Hashtag> <Hashtag id=tiendye>tiendye</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag>",
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/120700/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "elementId": "POST_VIDEO",
              "postId": 120700,
              "likeCount": 0,
              "products": [
                  14141882,
                  21800462,
                  21800460,
                  14161536,
                  14161534,
                  17984894,
                  21800440,
                  15583506,
                  14141908,
                  14141892,
                  15583510,
                  16408284,
                  15583502,
                  15639278
              ],
              "productPills": [
                  {
                      "landingPageUrl": "Ethnic-Dresses/Maaesa/Maaesa-Blue--White-Printed-Pure-Cotton-Ethnic-Maxi-Dress-With-Matching-Dupatta/14141882/buy",
                      "productId": 14141882,
                      "product": "Maaesa Blue & White Printed Pure Cotton Ethnic Maxi Dress With Matching Dupatta",
                      "productName": "Maaesa Blue & White Printed Pure Cotton Ethnic Maxi Dress With Matching Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/14141882/2021/6/24/5c96d18d-3724-4e7f-8c5d-f6fcd40caa441624510972584-Maaesa-Women-Dresses-7221624510971965-1.jpg",
                      "mrp": 3999,
                      "price": 1199,
                      "discount": 2800,
                      "brand": "Maaesa",
                      "rating": 4.2,
                      "displayDiscountLabel": "(70% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Floral-Embroidered-Sequinned-Kurta-with-Trousers--Dupatta/21800462/buy",
                      "productId": 21800462,
                      "product": "Maaesa Floral Embroidered Sequinned Kurta with Trousers & Dupatta",
                      "productName": "Maaesa Floral Embroidered Sequinned Kurta with Trousers & Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/21800462/2023/2/6/77c46606-0826-433c-a680-d4981da2c7581675680996920-Maaesa-Women-Kurta-Sets-7641675680996169-1.jpg",
                      "mrp": 4396,
                      "price": 1450,
                      "discount": 2946,
                      "brand": "Maaesa",
                      "rating": 4.3,
                      "displayDiscountLabel": "(67% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Floral-Embroidered-Sequinned-Kurta-with-Trousers--Dupatta/21800460/buy",
                      "productId": 21800460,
                      "product": "Maaesa Floral Embroidered Sequinned Kurta with Trousers & Dupatta",
                      "productName": "Maaesa Floral Embroidered Sequinned Kurta with Trousers & Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/21800460/2023/2/6/ba90034d-38bb-4009-96fa-8f9404e0f1cc1675681399573-Maaesa-Women-Kurta-Sets-7111675681398964-1.jpg",
                      "mrp": 4396,
                      "price": 1450,
                      "discount": 2946,
                      "brand": "Maaesa",
                      "rating": 0,
                      "displayDiscountLabel": "(67% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-White-Embroidered-Thread-Work-Chanderi-Cotton-Kurta-with-Trousers/14161536/buy",
                      "productId": 14161536,
                      "product": "Maaesa Women White Embroidered Thread Work Chanderi Cotton Kurta with Trousers",
                      "productName": "Maaesa Women White Embroidered Thread Work Chanderi Cotton Kurta with Trousers",
                      "searchImage": "http://assets.myntassets.com/assets/images/14161536/2021/6/29/a8c5d83a-2773-4531-8118-dc682910a3b31624967523296-Maaesa-Women-White-Embroidered-Thread-Work-Chanderi-Cotton-K-1.jpg",
                      "mrp": 3699,
                      "price": 1220,
                      "discount": 2479,
                      "brand": "Maaesa",
                      "rating": 3.2,
                      "displayDiscountLabel": "(67% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-Beige-Sequinned-Chanderi-Cotton-Kurta-with-Trousers/14161534/buy",
                      "productId": 14161534,
                      "product": "Maaesa Women Beige Sequinned Chanderi Cotton Kurta with Trousers",
                      "productName": "Maaesa Women Beige Sequinned Chanderi Cotton Kurta with Trousers",
                      "searchImage": "http://assets.myntassets.com/assets/images/14161534/2021/6/24/3bb60c4c-c206-4e77-9edd-ad2358367cd51624516034607-Maaesa-Women-Beige-Sequinned-Chanderi-Cotton-Kurta-with-Trou-1.jpg",
                      "mrp": 3699,
                      "price": 1220,
                      "discount": 2479,
                      "brand": "Maaesa",
                      "rating": 0,
                      "displayDiscountLabel": "(67% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-Green-Woven-Design-Yoke-Design-Sequinned-Kurta-with-Trousers--Dupatta/17984894/buy",
                      "productId": 17984894,
                      "product": "Maaesa Women Green Woven Design Yoke Design Sequinned Kurta with Trousers & Dupatta",
                      "productName": "Maaesa Women Green Woven Design Yoke Design Sequinned Kurta with Trousers & Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/17984894/2022/5/12/d5ee841f-15eb-4534-827b-54eb7a18f4e81652356544262-Maaesa-Women-Green-Woven-Design-Yoke-Design-Sequinned-Kurta--1.jpg",
                      "mrp": 4240,
                      "price": 1314,
                      "discount": 2926,
                      "brand": "Maaesa",
                      "rating": 0,
                      "displayDiscountLabel": "(69% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Ethnic-Motifs-Yoke-Design-Sequinned-Kurta-with-Trousers--Dupatta/21800440/buy",
                      "productId": 21800440,
                      "product": "Maaesa Ethnic Motifs Yoke Design Sequinned Kurta with Trousers & Dupatta",
                      "productName": "Maaesa Ethnic Motifs Yoke Design Sequinned Kurta with Trousers & Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/21800440/2023/2/6/6ecf9e54-9033-46fa-8a09-d19f83d172491675681930183-Maaesa-Women-Kurta-Sets-1401675681929706-1.jpg",
                      "mrp": 4396,
                      "price": 1450,
                      "discount": 2946,
                      "brand": "Maaesa",
                      "rating": 0,
                      "displayDiscountLabel": "(67% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-Black-Regular-Solid-Kurta-with-Palazzos/15583506/buy",
                      "productId": 15583506,
                      "product": "Maaesa Women Black Regular Solid Kurta with Palazzos",
                      "productName": "Maaesa Women Black Regular Solid Kurta with Palazzos",
                      "searchImage": "http://assets.myntassets.com/assets/images/15583506/2021/10/6/1606ceb1-a8ce-443f-9f38-e6034ec55f241633522864717SareesBanarasiStyleWomenKurtaSetsMaaesaWomenKurtaSetsMaaesaW1.jpg",
                      "mrp": 2999,
                      "price": 1199,
                      "discount": 1800,
                      "brand": "Maaesa",
                      "rating": 4,
                      "displayDiscountLabel": "(60% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-Navy-Blue-Ethnic-Motifs-Printed-Kurta-with-Trousers--With-Dupatta--Mask/14141908/buy",
                      "productId": 14141908,
                      "product": "Maaesa Women Navy Blue Ethnic Motifs Printed Kurta with Trousers & With Dupatta & Mask",
                      "productName": "Maaesa Women Navy Blue Ethnic Motifs Printed Kurta with Trousers & With Dupatta & Mask",
                      "searchImage": "http://assets.myntassets.com/assets/images/14141908/2021/6/24/b177567e-7306-4fb1-af2d-124020be4d4e1624515977725-Maaesa-Women-Navy-Blue-Ethnic-Motifs-Printed-Pure-Cotton-Kur-1.jpg",
                      "mrp": 4799,
                      "price": 1439,
                      "discount": 3360,
                      "brand": "Maaesa",
                      "rating": 3.5,
                      "displayDiscountLabel": "(70% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Maaesa/Maaesa-Women-Blue-Ethnic-Motifs-Printed-Gotta-Patti-Pure-Cotton-Kurta-with-Trousers--With-Dupatta/14141892/buy",
                      "productId": 14141892,
                      "product": "Maaesa Women Blue Ethnic Motifs Printed Gotta Patti Pure Cotton Kurta with Trousers & With Dupatta",
                      "productName": "Maaesa Women Blue Ethnic Motifs Printed Gotta Patti Pure Cotton Kurta with Trousers & With Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/14141892/2021/6/24/69dcedc1-aaa4-45b6-9219-3c9382c775611624525446496-Maaesa-Women-Blue-Ethnic-Motifs-Printed-Gotta-Patti-Pure-Cot-1.jpg",
                      "mrp": 4999,
                      "price": 1499,
                      "discount": 3500,
                      "brand": "Maaesa",
                      "rating": 4.2,
                      "displayDiscountLabel": "(70% OFF)",
                      "available": true
                  }
              ],
              "media": [
                  {
                      "type": "VIDEO",
                      "videoBcId": "STUDIO",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/22/8db69d27-427e-4768-a941-6023250e46ff1684741419998-videoId-646b1d0aa137454372416743.png",
                      "resolution": "1500X2000",
                      "aspectRatio": 0.75,
                      "brightcove": {
                          "id": "STUDIO"
                      },
                      "matrix": {
                          "id": "646b1d0a4fe1226fb393a49d",
                          "url": "https://matrix.myntassets.com/general/646b1d0a92b2aa2b8f177030/master.m3u8"
                      }
                  }
              ]
          }
      },
      "componentUId": "3819e90c-faf4-46c8-9fd6-4e1fc0f908d5"
  },
  {
      "type": "CAROUSEL_BANNER",
      "props": {
          "titleProps": {},
          "contentProps": {
              "position": 3,
              "meta": {
                  "title": "",
                  "name": "carousel-banner",
                  "contentType": "List",
                  "publisherTag": "ads,List",
                  "source": "ads"
              },
              "elementId": "StudioMediaPager",
              "refId": "19:643fabfd99fb90814f7dd149",
              "bannerRatioToScreen": 0.6,
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/8764cb78-08d9-4309-9e8b-ce66bcbff32b1684832293532-23MAY23-SB-Main-Card.gif",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/feed/HASHTAG/menslay/%23menslay"
                      },
                      "id": "19:c871f092-2954-4496-a2a3-2d13483a2d96"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/09e4306e-6794-4c35-867d-75bfd44a7db91684837961814-23MAY23-SB-Influence-card-Men-2.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/d4e8c7d5.94bd.4b6a.a639.0c530b3efb6afwAF95M0KQ/Pushkar-Bisht"
                      },
                      "id": "19:1671c591-1719-4394-a6cc-139baf89177d"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/15e8f387-a2de-4758-aa9c-b8250d29852d1684837961772-23MAY23-SB-Influence-card-Men-4.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/dc5e5527.ee57.4b84.a805.e0f74e6fa035erBDIdz6Am/Shreyas-Gaikwad"
                      },
                      "id": "19:30a169a4-2dcc-4b06-b55e-b0eb3996811a"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/1e6c92de-3bc3-420a-8494-8071ff4a79781684837961794-23MAY23-SB-Influence-card-Men-3.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/8b8c4b39.5911.4b4c.a4d0.c58a4bd0fbdcGNP9kD1Kok/Yash-Katyal"
                      },
                      "id": "19:14453a0f-2d42-4cf3-ad6e-87a006a6fe4d"
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/bc230b27-85ed-4d57-8a4b-4347a8a949861684837961837-23MAY23-SB-Influence-card-Men-1.jpg",
                      "aspectRatio": 0.7621359,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/studio/influencer/cb7c5f7e.3ab6.4267.b2f1.7a8e509d5d27iSFuXi2vFq/Raghav-Girdhar"
                      },
                      "id": "19:60978891-7e32-4818-830d-0f5eaa5230fa"
                  }
              ]
          }
      },
      "componentUId": "5d82b506-ef6b-46de-ae62-cb4b9d13c314"
  },
  {
      "type": "BANNER",
      "props": {
          "titleProps": {},
          "contentProps": {
              "refId": "19:f796a4f4-77e4-4c23-a882-978a2a820cd3",
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/41f0a588-a1c9-4129-ab4f-420f9c0a61fa1685035383603-Ashima-Makhija_04.gif",
                      "aspectRatio": 3.2666667,
                      "action": {
                          "type": "NAVIGATION",
                          "link": "https://www.myntra.com/live/preshow/646f18f3ced4e42a0f39b86a"
                      },
                      "id": "19:f796a4f4-77e4-4c23-a882-978a2a820cd3"
                  }
              ],
              "position": 4,
              "meta": {
                  "title": "",
                  "name": "banner",
                  "contentType": "Studio-LiveBanners",
                  "publisherTag": "ads,Studio-LiveBanners",
                  "source": "ads"
              },
              "elementId": "StudioMediaPager"
          }
      },
      "componentUId": "41da7b9e-3979-462f-970c-a592fa3b9f71"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "contentProps": {
              "postId": 121196,
              "likeCount": 2,
              "topics": [
                  {
                      "id": "5e3d12fb6c63697fc3335b84",
                      "name": "Men's Casualwear ",
                      "followers": 283573,
                      "posts": 8696,
                      "isFollowing": true
                  },
                  {
                      "id": "5e3d12fb6c63697fc3335b92",
                      "name": "Streetstyle for Men",
                      "followers": 255196,
                      "posts": 1608,
                      "isFollowing": true
                  }
              ],
              "productPills": [
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Self-Design-Casual-Shirt/22646600/buy",
                      "productId": 22646600,
                      "product": "Instafab Plus Plus Size Self Design Casual Shirt",
                      "productName": "Instafab Plus Plus Size Self Design Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646600/2023/4/5/b5a095d4-5f3f-477f-a6ac-d4442b33b9fd1680654683953Shirts1.jpg",
                      "mrp": 2199,
                      "price": 989,
                      "discount": 1210,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(55% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Men-Plus-Size-Cotton-Regular-Fit-Casual-Shirt/21672414/buy",
                      "productId": 21672414,
                      "product": "Instafab Plus Men Plus Size Cotton Regular Fit Casual Shirt",
                      "productName": "Instafab Plus Men Plus Size Cotton Regular Fit Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/21672414/2023/1/23/02469e85-91f5-4206-b834-1a3f0ed33a261674478502174InstafabPlusMenBlueClassicCasualShirt1.jpg",
                      "mrp": 1999,
                      "price": 999,
                      "discount": 1000,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Spread-Collar-Floral-Printed-Casual-Shirt/22646688/buy",
                      "productId": 22646688,
                      "product": "Instafab Plus Plus Size Spread Collar Floral Printed Casual Shirt",
                      "productName": "Instafab Plus Plus Size Spread Collar Floral Printed Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646688/2023/4/4/b8d74a77-9669-48f7-b686-3b55980b95411680628143606Shirts1.jpg",
                      "mrp": 2199,
                      "price": 1099,
                      "discount": 1100,
                      "brand": "Instafab Plus",
                      "rating": 2,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Classic-Cotton-Casual-Shirt/22646686/buy",
                      "productId": 22646686,
                      "product": "Instafab Plus Plus Size Classic Cotton Casual Shirt",
                      "productName": "Instafab Plus Plus Size Classic Cotton Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646686/2023/4/4/71c835f3-7071-4d27-b02b-2d93dccf2cd91680627451179Shirts1.jpg",
                      "mrp": 2499,
                      "price": 1249,
                      "discount": 1250,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Mandarin-Collar-Cotton-Casual-Shirt/22646612/buy",
                      "productId": 22646612,
                      "product": "Instafab Plus Plus Size Mandarin Collar Cotton Casual Shirt",
                      "productName": "Instafab Plus Plus Size Mandarin Collar Cotton Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646612/2023/4/5/463355ea-cd2a-466b-a1ad-8b2041ff746c1680654688196Shirts1.jpg",
                      "mrp": 1999,
                      "price": 999,
                      "discount": 1000,
                      "brand": "Instafab Plus",
                      "rating": 2.9,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Spread-Collar-Floral-Printed-Cotton-Casual-Shirt/22646684/buy",
                      "productId": 22646684,
                      "product": "Instafab Plus Plus Size Spread Collar Floral Printed Cotton Casual Shirt",
                      "productName": "Instafab Plus Plus Size Spread Collar Floral Printed Cotton Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646684/2023/4/4/1b231331-7230-4ad9-ae74-b0a49686e0fd1680622673533Shirts1.jpg",
                      "mrp": 2199,
                      "price": 1099,
                      "discount": 1100,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Size-Men-Casual-Cotton-Shirt/21672510/buy",
                      "productId": 21672510,
                      "product": "Instafab Plus Size Men Casual Cotton Shirt",
                      "productName": "Instafab Plus Size Men Casual Cotton Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/21672510/2023/1/23/46e66117-3656-42c2-9d9c-eeac38b67f9c1674478620860InstafabPlusMenGreenClassicCasualShirt1.jpg",
                      "mrp": 1999,
                      "price": 999,
                      "discount": 1000,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Men-White-Classic-Graphic-Printed-Casual-Shirt/15920414/buy",
                      "productId": 15920414,
                      "product": "Instafab Plus Men White Classic Graphic Printed Casual Shirt",
                      "productName": "Instafab Plus Men White Classic Graphic Printed Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/15920414/2021/10/26/60fcf1fb-63c4-40f7-b740-7c9d0559bef11635231113126InstafabPlusMenWhiteClassicFloralOpaquePrintedCasualShirt1.jpg",
                      "mrp": 1999,
                      "price": 999,
                      "discount": 1000,
                      "brand": "Instafab Plus",
                      "rating": 4.2,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Men-Plus-Size-Horizontal-Stripes-Casual-Cotton-Shirt/21672426/buy",
                      "productId": 21672426,
                      "product": "Instafab Plus Men Plus Size Horizontal Stripes Casual Cotton Shirt",
                      "productName": "Instafab Plus Men Plus Size Horizontal Stripes Casual Cotton Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/21672426/2023/1/23/31261217-8cc6-4d06-b171-8682aaae86931674478447474InstafabPlusMenMaroonClassicHorizontalStripesStripedCasualSh1.jpg",
                      "mrp": 2199,
                      "price": 1099,
                      "discount": 1100,
                      "brand": "Instafab Plus",
                      "rating": 4,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Shirts/Instafab-Plus/Instafab-Plus-Plus-Size-Mandarin-Collar-Cotton-Casual-Shirt/22646610/buy",
                      "productId": 22646610,
                      "product": "Instafab Plus Plus Size Mandarin Collar Cotton Casual Shirt",
                      "productName": "Instafab Plus Plus Size Mandarin Collar Cotton Casual Shirt",
                      "searchImage": "http://assets.myntassets.com/assets/images/22646610/2023/4/4/26f77da3-0fa8-4bc9-a519-317862d980241680627426219Shirts1.jpg",
                      "mrp": 1999,
                      "price": 999,
                      "discount": 1000,
                      "brand": "Instafab Plus",
                      "rating": 0,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  }
              ],
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/0ccf85ea-cfb6-41a5-aec6-61eeacf973f01684838769389-SS23SHRT_CSMSSRT5560PLUS_1.jpg",
                      "resolution": "1200X1600",
                      "aspectRatio": 0.75
                  }
              ],
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/121196/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "elementId": "POST_IMAGE",
              "isLiked": "NONE",
              "isBookmarked": false,
              "text": "\"Command Attention: Exude confidence in this black textured shirt, designed for plus-size men with style.\" <Hashtag id=PlusSizeMenFashion>PlusSizeMenFashion</Hashtag> <Hashtag id=BlackTexture>BlackTexture</Hashtag> <Hashtag id=StylishShirt>StylishShirt</Hashtag> <Hashtag id=ConfidentStyle>ConfidentStyle</Hashtag> <Hashtag id=FashionForAll>FashionForAll</Hashtag> <Hashtag id=BodyPositivity>BodyPositivity</Hashtag> <Hashtag id=SizeInclusive>SizeInclusive</Hashtag> <Hashtag id=TextureTrend>TextureTrend</Hashtag> <Hashtag id=FashionForward>FashionForward</Hashtag> <Hashtag id=CurvyMenStyle>CurvyMenStyle</Hashtag> <Hashtag id=DapperLook>DapperLook</Hashtag> <Hashtag id=EmpoweringFashion>EmpoweringFashion</Hashtag> <Hashtag id=menbrands>menbrands</Hashtag> <Hashtag id=menshirts>menshirts</Hashtag> <Hashtag id=shirtsformen>shirtsformen</Hashtag>",
              "products": [
                  22646600,
                  21672414,
                  22646688,
                  22646686,
                  22646612,
                  22646684,
                  21672510,
                  15920414,
                  21672426,
                  22646610,
                  22646682,
                  21362142,
                  21672544,
                  22646654,
                  22646662,
                  22646630,
                  21672538,
                  22646698,
                  22646656,
                  21672606,
                  22646616,
                  21672602,
                  21672488,
                  21672492,
                  15920402,
                  22646700,
                  21672550,
                  21362122,
                  22646626,
                  22646614,
                  21672628,
                  21672432,
                  21672428,
                  22646624,
                  21672434,
                  15920292,
                  21672508,
                  13063598,
                  22646672,
                  22646604,
                  22646620,
                  21672570,
                  21672450,
                  13914090,
                  21672572,
                  22646622,
                  21672566,
                  21362224,
                  21362216,
                  13914146,
                  21362152,
                  21362236,
                  21362234,
                  15920398,
                  21362262,
                  21672600,
                  22646666,
                  21672586
              ]
          },
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "0b858d64.7a7f.42dc.8742.b4ddfe2558c71PuasoAOnl",
                  "uniqueHandle": "InstafabPlus",
                  "name": "InstafabPlus",
                  "description": "Instafab not only offer plus-sized clothing ranging from 3XL to 6XL, but also providing plus-sized versions of our regular collection.",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/4/7/1188276c-b220-46b6-b293-0c861856946f1680854003623-WhatsApp-Image-2023-04-05-at-11.55.00-AM.jpeg",
                      "resolution": "1600X578",
                      "aspectRatio": 2.77
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/4/7/c2f37f53-5cdb-4224-8082-83fcb5f6903a1680854014184-insta-myntra.jpg",
                      "resolution": "1080X1200",
                      "aspectRatio": 0.9
                  },
                  "posts": 5,
                  "followers": 18,
                  "type": "BRAND"
              },
              "subTitle": "4 hours ago",
              "followDisplayType": "TEXT"
          }
      },
      "componentUId": "11ce3ba8-ca21-42c2-b329-8dff4b8906d6"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "contentProps": {
              "postId": 120295,
              "isLiked": "NONE",
              "isBookmarked": false,
              "text": "Make a statement with this stunning White Cotton Botanical Print Kurta With Palazzo And Dupatta. Perfectly curated for your next special occasion. 🌸💕 <linebreak></linebreak><Hashtag id=womenkurtasets>womenkurtasets</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag> <Hashtag id=janasya>janasya</Hashtag>",
              "products": [
                  13169602,
                  22399352,
                  22399342,
                  20433758,
                  20534012
              ],
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/120295/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "elementId": "POST_IMAGE",
              "likeCount": 0,
              "productPills": [
                  {
                      "landingPageUrl": "Kurta-Sets/Janasya/Janasya-Women-Floral-Printed-Regular-Kurta-with-Trousers/22399352/buy",
                      "productId": 22399352,
                      "product": "Janasya Women Floral Printed Regular Kurta with Trousers",
                      "productName": "Janasya Women Floral Printed Regular Kurta with Trousers",
                      "searchImage": "http://assets.myntassets.com/assets/images/22399352/2023/3/28/89e9d3f6-0909-4217-be10-9138fa8a05551680005812749-Janasya-Womens-Sea-Green-Crepe-Digital-Print-Kaftan-with-Pan-1.jpg",
                      "mrp": 3549,
                      "price": 1703,
                      "discount": 1846,
                      "brand": "Janasya",
                      "rating": 0,
                      "displayDiscountLabel": "(52% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Janasya/Janasya-Women-Floral-Printed-Regular-Top-with-Palazzos/22399342/buy",
                      "productId": 22399342,
                      "product": "Janasya Women Floral Printed Regular Top with Palazzos",
                      "productName": "Janasya Women Floral Printed Regular Top with Palazzos",
                      "searchImage": "http://assets.myntassets.com/assets/images/22399342/2023/3/29/63a59bbb-c25d-40de-a7af-f7156e4df9891680087374378-Janasya-Womens-Lavender-Crepe-Digital-Print-Top-with-Palazzo-1.jpg",
                      "mrp": 3549,
                      "price": 1242,
                      "discount": 2307,
                      "brand": "Janasya",
                      "rating": 0,
                      "displayDiscountLabel": "(65% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Janasya/Janasya-Women-Green-Floral-Printed-Empire-Gotta-Patti-Pure-Cotton-Kurta-with-Trousers--With-Dupatta/20433758/buy",
                      "productId": 20433758,
                      "product": "Janasya Women Green Floral Printed Empire Gotta Patti Pure Cotton Kurta with Trousers & With Dupatta",
                      "productName": "Janasya Women Green Floral Printed Empire Gotta Patti Pure Cotton Kurta with Trousers & With Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/20433758/2022/10/17/5017c7c2-5e5a-4936-86cd-a4e75e85d4041666005868208JanasyaWomenMustardYellowFloralPrintedTieredGottaPattiPureCo1.jpg",
                      "mrp": 3499,
                      "price": 2344,
                      "discount": 1155,
                      "brand": "Janasya",
                      "rating": 4.1,
                      "displayDiscountLabel": "(33% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Janasya/Janasya-Women-White-Cotton-Floral-Print-Kurta-with-Trouser-and-Dupatta/20534012/buy",
                      "productId": 20534012,
                      "product": "Janasya Women White Cotton Floral Print Kurta with Trouser and Dupatta",
                      "productName": "Janasya Women White Cotton Floral Print Kurta with Trouser and Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/20534012/2022/10/28/ad85189d-e0ce-47bf-8f2d-b57c1b89803e1666956306818JanasyaWomenWhiteFloralPrintedPureCottonKurtawithTrousersWit1.jpg",
                      "mrp": 4199,
                      "price": 1637,
                      "discount": 2562,
                      "brand": "Janasya",
                      "rating": 4.6,
                      "displayDiscountLabel": "(61% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Kurta-Sets/Janasya/Janasya-Women-White--Grey-Printed-Kurta-with-Trousers--Dupatta/13169602/buy",
                      "productId": 13169602,
                      "product": "Janasya Women White & Grey Printed Kurta with Trousers & Dupatta",
                      "productName": "Janasya Women White & Grey Printed Kurta with Trousers & Dupatta",
                      "searchImage": "http://assets.myntassets.com/assets/images/productimage/2020/12/5/d340bd34-a023-4c8e-b3c4-c21e14c7f9f41607164889288-1.jpg",
                      "mrp": 3499,
                      "price": 2309,
                      "discount": 1190,
                      "brand": "Janasya",
                      "rating": 0,
                      "displayDiscountLabel": "(34% OFF)",
                      "available": false
                  }
              ],
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/20/6c8f6f20-9b06-4093-9b41-ed5a752587051684569491439-11.png",
                      "resolution": "1200X1600",
                      "aspectRatio": 0.75
                  }
              ]
          },
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "dcadd241.29b0.416b.a6f0.8a2d5fb1af8fLNXBFNiGkk",
                  "uniqueHandle": "Janasya",
                  "name": "Janasya",
                  "description": "Empowering women to feel confident and comfortable in their clothing. Join the movement and discover fashion that celebrates your individuality.",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/9/15/697d0e19-7ce8-468d-9791-67f365bdfd471663231123464-JANASYA-LOGO---blue--3.jpg",
                      "resolution": "1920X1921",
                      "aspectRatio": 1
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/3/30/7ed5d51e-14f3-4d88-8a90-e16b58bc37c91680168647205-croppedImage-1680168643084.jpg",
                      "resolution": "3598X3998",
                      "aspectRatio": 0.9
                  },
                  "posts": 186,
                  "followers": 947,
                  "type": "BRAND"
              },
              "subTitle": "4 hours ago",
              "followDisplayType": "TEXT"
          }
      },
      "componentUId": "301f1667-7c81-457d-80cb-87689c9a6ab6"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "contentProps": {
              "postId": 121803,
              "isLiked": "NONE",
              "likeCount": 1,
              "productPills": [
                  {
                      "landingPageUrl": "Beauty-Accessory/DROMEN--CO/DROMEN--CO-Jade-Facial-Roller/14244602/buy",
                      "productId": 14244602,
                      "product": "DROMEN & CO Jade Facial Roller",
                      "productName": "DROMEN & CO Jade Facial Roller",
                      "searchImage": "http://assets.myntassets.com/assets/images/14244602/2022/8/10/abc16716-1881-4770-9625-c925ed58e84e1660129155563DROMENCOJadeFacialRoller1.jpg",
                      "mrp": 1499,
                      "price": 1049,
                      "discount": 450,
                      "brand": "DROMEN & CO",
                      "rating": 4.4,
                      "displayDiscountLabel": "(30% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/MCaffeine/MCaffeine-Sustainable-Jade-Roller---Face-Massager/14997980/buy",
                      "productId": 14997980,
                      "product": "MCaffeine Sustainable Jade Roller - Face Massager",
                      "productName": "MCaffeine Sustainable Jade Roller - Face Massager",
                      "searchImage": "http://assets.myntassets.com/assets/images/14997980/2021/9/2/0a14a531-38ce-41cb-8b50-03953eb4aec41630553422609-mCaffeine-Jade-Roller---Face-Massager-5781630553422043-1.jpg",
                      "mrp": 1799,
                      "price": 1313,
                      "discount": 486,
                      "brand": "MCaffeine",
                      "rating": 4.6,
                      "displayDiscountLabel": "(27% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/MAJESTIQUE/MAJESTIQUE-Jade-Face-Roller---Green/19341390/buy",
                      "productId": 19341390,
                      "product": "MAJESTIQUE Jade Face Roller - Green",
                      "productName": "MAJESTIQUE Jade Face Roller - Green",
                      "searchImage": "http://assets.myntassets.com/assets/images/19341390/2023/2/9/5e671531-093e-48c6-a9e0-30db155193e41675938718422-MAJESTIQUE-Jade-Face-Roller--Gua-Sha-Massager-Set-3221675938-1.jpg",
                      "mrp": 289,
                      "price": 0,
                      "discount": 0,
                      "brand": "MAJESTIQUE",
                      "rating": 4.5,
                      "displayDiscountLabel": "",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/DROMEN--CO/Dromen--Co-Jade-Facial-Roller--Jade-Gua-Sha-Massager/14817754/buy",
                      "productId": 14817754,
                      "product": "Dromen & Co Jade Facial Roller & Jade Gua Sha Massager",
                      "productName": "Dromen & Co Jade Facial Roller & Jade Gua Sha Massager",
                      "searchImage": "http://assets.myntassets.com/assets/images/14817754/2021/7/14/fc70c10d-a1b1-4ab6-bd37-2ca3b00f61f11626238058369DromenCoJadeBeautyKitJadeFacialRollerJadeGuaShaMassager1.jpg",
                      "mrp": 2999,
                      "price": 1499,
                      "discount": 1500,
                      "brand": "DROMEN & CO",
                      "rating": 4.3,
                      "displayDiscountLabel": "(50% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/natural-vibes/natural-vibes-Jade-Roller--Massager-For-Face-Neck-And-Under-Eye/14106292/buy",
                      "productId": 14106292,
                      "product": "natural vibes Jade Roller & Massager For Face, Neck And Under Eye",
                      "productName": "natural vibes Jade Roller & Massager For Face, Neck And Under Eye",
                      "searchImage": "http://assets.myntassets.com/assets/images/productimage/2021/4/15/f717ecda-21e8-407a-92a6-f20b7f593a1f1618480088896-1.jpg",
                      "mrp": 1999,
                      "price": 1299,
                      "discount": 700,
                      "brand": "natural vibes",
                      "rating": 4.6,
                      "displayDiscountLabel": "(35% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/Colorbar/Colorbar-Women-Green-Kosher-Jade-Facial-Roller/15605464/buy",
                      "productId": 15605464,
                      "product": "Colorbar Women Green Kosher Jade Facial Roller",
                      "productName": "Colorbar Women Green Kosher Jade Facial Roller",
                      "searchImage": "http://assets.myntassets.com/assets/images/15605464/2021/9/26/bfa862ed-b626-4c44-9fdd-eeda2b0c02b21632616438753ColorbarKosherJadeFacialRoller1.jpg",
                      "mrp": 1750,
                      "price": 1225,
                      "discount": 525,
                      "brand": "Colorbar",
                      "rating": 4.3,
                      "displayDiscountLabel": "(30% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/Kimirica/Kimirica-Jade-Face-Roller-With-Box/22600274/buy",
                      "productId": 22600274,
                      "product": "Kimirica Jade Face Roller With Box",
                      "productName": "Kimirica Jade Face Roller With Box",
                      "searchImage": "http://assets.myntassets.com/assets/images/22600274/2023/4/1/b5331203-a965-4d50-922d-63a0c5f25ecd1680323275527KimiricaJadeFaceRollerwithBox1.jpg",
                      "mrp": 1599,
                      "price": 1295,
                      "discount": 304,
                      "brand": "Kimirica",
                      "rating": 0,
                      "displayDiscountLabel": "(19% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/KAZARMAA/KAZARMAA-Jade-Roller-Face-Massager/17111974/buy",
                      "productId": 17111974,
                      "product": "KAZARMAA Jade Roller Face Massager",
                      "productName": "KAZARMAA Jade Roller Face Massager",
                      "searchImage": "http://assets.myntassets.com/assets/images/17111974/2022/2/10/5807e8d2-95c4-435c-b754-3f5f1c12e6de1644488956745KAZARMAAJadeRollerFaceMassager1.jpg",
                      "mrp": 799,
                      "price": 487,
                      "discount": 312,
                      "brand": "KAZARMAA",
                      "rating": 4,
                      "displayDiscountLabel": "(39% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/KAZARMAA/KAZARMAA-Green-Jade-Roller--Gua-Sha-Stone-/17111972/buy",
                      "productId": 17111972,
                      "product": "KAZARMAA Green Jade Roller & Gua Sha Stone",
                      "productName": "KAZARMAA Green Jade Roller & Gua Sha Stone",
                      "searchImage": "http://assets.myntassets.com/assets/images/17111972/2022/2/10/c81675d4-6896-4d0a-9299-d4194dd5cae61644488849714KAZARMAAJadeRollerwithGuaShaSetFaceMassagerforFaceEyeNeck1.jpg",
                      "mrp": 999,
                      "price": 699,
                      "discount": 300,
                      "brand": "KAZARMAA",
                      "rating": 3.9,
                      "displayDiscountLabel": "(30% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Beauty-Accessory/DROMEN--CO/DROMEN--CO-Set-of-Jade-Roller---Jade-Gua-Sha--Niacinamide-Serum/17177004/buy",
                      "productId": 17177004,
                      "product": "DROMEN & CO Set of Jade Roller - Jade Gua Sha & Niacinamide Serum",
                      "productName": "DROMEN & CO Set of Jade Roller - Jade Gua Sha & Niacinamide Serum",
                      "searchImage": "http://assets.myntassets.com/assets/images/17177004/2022/2/16/e912f06f-07fd-48bf-ace9-83992a43a4bc1645014775399MegawattcomboofJadeRollerJadeGuaShaandNiacinamideSerum3.jpg",
                      "mrp": 2999,
                      "price": 1949,
                      "discount": 1050,
                      "brand": "DROMEN & CO",
                      "rating": 4.9,
                      "displayDiscountLabel": "(35% OFF)",
                      "available": true
                  }
              ],
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/121803/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "elementId": "POST_IMAGE",
              "isBookmarked": false,
              "text": "Elevate your grooming routine with the jade facial roller .\u0001\u0001 <Hashtag id=menskincare>menskincare</Hashtag> <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=makeupkit>makeupkit</Hashtag> <Hashtag id=MyntraStyleSquadBeauty>MyntraStyleSquadBeauty</Hashtag> <Hashtag id=facialroller>facialroller</Hashtag> <Hashtag id=dromenco>dromenco</Hashtag>",
              "products": [
                  14244602,
                  14997980,
                  19341390,
                  14817754,
                  14106292,
                  15605464,
                  22600274,
                  17111974,
                  17111972,
                  17177004,
                  18174620,
                  20540144,
                  14244580,
                  16654508,
                  17357952,
                  17413278,
                  17357946,
                  15910724,
                  22763212,
                  14244596,
                  21442406
              ],
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/083d8462-e5d9-4e6a-aece-02e8bc72525a1684961506356-IMG_2861.JPG",
                      "resolution": "2472X3296",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/acbbc80c-0391-4d04-8db0-f735035ebe501684961506373-IMG_2862.JPG",
                      "resolution": "2248X2997",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/25/eec72080-5a67-46e8-b329-e6d62316bdf41684961506387-IMG_2863.JPG",
                      "resolution": "2550X3400",
                      "aspectRatio": 0.75
                  }
              ]
          },
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "c73b830a.9f43.417f.9976.900a5d1a33fctXwXtUuuPp",
                  "uniqueHandle": "ankitvaid",
                  "name": "Ankit Vaid",
                  "description": "StyleSquad\nFRAPPER 👻",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/4/7/59327170-5302-459a-a789-f7836a8024d21649323816480-Ankit-Vaid.png",
                      "resolution": "500X500",
                      "aspectRatio": 1
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2021/11/3/5892fdc3-c6c2-47d7-9e13-9be33e4da9611635915878641-FB2AF2F4-0B0A-4898-B8DA-820A864448D6.jpeg",
                      "resolution": "3024X4032",
                      "aspectRatio": 0.75
                  },
                  "posts": 400,
                  "followers": 8531,
                  "type": "INFLUENCER"
              },
              "subTitle": "3 hours ago",
              "followDisplayType": "TEXT"
          }
      },
      "componentUId": "6776014f-95ea-4f84-a03d-237be171b212"
  },
  {
      "type": "MynstaPost",
      "elementId": "TitleCard",
      "props": {
          "contentProps": {
              "isBookmarked": false,
              "text": "Bring your sunny side up donning this powder blue-hued modish dress. <Hashtag id=floral>floral</Hashtag> <Hashtag id=dress>dress</Hashtag> <Hashtag id=modern>modern</Hashtag> <Hashtag id=style>style</Hashtag> <Hashtag id=fashion>fashion</Hashtag> <Hashtag id=dresses>dresses</Hashtag> <Hashtag id=dressesforwomen>dressesforwomen</Hashtag> <Hashtag id=womenbrands>womenbrands</Hashtag>",
              "media": [
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/96b4556a-5af0-44a1-a041-e4143234712c1684829983097-3.jpg",
                      "resolution": "1200X1600",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/abe87ba7-904d-4624-a15c-8306447220d91684829983123-M1.jpg",
                      "resolution": "1200X1600",
                      "aspectRatio": 0.75
                  },
                  {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2023/5/23/d1811796-24f1-41ac-80e7-f5e63e34cc5d1684829983148-M2.jpg",
                      "resolution": "1200X1600",
                      "aspectRatio": 0.75
                  }
              ],
              "postId": 121123,
              "isLiked": "NONE",
              "products": [
                  21050782,
                  21990270,
                  21050836,
                  21050826,
                  21990276,
                  21990274,
                  21050832,
                  21743738,
                  21743724,
                  21050824,
                  21743774,
                  21743740,
                  21743742,
                  21743728,
                  21743744,
                  21050800,
                  21050804,
                  21743732,
                  21050802,
                  21743758,
                  21743770,
                  13705154,
                  21050822,
                  21050798,
                  21743760,
                  21050792,
                  21050820,
                  21743766,
                  21743762,
                  21050828,
                  21050810,
                  21990278,
                  21050794,
                  21990268,
                  21743752,
                  21050830,
                  21050840,
                  21743756,
                  21050790,
                  21050838,
                  21743754,
                  21743764,
                  21050786,
                  21050842,
                  21743772,
                  21743746,
                  21743768,
                  15812328,
                  21743726,
                  21743748,
                  21050796,
                  21743736,
                  21743750,
                  18528786,
                  18528778,
                  13705142,
                  13705146
              ],
              "productPills": [
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Floral-Georgette-A-Line-Maxi-Dress/21050782/buy",
                      "productId": 21050782,
                      "product": "Lavanya The Label Floral Georgette A-Line Maxi Dress",
                      "productName": "Lavanya The Label Floral Georgette A-Line Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21050782/2022/12/3/b3d60701-267c-461b-8b73-1b4aba716ad71670014315209Dresses1.jpg",
                      "mrp": 2999,
                      "price": 2699,
                      "discount": 300,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Embroidered-Georgette-Slit-Maxi-Dress/21990270/buy",
                      "productId": 21990270,
                      "product": "Lavanya The Label Embroidered Georgette Slit Maxi Dress",
                      "productName": "Lavanya The Label Embroidered Georgette Slit Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21990270/2023/2/15/4e3488c3-b3d4-4e3e-af2a-d916d7b4f07c1676460558024LavanyaTheLabelPinkGeorgetteMaxiDress1.jpg",
                      "mrp": 5999,
                      "price": 5399,
                      "discount": 600,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Floral-Printed-Flared-Dress/21050836/buy",
                      "productId": 21050836,
                      "product": "Lavanya The Label Floral Printed Flared Dress",
                      "productName": "Lavanya The Label Floral Printed Flared Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21050836/2022/12/3/eaa84c5d-fa46-4e84-93cc-42d64851756d1670014365889Dresses1.jpg",
                      "mrp": 1499,
                      "price": 1349,
                      "discount": 150,
                      "brand": "Lavanya The Label",
                      "rating": 4.2,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Cotton-Floral-Maxi-Maxi-Dress/21050826/buy",
                      "productId": 21050826,
                      "product": "Lavanya The Label Cotton Floral Maxi Maxi Dress",
                      "productName": "Lavanya The Label Cotton Floral Maxi Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21050826/2022/12/3/f8f1be0b-b47a-49f4-9551-5df8350846d21670014357926Dresses1.jpg",
                      "mrp": 4499,
                      "price": 4049,
                      "discount": 450,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-V-Neck-Gathered-Maxi-Tired-Ball-Gown-/21990276/buy",
                      "productId": 21990276,
                      "product": "Lavanya The Label V-Neck Gathered Maxi Tired Ball Gown",
                      "productName": "Lavanya The Label V-Neck Gathered Maxi Tired Ball Gown",
                      "searchImage": "http://assets.myntassets.com/assets/images/21990276/2023/2/15/5197e0b9-fab5-471f-9551-e095240a3cf61676461676058LavanyaTheLabelPinkMaxiDress1.jpg",
                      "mrp": 5999,
                      "price": 5399,
                      "discount": 600,
                      "brand": "Lavanya The Label",
                      "rating": 3.1,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Off-Shoulder-High-Low-Gown/21990274/buy",
                      "productId": 21990274,
                      "product": "Lavanya The Label Off Shoulder High Low Gown",
                      "productName": "Lavanya The Label Off Shoulder High Low Gown",
                      "searchImage": "http://assets.myntassets.com/assets/images/21990274/2023/2/15/2d1c3480-fdba-42da-9b06-534f36e9e9031676460814847Dresses1.jpg",
                      "mrp": 5299,
                      "price": 4769,
                      "discount": 530,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Ethnic-Dresses/Lavanya-The-Label/Lavanya-The-Label-Cotton-Ethnic-Motifs-Ethnic-Maxi-Maxi-Dress/21050832/buy",
                      "productId": 21050832,
                      "product": "Lavanya The Label Cotton Ethnic Motifs Ethnic Maxi Maxi Dress",
                      "productName": "Lavanya The Label Cotton Ethnic Motifs Ethnic Maxi Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21050832/2022/12/3/7341d081-a568-411a-b32a-62e5560200521670014363103Dresses1.jpg",
                      "mrp": 3999,
                      "price": 3599,
                      "discount": 400,
                      "brand": "Lavanya The Label",
                      "rating": 3.2,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Round-Neck-Satin-Dress-With-Shrug/21743738/buy",
                      "productId": 21743738,
                      "product": "Lavanya The Label Round Neck Satin Dress With Shrug",
                      "productName": "Lavanya The Label Round Neck Satin Dress With Shrug",
                      "searchImage": "http://assets.myntassets.com/assets/images/21743738/2023/1/28/ef09bbd8-a815-4e29-b959-bff0d28bc5931674912689572Dresses1.jpg",
                      "mrp": 4999,
                      "price": 4499,
                      "discount": 500,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Striped-Georgette-Kaftan-Maxi-Dress/21743724/buy",
                      "productId": 21743724,
                      "product": "Lavanya The Label Striped Georgette Kaftan Maxi Dress",
                      "productName": "Lavanya The Label Striped Georgette Kaftan Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21743724/2023/1/28/6a7efe3a-b46f-4403-a50f-0adf6634f0401674912576241LavanyaTheLabelOliveGreenStripedGeorgetteMaxiMaxiDress1.jpg",
                      "mrp": 4699,
                      "price": 4229,
                      "discount": 470,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(10% OFF)",
                      "available": true
                  },
                  {
                      "landingPageUrl": "Dresses/Lavanya-The-Label/Lavanya-The-Label-Cotton-Floral-Maxi-Maxi-Dress/21050824/buy",
                      "productId": 21050824,
                      "product": "Lavanya The Label Cotton Floral Maxi Maxi Dress",
                      "productName": "Lavanya The Label Cotton Floral Maxi Maxi Dress",
                      "searchImage": "http://assets.myntassets.com/assets/images/21050824/2022/12/3/9cc83e31-900b-4864-a87d-dd5bd9e081501670014351847Dresses1.jpg",
                      "mrp": 3999,
                      "price": 3079,
                      "discount": 920,
                      "brand": "Lavanya The Label",
                      "rating": 0,
                      "displayDiscountLabel": "(23% OFF)",
                      "available": true
                  }
              ],
              "commentsData": {
                  "totalComments": 0,
                  "viewAllCommentsUrl": "/studio/121123/comments",
                  "comment": {
                      "authorName": "",
                      "commentText": ""
                  },
                  "inputBox": {
                      "placeHolderText": "Be the first to comment",
                      "addCommentUrl": "/v1/mynsta/comment/create"
                  },
                  "topCommentHidden": false
              },
              "elementId": "POST_IMAGE",
              "likeCount": 0
          },
          "titleProps": {
              "elementId": "ImageAttributedTitleCard",
              "id": "ImageAttributedTitleCard",
              "author": {
                  "uidx": "6dcb8809.419e.44b0.91aa.121d64889066t3pKbvmPqR",
                  "uniqueHandle": "LavanyaTheLabel",
                  "name": "LavanyaTheLabel",
                  "description": "Lavanya the Label is a brand that is blend of traditional finesse and edgy designs.",
                  "profileImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/12/14/faa0ede8-3b74-4a3e-9a09-ef3ad2b06af51670999240166-1x1.png",
                      "resolution": "650X650",
                      "aspectRatio": 1
                  },
                  "coverImage": {
                      "type": "IMAGE",
                      "src": "https://assets.myntassets.com/assets/images/2022/12/14/87c2974c-68ce-45f0-a923-490079182fb81670999246152-cover.jpg",
                      "resolution": "1080X1200",
                      "aspectRatio": 0.9
                  },
                  "posts": 101,
                  "followers": 1394,
                  "type": "BRAND"
              },
              "subTitle": "3 hours ago",
              "followDisplayType": "TEXT"
          }
      },
      "componentUId": "b6da78e0-f81c-47a6-b2eb-ba1dcae012a9"
  } 
        ]
    },
    "suggesed_products": { 
        "response": {
              "screen": {
                "elementId": "FlatViewTemplate",
                "headerMeta": {
                  "colorTheme": "",
                  "bgColor": ""
                },
                "name": "Product List"
              },
              "components": [
                {
                  "type": "ProductListViewModel",
                  "elementId": "ItemsList",
                  "props": {
                    "contentProps": {
                      "itemMapperId": "InfluencerItem",
                      "extraParams": {
                        "requestObject": {
                          "requestType": "POST",
                          "path": "/promotedStyles",
                          "requestBody": {
                            "pageNumber": 2,
                            "ids": [
                              14284110,
                              15580336,
                              11359560,
                              14408240,
                              16228032,
                              15580090,
                              14284114,
                              15092622
                            ],
                            "nextIds": [
                              20918378,
                              11359562,
                              15580476,
                              15580060,
                              15580426
                            ],
                            "feedType": "PAGINATION",
                            "idsPerPage": 8
                          }
                        },
                        "viewRelatedParams": {
                          "numColumns": 2
                        }
                      },
                      "elementId": "ProductItemView",
                      "items": [
                        {
                          "landingPageUrl": "Eyeshadow/LA-colors/LA-Colors-Cool-Color-Eyeshadow-Palette-CES137/6534789/buy",
                          "productId": 6534789,
                          "product": "L.A. Colors Cool Color Eyeshadow Palette CES137",
                          "productName": "L.A. Colors Cool Color Eyeshadow Palette CES137",
                          "searchImage": "http://assets.myntassets.com/assets/images/6534789/2022/12/2/a484260e-45aa-4a2f-ae7f-af38adfe19471669980805264-LA-Colors-Cool-Color-Eyeshadow-Palette-CES137-54216699808050-1.jpg",
                          "sizes": "15-20 ML",
                          "mrp": 850,
                          "price": 425,
                          "additionalInfo": "Cool Eyeshadow Palette CES137",
                          "brand": "L.A colors",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 425,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 29988300,
                              "label": "15-20 ML",
                              "inventory": 172,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 49,
                          "systemAttributes": [
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Ultimate-Eyeshadow-Palette--Shade-2/15580024/buy",
                          "productId": 15580024,
                          "product": "SWISS BEAUTY Ultimate Eyeshadow Palette -Shade 2",
                          "productName": "SWISS BEAUTY Ultimate Eyeshadow Palette -Shade 2",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580024/2021/10/18/2b2ee3a8-0070-4ef8-a6c4-b55023a46a401634519917993-SWISS-BEAUTY-Women-Eyeshadow-9881634519917716-1.jpg",
                          "sizes": "4-6 ML",
                          "mrp": 269,
                          "price": 201,
                          "additionalInfo": "Eyeshadow Palette -Shade 2",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 68,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236182,
                              "label": "4-6 ML",
                              "inventory": 1664,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 885,
                          "systemAttributes": [
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/MARS/MARS-Back-to-Basics-Eyeshadow-Palette-Shade-02/16228114/buy",
                          "productId": 16228114,
                          "product": "MARS Back to Basics Eyeshadow Palette Shade-02",
                          "productName": "MARS Back to Basics Eyeshadow Palette Shade-02",
                          "searchImage": "http://assets.myntassets.com/assets/images/16228114/2022/4/22/56cef970-fdfd-4e02-9b38-dd0e275f54bd1650616294793MARSBacktoBasicsEyeshadowPaletteShade-021.jpg",
                          "sizes": "20-30 ML",
                          "mrp": 299,
                          "price": 284,
                          "additionalInfo": "Back to Basics Palette",
                          "brand": "MARS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(5% OFF)",
                          "discount": 15,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Winter",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 51350399,
                              "label": "20-30 ML",
                              "inventory": 8600,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 1194,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/Maybelline/Maybelline-New-York-The-Nudes-Eyeshadow-Palette---Blush-9g/10849124/buy",
                          "productId": 10849124,
                          "product": "Maybelline New York The Nudes Eyeshadow Palette - Blush 9g",
                          "productName": "Maybelline New York The Nudes Eyeshadow Palette - Blush 9g",
                          "searchImage": "http://assets.myntassets.com/assets/images/10849124/2022/9/17/360d3eac-5932-4181-a929-0e1585148d3c1663412683529MaybellineNewYorkTheNudesEyeshadowPalette-Blush9g2.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 999,
                          "price": 749,
                          "additionalInfo": "Eyeshadow Palette - Blush",
                          "brand": "Maybelline",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 250,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 37297390,
                              "label": "6-10 ML",
                              "inventory": 2454,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 6778,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Ultimate-Eyeshadow-Palette---01/15580298/buy",
                          "productId": 15580298,
                          "product": "SWISS BEAUTY Ultimate Eyeshadow Palette - 01",
                          "productName": "SWISS BEAUTY Ultimate Eyeshadow Palette - 01",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580298/2021/10/20/f9f0398f-bf6f-460d-b110-82977e03a0541634727981028-SWISS-BEAUTY-Women-Eyeshadow-1591634727980787-1.jpg",
                          "sizes": "4-6 ML",
                          "mrp": 269,
                          "price": 201,
                          "additionalInfo": "Ultimate Eyeshadow Palette  01",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 68,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236319,
                              "label": "4-6 ML",
                              "inventory": 1200,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 606,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/Maybelline/Maybelline-New-York-City-Mini-Eyeshadow-Palette---Westside-Roses/14284116/buy",
                          "productId": 14284116,
                          "product": "Maybelline New York City Mini Eyeshadow Palette - Westside Roses",
                          "productName": "Maybelline New York City Mini Eyeshadow Palette - Westside Roses",
                          "searchImage": "http://assets.myntassets.com/assets/images/14284116/2022/9/6/05dc97d1-cfaf-4ac0-bb21-46c46f31b70c1662439968236-Maybelline-New-York-City-Mini-Eyeshadow-Palette---Westside-R-1.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 780,
                          "price": 663,
                          "additionalInfo": "Eyeshadow - Westside Roses",
                          "brand": "Maybelline",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(15% OFF)",
                          "discount": 117,
                          "primaryColour": "Pink",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 47590626,
                              "label": "6-10 ML",
                              "inventory": 278,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 314,
                          "systemAttributes": [
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/LA-colors/LA-colors-12-Color-Enchanting-Eyeshadow-Palette-Stocking-Suffer---Nude/17963784/buy",
                          "productId": 17963784,
                          "product": "L.A colors 12 Color Enchanting Eyeshadow Palette Stocking Suffer - Nude",
                          "productName": "L.A colors 12 Color Enchanting Eyeshadow Palette Stocking Suffer - Nude",
                          "searchImage": "http://assets.myntassets.com/assets/images/17963784/2022/9/17/3fad35f5-9f10-4c43-9268-3ccae37d82561663413540318LAcolors12ColorEnchantingEyeshadowPaletteStockingSuffer-Nude1.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 499,
                          "price": 249,
                          "additionalInfo": "12 Color Eyeshadow - Nude",
                          "brand": "L.A colors",
                          "gender": "Unisex",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 250,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2022",
                          "inventoryInfo": [
                            {
                              "skuId": 55267410,
                              "label": "6-10 ML",
                              "inventory": 539,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 105,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Professional-HD-Eyeshadow-Palette---04/15580226/buy",
                          "productId": 15580226,
                          "product": "SWISS BEAUTY Professional HD Eyeshadow Palette - 04",
                          "productName": "SWISS BEAUTY Professional HD Eyeshadow Palette - 04",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580226/2021/10/25/6aa7b76a-6c73-422b-b51d-2da1e9b8962e1635149089429-SWISS-BEAUTY-Women-Eyeshadow-5651635149089254-1.jpg",
                          "sizes": "30-50 ML",
                          "mrp": 1199,
                          "price": 599,
                          "additionalInfo": "HD Eyeshadow Palette - 04",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 600,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236283,
                              "label": "30-50 ML",
                              "inventory": 270,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 374,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "componentUId": "32600e8a-f47b-4f94-a061-368d1d70be11"
                }
              ]
        }
    },
    "recommended_products":{
            "response": {
              "screen": {
                "elementId": "FlatViewTemplate",
                "headerMeta": {
                  "colorTheme": "",
                  "bgColor": ""
                },
                "name": "Product List"
              },
              "components": [
                {
                  "type": "ProductListViewModel",
                  "elementId": "ItemsList",
                  "props": {
                    "contentProps": {
                      "extraParams": {
                        "viewRelatedParams": {
                          "numColumns": 2
                        },
                        "requestObject": {
                          "requestType": "POST",
                          "path": "/promotedStyles",
                          "requestBody": {
                            "type": "AUTHOR",
                            "idsPerPage": 15,
                            "pageNumber": 2,
                            "page": 11,
                            "uidx": "3e6ed766.cb56.4466.879d.e68e364d405aqrapo0TrNE"
                          }
                        }
                      },
                      "elementId": "ProductItemView",
                      "items": [
                        {
                          "landingPageUrl": "Skirts/StyleStone/StyleStone-Women-Blue-Solid-A-Line-Denim-Pencil-Skirt/6716798/buy",
                          "productId": 6716798,
                          "product": "StyleStone Women Blue Solid A-Line Denim Pencil Skirt",
                          "productName": "StyleStone Women Blue Solid A-Line Denim Pencil Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/6716798/2018/6/12/3fc88329-897f-4a8f-98a3-47d277163e201528794927167-na-6411528794925668-1.jpg",
                          "sizes": "28,30,32,34",
                          "mrp": 1599,
                          "price": 575,
                          "additionalInfo": "Women Denim Skirt",
                          "brand": "StyleStone",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(64% OFF)",
                          "discount": 1024,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 30416277,
                              "label": "28",
                              "inventory": 56,
                              "available": true
                            },
                            {
                              "skuId": 30416279,
                              "label": "30",
                              "inventory": 69,
                              "available": true
                            },
                            {
                              "skuId": 30416280,
                              "label": "32",
                              "inventory": 60,
                              "available": true
                            },
                            {
                              "skuId": 30416281,
                              "label": "34",
                              "inventory": 57,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 122,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Dresses/SASSAFRAS/SASSAFRAS-Black-Stretchable-Bodycon-Dress/7687328/buy",
                          "productId": 7687328,
                          "product": "SASSAFRAS Black Stretchable Bodycon Dress",
                          "productName": "SASSAFRAS Black Stretchable Bodycon Dress",
                          "searchImage": "http://assets.myntassets.com/assets/images/7687328/2018/10/29/e56f2d70-6cf2-4eea-8b42-2deae0570cf61540809457588-SASSAFRAS-Women-Dresses-9321540809457475-1.jpg",
                          "sizes": "XS,S,M,L,XL,XXL",
                          "mrp": 1799,
                          "price": 683,
                          "additionalInfo": "Stretchable Bodycon Dress",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(62% OFF)",
                          "discount": 1116,
                          "primaryColour": "Black",
                          "category": "Dresses",
                          "season": "Winter",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 32154921,
                              "label": "XS",
                              "inventory": 21,
                              "available": true
                            },
                            {
                              "skuId": 32154928,
                              "label": "S",
                              "inventory": 25,
                              "available": true
                            },
                            {
                              "skuId": 32154930,
                              "label": "M",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 32154932,
                              "label": "L",
                              "inventory": 16,
                              "available": true
                            },
                            {
                              "skuId": 32154934,
                              "label": "XL",
                              "inventory": 9,
                              "available": true
                            },
                            {
                              "skuId": 32154936,
                              "label": "XXL",
                              "inventory": 6,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 4656,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Kurtas/RANGMANCH-BY-PANTALOONS/RANGMANCH-BY-PANTALOONS-Women-White--Red-Printed-A-Line-Kurta/8534453/buy",
                          "productId": 8534453,
                          "product": "RANGMANCH BY PANTALOONS Women White & Red Printed A-Line Kurta",
                          "productName": "RANGMANCH BY PANTALOONS Women White & Red Printed A-Line Kurta",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2019/1/18/bc0d5a36-f327-4279-b2d5-66f69a4372db1547816867078-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 999,
                          "price": 999,
                          "additionalInfo": "Printed A-Line Kurta",
                          "brand": "RANGMANCH BY PANTALOONS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "primaryColour": "White",
                          "category": "Kurtas",
                          "season": "Spring",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 33111184,
                              "label": "XS"
                            },
                            {
                              "skuId": 33111185,
                              "label": "S",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 33111186,
                              "label": "M"
                            },
                            {
                              "skuId": 33111187,
                              "label": "L"
                            },
                            {
                              "skuId": 33111188,
                              "label": "XL"
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 20,
                          "isFastFashion": true
                        },
                        {
                          "landingPageUrl": "Kurtas/Ahalyaa/Ahalyaa-Women-Lime-Green--Off-White-Printed-A-Line-Kurta/9007925/buy",
                          "productId": 9007925,
                          "product": "Ahalyaa Women Lime Green & Off-White Printed A-Line Kurta",
                          "productName": "Ahalyaa Women Lime Green & Off-White Printed A-Line Kurta",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2019/3/11/5afb1cfd-a996-47da-92f7-7bc592afe9731552306926479-1.jpg",
                          "sizes": "S,M,L,XL,XXL",
                          "mrp": 3563,
                          "price": 1068,
                          "additionalInfo": "Printed A-Line Kurta",
                          "brand": "Ahalyaa",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(70% OFF)",
                          "discount": 2495,
                          "primaryColour": "Lime Green",
                          "category": "Kurtas",
                          "season": "Summer",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 33534385,
                              "label": "S"
                            },
                            {
                              "skuId": 33534386,
                              "label": "M"
                            },
                            {
                              "skuId": 33534388,
                              "label": "L"
                            },
                            {
                              "skuId": 33534389,
                              "label": "XL"
                            },
                            {
                              "skuId": 33534390,
                              "label": "XXL"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Roadster/Roadster-Women-Blue-Washed-Denim-Skirt/10058323/buy",
                          "productId": 10058323,
                          "product": "Roadster Women Blue Washed Denim Skirt",
                          "productName": "Roadster Women Blue Washed Denim Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10058323/2019/10/16/5a8ccaac-e1a8-4928-a531-f5a6948e97f81571214493824-Roadster-Women-Skirts-3041571214491397-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 2099,
                          "price": 629,
                          "additionalInfo": "Women Washed Denim Skirt",
                          "brand": "Roadster",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(70% OFF)",
                          "discount": 1470,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 34761317,
                              "label": "26"
                            },
                            {
                              "skuId": 34761319,
                              "label": "28",
                              "inventory": 15,
                              "available": true
                            },
                            {
                              "skuId": 34761321,
                              "label": "30",
                              "inventory": 3,
                              "available": true
                            },
                            {
                              "skuId": 34761325,
                              "label": "32",
                              "inventory": 2,
                              "available": true
                            },
                            {
                              "skuId": 34761327,
                              "label": "34",
                              "inventory": 3,
                              "available": true
                            },
                            {
                              "skuId": 47064639,
                              "label": "36",
                              "inventory": 5,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 518,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Yellow-Printed-Made-to-Measure-Lehenga--Blouse-with-Dupatta/10197727/buy",
                          "productId": 10197727,
                          "product": "Ethnovog Beige Yellow Printed Made to Measure Lehenga Blouse with Dupatta",
                          "productName": "Ethnovog Beige Yellow Printed Made to Measure Lehenga Blouse with Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/10197727/2022/2/28/5cbd5079-07a3-4f9b-a14b-4493a53365e01646052055937-EthnoVogue-Beige--Yellow-Printed-Made-to-Measure-Lehenga--Bl-1.jpg",
                          "sizes": "32/40,34/40,36/40,38/40,40/40,42/40",
                          "mrp": 7249,
                          "price": 5944,
                          "additionalInfo": "Made to Measure Lehenga & Blouse with Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(18% OFF)",
                          "discount": 1305,
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 34958445,
                              "label": "32/40"
                            },
                            {
                              "skuId": 34958453,
                              "label": "34/40"
                            },
                            {
                              "skuId": 34958459,
                              "label": "36/40"
                            },
                            {
                              "skuId": 34958460,
                              "label": "38/40"
                            },
                            {
                              "skuId": 34958461,
                              "label": "40/40"
                            },
                            {
                              "skuId": 34958462,
                              "label": "42/40"
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 6,
                          "isFastFashion": true
                        },
                        {
                          "landingPageUrl": "Skirts/SASSAFRAS/SASSAFRAS-Blue-Washed-Midi-Denim-Pure-Cotton-A-Line-Skirt/10604482/buy",
                          "productId": 10604482,
                          "product": "SASSAFRAS Blue Washed Midi Denim Pure Cotton A-Line Skirt",
                          "productName": "SASSAFRAS Blue Washed Midi Denim Pure Cotton A-Line Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10604482/2019/9/12/b3b00e71-b440-4b13-ad4d-ce8d4db4d5d51568286366081-SASSAFRAS-Women-Skirts-991568286364390-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 1999,
                          "price": 899,
                          "additionalInfo": "Pure Cotton Midi Denim A-Line Skirt",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(55% OFF)",
                          "discount": 1100,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 36347976,
                              "label": "26"
                            },
                            {
                              "skuId": 36347982,
                              "label": "28",
                              "inventory": 8,
                              "available": true
                            },
                            {
                              "skuId": 36347984,
                              "label": "30",
                              "inventory": 16,
                              "available": true
                            },
                            {
                              "skuId": 36347986,
                              "label": "32",
                              "inventory": 18,
                              "available": true
                            },
                            {
                              "skuId": 36347988,
                              "label": "34",
                              "inventory": 7,
                              "available": true
                            },
                            {
                              "skuId": 36347992,
                              "label": "36",
                              "inventory": 2,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 727,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "3 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/SASSAFRAS/SASSAFRAS-Women-Blue-Washed-Denim-A-Line-Skirt/10604576/buy",
                          "productId": 10604576,
                          "product": "SASSAFRAS Women Blue Washed Denim A-Line Skirt",
                          "productName": "SASSAFRAS Women Blue Washed Denim A-Line Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10604576/2019/9/12/62e82ec1-396a-452b-9413-b904098fab2f1568286397373-SASSAFRAS-Women-Skirts-2031568286394857-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 1599,
                          "price": 719,
                          "additionalInfo": "Women Pure Cotton Denim A-Line Skirt",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(55% OFF)",
                          "discount": 880,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 36348534,
                              "label": "26",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 36348542,
                              "label": "28",
                              "inventory": 9,
                              "available": true
                            },
                            {
                              "skuId": 36348544,
                              "label": "30",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 36348548,
                              "label": "32",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 36348550,
                              "label": "34",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 36348552,
                              "label": "36"
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 538,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            },
                            {
                              "value": "3 Days",
                              "attribute": "SA_XT_OOS"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Solid-Midi-Denim-Straight-Skirt/11992704/buy",
                          "productId": 11992704,
                          "product": "Tokyo Talkies Women Blue Solid Midi Denim Straight Skirt",
                          "productName": "Tokyo Talkies Women Blue Solid Midi Denim Straight Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2020/6/23/f4f9e168-7d76-4a72-9372-aa6e3b7446e91592862837260-1.jpg",
                          "sizes": "28,30,32,34",
                          "mrp": 1549,
                          "price": 604,
                          "additionalInfo": "Women Pure Cotton Solid Straight Midi Denim Skirt",
                          "brand": "Tokyo Talkies",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 256,
                          "discountDisplayLabel": "(61% OFF)",
                          "discount": 945,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Winter",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 41747118,
                              "label": "28",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 41747124,
                              "label": "30"
                            },
                            {
                              "skuId": 41747126,
                              "label": "32"
                            },
                            {
                              "skuId": 41747132,
                              "label": "34"
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 258,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Tops/20Dresses/20Dresses-Women-Yellow-Floral-Print-Crop-Top/12290182/buy",
                          "productId": 12290182,
                          "product": "20Dresses Women Yellow Floral Print Crop Top",
                          "productName": "20Dresses Women Yellow Floral Print Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/12290182/2020/8/31/0e46f94e-7118-4de2-beb6-e173dabeb1761598863225904-20Dresses-Let-Them-Bloom-Floral-Top-for-Women-94715988632244-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 1395,
                          "price": 976,
                          "additionalInfo": "Floral Print Crop Top",
                          "brand": "20Dresses",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(30% OFF)",
                          "discount": 419,
                          "primaryColour": "Yellow",
                          "category": "Tops",
                          "season": "Winter",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 42789166,
                              "label": "XS",
                              "inventory": 128,
                              "available": true
                            },
                            {
                              "skuId": 42789168,
                              "label": "S",
                              "inventory": 276,
                              "available": true
                            },
                            {
                              "skuId": 42789170,
                              "label": "M",
                              "inventory": 248,
                              "available": true
                            },
                            {
                              "skuId": 42789172,
                              "label": "L",
                              "inventory": 87,
                              "available": true
                            },
                            {
                              "skuId": 42789174,
                              "label": "XL",
                              "inventory": 176,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 338,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Mellow Yellow",
                              "attribute": "Mellow Yellow"
                            },
                            {
                              "value": "Botanical Print",
                              "attribute": "Botanical Print"
                            },
                            {
                              "value": "Smocking",
                              "attribute": "Smocking"
                            },
                            {
                              "value": "Yes",
                              "attribute": "VTR_Available"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Not Applicable",
                              "attribute": "ExcludeFromSearch"
                            },
                            {
                              "value": "true",
                              "attribute": "style_cast_enabled"
                            },
                            {
                              "value": "FWD",
                              "attribute": "SA_XT_STYLECAST"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Chemistry/Chemistry-Women-Blue-Solid-Denim-A-Line-Skirt-With-waist-Tie--Up-Detail/13187208/buy",
                          "productId": 13187208,
                          "product": "Chemistry Women Blue Solid Denim A-Line Skirt With waist Tie -Up Detail",
                          "productName": "Chemistry Women Blue Solid Denim A-Line Skirt With waist Tie -Up Detail",
                          "searchImage": "http://assets.myntassets.com/assets/images/13187208/2021/11/24/b5209604-f7d5-4b03-92d8-b286652e1a551637736965908-Chemistry-Women-Blue-Solid-Denim-A-Line-Skirt-With-waist-Tie-1.jpg",
                          "sizes": "26,28,30,32,34",
                          "mrp": 1699,
                          "price": 424,
                          "additionalInfo": "Solid Denim A-Line Skirt",
                          "brand": "Chemistry",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(75% OFF)",
                          "discount": 1275,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 45563853,
                              "label": "26"
                            },
                            {
                              "skuId": 45563855,
                              "label": "28"
                            },
                            {
                              "skuId": 45563857,
                              "label": "30",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 45563861,
                              "label": "32",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 45563859,
                              "label": "34",
                              "inventory": 1,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 407,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "NEW SEASON",
                              "attribute": "SA_XT_New_Season"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Gold-Coloured-Printed-Made-to-Measure-Lehenga--Blouse-with-Dupatta/13512762/buy",
                          "productId": 13512762,
                          "product": "Ethnovog Beige Gold-Coloured Printed Made to Measure Lehenga Blouse with Dupatta",
                          "productName": "Ethnovog Beige Gold-Coloured Printed Made to Measure Lehenga Blouse with Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/13512762/2021/3/3/a4d08494-c741-4d20-a3bc-5ef8973838d21614765752586-EthnoVogue-Made-To-Measure-Beige-Cotton-High-N-Low-Style-Leh-1.jpg",
                          "sizes": "32/42,34/42,36/42,38/42,40/42,42/42,44/42",
                          "mrp": 6908,
                          "price": 4282,
                          "additionalInfo": "Made to Measure Lehenga & Blouse with Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(38% OFF)",
                          "discount": 2626,
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46155941,
                              "label": "32/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155944,
                              "label": "34/42",
                              "inventory": 6,
                              "available": true
                            },
                            {
                              "skuId": 46155947,
                              "label": "36/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155950,
                              "label": "38/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155954,
                              "label": "40/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155957,
                              "label": "42/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155959,
                              "label": "44/42",
                              "inventory": 5,
                              "available": true
                            }
                          ],
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Gold-Toned-Printed-Made-to-Measure-Lehenga--Blouse-With-Dupatta/13512800/buy",
                          "productId": 13512800,
                          "product": "Ethnovog Beige Gold-Toned Printed Made to Measure Lehenga Blouse With Dupatta",
                          "productName": "Ethnovog Beige Gold-Toned Printed Made to Measure Lehenga Blouse With Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/13512800/2021/6/25/ea158a70-66e9-44f6-9b56-5f4a80b594911624596542223-EthnoVogue-Made-To-Measure-Beige-Organza-Pleated-Elbow-Sleev-1.jpg",
                          "sizes": "32/42,34/42,36/42,38/42,40/42,42/42,44/42",
                          "mrp": 6601,
                          "price": 6601,
                          "additionalInfo": "Made to Measure Lehenga Blouse With Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46156075,
                              "label": "32/42"
                            },
                            {
                              "skuId": 46156078,
                              "label": "34/42"
                            },
                            {
                              "skuId": 46156080,
                              "label": "36/42"
                            },
                            {
                              "skuId": 46156082,
                              "label": "38/42"
                            },
                            {
                              "skuId": 46156083,
                              "label": "40/42"
                            },
                            {
                              "skuId": 46156084,
                              "label": "42/42"
                            },
                            {
                              "skuId": 46156085,
                              "label": "44/42"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Trousers/FableStreet/FableStreet-Women-LivIn-Straight-Fit-Solid-4-Way-Stretch-Regular-Trousers/13766274/buy",
                          "productId": 13766274,
                          "product": "FableStreet Women LivIn Straight Fit Solid 4 Way Stretch Regular Trousers",
                          "productName": "FableStreet Women LivIn Straight Fit Solid 4 Way Stretch Regular Trousers",
                          "searchImage": "http://assets.myntassets.com/assets/images/13766274/2021/3/2/1f55771a-51c1-4ece-844d-7d4765a86e981614663460650-FableStreet-Women-Grey-Straight-Fit-Solid-Regular-Trousers-6-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 2695,
                          "price": 1886,
                          "additionalInfo": "LivIn Straight Fit Trousers",
                          "brand": "FableStreet",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(30% OFF)",
                          "discount": 809,
                          "primaryColour": "Grey",
                          "category": "Trousers",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46637782,
                              "label": "26",
                              "inventory": 38,
                              "available": true
                            },
                            {
                              "skuId": 46637783,
                              "label": "28",
                              "inventory": 79,
                              "available": true
                            },
                            {
                              "skuId": 46637785,
                              "label": "30",
                              "inventory": 79,
                              "available": true
                            },
                            {
                              "skuId": 46637787,
                              "label": "32",
                              "inventory": 75,
                              "available": true
                            },
                            {
                              "skuId": 46637790,
                              "label": "34",
                              "inventory": 64,
                              "available": true
                            },
                            {
                              "skuId": 46637792,
                              "label": "36",
                              "inventory": 27,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 116,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Dresses/DressBerry/DressBerry-Blue-Solid-Pure-Cotton-Solid-Chambray-A-Line-Dress/13783918/buy",
                          "productId": 13783918,
                          "product": "DressBerry Blue Solid Pure Cotton Solid Chambray A-Line Dress",
                          "productName": "DressBerry Blue Solid Pure Cotton Solid Chambray A-Line Dress",
                          "searchImage": "http://assets.myntassets.com/assets/images/13783918/2021/9/29/df5ab413-de78-479b-8e36-e94b0b3fd99d1632909328824-DressBerry-Women-Dresses-2581632909328251-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 1799,
                          "price": 449,
                          "additionalInfo": "Cotton Chambray A-Line Dress",
                          "brand": "DressBerry",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(75% OFF)",
                          "discount": 1350,
                          "primaryColour": "Blue",
                          "category": "Dresses",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46673415,
                              "label": "XS"
                            },
                            {
                              "skuId": 46673418,
                              "label": "S",
                              "inventory": 18,
                              "available": true
                            },
                            {
                              "skuId": 46673419,
                              "label": "M",
                              "inventory": 17,
                              "available": true
                            },
                            {
                              "skuId": 46673417,
                              "label": "L",
                              "inventory": 10,
                              "available": true
                            },
                            {
                              "skuId": 46673416,
                              "label": "XL",
                              "inventory": 12,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 40,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "Pleats",
                              "attribute": "Pleats"
                            }
                          ]
                        }
                      ],
                      "itemMapperId": "InfluencerItem"
                    }
                  },
                  "componentUId": "8c1947b6-fc9d-419c-89e2-ebd4ec3bfbf4"
                }
              ]
            }
    }
}

export default data;
