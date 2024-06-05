import { api } from '../api'

declare const global: { platform: string }

export const getAllGames = async () => {
  return api.get('/games').then((response) => {
    return response.data
  })
}

export const getGameById = async (id: number) => {
  return api.get(`/game?id=${id}`).then((response) => {
    return response.data
  })
}

export const getCategory = async (categoryName: string) => {
  return api.get(`games?category=${categoryName}`).then((response) => {
    return response.data
  })
}

export const getCategoryAndPlatform = async (categoryName: string) => {
  return api.get(`games?category=${categoryName}&platform=${global.platform}`).then((response) => {
    return response.data
  })
}
