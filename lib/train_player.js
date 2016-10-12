var training = require('./training_per_week');

var player = {
  name: 'Izcautzin Arizmendi',
  age: 20.348,
  current: {
    keeper: 1,
    defending: 7,
    playmaking: 9.24,
    winger: 8.4,
    passing: 8.66,
    scoring: 8.16,
    set_pieces: 6
  },
  projected: {
    keeper: 1,
    defending: 7,
    playmaking: 9.24,
    winger: 8.4,
    passing: 8.66,
    scoring: 8.16,
    set_pieces: 6
  },
  weeks: [
    'playmaking',
    'short_passes',
    'playmaking',
    'playmaking',
    'scoring',
    'playmaking',
    'short_passes',
    'playmaking',
    'short_passes',
    'scoring',
    'playmaking',
    'scoring',
    'short_passes',
    'short_passes',
    'crossing'
  ]
};

player.weeks.forEach((ele) => {
  var skill = training[ele].skill;
  console.log(skill);
  player.projected[skill] +=
  training[ele][Math.floor(player.projected[skill])][Math.floor(player.age)];
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
