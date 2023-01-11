import React, { useState } from "react";

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

interface IIntent extends IntentProps {}

const Intent: React.FC<IIntent> = ({
  id,
  name,
  description,
  trainingData,
  reply,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClickExpandAccordion = () => {
    setExpanded((isShown) => !isShown);
  };

  const handleClickActiveIntent = (status: boolean) => {
    setActive((isShown) => !isShown);
  };

  console.log(active);

  return (
    <SIntent>
      <SHeader>
        <SwitchButton
          id={`switch-${id}`}
          active={active}
          onClick={handleClickActiveIntent}
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

export default Intent;
