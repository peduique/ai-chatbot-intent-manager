import React, { FC, useCallback, useState } from "react";

import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";

import intents from "../../data/intents.json";

import { IntentProps } from "./types";
import { SContainer, SDescription, STitle } from "./styles";

const Intents: FC = () => {
  const [activeIntents, setActiveIntents] = useState<string[]>([]);

  const handleChangeStatus = useCallback(
    (id: string, checked: boolean) => {
      if (!checked) {
        console.log("entrou", id, checked);
        setActiveIntents((prev) => {
          const remove = prev.filter((intentId) => intentId !== id);
          console.log("prev", prev);
          console.log("remove", remove);

          return remove;
        });
      }

      setActiveIntents((prev) => [...prev, id]);
    },
    [setActiveIntents]
  );

  console.log("activeIntents", activeIntents);

  return (
    <SContainer>
      <STitle>Intents manager</STitle>
      <SDescription>{intents.length} pretrained intents</SDescription>

      <IntentsGroup>
        {intents.map((intent) => (
          <Intent
            key={intent.id}
            isActive={activeIntents.includes(intent.id)}
            onChangeStatus={handleChangeStatus}
            {...intent}
          />
        ))}
      </IntentsGroup>
    </SContainer>
  );
};

export default Intents;
