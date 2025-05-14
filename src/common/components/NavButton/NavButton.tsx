import { NavLink, type NavLinkProps } from 'react-router'

type Props = NavLinkProps & {
  children: React.ReactNode;
  className?: string;
}

export const NavButton = ({children, to, className, ...rest}: Props) => {
  return (
    <NavLink 
      className={`text-center duration-300 ${className}`} 
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  )
}
