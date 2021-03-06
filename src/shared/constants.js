module.exports = Object.freeze({
  PLAYER_RADIUS: 20,
  PLAYER_MAX_HP: 100,
  PLAYER_SPEED: 150,
  PLAYER_FIRE_COOLDOWN: 0.25,
  PLAYER_TURN_DEGREES: 2,

  BULLET_RADIUS: 3,
  BULLET_SPEED: 500,
  BULLET_DAMAGE: 10,

  SCORE_BULLET_HIT: 20,
  SCORE_PER_SECOND: 1,

  MAP_SIZE_X: 1250,
  MAP_SIZE_Y: 700,

  MSG_TYPES: {
    JOIN_GAME: 'join_game',
    GAME_UPDATE: 'update',
    INPUT: 'input',
    GAME_OVER: 'dead',
  },
});
