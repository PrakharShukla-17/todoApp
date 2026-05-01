import clsx from "clsx";


export interface CardProps{
    todoTitle:string;
    todoDescription:string;
    priority:string;
}

export const Card=(props:CardProps)=>{
    return (
        <div className="h-64 w-104  rounded-md shadow-xl ring flex flex-col transition duration-600  hover:-translate-y-2 hover:scale-103">
            <div className=" h-8 bg-[#424242] w-full h-8 text-white rounded-t-md p-2 ">
            todo                   
            </div>

            <div className="h-56 w-full bg-blue-400 rounded-b-md grid grid-rows-6">

            <div className="row-span-3 text-3xl h-full w-full bg-pink-300 p-6">{props.todoTitle}</div>
            <div className="row-span-2 p-4 h-full w-full bg-red-200">{props.todoDescription}</div>
            <div className="row-span-1 h-full w-full bg-white rounded-b-md flex justify-end-safe p-2 gap-2">
                
            <p className="-m-1">{props.priority}</p>
            
            <div className={clsx("",{
                "h-4 w-4 bg-red-800 border-2 border-solid border-white rounded-full":props.priority==="A",
                "h-4 w-4 bg-yellow-800 border-2 border-solid border-white rounded-full":props.priority==="B",
                "h-4 w-4 bg-green-800 border-2 border-solid border-white rounded-full":props.priority==="C"
            })}>
            </div>
            
            </div>

            </div>
        </div>
    )
}