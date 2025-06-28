import React from "react";
import { importSvg } from "@appsmith/ads-old";
import styled from "styled-components";
import { Text } from "@appsmith/ads";

// Этот импорт можно оставить, если вы планируете использовать логотип в других местах в будущем.
const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

const Wrapper = styled.span`
  border-radius: var(--ads-v2-border-radius);
  border: 1px solid var(--ads-v2-color-border);
  background-color: var(--ads-v2-color-bg);

  svg {
    margin-top: 2px;
  }
`;

function BrandingBadge() {
  return null;  // Убираем ватермарку
}

export default BrandingBadge;
