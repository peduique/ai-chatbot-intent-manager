import React, { ChangeEvent, FC } from "react";

import { SWrapper, SCheckbox, SLabel } from "./styles";

interface ISwitchButton {
  id?: string;
  name: string;
  active: boolean;
  onChange: (name: string, checked: boolean) => void;
  testId?: string;
}

const SwitchButton: FC<ISwitchButton> = ({
  id,
  name,
  active,
  onChange,
  ...rest
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.name, target.checked);
  };

  return (
    <SWrapper {...rest}>
      <SCheckbox
        type="checkbox"
        name={name}
        id={id ?? name}
        checked={active}
        onChange={handleChange}
        data-testid={rest.testId}
      />
      <SLabel htmlFor={id ?? name} />
    </SWrapper>
  );
};

export default SwitchButton;
