const team = {
    _players: [{
            firstName: 'Eric',
            lastName: 'Bekoe',
            age: 24
        },
        {
            firstName: 'Felix',
            lastName: 'Addo',
            age: 28
        },
        {
            firstName: 'Jacob',
            lastName: 'Nartey',
            age: 31
        },
    ],
    _games: [{
            opponent: 'King Faisal',
            teamPoints: 45,
            opponentPoints: 25
        },
        {
            opponent: 'Everon',
            teamPoints: 45,
            opponentPoints: 31
        },
        {
            opponent: 'Hearts',
            teamPoints: 45,
            opponentPoints: 27
        },
    ],
    get player() {
        return this._player;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },

    addGames(opponent, teamPoints, oppenentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.game.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.player);