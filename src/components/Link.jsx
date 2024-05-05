/* eslint-disable react/prop-types */
export default function Link({ classname, to, children }) {
  return (
    <a href={to} className={classname}>
      {children}
    </a>
  );
}
