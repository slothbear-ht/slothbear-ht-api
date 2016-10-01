var fs = require('fs');
var weeks = require('./fc_slothbear_weeks');
var season = 63;
var week = 1;
var writeText = '';

weeks.forEach((skill) => {
  if (week < 16) {
    week++;
  } else {
    season++;
    week = 1;
  }

  writeText +=
    "{\n" + // eslint-disable-line quotes
    "  skill: " + "'" + skill + "',\n" + // eslint-disable-line quotes
    "  season: " + season + ",\n" + // eslint-disable-line quotes
    "  week: " + week + "\n" + // eslint-disable-line quotes
    "},\n"; // eslint-disable-line quotes
});

fs.writeFile('new.txt', writeText);
