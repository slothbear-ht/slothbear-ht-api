var training = require('./training_per_week');
var players = require('./fc_slothbear');
var weeks = require('./fc_slothbear_weeks');

players.forEach((player) => {
  player.weeks = weeks;

  player.weeks.forEach((week) => {
    if (!week.type) return player.age += 0.625;
    
    var skill = training[week.type].skill;
    var level = Math.floor(player.projected[skill]);
    var age = Math.floor(player.age);

    player.projected[skill] += training[week.type][level][age];
    player.age += 0.0625;
  });

  console.log(player.name);
  console.log('age', player.age.toFixed(2));
  console.log('keeper', player.projected.keeper.toFixed(2));
  console.log('defending', player.projected.defending.toFixed(2));
  console.log('playmaking', player.projected.playmaking.toFixed(2));
  console.log('crossing', player.projected.winger.toFixed(2));
  console.log('passing', player.projected.passing.toFixed(2));
  console.log('scoring', player.projected.scoring.toFixed(2));
  console.log('set_pieces', player.projected.set_pieces.toFixed(2));
});
