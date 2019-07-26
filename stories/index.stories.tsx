import { storiesOf } from "@storybook/react";
import * as React from "react";
import { App } from "../src/index";
storiesOf("TypeScript and Storybook", module)
  .add("Sample Widget", () => <App/>);
