

export interface ButtonProps{
    variant: "primary"|"secondary";     
    startIcon?: any;
    endIcon?:any;
    text: string;
    size: "sm"| "lg" |"md";
    onClick: ()=>void
}


export const Button=(props: ButtonProps)=>{
    if(props.size==="sm")
    return(
        <div>
            <div className="">{props.text}</div>
            <div className=""></div>
        </div>
    )
    if(props.size==="md")
    return(
        <div className="bg-none h-16 w-32 relative cursor-pointer">
            <div className="w-full h-full flex items-center justify-center ring-2 bg-[#ffffee] rounded-full">{props.text}</div>
            <div className="absolute -z-1 top-2 w-full h-full flex items-center justify-center ring-2 bg-[#ffffee] rounded-full"></div>
            <div className="absolute -z-2 top-3 bg-[#ABABAB] w-full h-full flex items-center justify-center ring-2 rounded-full"></div>
        </div>
    )
    if(props.size==="lg")
    return(
        <div>
            <div className="">{props.text}</div>
            <div className=""></div>
        </div>
    )
}