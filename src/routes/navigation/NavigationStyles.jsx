import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer=styled.div`
 height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer=styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinkContainer=styled.div`
  flex: 1; /* Genişliği esnek hale getirin */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
   
export const NavLink=styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`