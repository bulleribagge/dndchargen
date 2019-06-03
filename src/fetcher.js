import axios from "axios"
const baseUrl = "http://www.dnd5eapi.co/api";

export function fetchRaces()
{
    axios.get(baseUrl + "/races")
    .then(function (res){
        return res;
    })
}