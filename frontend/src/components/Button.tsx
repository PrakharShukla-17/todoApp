

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
    return (
        
        <div className="bg-[#D8125B] cursor-pointer h-8 w-8">
            {props.text}
        </div>
    )

    if(props.size==="lg")
        return(
    <div className="bg-[#D8125B] cursor-pointer h-24 w-24">
        {props.text}
    </div>
    )

    if(props.size==="md")
        return (
    <div className="bg-[#D8125B] cursor-pointer h-12 w-36 rounded-lg p-2">
        {props.text}
    </div>
    )
}