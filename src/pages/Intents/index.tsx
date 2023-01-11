import React, { FC, useState } from "react";

import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";

import intents from "../../data/intents.json";

import { IntentProps } from "./types";
import { SContainer, STitle } from "./styles";

const Intents: FC = () => {
  const [intents2, setIntents] = useState<IntentProps[]>([]);

  return (
    <SContainer>
      <STitle>Intentions</STitle>

      <IntentsGroup>
        {intents.map((intent) => (
          <Intent key={intent.id} {...intent} />
        ))}
      </IntentsGroup>
    </SContainer>
  );
};

export default Intents;
