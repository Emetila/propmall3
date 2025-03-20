import { SidebarLink } from "./nav-links"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarLink />
            <div>{children}</div>
        </div>
    )
}