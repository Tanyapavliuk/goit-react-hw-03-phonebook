import styled from '@emotion/styled'

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap:10px;

`
export const Item = styled.li`
    width: 500px;
    display: flex;
    justify-content: space-between;

    font-size:20px;
`
export const Button = styled.button`
    padding:10px 20px;
    border-radius:33px;
    cursor: pointer;

    color: #ffffff;
    background-color: #6A5ACD;
    border: 1px solid transparent;
    transition: background-color 250ms linear, color 250ms linear;
    &:hover{
        color: #6A5ACD;
        background-color: #ffffff;
        border: 1px solid #6A5ACD;
    }
`
