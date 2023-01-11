import React, { FC, useCallback, useState } from "react";

import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";

import intents from "../../data/intents.json";

import { SContainer, SDescription, STitle } from "./styles";

const IntentsPage: FC = () => {
  const [activeIntents, setActiveIntents] = useState<string[]>([]);

  const handleChangeStatus = useCallback((id: string, checked: boolean) => {
    if (!checked) {
      setActiveIntents((prev) => prev.filter((intentId) => intentId !== id));
      return;
    }

    setActiveIntents((prev) => [...prev, id]);
  }, []);

  return (
    <SContainer>
      <STitle>AI intents manager</STitle>
      <SDescription>{intents.length} pretrained intents</SDescription>

      <IntentsGroup>
        {intents.map((intent, index) => (
          <Intent
            key={intent.id}
            isActive={activeIntents.includes(intent.id)}
            onChangeStatus={handleChangeStatus}
            index={index}
            {...intent}
          />
        ))}
      </IntentsGroup>
    </SContainer>
  );
};

export default IntentsPage;
