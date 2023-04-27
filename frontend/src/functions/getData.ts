import client from '@/libs/client'
import { PER_PAGE } from '@/config'

/** 記事一覧取得 */
export const getBlogs = async (
  limit = PER_PAGE,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: { limit: limit, offset: offset, orders: orders }
  })

  return {
    contents: data.contents,
    totalCount: data.totalCount,
    offset: data.offset,
    limit: data.limit
  }
}

/** カテゴリ別記事一覧取得 */
export const getBlogsByCategory = async (
  categoryId: string,
  limit = PER_PAGE,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: limit,
      offset: offset,
      orders: orders,
      filters: `category[equals]${categoryId}`
    }
  })

  return {
    contents: data.contents,
    totalCount: data.totalCount,
    offset: data.offset,
    limit: data.limit
  }
}

/** タグ別記事一覧取得 */
export const getBlogsByTags = async (
  tagId: string,
  limit = PER_PAGE,
  offset = 0,
  orders = '-createdAt'
) => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: limit,
      offset: offset,
      orders: orders,
      filters: `tags[contains]${tagId}`
    }
  })

  return {
    contents: data.contents,
    totalCount: data.totalCount,
    offset: data.offset,
    limit: data.limit
  }
}

/** 記事詳細取得 */
export const getBlog = async (id: string) => {
  const data = await client.get({ endpoint: 'blogs', contentId: id })
  return data
}

/** 検索記事一覧取得 */
export const searchBlogs = async (keyword: string, offset: number = 0) => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: PER_PAGE,
      offset: offset,
      orders: '-createdAt',
      q: decodeURI(keyword)
    }
  })

  return {
    contents: data.contents,
    totalCount: data.totalCount,
    offset: data.offset,
    limit: data.limit
  }
}

/** カテゴリ一覧取得 */
export const getCategories = async () => {
  const data = await client.get({
    endpoint: 'categories'
  })

  return {
    contents: data.contents
  }
}

/** カテゴリ詳細取得 */
export const getCategory = async (id: string) => {
  const data = await client.get({ endpoint: 'categories', contentId: id })
  return data
}

/** タグ一覧取得 */
export const getTags = async () => {
  const data = await client.get({
    endpoint: 'tags'
  })

  return {
    contents: data.contents
  }
}

/** タグ詳細取得 */
export const getTag = async (id: string) => {
  const data = await client.get({ endpoint: 'tags', contentId: id })
  return data
}
