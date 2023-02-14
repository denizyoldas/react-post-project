import axios from 'axios'
import { Post } from '../types/post.model'
import { ServerResponse } from '../types/server.model'
import { User, Userdetail } from '../types/user.model'

const API_URL = 'https://dummyapi.io/data/v1'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'app-id': '63ebcbdbec792b82fb54a5dc'
  }
})

export const getUsers = async (): Promise<ServerResponse<User[]>> => {
  const { data } = await api.get('/user')
  return data
}

export const getUser = async (id: string): Promise<Userdetail> => {
  const { data } = await api.get(`/user/${id}`)
  return data
}

export const getPosts = async (): Promise<ServerResponse<Post[]>> => {
  const { data } = await api.get('/post')
  return data
}
