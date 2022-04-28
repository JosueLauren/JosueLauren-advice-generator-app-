import styled from 'styled-components'


export const Advice = styled.p`
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    color: hsl(150, 100%, 66%);
    width: 100%;

`;

export const Paragraph = styled.p`
    font-size: 28px;
    text-align: center;
    color: hsl(193, 38%, 86%);
    width: 100%;
    flex: 1;
    margin-top: 30px;
`

export const Button = styled.div`
    background-image: url('./imgs/icon-dice.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-color: hsl(150, 100%, 66%);
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    position: relative;
    bottom: -55px;

    &:hover {
        box-shadow: 0px 0px 40px hsl(150, 100%, 66%);
        opacity: 1;
      }
`

export const Container = styled.div`
      width: 40%;
      min-height: 300px;
      background-color: hsl(217, 19%, 24%);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      word-wrap: break-word;
      padding: 30px;

      
`

