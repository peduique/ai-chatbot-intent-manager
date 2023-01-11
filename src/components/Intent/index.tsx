import React, { FC, memo, useState } from "react";

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
  SExpressionTags,
  SReplyChip,
} from "./styles";
import Chip from "../Chip";

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
    <SIntent>
      <SHeader>
        <SwitchButton
          id={`switch-${id}`}
          name={id}
          active={isActive}
          onChange={onChangeStatus}
        />
        <div>
          <STitle as="h2">{name}</STitle>
          <SDescription>{description}</SDescription>
        </div>
        <SButton onClick={handleClickExpandAccordion}>
          <SIcon $isActive={expanded} />
        </SButton>
      </SHeader>
      {expanded && (
        <SContent>
          <div>
            <SCaption>Expressions</SCaption>
            <SExpressionTags>
              {trainingData.expressions.map(({ id, text: expression }) => (
                <Chip key={id}>{expression}</Chip>
              ))}
            </SExpressionTags>
          </div>
          <div>
            <SCaption>Reply</SCaption>
            <SReplyChip variant="secondary">{reply.text}</SReplyChip>
          </div>
        </SContent>
      )}
    </SIntent>
  );
};

export default memo(Intent);
