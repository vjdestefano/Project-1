var playPause = anime({
  targets: '#domAttributes .test',
  width:[
    {value: '200px', duration: 500, elasticity:100, easing: 'easeInOutQuart'},
    {value: '270px', duration: 500, elasticity:500, easing: 'easeInOutQuart'},
    {value: '335px', duration: 500, elasticity:100, easing: 'easeOutExpo'}
  ],
  backgroundColor:[
    {value: '#ef6c00', duration: 500},
    {value: '#ef6c00', duration: 1000},
    {value: '#FFF', duration: 800}
  ],
  value: "100%",
  round: 1,
 
});

var myObject = {
  Loading: '0%'
}
var JSobjectProp = anime({
  targets: myObject,
  duration: 1600,  
  Loading: '100%',
  easing: 'linear',
  round: 1,
  update: function() {
    var el = document.querySelector('#JSobjectProp pre');
    el.innerHTML = JSON.stringify(myObject);
  }
});


var clickAnime = anime({
  targets:'.clickThis',
  width:[
    {value: '335px', duration: 500, elasticity:100, easing: 'easeInOutQuart', delay: 900},
    {value: '0px', duration: 500, elasticity:100, easing: 'easeInOutQuart', delay: 400},
  ],
  backgroundColor:[
    {value: '#ef6c00', duration: 500},
    {value: '#ef6c00', duration: 800}
  ],
   translateX:[
    {value: '0px', duration: 1300, elasticity:100, easing: 'easeInOutQuart', delay: 1600},
  ],


});


$(".collapsible-header").on("click",function(event){
  clickAnime.restart();
  clickAnime.play();
});



$("#searchTest").on("keyup", function(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    event.preventDefault();
    var testKey = $("#searchBarMain").val();
    console.log(testKey);
    //$(".test").text(testKey);
    $("#test1").text(testKey);
    int3d.StartUp($("#rightherebaby"),testKey);
    JSobjectProp.restart();
    JSobjectProp.play();
    playPause.restart();
    playPause.play();
    $("#searchBarMain").val("");


    // var key = "apikey=5af0a2a43a774ce5b8f5be5899a48945";

    // var trendingUrl =
    // 'https://newsapi.org/v2/everything?' +
    // 'q=' + testKey + '&' +
    // 'from=2018-03-19&' +
    // 'sortBy=popularity&' +
    // key;


    // $.ajax({
    //   url: trendingUrl,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response);
      
    //   for(var i = 0; i < 5; i++){
        
    //     searchTitle = response.articles[i].title;
    //     searchAuthor= response.articles[i].author;
    //     searchLink = response.articles[i].url;
    //     console.log(searchTitle);
    //     console.log(searchAuthor);
    //     console.log(searchLink);
    //     var divTrending = $("<div>");
    //     divTrending.addClass("hoverable");
    //     divTrending.text("this is working");

    //     var pTag = $("<p>");
    //     pTag.html(searchTitle);
    //     console.log(pTag);

    //     var slink = $("<a>");
    //     slink.attr("src = ", searchLink);

    //     var authorName = $("<p>");
    //     authorName.html(searchAuthor);

    //     divTrending.append(pTag);
    //     divTrending.append(slink);
    //     divTrending.append(authorName);

    //     $(".card-reveal").append(divTrending);
        


    //   }

    // });
  }
});



