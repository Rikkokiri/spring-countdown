var quotes = [
    "I’ll be back soon",
    "I’ll see you soon",
    "The thought of being with you soon gives me the strength to get through today",
    "You’re worth every mile between us.",
    "You’re my sun, my moon and all my stars.",
    "I want to come home to you"
];

var photos = [
  {photo: "url('resources/stones.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
  {photo: "url('resources/sundown-plane.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
  {photo: "url('resources/rainy-drillfield3.jpg')", bg: "rgba(0, 0, 0, 0.45", shadow: "0px 0px 10px #000"}, //01.
  {photo: "url('resources/plane-window.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"}, //02.
  {photo: "url('resources/stars2.jpg')", bg: "rgba(0, 0, 0, 0.25", shadow: "0px 0px 10px #000"}, //03.
  {photo: "url('resources/foggyroad2.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //04.
  {photo: "url('resources/lanterns.jpg')", bg: "rgba(50, 60, 60, 0.3", shadow: "0px 0px 10px #313131"}, //05.
  {photo: "url('resources/birds.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"}, //06.

];

function setContent(){

    $("#quote-par").html(quotes[0]);

    $("#bg").css('background-image', photos[0].photo);
    $("#quote").css('text-shadow', photos[0].shadow);
    $(".countdown-item").css('background', photos[0].bg);

}
