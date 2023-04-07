export interface Golfer {
  name?: string;
  owgr?: number;
  score?: number;
  available?: Boolean;
}

export const emptyGolfer: Golfer = {
  name: "",
  owgr: 1,
  score: 0,
  available: true,
};
