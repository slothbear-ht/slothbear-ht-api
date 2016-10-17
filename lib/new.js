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

  writeText += "{\n" +
                  "  skill: " + "'" + skill + "',\n" +
                  "  season: " + season + ",\n" +
                  "  week: " + week + "\n" +
                  "},\n";
});

fs.writeFile('new.txt', writeText);
