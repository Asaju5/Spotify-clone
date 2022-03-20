import React from "react";
import { ShadowContainer } from "../components/styles";

function IconCard(props) {
  const { dropShadowColor, icon, title } = props;
  return (
    <div className="w-min p-4">
      <ShadowContainer
        className="rounded-full bg-gray-100 w-min mx-auto"
        color={dropShadowColor}
      >
        {icon}
      </ShadowContainer>
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}

export default IconCard;
