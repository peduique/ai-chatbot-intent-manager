import React, { FC, useCallback, useState } from "react";
import Button from "../../components/Button";

import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";

import intents from "../../data/intents.json";

import { SContainer, SHeader, SDescription, STitle } from "./styles";

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
      <SHeader>
        <div>
          <STitle>AI intents manager</STitle>
          <SDescription>{intents.length} pretrained intents</SDescription>
        </div>

        <div>
          <Button onClick={() => {}} disabled>
            + Add custom intetion
          </Button>
        </div>
      </SHeader>

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
