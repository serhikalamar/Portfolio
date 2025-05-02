import { ReactIcon, HtmlIcon, CssIcon, JavascriptIcon, SassIcon, TailwindIcon, BootstrapIcon } from "./icons";

export const FrontEnd = () => {
    return(
        <div className="my-3"> 
                    <p className="text-lg text-black font-semibold">Front-end</p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <ReactIcon />
                        <HtmlIcon />
                        <CssIcon />
                        <JavascriptIcon />
                        <SassIcon />
                        <TailwindIcon />   
                        <BootstrapIcon />
                    </div>
                </div>
    )
}