import axios from "axios"

let source = "NY Times"
let sports = "sports"
// let apiKey =  "dd76a03ead794c4e9e9f4c39be2b286e"
// let news = "https://newsapi.org/v2/everything?q=sports&apiKey=dd76a03ead794c4e9e9f4c39be2b286e"
let apiUrl = `https://newsapi.org/v2/everything?q=${source}&from=2019-11-30&sortBy=publishedAt&apiKey=dd76a03ead794c4e9e9f4c39be2b286e`
let apiSports = `https://newsapi.org/v2/everything?q=${sports}&from=2019-11-30&sortBy=publishedAt&apiKey=dd76a03ead794c4e9e9f4c39be2b286e`
export const fetchMain = async () => {
  let data = axios.get(apiUrl)
  return data

}

export const fetchSports = async () => {
  let data = axios.get(apiSports)
  return data

}