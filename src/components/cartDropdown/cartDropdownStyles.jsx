import styled from "styled-components";


import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/buttonStyles';

export const CartDropdownContainer = styled.div`
   position: absolute;
  width: 270px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 4px;
  }
`
