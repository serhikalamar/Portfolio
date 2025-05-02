import { LinkedinIcon } from "./icons"


export const SobreMi = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-12">
            <div id="sobre-mi" className="text-black text-center w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-5xl font-bold">Sobre Mí</h2>
                <p className="text-lg mx-6  mt-4 p-6">
                    Soy un estudiante a punto de graduarse, con ganas de entrar al mundo laboral, disponibilidad
                    completa y entusiamado de poder empezar. Mi propóstio es especializarme en el diseño y 
                    desarrollo front-end, tanto web como de aplicaciones.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <a href="public/CVSergiMartinez.pdf"
                            download="CVSergiMartinez.pdf"
                            className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer transition-colors duration-200"
                    >
                        Descarga CV
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sergi-martínez-94243a161/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-blue-700 font-semibold shadow-md rounded-lg p-2 transition-colors duration-300"
                    >
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQHkScqcccAHdw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713309863149?e=1747872000&v=beta&t=J5w3RYh6Buix6rk-k8KExOWLFSq9CGfqyw4htztEB9A" alt="Sergi Martinez" className="rounded-full w-32 h-32 md:w-48 md:h-48" />
            </div>
        </div>
    )
}