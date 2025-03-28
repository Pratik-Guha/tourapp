"use client"

import axios from "axios"
import {  useState } from "react"
import  {useRegisterModel}  from "@/app/hooks/useRegisterModel"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Model } from "./Model"
import { Heading } from "../Heading"
import { Inputs } from "../inputs/Inputs"
import toast from "react-hot-toast"
import { Button } from "../Button"
import { FcGoogle } from "react-icons/fc"
import { IoLogoGithub } from "react-icons/io"
import { signIn } from "next-auth/react"
import { useLoginModel } from "@/app/hooks/useLogin"
export const RegisterModel=()=>{
    const registerModel=useRegisterModel();
    const [isLoading,setIsLoading]=useState(false);
    const loginModel=useLoginModel();
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })
    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);

        axios.post('/api/register',data).then(()=>{
            toast.success('Account created successfully!');
            loginModel.onOpen();
            registerModel.onClose();
        }).catch((error)=>{
            toast.error("Something went wrong with registration",error);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    const bodyContent=(
        <div className="flex flex-col gap-4 text-black">
        <Heading title="Welcome to Tour App" subtitle="Create an account!"/>
        <Inputs id="name" label="Name" type="text" disabled={isLoading}  register={register} errors={errors}  required  />
        <Inputs id="email" label="Email" type="text" disabled={isLoading}  register={register} errors={errors}  required  />
        <Inputs id="password" label="Password" type="password" disabled={isLoading}  register={register} errors={errors}  required  />
        </div>
    )
    const footerContent=(
        <div className="flex flex-col gap-4">
            <hr />
            <Button 
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>signIn('google')}
            />
            <Button 
            outline
            label="Continue with Github"
            icon={IoLogoGithub }
            onClick={()=>signIn('github')}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
            <div className="justify-center flex flex-row items-center gap-2">
                <div>
                    Already have an account?
                </div>
                <div onClick={() => {
                registerModel.onClose();  // Close register modal
                loginModel.onOpen(); // Open login modal
                }} className="text-neutral-800 cursor-pointer hover:underline hover:text-blue-500">
                    Login
                </div>
            </div>
            </div>
        </div>
    )
    return (
        <Model 
        isOpen={registerModel.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModel.onClose}
        onSubmit={handleSubmit(onSubmit)}
        disabled={isLoading}
        body={bodyContent}
        footer={footerContent}
        />
    )
}