let axios = require('axios');

let apiKey = 'AIzaSyDtVbli-DqEY984NnMwLOyl2zh0ZaQZBRQ';
let addresses = [
    'SW SCHOLLS FERRY RD,# 102, 97007',
    '15112,SW CANYON WREN WAY, 97007',
    '15114,SW CANYON WREN WAY,97007',
    '15116,SW CANYON WREN WAY,97007',
    '15118,SW CANYON WREN WAY,97007',
    '15120,SW CANYON WREN WAY,97007',
    '14932,SW SCHOLLS FERRY RD,# 301,97007',
    '14754,SW SCHOLLS FERRY RD,# 1017,97007',
    '14339,SW BARROWS RD,97007',
    '14932,SW SCHOLLS FERRY RD,# 201,97007',
    '11950,SW HORIZON BLVD,97007'
];

let addressesWithInfo = [];

addresses.forEach((address) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${address}`)
        .then(response => {
            addressesWithInfo.push({
                'address': address,
                'latitude': response.data.results[0].geometry.location.lat,
                'longitude': response.data.results[0].geometry.location.lng
            });
            console.log({
                'address': address,
                'latitude': response.data.results[0].geometry.location.lat,
                'longitude': response.data.results[0].geometry.location.lng
            })
        })
        .then(()=> {
            if (addressesWithInfo.length === addresses.length) {
                console.log('Process completed successfully');
            }
        });
});