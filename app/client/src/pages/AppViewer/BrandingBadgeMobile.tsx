import React from "react";
import { importSvg } from "@appsmith/ads-old";

// Этот импорт можно оставить, если вы планируете использовать логотип в других местах в будущем.
const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

function BrandingBadge() {
  return null;  // Убираем ватермарку
}

export default BrandingBadge;
