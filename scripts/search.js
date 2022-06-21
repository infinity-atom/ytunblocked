function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search(query) {
    document.getElementById("searchResults").innerHTML = "";
    var results = httpGet("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&key=AIzaSyDMe5TYxdeVPEXE1JIeHOHZFjBT_fiWtqo&q=" + query);
    var parsed = JSON.parse(results);
    var videos = parsed.items;
    for(var i = 0; i < videos.length; i++) {
        if(videos[i].id.kind == "youtube#video") {
            var video = videos[i];
            var title = video.snippet.title;
            var description = video.snippet.description;
            var thumbnail = video.snippet.thumbnails.medium.url;
            var videoId = video.id.videoId;
            var creator = video.snippet.channelTitle;
            var creatorId = video.snippet.channelId;
            var channelIcon = JSON.parse(httpGet("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=AIzaSyDMe5TYxdeVPEXE1JIeHOHZFjBT_fiWtqo&id=" + creatorId)).items[0].snippet.thumbnails.default.url;
            var link = "https://www.youtube.com/watch?v=" + videoId;
            var html = "<div class='videoEntry'><a href='" + link + "'><img class='thumbimg' src='" + thumbnail + "'></a><div class='flex'><div class='title'>" + title + "</div><div class='flexRight'><img src='" + channelIcon + "' class='channelIcon'><div class='author'>" + creator + "</div></div><div class='description'>" + description + "</div></div></div>";
            document.getElementById("searchResults").innerHTML += html;
        } else if(videos[i].id.kind == "youtube#channel") {
            var channelName = videos[i].snippet.title;
            var channelId = videos[i].id.channelId;
            var channelLink = "https://www.youtube.com/channel/" + channelId;
            var channelThumbnail = videos[i].snippet.thumbnails.medium.url;
            var channnelDescription = videos[i].snippet.description;
            var html = "<div class='videoEntry'><a href='" + channelLink + "'><img class='thumbimgchannel' src='" + channelThumbnail + "'></a><div class='flex'><div class='title'>" + channelName + "</div><div class='description'>" + channnelDescription + "</div></div></div>";
            document.getElementById("searchResults").innerHTML += html;
        } else {
            console.log("Unknown type: " + videos[i].id.kind);
            continue;
        }
    }
}