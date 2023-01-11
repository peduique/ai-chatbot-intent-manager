import React, { FC } from "react";

import { SLoading, SIcon } from "./styles";

interface Iloading {
  text?: string | null;
}

const Loading: FC<Iloading> = ({ text = null }) => {
  return (
    <SLoading>
      <SIcon />
      {text}
    </SLoading>
  );
};

export default Loading;
