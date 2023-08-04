import styled from '@emotion/styled'

export const Wrapper = styled.div`
    padding: 30px
`
export const Form = styled.form`
    padding: 20px;
    width: 320px;
`

export const Title = styled.h2`
    font-size:24px;
`
export const Input = styled.input`
    padding: 10px 20px;
    display:block;
    margin:10px;

    border: 1px solid #6A5ACD;
    border-radius:33px;
    cursor: pointer;

    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:focus,
    &:hover {
        border: 1px solid #9370DB;
        background-color: #6A5ACD;
        color:#FFFFFF;
    }
`
export const Label = styled.label`
    display:block;
    margin:0 10px;
    font-size: 20px;
    font-weight: 500;
`
export const List = styled.ul`

`
export const Button = styled.button`
    padding: 10px 25px;
    border-radius:33px;
    font-size:18px;

    cursor: pointer;
    color: #ffffff;
    background-color: #6A5ACD;
    border: 1px solid transparent;
    transition: background-color 250ms linear, color 250ms linear;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 255, .2);
    &:hover{
        color: #6A5ACD;
        background-color: #ffffff;
        border: 1px solid #6A5ACD;
    }
    &:disabled{
        background-color: #ccc;
    }
`
