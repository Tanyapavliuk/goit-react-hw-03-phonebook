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
    padding:5px 10px;
    border-radius:33px;
    cursor: pointer;

    background-color:#E6E6FA;
    transition: background-color 250ms linear, color 250ms linear;
    &:hover {
    color:#FFFFFF; 
    background-color:#6A5ACD;
}
`
