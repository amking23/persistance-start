// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var Promise = require('bluebird');
var db = require('./models');
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');

var data = {
  hotel: [
    {name: "Wyndham Grand Chicago Riverfront", place: {address: "71 E Upper Wacker Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8884073, -87.6293817]}, num_stars: 4, amenities: "Pool, Free Wi-Fi" },
    {name: "Courtyard by Mariott", place: {address: "30 E Hubbard St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8884073, -87.6293817]}, num_stars: 4.5, amenities: "Free Wi-Fi" },
    {name: "Aloft Chicago City Center", place: {address: "515 N Clark St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.889857, -87.6321275]}, num_stars: 4.5, amenities: "24 hour Gym, Paid Wi-Fi" },
    {name: "Fairmount Chicago Millenium Park", place: {address: "200 N Columbus Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8873346, -87.6290507]}, num_stars: 4, amenities: "Free Wi-Fi" },
    {name: "Hyatt Regency Chicago", place: {address: "151 E Upper Wacker Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8881029, -87.6264413]}, num_stars: 3.5, amenities: "24 hour Gym" },
    {name: "Sheraton Grand Chicago", place: {address: "301 E North Water St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8883059, -87.6260713]}, num_stars: 3.5, amenities: "24 hour Gym" },
    {name: "Kimpton Hotel Allegro", place: {address: "171 W Randolph St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8861737, -87.6339368]}, num_stars: 3.5, amenities: "Free Wi-Fi" },
    {name: "Residence Inn By Mariott", place: {address: "11 S LaSalle St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8843845, -87.634366]}, num_stars: 3.5, amenities: "Paid Wi-Fi, Dogs Allowed" },
    {name: "The Alise Chicago", place: {address: "1 W Washington St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8843845, -87.634366]}, num_stars: 3.5, amenities: "Paid Wi-Fi" },
    {name: "Palmer House", place: {address: "17 E Monroe St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8843845, -87.634366]}, num_stars: 2, amenities: "Accepts Credit Cards" },
    {name: "Four Seasons", place: {address: "120 E Delaware Pl", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8974821, -87.6307182]}, num_stars: 4, amenities: "Paid Wi-Fi" },
    {name: "Millenium Knickerbocker", place: {address: "163 E Walton Pl", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8974821, -87.6307182]}, num_stars: 3.5, amenities: "Pool, 24 hour Gym, Paid Wi-Fi" },
    {name: "The Ritz-Carlton Chicago", place: {address: "Water Tower Place", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8974821, -87.6307182]}, num_stars: 3.5, amenities: "24 hour Gym, Paid Wi-Fi" },
    {name: "Waldorf Astoria Chicago", place: {address: "11 E Walton St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8997095, -87.6296546]}, num_stars: 3.5, amenities: "Free Wif-Fi" },
    {name: "Hilton Chicago", place: {address: "720 S Michigan Ave", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8813272, -87.640199]}, num_stars: 4, amenities: "Free Wif-Fi" }
  ],
  restaurant: [
    {name: "Alinea", place: {address: "W Willow St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.9134555, -87.6503527]}, cuisine: "New American", price: 4},
    {name: "The Purple Pig", place: {address: "The Shops at North Bridge", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8912974, -87.6270254]}, cuisine: "New American", price: 3},
    {name: "Velvet Taco", place: {address: "1110 N State St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.9022287,-87.6307428]}, cuisine: "Mexican", price: 3},
    {name: "Seoul Taco", place: {address: "738 N Clark St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.896013,-87.6337744]}, cuisine: "Korean/Mexican", price: 2},
    {name: "Cafe Babareeba", place: {address: "2024 N Halsted St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.9189836,-87.6508765]}, cuisine: "Spanish", price: 4},
    {name: "Bongo Room", place: {address: "1152 S Wabash Ave", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.919094,-87.7187281]}, cuisine: "American", price: 4},
    {name: "BIG & little's", place: {address: "860 N Orleans St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.89835,-87.6396717]}, cuisine: "Southern", price: 3},
    {name: "Giordano’s", place: {address: "730 N Rush St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8984125,-87.6725025]}, cuisine: "Italian", price: 2},
    {name: "Medici on 57th", place: {address: "1327 E 57th St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8392942,-87.6982452]}, cuisine: "American", price: 2},
    {name: "Arbella", place: {address: "112 W Grand Ave", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.891873,-87.6339857]}, cuisine: "Cocktails", price: 3},
    {name: "Green Apple PHOever", place: {address: "105 W Madison St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8817877,-87.6333197]}, cuisine: "Vietnamese", price: 4},
    {name: "River Roast", place: {address: "315 N LaSalle Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8879907,-87.6344459]}, cuisine: "British", price: 2},
    {name: "Osaka Express", place: {address: "400 Michigan Avenue", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8769669,-87.6267487]}, cuisine: "Japanese", price: 3},
    {name: "Artisan Cellar", place: {address: "theMART", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8881524,-87.6372443]}, cuisine: "Cheese", price: 4},
    {name: "Ramen-san", place: {address: "59 W Hubbard St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8898032,-87.6324809]}, cuisine: "Vietnamese", price: 1}
  ],
  activity: [
    {name: "Shedd Aquarium", place: {address: "1200 S Lake Shore Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8675726, -87.614038]}, age_range: "All" },
    {name: "Adler Planetarium", place: {address: "1300 S Lake Shore Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.866337, -87.6089769]}, age_range: "All" },
    {name: "Field Museum", place: {address: "1400 S Lake Shore Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.866265, -87.6191745]}, age_range: "All" },
    {name: "Museum of Science and Industry", place: {address: "5700 S Lake Shore Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.7905726, -87.5830659]}, age_range: "All" },
    {name: "Art Institute of Chicago", place: {address: "111 S Michigan Ave", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8795885, -87.6259073]}, age_range: "All" },
    {name: "Cloud Gate", place: {address: "Millennium Park", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8826612, -87.6254979]}, age_range: "All" },
    {name: "Harold Washington Library", place: {address: "400 S State St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8763008, -87.6304219]}, age_range: "All" },
    {name: "Jackson Park", place: {address: "1793 E Hayes Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.7798608, -87.5827403]}, age_range: "All" },
    {name: "John Hancock Tower", place: {address: "875 N Michigan Ave", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.8988124, -87.6252732]}, age_range: "All" },
    {name: "Wrigley Field", place: {address: "1060 W Addison St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.9484424, -87.6575267]}, age_range: "All" },
    {name: "57th St. Bookstore", place: {address: "1301 E 57th St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.7911832, -87.5968324]}, age_range: "All" },
    {name: "Montrose Beach", place: {address: "4400 N Lake Shore Dr", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.9655364, -87.6385693]}, age_range: "All" }
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item, {
        include: [Place]
      });
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
