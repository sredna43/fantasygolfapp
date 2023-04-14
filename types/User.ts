export interface User {
  id?: string;
  username: string;
  displayName: string;
  leagueIds?: Array<string>;
}

export const emptyUser: User = {
  username: "",
  displayName: "",
};
