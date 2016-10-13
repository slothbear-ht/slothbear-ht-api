var training = require('./training_per_week');

var weeks = [
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
  'crossing',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'short_passes',
  'short_passes',
  'short_passes',
  'short_passes',
  'scoring',
  'scoring',
  'scoring',
  'scoring',
  'scoring',
  'scoring',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'defending',
  'defending',
  'defending',
  'defending',
  'short_passes',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'defending',
  'defending',
  'defending',
  'defending',
  'short_passes',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'defending',
  'defending',
  'defending',
  'defending',
  'short_passes',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'defending',
  'defending',
  'defending',
  'defending',
  'short_passes',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'playmaking',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'crossing',
  'defending',
  'defending',
  'defending',
  'defending',
  'short_passes'
];

var players = [
  {
    name: 'Izcautzin Arizmendi',
    age: 20.339,
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
    }
  },
  {
    name: 'Normand Harvey',
    age: 17.964,
    current: {
      keeper: 1,
      defending: 6,
      playmaking: 7.36,
      winger: 6,
      passing: 6,
      scoring: 4.33,
      set_pieces: 2
    },
    projected: {
      keeper: 1,
      defending: 6,
      playmaking: 7.36,
      winger: 6,
      passing: 6,
      scoring: 4.33,
      set_pieces: 2
    }
  },
  {
    name: 'Bernard Boulanger',
    age: 19.929,
    current: {
      keeper: 1,
      defending: 3,
      playmaking: 10.24,
      winger: 7.2,
      passing: 9.16,
      scoring: 7.16,
      set_pieces: 2
    },
    projected: {
      keeper: 1,
      defending: 3,
      playmaking: 10.24,
      winger: 7.2,
      passing: 9.16,
      scoring: 7.16,
      set_pieces: 2
    }
  },
  {
    name: 'Nikos Galanos',
    age: 18.268,
    current: {
      keeper: 1,
      defending: 3.4,
      playmaking: 8,
      winger: 3,
      passing: 8.16,
      scoring: 5.33,
      set_pieces: 2
    },
    projected: {
      keeper: 1,
      defending: 6,
      playmaking: 7.36,
      winger: 6,
      passing: 6,
      scoring: 4.33,
      set_pieces: 2
    }
  }
];

players.forEach((player) => {
  weeks.forEach((type) => {
    var skill = training[type].skill;
    var level = Math.floor(player.projected[skill]);
    var age = Math.floor(player.age);

    player.projected[skill] += training[type][level][age];
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
