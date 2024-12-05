import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
type TooltipContentType = {
  fontSize?: string;
};
export const TooltipContent = styled(Tooltip.Content)<TooltipContentType>`
  border-radius: 3px;
  padding: 2px 4px;
  font-size: ${(props) => props.fontSize || "13px"};
  line-height: 1;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.fontColour};
  user-select: none;
  max-width: 250px;
  line-height: 20px;
  animation-duration: 400ms;
`;

export const TooltipTrigger = styled(Tooltip.Trigger)`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  height: fit-content;
  text-align: left;

`;
