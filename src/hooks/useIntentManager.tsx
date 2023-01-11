import { useCallback, useState } from "react";

import intents from "../data/intents.json";

const useIntentManager = () => {
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

  const handleAllIntents = () => {
    handleLoadingEffect();

    if (allIntentsActive) {
      setActiveIntents([]);
      return;
    }

    setActiveIntents(intents.map(({ id }) => id));
  };

  return {
    intents,
    activeIntents,
    isUpdating,
    allIntentsActive,
    handleAllIntents,
    handleChangeStatus,
  };
};

export default useIntentManager;
