    window.onload = function(e){
        let num1 = document.getElementById("num1");
        let num2 = document.getElementById("num2");
        let res = document.getElementById("result");
        let buttonAddition = document.getElementById("buttonAddition");
        let buttonSubtraction = document.getElementById("buttonSubtraction");
        let buttonDivision = document.getElementById("buttonDivision");
        let buttonMultiplication = document.getElementById("buttonMultiplication");
        const handleBtnClick = (num1,num2,operator) => () => {
            const result = calc(num1,num2,operator);
            res.innerHTML = result;
            validation(Number(num1.value),Number(num2.value),range=[10,20]);
        }
        buttonAddition.onclick = handleBtnClick(num1,num2,'+');
        buttonSubtraction.onclick = handleBtnClick(num1,num2,'-');
        buttonDivision.onclick = handleBtnClick(num1,num2,'/');
        buttonMultiplication.onclick = handleBtnClick(num1,num2,'*');
        // логика калькулятора
        function calc (num1,num2,operator) {
                   switch (operator) {
                case '+':
                    return Number(num1.value) + Number(num2.value);
                case '-':
                    return Number(num1.value) - Number(num2.value);
                case '/':
                    return Number(num1.value) / Number(num2.value);
                case '*':
                    return Number(num1.value) * Number(num2.value);
            }
      }
        // валидация
        function validation(num1,num2,range=[a,b]) {
        if (isNaN(num1) || isNaN(num2)){
            alert("Это не число");
            res.innerHTML = "Введите число";
            return;
        }
        if (!(num1 <range[0] || num1>range[1])||!(num2 <range[0] || num2>range[1])){
                alert(`Введите числа вне диапазона ${range[0]}-${range[1]}`);
                res.innerHTML = `Введите числа вне диапазона ${range[0]}-${range[1]}`;
            }
        }
    }