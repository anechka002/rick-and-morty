import { NavLink, type NavLinkProps } from 'react-router'

type Props = NavLinkProps & {
  children: React.ReactNode;
  className?: string;
}

export const NavButton = ({children, to, className, ...rest}: Props) => {
  return (
    <NavLink 
      className={({isActive}) =>`text-center duration-300 ${className} ${isActive ? 'font-bold' : ''}`} 
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  )
}
