const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep,nextStep)
{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }
    else
    {
        dNone = finalDiv;
    }
    
    dNone.style.display = 'none';

    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }
    
    dBlock.style.display = 'block';
}

function validate()
{
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value)
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
            alert('Não temos peso, nem altura!');
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid red';
            alert('Não temos o peso!');
        }
        else
        {
            altura.style.border = '1px solid red';
            alert('Não temos a altura!')
        }
    }
    else
    {
        console.log('tudo ok! calcular!');
        let imc = peso.value / Math.pow(altura.value, 2);
        const result = document.getElementById('resultado');

        if(imc < 17)
        {
            result.style.color = 'red';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Muito abaixo do peso! | Obesidade 0';
        }
        else if(imc >= 17 && imc < 18.5)
        {
            result.style.color = 'yellow';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Abaixo do peso! | Obesidade 0';
        }
        else if(imc >= 18.5 && imc < 25)
        {
            result.style.color = 'green';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Normal! | Obesidade 0';
        }
        else if(imc >= 25 && imc < 30)
        {
            result.style.color = 'yellow';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Acima do peso! | Obesidade 0';
        }
        else if(imc >= 30 && imc < 35)
        {
            result.style.color = 'lightcoral';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Obesidade leve! | Obesidade I';
        }
        else if(imc >= 35 && imc < 40)
        {
            result.style.color = 'red';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Obesidade média! | Obesidade II';
        }
        else
        {
            result.style.color = 'black';
            result.innerHTML = imc.toFixed(1) + ' - ' + 'Obesidade grave! | Obesidade III';

        }

        go(2, 3);
    }
}