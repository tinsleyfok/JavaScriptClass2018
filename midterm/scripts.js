console.log("Tinsley");

(function musicDatabase() {
    this.init = function () {
        this.search();
    };

    this.search = function () {

        var form = document.querySelector("#searchForm");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var value = document.querySelector("#SearchBox").value;

            form.reset();

            getData(value.split(' ').join("+"));

        });
    };
    this.getData = function (artist) {
        window.location.href = "#song_list";
        document.body.style.overflow = "scroll";
        var http = new XMLHttpRequest();

        http.open(method, url);

        http.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        http.setRequestHeader("Access-Control-Allow-Origin", "*");

        artist = artist.toString();
        var url = "https://itunes.apple.com/search?term=" + artist + "&entity=song";
        var method = "GET";
        var container = document.querySelector('#song_list_container');
        container.innerHTML = '';

        http.open(method, url);
        http.onreadystatechange = function () {
            if (http.readyState = 4 && http.status == 200) {
                console.log("SUCCESS - connected to itunes API");

                showArtist(JSON.parse(http.responseText));
            } else if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
                console.log("ERROR - connecting to Itunes API")
            }
        }
        http.send();
    };




    this.showArtist = function (obj) {

        console.log(obj);
        var container = document.querySelector("#song_list_container");
        var template = '';
        document.querySelector('#not_match').style.display = "none";
        if (obj.results.length > 0) {
            for (var i = 0; i < obj.results.length; i++) {

                template += '<li class = "col-sm-3 song_item">';

                template += '<div class = "song_thmb" style = "background: url(' + obj.results[i].artworkUrl100 + ')" ></div>';
                //                onclick = "openMedia(' + obj.results[i].previewUrl + ')"

                template += '<div class="song">' + obj.results[i].trackName + '</div>';

                template += '<audio controls class ="music" source src = ' + obj.results[i].previewUrl + '></audio>';

                template += '<li>';

                //                function openMedia(url) {
                //                    if (!url) return;
                //                    const media = document.getElementsByClassName("song_thmb");
                //                    media.innerHTML = `<audio controls source src = ' + obj.results[i].previewUrl + '></audio>`;
                //                }

            }
            container.innerHTML = '';
            container.insertAdjacentHTML('afterbegin', template);
        } else {
            document.querySelector('#not_match').style.display = "block";
        }

    };

    this.init();
})();
