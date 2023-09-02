import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps

export const ActiveLink = ({href, children, ...rest}: ActiveLinkProps) => {
    const pathname = usePathname();
    const isCurrentPath = pathname === href ;
    
    
    return <Link {...rest} href={href} style={{color: `${isCurrentPath ? '#cca876' : '#15171b'}`}} >{children}</Link>
}