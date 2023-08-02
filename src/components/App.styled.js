import styled from '@emotion/styled'

export const Wrapper = styled.div`
    padding: 30px
`
export const Form = styled.form`
    padding: 20px;
    width: 400px;
    border: 3px solid #E6E6FA;
`

export const Title = styled.h2`
    font-size:24px;
`
export const Input = styled.input`
    padding: 10px 20px;
    display:block;
    margin:10px;

    border: 1px solid #E6E6FA;
    border-radius:33px;
    cursor: pointer;
    &:focus {
        border: 1px solid #9370DB;
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
border: 1px solid #6A5ACD;
border-radius:33px;
background-color:#E6E6FA;

font-size:18px;
cursor: pointer;
transition: background-color 250ms linear, color 250ms linear;
    &:hover {
   
    color:#FFFFFF; background-color:#6A5ACD;
}
`
