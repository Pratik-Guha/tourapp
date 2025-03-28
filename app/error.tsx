"use client"

interface ErrorStateProps{
    error:Error
}

const ErrorState:React.FC<ErrorStateProps> = ({error}) => {
    return ( 
        <div className="h-[60vh] flex flex-col items-center justify-center space-y-4 "> 
            <h1 className="text-3xl">Something went wrong</h1>
            <h2 className="text-xl">{error.message}</h2>
        </div>
     );
}
export default ErrorState;