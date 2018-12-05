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

//play music 
const songlists = [{
        name: "Lexington Ave - 53rd St",
        year: 2,
        url: "data/51.mp3",
        //        location: [-73.96907237490204 40.75746830782865]
}, {
        name: "Lexington Ave - 59th St",
        year: 1,
        url: "data/59.mp3",
        //        location: [-73.96737501711436 40.762708855394564]
}, {
        name: "Canal St",
        year: 3,
        url: "data/Canal.mp3",
        //        location:[-74.0052290023424 40.72082400007119]
}, {
        name: "Jay St - MetroTech",
        year: 4,
        url: "data/Jay.mp3",
        //        location: [-73.98721815267317 40.692470636847084]
},

    {
        name: "57th St",
        year: 5,
        url: "data/57.mp3",
        //        location: [-73.97736800085171 40.76408500081713]
}, {
        name: "14th St",
        year: 6,
        url: "data/14.mp3",
        //        location: [-74.00168999937027 40.740893000193296]
}, {
        name: "Metropolitan Ave",
        year: 7,
        url: "data/GrandCentral.mp3",
        //        location: [-73.98622899953202,40.755983000570076]
}, {
        name: "Hoyt - Schermerhorn Sts",
        year: 8,
        url: "data/Hoyt.mp3",
        //        location: [-73.98777189072918,40.74978939990011]
},
    {
        name: "Times Sq - 42nd St",
        year: 9,
        url: "data/TimesSquare.mp3",
        //        location: [-73.92582299919906,40.761431998800546]
}, {
        name: "Lower East Side - 2nd Ave",
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
        name: "W 4th St - Washington Sq (Lower)",
        year: 13,
        url: "data/West4.mp3",
        //        location: [-74.00049500225435 40.73233799774325]
}, {
        name: "Grand Central - 42nd St",
        year: 14,
        url: "data/GC.mp3",
        //        location: [-73.9767132992584 40.75180742981634]
}, {
        name: "Union Sq - 14th St",
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
        name: "59th St - Columbus Circle",
        year: 17,
        url: "data/ColumbusCircle.mp3",
        //        location:[-73.98192900232715 40.76824700063689]
}, {
        name: "34th St - Penn Station",
        year: 18,
        url: "data/Lexington.mp3",
        //        location:[-73.99105699913983 40.75037300003949]
}, {
        name: "Broadway - Lafayette St",
        year: 19,
        url: "data/BL.mp3",
        //        location: [-73.99620399876055 40.725296998738045]
}, {
        name: "Atlantic Av - Barclay's Center",
        year: 20,
        url: "data/Atlantic.mp3",
        //        location: [-73.97754993539385 40.68442016526762]
},
  ];




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
                "circle-radius": [
                'match',
                ['get', 'line'],
                'Chinese', 15,
                'Classical', 15,
                'Jazz', 15,
                'Pop', 15,
                'Special', 15,
                /* other */
                    3
            ],


                'circle-color': [
                'match',
                ['get', 'line'],
                'Chinese', '#BC1D29',
                'Classical', '#08B250',
                'Jazz', '#F77441',
                'Pop', '#FFD91D',
                'Special', '#6072D8',

                /* other */
                    '#FFA07A'
            ],
                'circle-opacity': [
                'match',
                ['get', 'line'],
                'Chinese', 1,
                'Classical', 1,
                'Jazz', 1,
                'Pop', 1,
                'Special', 1,
                /* other */
                    0.3
            ]
            }
        });
    });
}


//create pop-up information
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'points', function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.name;
    console.log(description);
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

map.on('mouseleave', 'points', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});


//click to zoom in/center/play song
map.on('click', 'points', function (e) {
    map.flyTo({
        zoom: 15,
        center: e.features[0].geometry.coordinates
    });

//click each feature to play song
    let n;
    let playsong = new Audio();

    for (n = 0; n < songlists.length; n++) {
        let stationname = e.features[0].properties.name;
        console.log(stationname);
        let songlistname = songlists[n].name;
        console.log(songlistname);
        let audio = songlists[n].url;
        if (songlistname == stationname) {
            console.log(audio);
            playsong.src = audio;
            playsong.play();
        }
    }

});



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
            if (trackyear == getarrayyear) {
                console.log(audio);
                playsong.src = audio;
                playsong.play();
            }
        }
    });
}
