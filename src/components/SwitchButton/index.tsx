import React, { ChangeEvent, FC } from "react";

import { SWrapper, SCheckbox, SLabel } from "./styles";

interface ISwitchButton {
  id: string;
  active: boolean;
  onClick: (status: boolean) => void;
}

const SwitchButton: FC<ISwitchButton> = ({ id, active, onClick }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onClick(event.target.checked);
  };

  return (
    <SWrapper>
      <SCheckbox
        type="checkbox"
        id={id}
        checked={active}
        onChange={handleChange}
      />
      <SLabel htmlFor={id} />
    </SWrapper>
  );
};

export default SwitchButton;
