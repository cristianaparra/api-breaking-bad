import React from 'react';
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
padding: 3rem;
border-radius:.5rem;
background-color: #fff;
max-width: 800px;

@media( min-width: 992px){
    margin-top: 10rem;
}

h1{
font-family: Arial, Helvetica, sans-serif;
text-align: center;
position: relative;
padding-left: 4rem;

&::before {
    content: open-quote;
    font-size: 10rem;
    color: black;
    position: absolute;
    left: -1rem;
    top: -2rem;
    }
}

p{
    font-family: Verdan, Geneva, Tahoma, sans-serif;
    color:#666;
    font-weight: bold;
    text-align: right;
    font-size: 1.4rem;
    maregin-top: 2rem;
}
`;

const Frase = ({ frase }) => {
    // if(Object.keys(frase))
    return (
        <ContenedorFrase>
            <h1>
                {frase.quote}
            </h1>
            <p>
                -{frase.author}
            </p>
        </ContenedorFrase>
    );
}

export default Frase;