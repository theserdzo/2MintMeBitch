import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://youtu.be/Ga3WfUsn8vM">Овиа може да се тргнит:</Link>
        </li>
        <li>
          <Link to="https://youtu.be/Ga3WfUsn8vM">Contact</Link>
        </li>
        <li>
          <Link to="https://youtu.be/Ga3WfUsn8vM">About us</Link>
        </li>
        <li>
          <Link to="https://youtu.be/Ga3WfUsn8vM">FAQ's</Link>
        </li>
        <li>
          <Link to="https://youtu.be/Ga3WfUsn8vM">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;