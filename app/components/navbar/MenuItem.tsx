"use client"

interface MenuItemProps{
    onClick:()=>void;
    label:string;
}

export const MenuItem: React.FC<MenuItemProps>=({
    onClick,
    label
})=>{
    return (
        <div 
        onClick={onClick}
        className="px-4 py-3 bg-gray-500 hover:bg-gray-400 transition font-semibold">
            {label}
        </div>
    )
}
 