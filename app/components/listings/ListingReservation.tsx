"use client"

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import { Button } from "../Button";

interface ListingReservationProps {
    price : number;
    totalPrice : number;
    onChangeDate : (value : Range) => void;
    dateRange : Range;
    onSubmit : () => void;
    disabled ?: boolean;
    disabledDates : Date[]
}
const ListingReservation:React.FC<ListingReservationProps> = ({
    price,
    totalPrice,
    onChangeDate,
    dateRange,
    onSubmit,
    disabled,
    disabledDates
}) => {
    return ( 
        <div 
        className="bg-white  
        rounded-xl border border-neutral-200 overflow-hidden">
            <div className="flex text-black flex-row items-center gap-1 p-4">
             ${price} per night
            </div>
            <hr />
            <Calendar 
            disabledDates={disabledDates}
            value={dateRange}
            onChange={(value) => onChangeDate(value.selection)}
            />
            <hr />
            <div className="p-4">
                <Button 
                disabled={disabled}
                label="Reserve"
                onClick={onSubmit}
                />
            </div>
            <div className="p-4 text-black flex flex-row items-center justify-between font-semibold text-lg">
                <div>
                    Total
                </div>
                <div>
                    ${totalPrice}
                </div>
            </div>
        </div>
     );
}
 
export default ListingReservation;