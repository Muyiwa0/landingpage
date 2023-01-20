import React from "react";

const GraphContext = React.createContext();
const BargraphContext = React.createContext();

const GraphProvider = GraphContext.Provider;
const GraphConsumer = GraphContext.Consumer;
const BargraphProvider = BargraphContext.Provider;
const BargraphConsumer = BargraphContext.Consumer;
export {
  GraphProvider,
  GraphConsumer,
  GraphContext,
  BargraphProvider,
  BargraphConsumer,
  BargraphContext,
};
