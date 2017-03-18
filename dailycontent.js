var quotes = [
    "I’ll be back soon"
];

var photos = [
  {photo: "url('resources/sundown-plane.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}
];

function setContent(daysLeft){

  $("#quote-par").html(quotes[0]);

  $("#bg").css('background-image', photos[0].photo);
  $("#quote").css('text-shadow', photos[0].shadow);
  $(".countdown-item").css('background', photos[0].bg);

}
