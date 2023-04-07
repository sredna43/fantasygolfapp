import { ServerDraftMessage } from "../../types/ServerDraftMessage";

export const testServerDraftMessage: ServerDraftMessage = {
  leagueDetails: {
    leagueName: "Test League",
    allGolfers: [
      {
        name: "Tiger Woods",
        owgr: 150,
        score: 0,
        available: true,
      },
    ],
  },
  success: true,
};
