export const CajaProyectos = ({ className, nombre, descripcion, tecnologias, enlace, texto, imagen, botonTexto }) => {
    return (                   // transform hover:scale-101 transition-transform duration-200
        <div className={`${className}`}>
            <img
                src={imagen}
                alt={nombre}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{nombre}</h3>
                <p className="text-gray-600 mt-2">{descripcion}</p>
                <p className="text-sm text-gray-500 mt-4">{tecnologias}</p>
                <p className="text-gray-700 mt-4">{texto}</p>
                <a
                    href={enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" object-center inline-block mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                    {botonTexto || "Ver Proyecto"}
                </a>
            </div>
        </div>
    );
};