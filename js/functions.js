/* functions to display main content */

function outputCountryBox(name, continent, cities, photos) {
  document.write("<div class='flex-container justify'>");
  for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class = 'item'>");
    document.write("<h2>" + c.name + "</h2>");
    document.write("<p>" + c.continent + "</p>");
    outputCities(c.cities);
    outputPhotos(c.photos);
    document.write("<button>Visit</button>")

    function outputCities(cities) {
      document.write("<div class = 'inner-box'>");
      document.write("<h3>Cities</h3>");
      document.write("<ul>");
      for (var i = 0; i < cities.length; i++) {
        document.write("<li>" + c.cities[i] + "</li>");
      }
      document.write("</ul>");
      document.write("</div>");
    }

    function outputPhotos(photos) {
      document.write("<div class = 'inner-box'>");
      document.write("<h3>Popular Photos</h3>");
      for (var i = 0; i < photos.length; i++) {
        document.write("<img src='" + c.photos[i] + "'class='photo'>");
      }
      document.write("</div>");
    }
    document.write("</div>");
  }
  document.write("</div>");
}
