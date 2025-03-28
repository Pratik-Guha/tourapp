"use client";

import { useRentModel } from "@/app/hooks/useRentModel";
import { Model } from "./Model";
import { useMemo, useState } from "react";
import { Heading } from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import { Inputs } from "../inputs/Inputs";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import Map from "../Map";

enum STEPS{
    CATEGORY=0,
    LOCATION=1,
    INFO=2,
    IMAGES=3,
    DESCRIPTION=4,
    PRICE=5
}

export const RentModel = () => {
    
    const rentModel=useRentModel();
    const [step,setStep]=useState(STEPS.CATEGORY);

    const {
        register,handleSubmit,setValue,watch,formState:{errors},
        reset
    }=useForm<FieldValues>({
        defaultValues:{
            category:'',
            location:null,
            guestCount:1,
            roomCount:1,
            bathroomCount:1,
            imageSrc:'',
            price:1,
            title:'',
            description:''
        }
    });

    const category=watch('category');
    const location=watch('location');
    const guestCount=watch('guestCount');
    const roomCount=watch('roomCount');
    const bathroomCount=watch('bathroomCount');
    const imageSrc=watch("imageSrc")
    const Map=useMemo(()=>dynamic(() => import('../Map'),{ssr:false}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]);

    const [isLoading,setIsLoading]=useState(false);
    const router=useRouter();
    const setCustomValue=(id:string,value:unknown)=>{
        setValue(id,value,{
            shouldValidate:true,
            shouldDirty:true,
            shouldTouch:true
        });
    }
    const onBack=()=>{
        setStep((value)=>value-1);
    }

    const onNext=()=>{
        setStep((value)=>value+1);
    }

    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
        if(step!==STEPS.PRICE){
            return onNext();
        }
        setIsLoading(true);
        await axios.post('/api/listings',data)
        .then(()=>{
            toast.success('Listing created!');
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModel.onClose();
        })
        .catch(()=>{
            toast.error('Something went wrong.');
        }).finally(()=>{
            setIsLoading(false);
        })
        
    }

    const actionLabel=useMemo(()=>{
        if(step===STEPS.PRICE){
            return "Create";
        }
        return "Next";
    },[step]);

    const secondaryActionLabel=useMemo(()=>{
        if(step===STEPS.CATEGORY){
            return undefined;
        }
        return "Back";
    },[step]);

    let bodyContent=(
        <div className="flex flex-col gap-8 dark:text-black">
            <Heading title="Which of these best describe your place?" subtitle="Pick a category"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
            {categories.map((item)=>(
                <div key={item.label} className="col-span-1">
                    <CategoryInput 
                    onClick={(category)=>setCustomValue('category',category)}
                    selected={category===item.label}
                    label={item.label}
                    icon={item.icon}/>
                </div>
            ))}
            </div>
        </div>
    )
    if(step===STEPS.LOCATION){
        bodyContent=(
            <div className="flex flex-col gap-8 dark:text-black">
                <Heading title="Where is your place located?" subtitle="Help guests find you!"/>
                <CountrySelect 
                value={location} 
                onChange={(value) => setCustomValue('location', value)}/>
                <Map center={location?.latlng}/>
            </div>
        )
    }
    if(step===STEPS.IMAGES){
        bodyContent=(
            <div className="flex flex-col gap-8 dark:text-black">
                <Heading title="Add a photo of your place" subtitle="Show guests what your place looks like!"/>
                <ImageUpload 
                value={imageSrc} 
                onChange={(value)=>setCustomValue('imageSrc',value)}/>
            </div>
        )
    }
    if(step===STEPS.DESCRIPTION){
        bodyContent=(
            <div className="flex flex-col gap-8 dark:text-black">
                <Heading title="How would you describe your place?" subtitle="Short and sweet works best!"/>
                <Inputs id="title" label="Title" type="text" disabled={isLoading}  register={register} errors={errors}  required  />
                <hr />
                <Inputs id="description" label="Description" type="text" disabled={isLoading}  register={register} errors={errors}  required  />
            </div>
        )
    }
    if(step===STEPS.INFO){
        bodyContent=(
            <div className="flex flex-col gap-8 dark:text-black">
                <Heading title="Share some basics about your place" subtitle="What amenities do you have?"/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                <Counter title="Guests" subtitle="How many guests do you allow?" value={guestCount}
                onChange={(value)=>setCustomValue('guestCount',value)}
                />
                <hr />
                <Counter title="Rooms" subtitle="How many rooms do u have" value={roomCount}
                onChange={(value)=>setCustomValue('roomCount',value)}
                />
                <hr />
                <Counter title="Bathrooms" subtitle="How many Bathrooms do u have" value={bathroomCount}
                onChange={(value)=>setCustomValue('bathroomCount',value)}
                />
                </div>
            </div>
        )
    }

    if(step===STEPS.PRICE){
        bodyContent=(
            <div className="flex flex-col gap-8 dark:text-black">
                <Heading title="Now, set your price" subtitle="How much do you charge per night?"/>
                <Inputs id="price" label="Price" type="number" formatPrice register={register} errors={errors}  required  />
            </div>
        )
    }
    return (
       <Model 
       isOpen={rentModel.isOpen} 
       onClose={rentModel.onClose}
       onSubmit={handleSubmit(onSubmit)}
       actionLabel={actionLabel}
       secondaryActionLabel={secondaryActionLabel}
       secondaryAction={step===STEPS.CATEGORY?undefined:onBack}
       title="Tour your home"
       body={bodyContent}
       />
    );
};