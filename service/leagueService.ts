import { apiConfig, env } from "./apiConfig";

export function createLeague(leagueName: string, isPrivate: boolean) {
  const url = `${apiConfig[env].baseUrl}/league/create`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      leagueName: leagueName,
      private: isPrivate,
    }),
  });
}

export function getLeagueById(leagueId: string) {
  const url = `${apiConfig[env].baseUrl}/league/${leagueId}`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function getPublicLeagues() {
  const url = `${apiConfig[env].baseUrl}/league`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function seachForLeagues(leagueName: string) {
  const params = new URLSearchParams({ league_name: leagueName });
  const url = `${apiConfig[env].baseUrl}/league/search?${params}`;
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
