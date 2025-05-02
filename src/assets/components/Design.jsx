import { IllustratorIcon , PhotoshopIcon , IndesignIcon , FigmaIcon } from './icons';
export const Design = () => {
    return ( 
        <div className="my-3">
                <p className="text-lg text-black font-semibold">Design</p>
                <div className="grid grid-cols-3 gap-4 mt-4">   
                    <IllustratorIcon />
                    <PhotoshopIcon />
                    <IndesignIcon />  
                    <FigmaIcon />
                </div>
        </div>
    )
}