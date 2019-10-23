// Purpose: The point of this file is to handle all API requests.

ticketmasterApiBaseUrl = "https://app.ticketmaster.com/discovery/v2/"

// TODO: write fetch call for ticketmaster API
const getTicketmasterData = (searchString) => {
    return fetch(`${ticketmasterApiBaseUrl}events.json?classificationName=${searchString}&dmaId=343&city=nashville&apikey=${ticketmasterApiKey}`)
    .then(concerts => concerts.json())
}

const foodTypeSearch = function() {
    return "what do you call a Japanese drummer boy, whose father has diarrhea? A slap happy jappy, with a crap happy pappy..."
}


const getEventbriteData = (searchString) => {
    /* TODO: UNCOMMENT BELOW WHEN EVENTBRITE-API 'EVENTS' ENDPOINT IS CONFIRMED WORKING */
    // fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchString}&location.address=nashville&token=${eventbriteApiKey}`, {
    //     "headers": {
    //         "Accept": "application/json"
    //     }
    // }
    return fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(r => r.json())
}
