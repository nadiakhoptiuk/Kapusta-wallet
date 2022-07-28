import IconsSVG from '../images/sprite.svg';

export default function Icons({ name, color, width, height, className }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={width}
      height={height}
    >
      <use href={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}