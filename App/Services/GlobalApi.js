import axios from "axios"

const BASE_URL = "https://maps.googleapis.com/maps/api/place"
const API_KEY = "AIzaSyAr8TD2-aKfUpkDIPE4ImVF6gTveQYGE9g"


const nearByPlace = (lat, lng, type) => axios.get(BASE_URL +
    "/textsearch/json?query=" + type + "&location=" + lat + "," + lng + "&radius=100" + "&key=" + API_KEY)


const searchByText = (lat, lng, searchText) => axios.get(BASE_URL +
    "/textsearch/json?query=" + searchText + "&location=" + lat + "," + lng + "&radius=100" +
    "&key=" + API_KEY)

export default {
    nearByPlace,
    searchByText
}