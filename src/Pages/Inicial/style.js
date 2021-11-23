import styled  from "styled-components";

export const Div = styled.div`
    width: 300px;
    background-color: #AEBFD8;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 20px 0px;
    button, input{
        padding: 10px;
        border: 0px;
    }
    button{
        background-color: #0E71B7;
        color: white;
        
    }
    ul{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
`;
export const DivS = styled.div`
    overflow-y: auto;
`;

export const Li = styled.li`
    background-color: #6181B8; 
    margin: 10px 0px;
    padding: 10px;
    box-sizing: border-box;
    text-align: end;
    font-size:15px;

`;

export const DivLi = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;
    img{
        width: 30px;
        object-fit: contain;
        border: 2px solid black;
        border-radius: 100px;
        margin-left: 10px;
    }
`;