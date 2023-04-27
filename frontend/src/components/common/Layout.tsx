import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

// components
import Contents from '@/components/common/Contents'
const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
    *, *::after, *::before {
        box-sizing: border-box;
    }

    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      padding: 0;
      appearance: none;
    }

    a {
        text-decoration: none;
    }

    body {
      background-color: #FFF
    }
`

export type LayoutType = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <GlobalStyle />
      <StyledContents>{children}</StyledContents>
    </>
  )
}

export default Layout

const StyledContents = styled(Contents)``
