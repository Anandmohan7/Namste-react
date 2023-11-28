import react from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
/**
 * PLANING
 * Header
 * -Logo
 * -Nav items
 * Body
 * -search
 * -Restaurant container
 *  -Restaurant card
 *     -img
 *     -name of res,star rating, cuisins, delivery time
 * Footer
 * -Copyright
 * -Address
 * -contact  
 */ 

 const Header = () =>{
    return(
        <div className ="header">
            <div className="logo conatiner">
                <img 
                className="logo" src="https://cdn-icons-png.flaticon.com/512/4534/4534186.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                </ul>
            </div>
            </div>
    )

};

const RestaurantCard = (props) =>{
    const{resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        areaName,
        sla
    } = resData?.info;

    return(
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{areaName}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

const resList=[
    {
        "info": {
          "id": "177495",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "ugemttaiukyqfhxkfs9i",
          "locality": "Pathways School Road",
          "areaName": "Hajipur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "177495",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "4961",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-pathways-school-road-hajipur-noida-1-177495",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "356221",
          "name": "KFC",
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
          "locality": "Hazipur",
          "areaName": "Hajipur",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "356221",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5500
          },
          "parentId": "547",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 05:00:00",
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
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
          "link": "https://www.swiggy.com/restaurants/kfc-hazipur-hajipur-noida-1-356221",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "21239",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Sector 38",
          "areaName": "Sector 38",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "21239",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5400
          },
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 01:00:00",
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
            "subHeader": "AT ₹129"
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
          "link": "https://www.swiggy.com/restaurants/burger-king-sector-38-noida-1-21239",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "53766",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Central Market",
          "areaName": "Sector 50",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "53766",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "721",
          "avgRatingString": "3.8",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 04:00:00",
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
            "header": "FREE ITEM"
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
          "link": "https://www.swiggy.com/restaurants/pizza-hut-central-market-sector-50-noida-1-53766",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "142001",
          "name": "Salad Days",
          "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
          "locality": "Golf Course",
          "areaName": "Sector 45",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Salads"
          ],
          "avgRating": 4.4,
          "feeDetails": {
            "restaurantId": "142001",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "796",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.2,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "0.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
          "link": "https://www.swiggy.com/restaurants/salad-days-golf-course-sector-45-noida-1-142001",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "45512",
          "name": "Theobroma",
          "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
          "locality": "Morna",
          "areaName": "Sector 34",
          "costForTwo": "₹800 for two",
          "cuisines": [
            "Bakery",
            "Desserts"
          ],
          "avgRating": 4.4,
          "feeDetails": {
            "restaurantId": "45512",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5500
          },
          "parentId": "1040",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:00:00",
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
            "header": "10% OFF",
            "subHeader": "ABOVE ₹159",
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
          "link": "https://www.swiggy.com/restaurants/theobroma-morna-sector-34-noida-1-45512",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "20317",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "B Block",
          "areaName": "Sector 50",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.7,
          "feeDetails": {
            "restaurantId": "20317",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "2",
          "avgRatingString": "3.7",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
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
          "link": "https://www.swiggy.com/restaurants/subway-b-block-sector-50-noida-1-20317",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "155052",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
          "locality": "Tulsi Market",
          "areaName": "Sector 5",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "155052",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 7000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 7000
          },
          "parentId": "6249",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 7.6,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "7.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 00:00:00",
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
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-tulsi-market-sector-5-noida-1-155052",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "362214",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "cwxftpfum7kmygu2gc5a",
          "locality": "Golf Course",
          "areaName": "Sector 48",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "362214",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4700
          },
          "parentId": "2093",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 0.8,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-golf-course-sector-48-noida-1-362214",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "464924",
          "name": "Ambersar by Enoki",
          "cloudinaryImageId": "en3un3xv2m78euoriywg",
          "locality": "Sector 104",
          "areaName": "Hajipur",
          "costForTwo": "₹1000 for two",
          "cuisines": [
            "Kebabs",
            "North Indian",
            "Mughlai"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "464924",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4700
          },
          "parentId": "12136",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:00:00",
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
          "link": "https://www.swiggy.com/restaurants/ambersar-by-enoki-sector-104-hajipur-noida-1-464924",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "323600",
          "name": "Dana Choga",
          "cloudinaryImageId": "lyjfxnnfzy5xfa45vhzt",
          "locality": "Golf Course",
          "areaName": "Sector 41",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "North Indian",
            "Indian",
            "Mughlai",
            "Chinese",
            "Biryani",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "323600",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4700
          },
          "parentId": "5179",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:00:00",
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
          "link": "https://www.swiggy.com/restaurants/dana-choga-golf-course-sector-41-noida-1-323600",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "22132",
          "name": "Al Nawab Restaurant",
          "cloudinaryImageId": "lczmmddifkbobtccrpue",
          "locality": "Sector 104",
          "areaName": "Hajipur",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "22132",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "29345",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 01:00:00",
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
          "link": "https://www.swiggy.com/restaurants/al-nawab-restaurant-sector-104-hajipur-noida-1-22132",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "183883",
          "name": "Khadak Singh Da Dhaba",
          "cloudinaryImageId": "8144bf37947c161953f656308d1bfc30",
          "locality": "Hazipur",
          "areaName": "Hajipur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Mughlai",
            "Snacks"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "183883",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 5300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 5300
          },
          "parentId": "13170",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
          "link": "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-hazipur-hajipur-noida-1-183883",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "146459",
          "name": "Hira Sweets",
          "cloudinaryImageId": "r1nhhxgakr1v5mdwkwvk",
          "locality": "B Block",
          "areaName": "Sector 50",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Continental",
            "Bakery",
            "Street Food",
            "Sweets",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "146459",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4000
          },
          "parentId": "5155",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:55:00",
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
          "aggregatedDiscountInfoV2": {
            
          },
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
          "link": "https://www.swiggy.com/restaurants/hira-sweets-b-block-sector-50-noida-1-146459",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "324384",
          "name": "Tossin Pizza",
          "cloudinaryImageId": "313485a665bd0f4958fdc14ead8afade",
          "locality": "Sector 50",
          "areaName": "Sector 50",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Italian"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "324384",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4700
          },
          "parentId": "1778",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-35 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
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
          "link": "https://www.swiggy.com/restaurants/tossin-pizza-sector-50-noida-1-324384",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "355357",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "wnj8ppqwyza4ympg3bhu",
          "locality": "Golf Course",
          "areaName": "Sector 45",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
            "restaurantId": "355357",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3800
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3800
          },
          "parentId": "12175",
          "avgRatingString": "4.6",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-29 03:00:00",
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
          "link": "https://www.swiggy.com/restaurants/grameen-kulfi-golf-course-sector-45-noida-1-355357",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "111666",
          "name": "Burgrill - The Win Win Burger",
          "cloudinaryImageId": "985642c79217cabad0c83073692506ca",
          "locality": "Golf Course",
          "areaName": "Sector 45",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Burgers",
            "Healthy Food",
            "American",
            "Salads",
            "Beverages",
            "Desserts",
            "Snacks"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "111666",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4000
          },
          "parentId": "302366",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 23:59:00",
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
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
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
          "link": "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-golf-course-sector-45-noida-1-111666",
          "type": "WEBLINK"
        }
      },
]
const Body =() =>{
return(
    <div className="body">
        <div className="Search"></div>
        <div className="res-container">
        {
            resList.map((restaurant) =><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)

        }
        </div>
        
    </div>
)
};
const AppLayout = ()=>{
    return (
        <div className="App">
            <Header />
            <Body />

        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
