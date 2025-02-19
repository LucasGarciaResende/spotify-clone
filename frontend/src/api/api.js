import axios from 'axios';

const URL = "http://localhost:3000";

const getArtists = await axios.get(URL + "/artists");
const getSongs = await axios.get(URL + "/songs");
export const artistArray = getArtists.data;
export const songsArray = getSongs.data;

