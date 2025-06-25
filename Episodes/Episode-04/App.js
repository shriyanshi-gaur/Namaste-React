
import React from "react";
import ReactDOM from "react-dom/client";
import TiffinTrails from "../../public/Images/tiffintrails.jpeg";
import { IMG_CDN_URL } from "../../public/Common/constants";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={TiffinTrails} alt=" Tiffin Trails Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">🍱 TiffinTrails</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};

// RestaurantList is JSON Data for displaying cards

export const restaurantList = [
    {
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1027545",
"name": "Big Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/16/ffb99130-6424-4204-b5c6-8b860ff96865_1027545.jpg",
"locality": "MG Road",
"areaName": "Z Square Mall",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "434792",
"avgRatingString": "4.3",
"totalRatingsString": "83",
"promoted": true,
"adTrackingId": "cid=30318056~p=0~adgrpid=30318056#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1027545~plpr=COLLECTION~eid=c99876a9-60b5-470d-a0ab-fe62c7212707~srvts=1750838534068~collid=83639",
"sla": {
"deliveryTime": 63,
"lastMileTravel": 4.3,
"serviceability": "SERVICEABLE",
"slaString": "60-65 mins",
"lastMileTravelString": "4.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-25 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹165 OFF",
"subHeader": "ABOVE ₹849",
"discountTag": "FLAT DEAL",
"headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "30318056"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1027545&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "125424",
"name": "Ajmeri Darbar Chamanganj",
"cloudinaryImageId": "v8vwffojtsoarkcnsoih",
"locality": "Chaman Ganj",
"areaName": "Chaman Ganj",
"costForTwo": "₹200 for two",
"cuisines": [
"Biryani",
"Mughlai",
"North Indian",
"Tandoor"
],
"avgRating": 4.2,
"parentId": "28360",
"avgRatingString": "4.2",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-25 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
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
"imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
"description": "bolt!"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹265 OFF",
"subHeader": "ABOVE ₹849",
"discountTag": "FLAT DEAL",
"headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=125424&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "554302",
"name": "Bikkgane Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/24/28ba8630-7acf-4c97-b653-67acbd83b535_6b97bc3b-ddf2-476d-9849-aa8b0e0e7856.jpg",
"locality": "Avon Market Road",
"areaName": "Kakadeo",
"costForTwo": "₹350 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"Andhra",
"South Indian",
"North Indian",
"Mughlai",
"Kebabs"
],
"avgRating": 4.4,
"parentId": "5070",
"avgRatingString": "4.4",
"totalRatingsString": "8.4K+",
"promoted": true,
"adTrackingId": "cid=30403949~p=1~adgrpid=30403949#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=554302~plpr=COLLECTION~eid=8a8dab4a-8d59-450b-b778-1bf6aa9ba3af~srvts=1750838534068~collid=83639",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 6.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-26 02:00:00",
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
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹199",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "30403949"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=554302&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "361088",
"name": "The Biryani Life",
"cloudinaryImageId": "vhnpz3qlvke8tqwtkyv3",
"locality": "Permat",
"areaName": "Harsh Nagar",
"costForTwo": "₹250 for two",
"cuisines": [
"Biryani",
"Mughlai",
"Lucknowi",
"Hyderabadi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "8496",
"avgRatingString": "4.3",
"totalRatingsString": "673",
"sla": {
"deliveryTime": 46,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-25 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹159",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=361088&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "361087",
"name": "The Good Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/5f45f33f-b4c0-48b5-b8da-7309819958fe_361087.jpg",
"locality": "Permat",
"areaName": "Harsh Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"North Indian",
"Pastas",
"Punjabi",
"Desserts",
"Beverages"
],
"avgRating": 4.4,
"parentId": "7918",
"avgRatingString": "4.4",
"totalRatingsString": "1.3K+",
"promoted": true,
"adTrackingId": "cid=30375218~p=2~adgrpid=30375218#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361087~plpr=COLLECTION~eid=f3d03319-c5e7-4fd0-b0bb-56fce1e01878~srvts=1750838534068~collid=83639",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-25 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹165 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL",
"headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "30375218"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=361087&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "241296",
"name": "Biryani By Kilo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/11ca9f8c-cdc5-4d25-80e5-87375404815b_241296.JPG",
"locality": "Swaroop Nagar",
"areaName": "Fazalganj",
"costForTwo": "₹499 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "130",
"avgRatingString": "4.3",
"totalRatingsString": "8.2K+",
"sla": {
"deliveryTime": 57,
"lastMileTravel": 4,
"serviceability": "SERVICEABLE",
"slaString": "55-60 mins",
"lastMileTravelString": "4.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-26 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
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
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
},
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "65% OFF",
"subHeader": "UPTO ₹125",
"headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.9",
"ratingCount": "644"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=241296&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1030932",
"name": "Thalaiva Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/9/1f848952-c178-4d83-8325-0e962b033df5_49856f61-1181-4d59-a464-4aa382edf0d8.jpeg",
"locality": "Permat",
"areaName": "Harsh Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Mughlai",
"Lucknowi",
"Hyderabadi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "582792",
"avgRatingString": "4.5",
"totalRatingsString": "26",
"promoted": true,
"adTrackingId": "cid=30375226~p=3~adgrpid=30375226#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1030932~plpr=COLLECTION~eid=188655a6-350f-4300-a5be-0c2f8b1f3cdd~srvts=1750838534068~collid=83639",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-06-25 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹165 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL",
"headerTypeV2": "HEADER_TYPE_V2_CRICKET_MATCH",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "30375226"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1030932&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
];



// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{areaName}</h4>
      <div>
        <h4>
          <i className="fa-solid fa-star"></i> {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString || `${sla?.lastMileTravel} km`}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        // Deeply nested info object
        const info = restaurant.card?.card?.info;
        return <RestaurantCard key={info.id} {...info} />;
      })}
    </div>
  );
};


// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By  -  
      <a href="https://www.linkedin.com/in/shriyanshi-gaur-a4419428b" target="_blank">
        Shriyanshi Gaur    -
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year  }
      <strong>
        Tiffin<span>Trail</span>
      </strong>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);