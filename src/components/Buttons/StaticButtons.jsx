export default function StaticButtons({ textButton, bgColor, textColor, borderRadius, paddingY, paddingX }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: borderRadius,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingLeft: paddingX,
    paddingRight: paddingX,
  };

  return (
    <button
      style={buttonStyle}
      className={`text-[18px] opacity-100 hover:opacity-70 ease-in-out duration-300`}
    >
      {textButton}
    </button>
  );
}
