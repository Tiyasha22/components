import useNavigation from "../hooks/use-navigation";
import classnames from "classnames";
function Link({ to, children, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    "text-blue-500 p-2 mb-3",
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
