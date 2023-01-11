import React, { FC } from "react";

import Button from "../../components/Button";
import Intent from "../../components/Intent";
import IntentsGroup from "../../components/IntentsGroup";
import Loading from "../../components/Loading/Index";

import useIntentManager from "../../hooks/useIntentManager";

import {
  SContainer,
  SHeader,
  SDescription,
  STitle,
  SControl,
  SAllIntentsButton,
} from "./styles";

const IntentsPage: FC = () => {
  const {
    intents,
    activeIntents,
    isUpdating,
    allIntentsActive,
    handleAllIntents,
    handleChangeStatus,
  } = useIntentManager();

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

      <SAllIntentsButton
        onClick={handleAllIntents}
        variant={allIntentsActive ? "secondary" : "secondaryOutline"}
        data-testid="toggle-all-intents"
      >
        {allIntentsActive ? "Unselect" : "Select"} all intents
      </SAllIntentsButton>

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
