import {BackgroundImage, Body, DirectoryItemContainer} from './directoryItemStyles';

import { useNavigate } from "react-router-dom";

function DirectoryItemComponent({ category }) {
  const { imageUrl, title, route } = category;
  const navigate=useNavigate();

const onNavigateHandler=()=>navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
         <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
         </Body>

    </DirectoryItemContainer>
  )
}

export default DirectoryItemComponent;