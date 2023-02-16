import axios from 'axios'
import { Post } from '../types/post.model'
import { Pagination, ServerResponse } from '../types/server.model'
import { User, Userdetail } from '../types/user.model'

const API_URL = 'https://dummyapi.io/data/v1'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'app-id': '63ebcbdbec792b82fb54a5dc'
  }
})

export const getUsers = async (
  page: Pagination
): Promise<ServerResponse<User[]>> => {
  const { data } = await api.get('/user', {
    params: {
      limit: page.limit,
      page: page.page
    }
  })
  return data
}

export const getUser = async (id: string): Promise<Userdetail> => {
  const { data } = await api.get(`/user/${id}`)
  return data
}

export const getPosts = async (
  page: Pagination
): Promise<ServerResponse<Post[]>> => {
  const { data } = await api.get('/post', {
    params: {
      limit: page.limit,
      page: page.page
    }
  })
  return data
}
