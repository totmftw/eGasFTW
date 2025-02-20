import ContentSectionRenderer from "../ContentSectionRenderer";
import { theme } from "../../theme";
import "./style.css";

function RenderContentSections({ contentSectionsData }) {
  const contentSectionStylesConfigurations = [
    {
      alignItemsStyle: theme.others.ALIGN_ITEMS_AEB2CC55,
      elementWidth1: theme.others.WIDTH_17F125,
      elementHeight1: theme.others.HEIGHT_17F125,
      textStylingConfig1: theme.colors.COLOR_E9546F02,
      spacingMarginLeft: theme.spacing.MARGIN_LEFT_17176B,
    },
    {
      alignItemsStyle: theme.others.ALIGN_ITEMS_FD39398E,
      elementWidth1: theme.others.WIDTH_17F8A7,
      elementHeight1: theme.others.HEIGHT_17F8A7,
      spacingMarginLeft: theme.spacing.MARGIN_LEFT_171B2C,
      dynamicPaddingStyle: theme.spacing.PADDING_BOTTOM_2F28443,
    },
    {
      alignItemsStyle: theme.others.ALIGN_ITEMS_AEB2CC55,
      elementWidth1: theme.others.WIDTH_17F8A7,
      elementHeight1: theme.others.HEIGHT_17F8A7,
      textStylingConfig1: theme.colors.COLOR_E9546F02,
      spacingMarginLeft: theme.spacing.MARGIN_LEFT_17176B,
    },
  ];
  return (
    <div className="section-title-container1">
      {contentSectionsData.map((data, index) => {
        return <ContentSectionRenderer {...data} key={index} {...contentSectionStylesConfigurations[index]} />;
      })}
    </div>
  );
}

export default RenderContentSections;
