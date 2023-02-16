export interface ServerResponse<T> {
  data: T
  total: number
  page: number
  limit: number
}

export interface Pagination {
  page: number
  limit: number
}
