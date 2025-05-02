import { BackEnd } from "./BackEnd";
import { Design } from "./Design";
import { FrontEnd } from "./FrontEnd";
export const Tecnologias = () => {
    return (
        <div className="flex flex-col items-center justify-center" id="Tecnologias">
            <div>
                <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold">Tecnologias</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
                <FrontEnd />
                <BackEnd />
                <Design />
            </div>
        </div>
    );
};