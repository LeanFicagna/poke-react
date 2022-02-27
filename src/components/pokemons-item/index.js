import React from "react";
import * as S from "./styled";

export default function PokemonsItem({
    image,
    name,
    id,
    types
}) {
    
    return (
        <S.Wrapper className={types.split("|")[0]}>
            <img
                src={image}
                alt={`img ${name}`}
            />
            <h1>{id}. {name}</h1>
            <h3>{types}</h3>
        </S.Wrapper>
    )
}