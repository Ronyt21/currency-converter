import React,{useId} from 'react'

function Input(
  {
      label, // for label whether it is to or from
      amount, // to diaplay amount 
      onAmountChange, // to tell the component what to do when amount change
      onCurrencyChange, // to tell the component what to do when currency type change
      currencyOptions = [''], // to tell the input box what currency options we have 
      selectCurrency = 'usd', // to tell the component about selected currency
      amountDisable = false, // the amount feild is enabled or disabled
      currencyDisable = false // currency feild is enabled or disabled
  }
) {
  const amountBoxId = useId();
  return (
    
    <div id="currency-container">
      {/* <div>
        <label htmlFor={amountBoxId}>{label}</label>

        <input
          id={amountBoxId}
          type="number"
          disabled={amountDisable}
          controls='none'
          value={amount}
          placeholder='Amount'
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          />

      </div>
      <div id='currency-type'>
        <p>currency type</p>
        
        <select name=""
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable} 
        id="">
          {
            currencyOptions.map((curr)=>{
              return <option key={curr} value={curr}>{curr}</option>
            })
          }
         
        </select>
      </div> */}
      
      <section class="text-gray-600 body-font relative">
  
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">{label}</h2>
    
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">{selectCurrency.toUpperCase()}</label>
        <input  type="number"
          disabled={amountDisable}
          controls='none'
          value={amount}
          placeholder='Amount'
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      {/* <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div> */}

            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Currency Type</label>
            <select 
            id="countries" 
            class="bg-gray-50 border border-gray-300 text-gray-900 mb-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable} 
            >
            
              {
            currencyOptions.map((curr)=>{
              return <option key={curr} value={curr}>{curr}</option>
            })
          }
            </select>

     
      
    </div>
  </div>
</section>
     
    </div>

  )
}

export default Input