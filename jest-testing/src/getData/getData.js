const axios = require('axios');
const mapIntArrToStrings = require('../mapIntArrToStrings/mapIntArrToStrings');

const getData = async () => 
{
    try 
    {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id)
        return mapIntArrToStrings(userIds);
    } catch (e) {}
}
module.exports = getData;