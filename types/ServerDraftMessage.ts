import { User } from "./User";
import { Golfer } from "./Golfer";
import { FantasyLeague } from "./FantasyLeague";

export interface ServerDraftMessage {
  leagueDetails?: FantasyLeague;
  success?: boolean;
}
