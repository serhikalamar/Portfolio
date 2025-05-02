export const Link = ({ href, children }) => {
    return (
        <li className="hover:text-gray-400 cursor-pointer">
            <a href={href}>{children}</a>
        </li>
    )
}