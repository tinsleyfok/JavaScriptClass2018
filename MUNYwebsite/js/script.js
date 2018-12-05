//jason








console.log("Tinsley");

//Timeline navigator 

let year_show = document.getElementsByClassName("train");
let i;
for (i = 0; i < year_show.length; i++) {
    year_show[i].addEventListener("click", function (e) {
        let year_item = this.nextElementSibling;
        //        year_item.classList.add("active");
        if (year_item.style.display === "block") {
            year_item.style.display = "none";
        } else {
            $(year_item).fadeIn("slow");
        }
    });
}

//let year_show = document.getElementsByClassName("timeline")[0];
//let i;
//
//year_show.addEventListener("click", function (e) {
//    console.log(e.target);
//    let year_item = e.target.nextElementSibling;
//    console.log(year_item);
//    year_item.style.display = block;
//       console.log(year_item.style.display);
//    if (year_item.style.display === "block") {
//        year_item.style.display = "none";
//    } else {
//        year_item.style.display === "block";
//    }
//});




const songlists = [{
        name: "53 St Lexington Ave",
        year: 2,
        url: "../data/51.mp3",
        //        location: [-73.96907237490204 40.75746830782865]
}, {
        name: "59 St Lexington Ave",
        year: 1,
        url: "data/59.mp3",
        //        location: [-73.96737501711436 40.762708855394564]
}, {
        name: "Canal St",
        year: 3,
        url: "data/Canal.mp3",
        //        location:[-74.0052290023424 40.72082400007119]
}, {
        name: "Jay St Metro Tech",
        year: 4,
        url: "data/Jay.mp3",
        //        location: [-73.98721815267317 40.692470636847084]
},

    {
        name: "57 St",
        year: 5,
        url: "data/57.mp3",
        //        location: [-73.97736800085171 40.76408500081713]
}, {
        name: "14 St",
        year: 6,
        url: "data/14.mp3",
        //        location: [-74.00168999937027 40.740893000193296]
}, {
        name: "Metropolitan Ave",
        year: 7,
        url: "data/GrandCentral.mp3",
        //        location: [-73.98622899953202,40.755983000570076]
}, {
        name: "Hoyt-schermerhorn Sy",
        year: 8,
        url: "data/Hoyt.mp3",
        //        location: [-73.98777189072918,40.74978939990011]
},
    {
        name: "Times Square",
        year: 9,
        url: "data/TimesSquare.mp3",
        //        location: [-73.92582299919906,40.761431998800546]
}, {
        name: "2nd Ave",
        year: 10,
        url: "data/2.mp3",
        //        location:[-73.98807806807719,40.71868074219453]
}, {
        name: "Bleecker St",
        year: 11,
        url: "data/bleecker.mp3",
        //        location: [-73.87875099990931,40.886037000253324]
}, {
        name: "Bedford Ave",
        year: 12,
        url: "data/Bedford.mp3",
        //        location:[-73.98995099881881,40.734673000996125]
},
    {
        name: "West4",
        year: 13,
        url: "data/West4.mp3",
        //        location: [-74.00049500225435 40.73233799774325]
}, {
        name: "Grand Central",
        year: 14,
        url: "data/GC.mp3",
        //        location: [-73.9767132992584 40.75180742981634]
}, {
        name: "Union Square",
        year: 15,
        url: "data/UnionSquare.mp3",
        //        location:[-73.91038357033376,40.68285130087804]
}, {
        name: "World Trade Center",
        year: 16,
        url: "data/WTC.mp3",
        //        location: [-74.00974461517701 40.71256392680817]
},
    {
        name: "Columbus Circle",
        year: 17,
        url: "data/ColumbusCircle.mp3",
        //        location:[-73.98192900232715 40.76824700063689]
}, {
        name: "Penn Station",
        year: 18,
        url: "data/Lexington.mp3",
        //        location:[-73.99105699913983 40.75037300003949]
}, {
        name: "Broadway Lafayette",
        year: 19,
        url: "data/BL.mp3",
        //        location: [-73.99620399876055 40.725296998738045]
}, {
        name: "Atlantic Ave",
        year: 20,
        url: "data/Atlantic.mp3",
        //        location: [-73.97754993539385 40.68442016526762]
},
  ];



//Play song by station
let gt = document.getElementsByClassName("track");
let j;
let n;
let playsong = new Audio();

for (j = 0; j < songlists.length; j++) {
    gt[j].addEventListener("click", function (e) {
        let trackyear = e.target.getAttribute('data-year');
        console.log(trackyear);
        for (n = 0; n < songlists.length; n++) {
            let getarrayyear = songlists[n].year;
            console.log(getarrayyear);
            let audio = songlists[n].url;
            let precent = songlists[n].loudness;
            if (trackyear == getarrayyear) {
                console.log(audio);
                playsong.src = audio;
                playsong.play();
            }



        }
    });
}




//map - using mapbox api  
const maxBounds = [[-73.968, 40.733], [-73.868, 40.833]];

mapboxgl.accessToken = 'pk.eyJ1IjoidGluc2xleWZvayIsImEiOiJjam9rZzVibzMwNXVnM3FvNHZ5eHh4MWo4In0.iYRMgrgBQTlKgA9r9Pc4ng';
var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/tinsleyfok/cjp9fszua8h3i2ro7p1cx41p9",
    center: [-73.968, 40.733],
    zoom: 13,
    maxBounds: [
      [maxBounds[0][0] - 0.1, maxBounds[0][1] - 0.1],
      [maxBounds[1][0] + 0.1, maxBounds[1][1] + 0.1]
    ]
});

var data = {}


$.getJSON("js/station.geojson", function (json) {
    console.log(json);
    data = json;
    drawData();
})



function drawData() {
    map.on("load", function () {
        map.addLayer({
            id: "points",
            type: "circle",
            source: {
                type: "geojson",
                data: data
            },

            paint: {
                "circle-radius": {
                    'base': 1,
                    'stops': [[12, 2], [32, 80]]
                },


                'circle-color': [
                'match',
                ['get', 'line'],
                'Chinese', '#BC1D29',
                'Classical', '#08B250',
               
                /* other */
                    '#ccc'
            ],
                'circle-opacity': 0.8
            }
        });
    });
}





//
//const colorMap = {
//    blue: "#0039A6",
//    orange: "#FF6319",
//    yellow: "#FCCC0A",
//    red: "#EE352E",
//    green: "#00933C",
//
//};
//
//const linesMap = {};
//lineData.features.map(
//    line => (linesMap[line.properties.name] = line.properties.rt_symbol)
//);
//
//const colorStops = Object.keys(linesMap).map(key => [
//  key,
//  colorMap[linesMap[key]]
//]);
//
//const maxBounds = stops.features.reduce(
//    (acc, stop) => {
//        const [[swLon, swLat], [neLon, neLat]] = acc;
//        const [lon, lat] = stop.geometry.coordinates;
//        return [
//      [Math.min(swLon, lon), Math.min(swLat, lat)],
//      [Math.max(neLon, lon), Math.max(neLat, lat)]
//    ];
//    },
//  [[-73.968, 40.733], [-73.868, 40.833]]
//);
//
//mapboxgl.accessToken =
//    "pk.eyJ1IjoidGluc2xleWZvayIsImEiOiJjam9rZzVibzMwNXVnM3FvNHZ5eHh4MWo4In0.iYRMgrgBQTlKgA9r9Pc4ng";
//
//if (!mapboxgl.supported()) {
//    alert("Your browser does not support Mapbox GL");
//} else {
//    const map = new mapboxgl.Map({
//        container: "map",
//        style: "mapbox://styles/tinsleyfok/cjp9fszua8h3i2ro7p1cx41p9",
//        center: [-73.968, 40.733],
//        zoom: 13,
//        maxBounds: [
//      [maxBounds[0][0] - 0.1, maxBounds[0][1] - 0.1],
//      [maxBounds[1][0] + 0.1, maxBounds[1][1] + 0.1]
//    ]
//    });
//
//    map.on("load", function () {
//        map.addLayer({
//            id: "trips",
//            type: "line",
//            source: {
//                type: "geojson",
//                data: lineData
//            },
//            layout: {
//                "line-cap": "round",
//                "line-join": "round"
//            },
//            paint: {
//                "line-color": {
//                    property: "name",
//                    type: "categorical",
//                    stops: colorStops
//                },
//                "line-width": {
//                    base: 1,
//                    stops: [[9, 1], [11, 1], [13, 5], [15, 10]]
//                }
//            }
//        });
//
//        map.addLayer({
//            id: "stations",
//            source: {
//                type: "geojson",
//                data: stops
//            },
//            type: "circle",
//            paint: {
//                "circle-radius": {
//                    base: 1,
//                    stops: [[9, 0], [12, 0], [13, 5], [15, 10]]
//                },
//                "circle-color": "white",
//                "circle-stroke-color": "black",
//                "circle-stroke-width": {
//                    base: 1,
//                    stops: [[9, 0], [12, 0], [13, 1], [15, 2]]
//                }
//            }
//        });
//
//        map.addLayer({
//            id: "stations-label",
//            source: "stations",
//            type: "symbol",
//            paint: {
//                "text-color": "white",
//                "text-halo-color": "black",
//                "text-halo-width": 1,
//                "text-halo-blur": 4
//            },
//            layout: {
//                "text-font": ["Open Sans Regular"],
//                "text-field": "{name} ({line})",
//                "text-size": {
//                    base: 12,
//                    stops: [[9, 0], [12, 0], [14, 12], [17, 20]]
//                },
//                "text-anchor": "right",
//                "text-offset": [-1.5, 0]
//            }
//        });
//    });
//
// 
//}


//map.on('load', function () {
//
//    map.addLayer({
//        'id': 'points',
//        'type': 'circle',
//        'source': {
//            type: 'vector',
//            url: 'mapbox://styles/tinsleyfok/cjpa6m2ln2z8b2rtfn9spvo3x'
//        },
//        'source-layer': 'sf2010',
//        'paint': {
//            // make circles larger as the user zooms from z12 to z22
//            'circle-radius': {
//                'base': 1.75,
//                'stops': [[12, 2], [22, 180]]
//            },
// color circles by ethnicity, using a match expression
//            // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
//            'circle-color': "#fff"
////            [
////                'match',
////                ['get', 'ethnicity'],
////                'White', '#fbb03b',
////                'Black', '#223b53',
////                'Hispanic', '#e55e5e',
////                'Asian', '#3bb2d0',
////                /* other */ '#ccc'
////            ]
//        }
//    });
//});
