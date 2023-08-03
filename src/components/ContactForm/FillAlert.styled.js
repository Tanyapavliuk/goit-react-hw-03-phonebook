import styled from "@emotion/styled";

export const Fill = styled.h2`
    color: #6A5ACD;
    font-size:14px;
`
export const ButtonClose = styled.button`
    position:absolute;
    right: 20px;
    top: 20px;
    width: 25px;
    height: 25px;

    border-radius:50%;

    cursor: pointer;
    color: #ffffff;
    background-color: #6A5ACD;
    border: 1px solid transparent;
    transition: background-color 250ms linear, color 250ms linear;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 255, .2);
    &:hover{
        border: 1px solid #6A5ACD;
        background-color: #131A35;
    }
`