function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search(query) {
    document.getElementById("searchResults").innerHTML = "";
    var results = httpGet("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&key=AIzaSyDMe5TYxdeVPEXE1JIeHOHZFjBT_fiWtqo&q=" + query);
    var parsed = JSON.parse(results);
    var videos = parsed.items;
    for(var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var title = video.snippet.title;
        var description = video.snippet.description;
        var thumbnail = video.snippet.thumbnails.medium.url;
        var videoId = video.id.videoId;
        var link = "https://www.youtube.com/watch?v=" + videoId;
        var html = "<div class='videoEntry'><a href='" + link + "'><img class='thumbimg' src='" + thumbnail + "'></a><div class='flex'><div class='title'>" + title + "</div><div class='description'>" + description + "</div></div></div>";
        document.getElementById("searchResults").innerHTML += html;
    }
}