import React, { FC, memo, useState } from "react";

import SwitchButton from "../SwitchButton";

import { IntentProps } from "../../pages/Intents/types";

import {
  SIntent,
  STitle,
  SDescription,
  SHeader,
  SButton,
  SIcon,
  SContent,
  SCaption,
} from "./styles";

interface IIntent extends IntentProps {
  onChangeStatus: (id: string, checked: boolean) => void;
  isActive: boolean;
}

const Intent: FC<IIntent> = ({
  id,
  name,
  description,
  trainingData,
  reply,
  isActive,
  onChangeStatus,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClickExpandAccordion = () => {
    setExpanded((isShown) => !isShown);
  };

  // console.log(id, isActive);

  return (
    <SIntent>
      <SHeader>
        <SwitchButton
          id={`switch-${id}`}
          name={id}
          active={isActive}
          onChange={onChangeStatus}
        />
        <div>
          <STitle as="h2">{name}</STitle>
          <SDescription>{description}</SDescription>
        </div>
        <SButton onClick={handleClickExpandAccordion}>
          <SIcon />
        </SButton>
      </SHeader>
      {expanded && (
        <SContent>
          <SCaption>Expressions</SCaption>
        </SContent>
      )}
    </SIntent>
  );
};

export default memo(Intent);
