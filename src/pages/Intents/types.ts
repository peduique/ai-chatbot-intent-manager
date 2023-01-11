type TExpressionMessage = {
  id: string;
  text: string;
};

export interface IntentProps {
  id: string;
  name: string;
  description: string;
  trainingData: {
    expressionCount: number;
    expressions: TExpressionMessage[];
  };
  reply: TExpressionMessage;
}
