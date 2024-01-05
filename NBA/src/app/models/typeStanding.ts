export type Standing = {
    team: {
        teamName: string;
        nbaFranchise: boolean;
        league: {
            conferenceId: {
                name: string;
                id: number;
            };
            divisionId: {
                name: string;
                id: number;
            };
            name: string;
            id: number;
            conference: string;
            division: string;
        };
        id: number;
        allStar: false;
        city: string;
        code: string;
        logo: string;
        nickname: string;
    };
    season: {
        id: number;
        year: number;
    };
    conferenceName: string;
    conferenceRank: number;
    conferenceWin: number;
    conferenceLoss: number;
    divisionGamesBehind: number;
    homeWin: number;
    awayWin: number;
    totalWin: number;
    winPercentage: number;
    lastTenWin: number;
    homeLoss: number;
    awayLoss: number;
    totalLoss: number;
    lossPercentage: number;
    lastTenLoss: number;
    gamesBehind: number;
    streak: number;
    winStreak: boolean;
}[];

export type SingleTeamStanding = {
    team: {
        teamName: string;
        nbaFranchise: boolean;
        league: {
            conferenceId: {
                name: string;
                id: number;
            };
            divisionId: {
                name: string;
                id: number;
            };
            name: string;
            id: number;
            conference: string;
            division: string;
        };
        id: number;
        allStar: false;
        city: string;
        code: string;
        logo: string;
        nickname: string;
    };
    season: {
        id: number;
        year: number;
    };
    conferenceName: string;
    conferenceRank: number;
    conferenceWin: number;
    conferenceLoss: number;
    divisionGamesBehind: number;
    homeWin: number;
    awayWin: number;
    totalWin: number;
    winPercentage: number;
    lastTenWin: number;
    homeLoss: number;
    awayLoss: number;
    totalLoss: number;
    lossPercentage: number;
    lastTenLoss: number;
    gamesBehind: number;
    streak: number;
    winStreak: boolean;
};

export type Classifica = {
    allStanding: {
        eastConference: SingleTeamStanding[];
        westConference: SingleTeamStanding[];
    };
    favouriteStandings: {
        eastConference: SingleTeamStanding[];
        westConference: SingleTeamStanding[];
    };
};

export type StandingShow = {
    eastConference: SingleTeamStanding[];
    westConference: SingleTeamStanding[];
};
