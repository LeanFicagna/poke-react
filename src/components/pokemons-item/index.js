import React from "react";
import * as S from "./styled";

export default function PokemonsItem({
    image,
    name,
    id,
    types
}) {
    
    return (
        <S.Wrapper>
            <img
                src={image}
                alt="Pokemon"
            />
            <h1 className="fds1">{id}. {name}</h1>
            <h3>{types}</h3>
        </S.Wrapper>
    )
}