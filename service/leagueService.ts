import { Golfer } from "../types/Golfer";
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

export function addGolferToLeague(golfer: Golfer, leagueId: string) {
  const url = `${apiConfig[env].baseUrl}/league/golfer`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      league_id: leagueId,
    },
    body: JSON.stringify(golfer),
  });
}

export function editGolferInLeague(golfer: Golfer, leagueId: string) {
  const url = `${apiConfig[env].baseUrl}/league/golfer`;
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      league_id: leagueId,
    },
    body: JSON.stringify(golfer),
  });
}

export function removeGolferFromLeague(golfer: Golfer, leagueId: string) {
  const url = `${apiConfig[env].baseUrl}/league/golfer`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      league_id: leagueId,
    },
    body: JSON.stringify(golfer),
  });
}

export function addPlayerToLeague(userId: string) {
  const url = `${apiConfig[env].baseUrl}/league/player/add/${userId}`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function removePlayerFromLeague(userId: string) {
  const url = `${apiConfig[env].baseUrl}/league/player/remove/${userId}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
