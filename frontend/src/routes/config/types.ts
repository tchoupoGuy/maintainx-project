import { ComponentType } from "react";
import { RouteProps } from "react-router-dom";

export interface CustomRoute extends RouteProps {
  component: ComponentType;
  key: string;
}
