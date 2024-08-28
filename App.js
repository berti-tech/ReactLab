import React from "react";
import ReactDOM from "react-dom/client";
import AppLogo from "./assets/AppLogo.png";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body
 *  - Search
 *  - Restaurant Container
 *      - RestaurantCard
 *          - Img
 *          - Name
 *          - Cuisines
 *          - Star Rating
 *          - Delivery Time
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const resList = [
          {
            "info": {
              "id": "59593",
              "name": "Al Daaz",
              "cloudinaryImageId": "9d9ccb333db8f94351e3842664d09309",
              "locality": "HSR Layout",
              "areaName": "HSR Layout",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Arabian",
                "Mughlai",
                "Chinese",
                "Desserts",
                "American",
                "Indian",
                "Pizzas"
              ],
              "avgRating": 4.5,
              "parentId": "21640",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-28 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/al-daaz-hsr-layout-bangalore-59593",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "323187",
              "name": "Meghana Foods",
              "cloudinaryImageId": "nw2xeql0jokm2rqnkzfs",
              "locality": "Hosur Road",
              "areaName": "Hosur Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.6,
              "parentId": "635",
              "avgRatingString": "4.6",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-29 01:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Biryani.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/meghana-foods-hosur-road-bangalore-323187",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "769775",
              "name": "Nahdi Mandi Restaurant",
              "cloudinaryImageId": "8e82f6e42f5e5bde0649f1f8f48209d8",
              "locality": "BTM Layout",
              "areaName": "BTM Layout",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Biryani",
                "Arabian",
                "North Indian"
              ],
              "avgRating": 4.5,
              "parentId": "459711",
              "avgRatingString": "4.5",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-28 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/nahdi-mandi-restaurant-btm-layout-bangalore-769775",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "426",
              "name": "Hotel Empire",
              "cloudinaryImageId": "gswvotfmtwj47y7o7nqh",
              "locality": "HSR Layout",
              "areaName": "HSR Layout",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Kebabs",
                "Biryani"
              ],
              "avgRating": 4.3,
              "parentId": "475",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-29 02:45:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/hotel-empire-hsr-layout-bangalore-426",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "428",
              "name": "Biryani Pot ",
              "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
              "locality": "BTM Layout",
              "areaName": "BTM Layout",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 4.1,
              "parentId": "21798",
              "avgRatingString": "4.1",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-29 03:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.5",
                  "ratingCount": "500+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/biryani-pot-btm-layout-bangalore-428",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "194610",
              "name": "Mani's Dum Biryani",
              "cloudinaryImageId": "j7cijvueivi8qhvnohvw",
              "locality": "HSR Layout\t",
              "areaName": "HSR Layout",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Andhra",
                "Biryani",
                "North Indian"
              ],
              "avgRating": 4.5,
              "parentId": "623",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-28 23:45:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-hsr-layout-bangalore-194610",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "57283",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_57283.JPG",
              "locality": "HSR Layout",
              "areaName": "HSR Layout",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.2,
              "parentId": "166",
              "avgRatingString": "4.2",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-29 06:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/burger-king-hsr-layout-bangalore-57283",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          },
          {
            "info": {
              "id": "201224",
              "name": "Asha Tiffins",
              "cloudinaryImageId": "n15vckntsiboiod3gpco",
              "locality": "HSR Layout",
              "areaName": "HSR Layout",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "South Indian",
                "Chinese",
                "Desserts",
                "Beverages",
                "North Indian"
              ],
              "avgRating": 4.5,
              "parentId": "236243",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-08-28 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "10K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3359b508-a149-47d4-a5c9-f04ccd795090"
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/asha-tiffins-hsr-layout-bangalore-201224",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          }
]


// Header component -> Logo & Nav Items
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={AppLogo} draggable="false"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

// Props are passed as - Destructured Objects - Object Destructuring
const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                alt="res-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    cloudinaryImageId
                }
                />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
            </div>
        </div>
    )
}

// Functional Component is a normal function that returns some piece of JSX code
// Conatiner div
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<AppLayout/>)