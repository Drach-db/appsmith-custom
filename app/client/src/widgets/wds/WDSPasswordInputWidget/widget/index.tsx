import { WIDGET_TAGS } from "constants/WidgetConstants";
import { WDSInputWidget } from "widgets/wds/WDSInputWidget";
import { INPUT_TYPES } from "widgets/wds/WDSBaseInputWidget/constants";
import type { WidgetBaseConfiguration } from "WidgetProvider/types";
import { PasswordInputIcon, PasswordInputThumbnail } from "appsmith-icons";

class WDSPasswordInputWidget extends WDSInputWidget {
  static type = "WDS_PASSWORD_INPUT_WIDGET";

  static getConfig(): WidgetBaseConfiguration {
    return {
      ...super.getConfig(),
      displayOrder: undefined,
      tags: [WIDGET_TAGS.INPUTS],
      name: "Password Input",
    };
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      inputType: INPUT_TYPES.PASSWORD,
      widgetName: "PasswordInput",
    };
  }

  static getMethods() {
    return {
      ...super.getMethods(),
      IconCmp: PasswordInputIcon,
      ThumbnailCmp: PasswordInputThumbnail,
    };
  }
}

export { WDSPasswordInputWidget };
