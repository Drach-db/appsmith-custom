import { WDSInputWidget } from "widgets/wds/WDSInputWidget";
import { EmailInputIcon, EmailInputThumbnail } from "appsmith-icons";
import { WIDGET_TAGS } from "constants/WidgetConstants";
import { INPUT_TYPES } from "widgets/wds/WDSBaseInputWidget";
import type { WidgetBaseConfiguration } from "WidgetProvider/types";

class WDSEmailInputWidget extends WDSInputWidget {
  static type = "WDS_EMAIL_INPUT_WIDGET";

  static getConfig(): WidgetBaseConfiguration {
    return {
      ...super.getConfig(),
      displayOrder: undefined,
      tags: [WIDGET_TAGS.INPUTS],
      name: "Email Input",
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      inputType: INPUT_TYPES.EMAIL,
      widgetName: "EmailInput",
    };
  }

  static getMethods() {
    return {
      ...super.getMethods(),
      IconCmp: EmailInputIcon,
      ThumbnailCmp: EmailInputThumbnail,
    };
  }
}

export { WDSEmailInputWidget };
