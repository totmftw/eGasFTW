import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContentSectionRenderer({ htmlContent1, htmlContent3, sectionTitleOrPageName, alignItemsStyle, textStylingConfig1, elementHeight1, elementWidth1, spacingMarginLeft, dynamicPaddingStyle }) {
  return (
    <div className="flex-row-with-icons-and-text">
      <div className="section-title-container" style={{ alignItems: alignItemsStyle }}>
        <SvgIcon2 className="svg-container1" htmlContent3={htmlContent3} textStylingConfig1={textStylingConfig1} elementHeight1={elementHeight1} elementWidth1={elementWidth1} />
        <p className="section-title-text-style" style={{ marginLeft: spacingMarginLeft, paddingBottom: dynamicPaddingStyle }}>
          {sectionTitleOrPageName}
        </p>
      </div>
      <SvgIcon1 className="svg-container2" htmlContent1={htmlContent1} />
    </div>
  );
}

export default ContentSectionRenderer;
