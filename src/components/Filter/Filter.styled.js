import styled from '@emotion/styled'

export const Input = styled.input`
    padding: 10px 25px;
    border-radius:33px;
    border: 1px solid #E6E6FA;

    font-size: 20px;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:focus {
        border: 1px solid #6A5ACD;
        background-color: #E6E6FA;
    }
`