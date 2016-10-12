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
    'passing',
    'playmaking',
    'passing',
    'scoring',
    'playmaking',
    'scoring',
    'short_passes',
    'short_passes',
    'crossing'
  ]
};

player.weeks.forEach((ele) => {
  if (ele === 'defending') {
    player.projected.defending +=
    training.defending[Math.floor(player.projected.defending)][Math.floor(player.age)];
  }
  player.age += 0.0625;
  console.log(player.name);
  console.log('keeper', player.projected.keeper);
  console.log('defending', player.projected.defending);
  console.log('playmaking', player.projected.playmaking);
  console.log('crossing', player.projected.crossing);
  console.log('passing', player.projected.passing);
  console.log('scoring', player.projected.scoring);
  console.log('set_pieces', player.projected.set_pieces);
});
