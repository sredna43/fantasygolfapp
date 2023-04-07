import { Golfer } from "./Golfer";

export interface FantasyLeague {
  leagueId?: string;
  leagueName?: string;
  allGolfers?: Array<Golfer>;
  rosters?: Array<Roster>;
}

export interface Roster {
  ownerId?: string;
  ownerName?: string;
  golfers?: Array<Golfer>;
}
