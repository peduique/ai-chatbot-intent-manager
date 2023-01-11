import React, { FC } from "react";

import { SLoading, SIcon } from "./styles";

interface Iloading {
  text?: string | null;
}

const Loading: FC<Iloading> = ({ text = null, ...rest }) => {
  return (
    <SLoading {...rest}>
      <SIcon />
      {text}
    </SLoading>
  );
};

export default Loading;
