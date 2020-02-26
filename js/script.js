var songName = [];
var songArtist = [];
var songImage = [];
var songLength = [];
var songLink = [];

function displaySongInfo(item1,item2,item3){
    let item = $(item2).val();
    item1.push(item);    
    console.log(item1);
    console.log("item:", item);
    item1.forEach(function(newItem){
        $(item3).append("<div>" + newItem + "</div>")
    })
}

$("#add").click(function(){
    empty();
    displaySongInfo(songName,"#song","#songs");
    displaySongInfo(songArtist,"#artist","#artists");
    displaySongInfo(songImage,"#image","#images");
    displaySongInfo(songLength,"#length","#lengths");
    displaySongInfo(songLink,"#link","#links");

})
function empty(){
  $("#songs").empty();
  $("#images").empty();
  $("#artists").empty();
  $("#lengths").empty();
  $("#links").empty();  
}

