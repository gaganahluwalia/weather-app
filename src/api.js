const REACT_GEO_CITIES_API_KEY =
  "4698893b45mshaed9f9b2c7067ffp167dd7jsn5dc958f44a18";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": REACT_GEO_CITIES_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
