
var inputword = document.getElementById('new-word');
var inputmeaning = document.getElementById('new-meaning');
var inputexample = document.getElementById('new-example');
var addword = document.getElementById('btn-save');






if (localStorage.getItem === null) {

    alert('word is not exist')

} else {

    const words = {
        word: inputword.value,
        meaning: inputmeaning.value,
        example: inputexample.value


    }

    localStorage.setItem('inputword', JSON.stringify(words));
}





// const words = {
//     word : inputword.value,
//     meaning : inputmeaning.value,
//     example : inputexample.value
// }

// localStorage.setItem('inputword' , JSON.stringify(words));