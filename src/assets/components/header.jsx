import { Link } from "/src/assets/components/link.jsx";

export function Header() {
    const links = [
        { href: "#sobre-mi", label: "Sobre Mí" },
        { href: "#proyectos", label: "Proyectos" },
        { href: "#Tecnologias", label: "Tecnologias" }
    ];
    
    return (
        <header className=" text-black p-4 flex items-center justify-between">
            <nav>
                <ul className="flex space-x-6">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>{link.label}</Link>
                    ))}
                </ul>
            </nav>
        </header>
    )
}