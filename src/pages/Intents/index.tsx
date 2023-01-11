import React, { FC, useCallback, useEffect, useState } from "react";

import Button from "../../components/Button";
import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";
import Loading from "../../components/Loading/Index";

import intents from "../../data/intents.json";

import { SContainer, SHeader, SDescription, STitle, SControl } from "./styles";

const IntentsPage: FC = () => {
  const [activeIntents, setActiveIntents] = useState<string[]>([]);
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const handleLoadingEffect = () => {
    setUpdating(true);

    setInterval(() => setUpdating(false), 4000);
  };

  const handleChangeStatus = useCallback((id: string, checked: boolean) => {
    handleLoadingEffect();

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

        <SControl>
          {isUpdating && <Loading text="Saving..." />}
          <Button disabled>+ Add custom intetion</Button>
        </SControl>
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
