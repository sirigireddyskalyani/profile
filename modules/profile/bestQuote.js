import React from 'react';

const BestQuoteCard = () => {
    return (
        <div
            className="h-full w-screen bg-scroll bg-cover bg-top md:bg-fixed md:bg-center"
            style={{ backgroundImage: "url('./bgImages/quoteBG.jpeg')" }}
        >
            <div className="flex flex-col items-center justify-center h-96">
                <p className="text-2xl md:text-3xl text-white font-MsMadi mt-[10rem] p-2">
                “That brain of mine is something more than merely mortal; as time will show.”
                </p>
            </div>
        </div>
    )
}

export default BestQuoteCard;