import { DockerIcon, JavaIcon, LaravelIcon, MysqlIcon, PhpIcon } from './icons';
export const BackEnd = () => {
    return (
        <div className="my-3">
                    <p className="text-lg text-black font-semibold">Back-end</p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <JavaIcon />
                        <DockerIcon />
                        <PhpIcon />
                        <LaravelIcon />
                        <MysqlIcon />
                        
                    </div>
                    {/* Agrega más SVGs aquí */}
                </div>
    )
}