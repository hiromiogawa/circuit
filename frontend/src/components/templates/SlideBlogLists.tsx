import styled, { css } from 'styled-components'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import SlideBlogList from '@/components/organisms/SlideBlogList'

// types
import type { BlogType } from '@/types'

export type SlideBlogListsType = {
  blogs: {
    categoryName: string
    categoryId: string
    data: Pick<BlogType, 'id' | 'category' | 'createdAt' | 'title' | 'tags'>[]
  }[]
} & Pick<LayoutType, 'categories' | 'tags'>
const SlideBlogLists = ({ blogs, categories, tags }: SlideBlogListsType) => {
  return (
    <Layout categories={categories} tags={tags}>
      {blogs.map((blogData) => {
        if (blogData.data.length === 0) return null
        return (
          <StyledSlideBlogList
            key={blogData.categoryName}
            blogsData={blogData.data}
            title={blogData.categoryName}
            listHref={`/blog${
              blogData.categoryId === 'new'
                ? ''
                : `/category/${blogData.categoryId}`
            }/1`}
            showCategory={blogData.categoryId === 'new'}
          />
        )
      })}
    </Layout>
  )
}

export default SlideBlogLists

const StyledSlideBlogList = styled(SlideBlogList)`
  & + & {
    margin-top: 80px;
  }
`
