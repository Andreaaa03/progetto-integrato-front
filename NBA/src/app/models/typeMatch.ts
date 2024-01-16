export type match = {
    gameid: number | null;
    gameStartDate: string | null;
    teamHomeName: string | null;
    teamAwayName: string | null;
    scoreTeamHome: number | null;
    scoreTeamAway: number | null;
    conferenceNameHome: string | null;
    conferenceNameAway: string | null;
    divisionNameHome: string | null;
    divisionNameAway: string | null;
    teamIdHome: number | null;
    teamIdAway: number | null;
    allStarHome: boolean;
    allStarAway: boolean;
    nicknameHome: string | null;
    nicknameAway: string | null;
    logoHome: string | null;
    logoAway: string | null;
    cityHome: string | null;
    cityAway: string | null;
    codeHome: string | null;
    codeAway: string | null;
};

type playerStats = {
    id: number;
    nome: string;
    points: number;
    pos: string;
    min: string;
    fgm: number;
    fga: number;
    fgp: number;
    ftm: number;
    fta: number;
    ftp: number;
    tpm: number;
    tpa: number;
    tpp: number;
    offReb: number;
    defReb: number;
    totReb: number;
    assists: number;
    pFouls: number;
    steals: number;
    turnovers: number;
    blocks: number;
    plusMinus: number;
    pfouls: number;
};

type stats = {
    fgm: number;
    fga: number;
    fgp: number;
    ftm: number;
    fta: number;
    ftp: number;
    tpm: number;
    tpa: number;
    tpp: number;
    offReb: number;
    defReb: number;
    totReb: number;
    assists: number;
    pFouls: number;
    steals: number;
    turnovers: number;
    blocks: number;
    plusMinus: number;
    playersStatistics: playerStats[];
};

export type matchStats = {
    calendarioDateResponse: match;
    homeTeam: stats;
    awayTeam: stats;
};

//valutare di lasciare solo l'id dentro l'oggetto
export type matchDate = {
    gameid: number;
    gameStartDate: string;
    teamHomeName: string;
    teamAwayName: string;
    scoreTeamHome: number;
    scoreTeamAway: number;
    conferenceNameHome: string;
    conferenceNameAway: string;
    divisionNameHome: string;
    divisionNameAway: string;
    teamIdHome: number;
    teamIdAway: number;
    allStarHome: boolean;
    allStarAway: boolean;
    nicknameHome: string;
    nicknameAway: string;
    logoHome: string;
    logoAway: string;
    cityHome: string;
    cityAway: string;
    codeHome: string;
    codeAway: string;
}[];
