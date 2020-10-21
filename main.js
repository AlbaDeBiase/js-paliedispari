// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no
// (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa,
// ad esempio "anna" è palindroma, "andrea" no)



// creo un array di nomi palindromi e non;

var parole = ["ala", "anna", "otto", "ciao"];

for (var i = 0; i < parole.length; i++) {

var parola_corrente = parole[i];


    if(checkPalindrome(parola_corrente)) {
        console.log("il nome" + parola_corrente + "è palindromo");
    } else {
        console.log("il nome" + parola_corrente + "non è palindromo");
    }
}

function checkPalindrome(str) {
  if (str== str.split('').reverse('').join(''));{
return true;
}

}



// function palindrome(array) {
// var len = array.length;
// for ( var i = 0; i < Math.floor(len/2); i++ ) {
// if (array[i] !== array[len - 1 - i])
//  {
// return false;
//  }
// } return true;
// }
// console.log(array);


// function checkPalindrom(array)
// {

//     for( var i = 0; i < parole.length; i++ )
//     {
//         if( array[i] = array.charAt(array.length)-1 )
//         {
//             console.log('the word is palindrome.');
//         }else{
//             console.log('the word is not palindrome!');
//         }
//     }
// }
// checkPalindrom('wordthatwillbechecked');
