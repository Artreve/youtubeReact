//Au
import axios from "axios"
const KEY = 'AIzaSyDAp-wBX6PXclEa0TdU9pcObzhugqHpU5w'
 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
 })