import styled from 'styled-components'

export type CircleType = {
  children: string
  handleClcik?: () => {}
  type?: 'blue' | 'red' | 'white'
}

const Circle = ({ children, type = 'blue', handleClcik }: CircleType) => {
  let textColor

  switch (type) {
    case 'white':
      textColor = '#FFF'
      break
    case 'red':
      textColor = '#FF0000'
      break

    default:
      textColor = '#0067c0'
      break
  }

  return (
    <StyledButton onClick={handleClcik && handleClcik} textColor={textColor}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Circle

const StyledButton = styled.button<{ textColor: string }>`
  width: 74px;
  height: 74px;
  background: linear-gradient(
    0deg,
    #757575 0%,
    #9e9e9e 45%,
    #e8e8e8 70%,
    #9e9e9e 85%,
    #757575 90% 100%
  );
  padding: 5px;
  border-radius: 50%;
  overflow: hidden;

  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 4px;
    background-color: #000;
    border-radius: 50%;
    color: ${({ textColor }) => textColor};
    font-size: 12px;
    font-weight: bold;
    transition: text-shadow 0.35s;

    &::before {
      content: '';
      position: absolute;
      width: 90%;
      height: 90%;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      transition: box-shadow 0.35s;
    }

    &:hover {
      text-shadow: ${({ textColor }) =>
        `0 0 10px ${textColor}, 0 0 15px ${textColor}`};

      &::before {
        box-shadow: ${({ textColor }) => `0px 0px 6px 2px ${textColor}`};
      }
    }
  }
`
