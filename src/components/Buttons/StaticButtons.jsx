import PropTypes from 'prop-types';

export default function StaticButtons({
  textButton,
  bgColor = '#FFCF4E',
  textColor = '#000000',
  borderRadius = '0px',
  paddingY = '20px',
  paddingX = '52px',
  onClick,
  ariaLabel,
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[18px] opacity-100 hover:opacity-70 ease-in-out duration-300`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: borderRadius,
        padding: `${paddingY} ${paddingX}`,
      }}
      aria-label={ariaLabel}
    >
      {textButton}
    </button>
  );
}

// Валидация пропсов
StaticButtons.propTypes = {
  textButton: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  paddingY: PropTypes.string,
  paddingX: PropTypes.string,
  onClick: PropTypes.func, // Обработчик клика
  ariaLabel: PropTypes.string, // Атрибут aria-label
};
