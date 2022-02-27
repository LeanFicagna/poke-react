import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin: 10px;
    align-items: center;

    img {
        width: 130px;
    }

    h1 {
        font-size: 20px;
    }

    h3 {
        font-size: 13px;
    }

    :hover {
        cursor: pointer;
        z-index: 10000;
        transition: all 200ms ease-in;
        transform: scale(1.05);

        &.fire {
            box-shadow: 0px 0px 50px #ff3300;
        }
    
        &.grass {
            box-shadow: 0px 0px 50px #65f09c;
        }
    
        &.electric {
            box-shadow: 0px 0px 50px #9ca12b;
        }
    
        &.water, &.ice {
            box-shadow: 0px 0px 50px #4fffed;
        }
    
        &.ground {
            box-shadow: 0px 0px 50px #b3b57f;
        }
    
        &.rock {    
            box-shadow: 0px 0px 50px #919191;
        }
    
        &.fairy {
            box-shadow: 0px 0px 50px #f3b6fc;
        }
    
        &.poison {
            box-shadow: 0px 0px 50px #00a600;
        }
    
        &.bug {
            box-shadow: 0px 0px 50px #ffdd75;
        }
    
        &.dragon {
            box-shadow: 0px 0px 50px #6272cc;
        }
    
        &.psychic {
            box-shadow: 0px 0px 50px #c4c22d;
        }
    
        &.fighting {
            box-shadow: 0px 0px 50px #9e9c6c;
        }
    
        &.normal {
            box-shadow: 0px 0px 50px #ccdedc;
        }
    }

    &.fire {
        background-color: #FDDFDF;
    }

    &.grass {
        background-color: #DEFDE0;
    }

    &.electric {
        background-color: #FCF7DE;
    }

    &.water, &.ice {
        background-color: #DEF3FD;
    }

    &.ground {
        background-color: #f4e7da;
    }

    &.rock {
        background-color: #d5d5d4;
    }

    &.fairy {
        background-color: #fceaff;
    }

    &.poison {
        background-color: #98d7a5;
    }

    &.bug {
        background-color: #f8d5a3;
    }

    &.dragon {
        background-color: #97b3e6;
    }

    &.psychic {
        background-color: #eaeda1;
    }

    &.fighting {
        background-color: #E6E0D4;
    }

    &.normal {
        background-color: #F5F5F5;
    }
`;