import React from "react";
import ReactDOM from "react-dom/client";
 


const Header = () => {

  return (
    <div className= "header">
      <div className="logo-container"> 
        <img className="logo" src= "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"/>

      </div>

      <div className="nav-items">

        <ul>
          <li> Home</li>
          <li> About Us</li>
          <li> Contact Us</li>
          <li> Cart</li>
        </ul>
      </div>


    </div>
  )
};

const RestaurantCard = (props) => {
 const {resData}= props;
 


  return (
    <div className="res-card" >
      <img 
      className="res-logo" 
      alt="res-logo" 
      src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resData.info.cloudinaryImageId} />

            <h3> {resData.info.name}</h3>

            <h4> {resData.info.cuisines.join(",")}</h4>

            <h4>{resData.info.avgRating} stars </h4>

            <h4> {resData.info.costForTwo} </h4>

            <h4> {resData.info.sla.deliveryTime} minutes</h4>

    </div>
  )
};

const resList = [ 
  {
    type: "restaurants",
    "info": {
      "id": "10576",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 04:00:00",
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
        "header": "ITEMS",
        "subHeader": "AT ₹199"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-6th-block-koramangala-bangalore-10576",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "581809",
      "name": "UBQ by Barbeque Nation",
      "cloudinaryImageId": "muaktnk5xb3zop4bvj6l",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 3.9,
      "parentId": "10804",
      "avgRatingString": "3.9",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:30:00",
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-7th-block-koramangala-bangalore-581809",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "25620",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
      "locality": "Intermediate Ring Road",
      "areaName": "Ejipura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "140887",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/edb9c84f-71d1-4c7e-be51-8209b73bfcf1_140887.jpg",
      "locality": "Mantri Avenue",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 22:45:00",
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
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
      "locality": "Koramangala",
      "areaName": "Koramangala",
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
        "deliveryTime": 25,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 06:55:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "426776",
      "name": "Theobroma",
      "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      "avgRating": 4.7,
      "parentId": "1040",
      "avgRatingString": "4.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
            "shortDescription": "Perfect cake delivery",
            "fontColor": "#7E808C"
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
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  "shortDescription": "Perfect cake delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "discountTag": "FLAT DEAL"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-7th-block-koramangala-bangalore-426776",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "371281",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 04:00:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "35307",
      "name": "Chaat Street Express",
      "cloudinaryImageId": "aqenclsr4kwkbzomahyx",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Snacks",
        "Chaat",
        "Street Food",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "231468",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaat-street-express-6th-block-koramangala-bangalore-35307",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41913",
      "name": "Chinita Real Mexican Food",
      "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹750 for two",
      "cuisines": [
        "Mexican",
        "Salads",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "5064",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "158855",
      "name": "Candice's Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Continental",
        "American",
        "Salads",
        "Desserts",
        "Beverages",
        "Healthy Food"
      ],
      "avgRating": 4.5,
      "parentId": "465403",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "321012",
      "name": "Brik Oven - Original Sourdough Pizzas",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/0584d08e-3993-4bbd-a19c-004aca983f50_321012.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Italian",
        "Pizzas",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "488952",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/brik-oven-original-sourdough-pizzas-koramangala-bangalore-321012",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.4,
      "parentId": "21400",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:56:00",
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78511",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
      "locality": "8th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "Ratnesh_Badges/test2.png",
            "shortDescription": "Perfect ice cream delivery",
            "fontColor": "#7E808C"
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "Ratnesh_Badges/test2.png",
                  "shortDescription": "Perfect ice cream delivery"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-8th-block-koramangala-bangalore-78511",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "718430",
      "name": "The Pizza Bakery - Wood Fired Sourdough",
      "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
      "locality": "BTM Layout",
      "areaName": "Koramangala",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Continental",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "522292",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-pizza-bakery-wood-fired-sourdough-btm-layout-koramangala-bangalore-718430",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "717421",
      "name": "Paris Panini - Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "c27da4b0bab4ca71460bdf082cf58ad4",
      "locality": "BTM Layout",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Continental",
        "Pastas",
        "Salads",
        "Desserts",
        "Snacks",
        "Fast Food",
        "French"
      ],
      "avgRating": 4.5,
      "parentId": "21019",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-bangalore-717421",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "77870",
      "name": "Pasta Street",
      "cloudinaryImageId": "aecff12704ebe42606524c852f9ab0e4",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹900 for two",
      "cuisines": [
        "Italian",
        "Pastas",
        "Pizzas",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "2872",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-15 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
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
        "subHeader": "AT ₹399"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pasta-street-koramangala-bangalore-77870",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "690684",
      "name": "Burgerama",
      "cloudinaryImageId": "1d52387b37dbec1712d0142aec3421a6",
      "locality": "Sarjapur Main Road",
      "areaName": "Koramangala",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "8993",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
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
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burgerama-sarjapur-main-road-koramangala-bangalore-690684",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "733092",
      "name": "Caterspoint",
      "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
      "locality": "Hosur Road",
      "areaName": "HSR",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Healthy Food",
        "Italian",
        "Salads",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "11011",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
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
                  "shortDescription": "brand"
                }
              }
            ]
          }
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/caterspoint-hosur-road-hsr-bangalore-733092",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "736632",
      "name": "Saladspoint",
      "cloudinaryImageId": "6116a2736e177c4a872d11a9d077584a",
      "locality": "Madiwala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Salads",
        "Healthy Food",
        "Juices"
      ],
      "avgRating": 4.5,
      "parentId": "8786",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-16 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
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
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
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
                  "shortDescription": "brand"
                }
              }
            ]
          }
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/saladspoint-madiwala-koramangala-bangalore-736632",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "739117",
      "name": "Boba Bhai",
      "cloudinaryImageId": "b0471f6ae8ec204260755f55d35c626e",
      "locality": "Industrial Layout ward",
      "areaName": "Kormangla",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Fast Food",
        "Street Food"
      ],
      "avgRating": 4.3,
      "parentId": "361235",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-22 00:00:00",
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
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
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
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/boba-bhai-industrial-layout-ward-kormangla-bangalore-739117",
      "type": "WEBLINK"
    }
  }
];


const Body =() =>{
  return (
    <div classname="body">
      <div className="search"> Search</div>

      <div className="res-container">

         <RestaurantCard resData= {resList [0]} />
         <RestaurantCard resData= {resList [1]} />
         <RestaurantCard resData= {resList [2]} />
         <RestaurantCard resData= {resList [3]} />
         <RestaurantCard resData= {resList [4]} />
         <RestaurantCard resData= {resList [5]} />
         <RestaurantCard resData= {resList [6]} />
         <RestaurantCard resData= {resList [7]} />
         <RestaurantCard resData= {resList [8]} /> 
         
      </div> 
    </div>
  )
};




const AppLayout =()=> {
return (
  
  <div className= "app">
    <Header/>
    <Body />



  </div>
);

};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



