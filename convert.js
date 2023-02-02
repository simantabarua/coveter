



function converterjs() {
    function converter(inputUnit, fromUnit, toUnit) {
        const conversionFactors = {
            m: { m: 1, cm: 100, ft: 3.281, in: 39.37 },
            cm: { m: 0.01, cm: 1, ft: 0.0328, in: 0.394 },
            ft: { m: 0.3048, cm: 30.48, ft: 1, in: 12 },
            in: { m: 0.0254, cm: 2.54, ft: 0.0833, in: 1 }
        };
        const exchangeRate = conversionFactors[fromUnit][toUnit];
        console.log(inputUnit, fromUnit, toUnit);
        return convertedAmount = (inputUnit * exchangeRate).toFixed(2);


    }
    const inputUnit = parseInt(document.getElementById("inputUnit").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    const output = converter(inputUnit, fromUnit, toUnit);
    console.log(output);
    document.getElementById('output').innerText = output;


}