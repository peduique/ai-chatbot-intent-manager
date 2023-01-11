import React, { useState } from "react";

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

  return (
    <SIntent>
      <SHeader>
        <div>
          <STitle as="h2">{name}</STitle>
          <SDescription>{description}</SDescription>
        </div>
        <SButton>
          <SIcon />
        </SButton>
      </SHeader>
      {active && (
        <SContent>
          <SCaption>Expressions</SCaption>
        </SContent>
      )}
    </SIntent>
  );
};

export default Intent;
