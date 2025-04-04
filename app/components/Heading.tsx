"use client"

interface HeadingProps{
    title:string;
    subtitle?:string;
    center?:boolean
}
export const Heading:React.FC<HeadingProps>=({
    title,
    subtitle,
    center
})=>{
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-gray-500">{subtitle}</div>
        </div>
    )
}