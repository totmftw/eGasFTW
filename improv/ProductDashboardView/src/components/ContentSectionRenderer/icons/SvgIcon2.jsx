function SvgIcon2({ className, htmlContent3, textStylingConfig1, elementHeight1, elementWidth1 }) {
  return <div className={className} style={{ width: elementWidth1, height: elementHeight1, color: textStylingConfig1 }} dangerouslySetInnerHTML={{ __html: htmlContent3 }} />;
}

export default SvgIcon2;
