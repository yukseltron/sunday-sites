// main.js

// Function to get the current month and set the background color of #planet
function setPlanetColorByMonth() {
  const planet = document.getElementById('planet');
  const text = document.getElementById('text');

  const seasons = {
    spring: {
      months: [2, 3, 4],
      color: 'lightgreen',
      text: 'Spring is one of the four temperate seasons, following winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa.'
    },
    summer: {
      months: [5, 6, 7],
      color: 'orange',
      text: 'Summer is the hottest of the four temperate seasons, falling after spring and before autumn. At or around the summer solstice, the earliest sunrise and latest sunset occurs, the days are longest and the nights are shortest, with day length decreasing as the season progresses after the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.'
    },
    autumn: {
      months: [8, 9, 10],
      color: 'orange',
      text: 'Autumn, also known as fall in North American English, is one of the four temperate seasons. Autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere), when the duration of daylight becomes noticeably shorter and the temperature cools considerably. One of its main features in temperate climates is the shedding of leaves from deciduous trees.'
    },
    winter: {
      months: [11, 0, 1],
      color: 'white',
      text: 'Winter is the coldest season of the year in polar and temperate zones. It occurs after autumn and before spring in each year. Winter is caused by the axis of the Earth in that hemisphere being oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather. When it is winter in the Northern Hemisphere, it is summer in the Southern Hemisphere, and vice versa.'
    }
  };

  const currentMonth = new Date().getMonth();
  const color = Object.values(seasons).find(season => season.months.includes(currentMonth)).color;

  planet.style.backgroundColor = color;
  text.textContent = Object.values(seasons).find(season => season.months.includes(currentMonth)).text;
}

// Run the function to set the color when the page loads
window.onload = setPlanetColorByMonth;
