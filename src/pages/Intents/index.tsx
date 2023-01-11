import React, { FC, useCallback, useState } from "react";

import Button from "../../components/Button";
import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";
import Loading from "../../components/Loading/Index";
import SwitchButton from "../../components/SwitchButton";

import intents from "../../data/intents.json";

import {
  SContainer,
  SHeader,
  SDescription,
  STitle,
  SControl,
  SAllIntentsSwitch,
} from "./styles";

const IntentsPage: FC = () => {
  const [activeIntents, setActiveIntents] = useState<string[]>([]);
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const allIntentsActive = activeIntents.length === intents.length;

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

  const handleAllIntents = (_: string, checked: boolean) => {
    handleLoadingEffect();

    if (checked) {
      setActiveIntents(intents.map(({ id }) => id));
      return;
    }

    setActiveIntents([]);
  };

  return (
    <SContainer>
      <SHeader>
        <div>
          <STitle data-testid="page-title">AI intents manager</STitle>
          <SDescription>{intents.length} pretrained intents</SDescription>
        </div>

        <SControl>
          {isUpdating && <Loading text="Saving..." data-testid="loading" />}
          <Button disabled>+ Add custom intetion</Button>
        </SControl>
      </SHeader>

      <SAllIntentsSwitch>
        <SwitchButton
          name="toggle-all-intents"
          onChange={handleAllIntents}
          active={allIntentsActive}
          testId="toggle-all-intents"
        />
        {allIntentsActive ? "Unselect" : "Select"} all intents
      </SAllIntentsSwitch>

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
