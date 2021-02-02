import { createArray, summ, sqrtArray, squareArray, checkOfTwoinRow, сheckOf5 } from './myjs.js';
let iElem = document.getElementById('inp1');
iElem.addEventListener('keyup', logKey);
let count = 0;


function logKey(e) {

    if (e.keyCode === 13 && isNaN(iElem.value) === false && Number(iElem.value) > 0) {
        count++;
        let arrayFromInput = createArray(iElem.value);
        let dElem = document.getElementById("divChick");
        dElem.insertAdjacentHTML(`beforeend`, `<p id ='pRes${count}'></p>`);
        let pWithInfo = document.getElementById(`pRes${count}`);
        pWithInfo.innerHTML = `[${arrayFromInput}]
        <br> summ of elements ${summ(arrayFromInput)}
        <br> sqrt of elements ${sqrtArray(arrayFromInput)}
        <br> square of elements ${squareArray(arrayFromInput)}
        <br> ${checkOfTwoinRow(arrayFromInput)}
        <br> ${сheckOf5(arrayFromInput)}
         `;
        iElem.value = '';

    }
    if (e.keyCode === 46) {

        let pWithInfo = document.getElementsByTagName(`p`);
        pWithInfo.innerHTML = '';



    }


}








/*      count++;
       let pNewRes = document.createElement('p');
       let arrayFromInput = createArray(iElem.value);
       document.body.appendChild(pNewRes);
       pNewRes.setAttribute('id', `pn${count}`);
       let pRes1 = document.getElementById(`pn${count}`);
       pRes1.innerHTML = `[${arrayFromInput}]
       <br> summ of elements ${summ(arrayFromInput)}
       <br> sqrt of elements ${sqrtArray(arrayFromInput)}
       <br> square of elements ${squareArray(arrayFromInput)}
       <br> ${checkOfTwoinRow(arrayFromInput)}
       <br> ${сheckOf5(arrayFromInput)}
        `;
       iElem.value = '';
       console.log(count);
*/