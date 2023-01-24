export default function Button({ text, icon, backgroundColor }) {
  return (
    <a href="/" className={`card__button card__button--${backgroundColor}`}>
      {icon}
      {text}
    </a>
  );
}
