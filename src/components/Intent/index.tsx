import React, { FC, memo, useState } from "react";

import Chip from "../Chip";

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
  SExpressionTags,
  SReplyChip,
  SCustomizeButton,
  SSwitchButton,
} from "./styles";

interface IIntent extends IntentProps {
  onChangeStatus: (id: string, checked: boolean) => void;
  isActive: boolean;
  index: number;
}

const Intent: FC<IIntent> = ({
  id,
  name,
  description,
  trainingData,
  reply,
  isActive,
  index,
  onChangeStatus,
}) => {
  const [expanded, setExpanded] = useState<boolean>(index === 0 ? true : false);

  const handleClickExpandAccordion = () => {
    setExpanded((isShown) => !isShown);
  };

  return (
    <SIntent data-testid="intent">
      <SHeader>
        <SSwitchButton
          id={`switch-${id}`}
          name={id}
          active={isActive}
          onChange={onChangeStatus}
          testId="intent-checkbox"
        />
        <div>
          <STitle as="h2">{name}</STitle>
          <SDescription>{description}</SDescription>
        </div>
        <SButton
          onClick={handleClickExpandAccordion}
          variant="transparent"
          data-testid="intent-arrow"
        >
          <SIcon $isActive={expanded} />
        </SButton>
      </SHeader>
      {expanded && (
        <SContent>
          <SCustomizeButton disabled variant="transparent">
            Customize intent
          </SCustomizeButton>

          <div>
            <SCaption>Expressions</SCaption>
            <SExpressionTags data-testid="intent-expressions">
              {trainingData.expressions.map(({ id, text: expression }) => (
                <Chip key={id} alt={expression}>
                  {expression}
                </Chip>
              ))}
              {Boolean(trainingData.expressionCount) && (
                <Chip onClick={() => {}} alt="Show all expressions">
                  +{trainingData.expressionCount}
                </Chip>
              )}
            </SExpressionTags>
          </div>

          <div>
            <SCaption>Reply</SCaption>
            <SReplyChip
              variant="secondary"
              alt={reply.text}
              data-testid="intent-reply"
            >
              {reply.text}
            </SReplyChip>
          </div>
        </SContent>
      )}
    </SIntent>
  );
};

export default memo(Intent);
