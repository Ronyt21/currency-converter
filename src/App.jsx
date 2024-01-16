import React, { useState } from "react"
import Input from "./Components/Input"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
export default function App() {
    const [amount, setAmount] = useState()
    const [from, setFrom] = useState('inr');
    const [to, setTo] = useState('usd');
    const [convertedAmount, setConvertedAmount] = useState();

    const currencyInfo = useCurrencyInfo(from);
    // console.log(currencyInfo)
    const options = Object.keys(currencyInfo);
    

    function swaap () {

        setFrom(to);
        
        setTo(from);
        setAmount(convertedAmount)
        setConvertedAmount(amount)
        
        console.log("Swap amount : " +amount)
        console.log(convertedAmount)
        

    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }


    return (
        <> 
            <div className="flex flex-row h-screen items-center justify-center ">

                <form className="flex flex-col" action="" onSubmit={(e) => { e.preventDefault(); convert(); }}>
                    <section className="flex flex-row items-center">
                        <Input
                            label='From'
                            amount={amount}
                            currencyOptions={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency) => setFrom(currency)}

                            onAmountChange={(Pamount) => {
                                console.log("input comp from :"+ Pamount)
                               return setAmount(Pamount)}}
                        />
                        <button class="text-white h-12 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => {
                            swaap()
                        }}
                        >Swap</button>





                        <Input
                            label='TO'
                            amount={convertedAmount}
                            currencyOptions={options}
                            selectCurrency={to}
                            onAmountChange={(Camount) => {
                                console.log("input comp to :"+ Camount)
                                setConvertedAmount(Camount)}}
                            onCurrencyChange={(currency) => setTo(currency)}
                            amountDisable
                            

                        />
                    </section>

                    <button class="text-white bg-green-500 border-0 py-2 px-6 mb-20 focus:outline-none hover:bg-green-600 rounded text-lg" type="submit"
                        onClick={() => {
                            convert();
                        }}
                    >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>


                </form>

            </div>

        </>
    )
}
