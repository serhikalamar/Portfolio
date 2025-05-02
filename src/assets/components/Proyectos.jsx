import { CajaProyectos } from "./CajaProyectos"

const proyectos = {
    tetris: 
    {
        nombre: "Tetris",
        descripcion: "Juego de Tetris",
        tecnologias: "HTML, CSS, JavaScript",
        enlace: "https://github.com/serhikalamar/Tetris",
        texto: "El juego consiste en encajar piezas de diferentes formas y colores en una cuadrícula. El objetivo es completar líneas horizontales para eliminarlas y ganar puntos. A medida que avanzas, la velocidad aumenta. Proyecto Creado en clase",
        imagen: "src/images/tetris.png",
        gif: "https://cdn.discordapp.com/attachments/1159737745336340521/1159737752411993098/tetris.gif",
    },
}


export const Proyectos = () => {
    return (
        <div id="proyectos" className="px-6 mx-auto flex flex-col items-center justify-center py-12 max-w-screen-lg">
            <h2 className="text-black text-center text-5xl md:text-6xl lg:text-7xl font-bold mb-12">Proyectos</h2>
            <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full">
                {/* Primer componente que ocupa 2 filas y 1 columna */}
                <CajaProyectos
                    className="row-span-2 col-span-1 bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    nombre={proyectos.tetris.nombre}
                    tecnologias={proyectos.tetris.tecnologias}
                    enlace={proyectos.tetris.enlace}
                    texto={proyectos.tetris.texto}
                    imagen={proyectos.tetris.imagen}
                    gif={proyectos.tetris.gif}
                />
                {/* Otros componentes que ocupan 1 fila y 1 columna */}
                <CajaProyectos
                    className="col-span-2  bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    nombre="Poke API"
                    tecnologias="Javascript, Sass, CSS, HTML"
                    texto= "Este proyecto es una app web en JavaScript que utiliza la PokéAPI para mostrar información de Pokémon.
                                    Permite buscar Pokémon por nombre o número y muestra su imagen, tipos, estadísticas y habilidades.
                                    Usa fetch para obtener los datos de la API y manipula el DOM para mostrarlos dinámicamente.
                                    Está hecho con HTML, CSS y JavaScript vanilla, sin frameworks."

                    
                    enlace="https://github.com/serhikalamar/PokeApi"
                    imagen="src/images/pokeApi.png"
                    gif=""
                />
                <CajaProyectos
                    className="bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    nombre="Trello"
                    tecnologias="Javascript, HTML, CSS"
                    enlace="https://github.com/serhikalamar/Trello"
                    texto="Este proyecto es una aplicación tipo Trello hecha con JavaScript, HTML y CSS.
                            Permite crear, mover y eliminar tarjetas entre listas de tareas.
                            Está enfocado en la gestión visual de tareas y el uso de drag and drop con JavaScript.

                            "
                    imagen="src/images/trello.png"
                    gif=""
                />
                <div className="bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img
                        src="src/images/765900ba9-article-200807-github-gitguardbody-text.jpg.webp"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col items-center justify-center p-6">
                        <h3 className="text-2xl font-bold text-red-400">Para más proyectos visita mi github</h3>
                        <a
                            href="https://github.com/serhikalamar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" object-center inline-block mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                        >
                        GitHub
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
