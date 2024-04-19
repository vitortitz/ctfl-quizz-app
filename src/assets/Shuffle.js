// (function () {
//     /**
//      * Deixar os itens do array em ordem aleatoria
//      */
//     Array.prototype.shuffle = function () {
//         var i = this.length, j, tempi, tempj;
//         if (i == 0) return this;
//         while (--i) {
//             j = Math.floor(Math.random() * (i + 1));
//             tempi = this[i];
//             tempj = this[j];
//             this[i] = tempj;
//             this[j] = tempi;
//         }
//         return this;
//     }

//     /**
//      * Inicialização das variaveis
//      */
//     var items = document.getElementById('items'),
//         lis = items.getElementsByTagName('li'),
//         arr = [],
//         max = lis.length;

//     /**
//      * Colocando o html colection em um array
//      */
//     for (var i = 0; i < max; i++) {
//         arr[i] = lis[i];
//     }
//     arr = arr.shuffle();

//     /**
//      * Removendo os items
//      */
//     while (items.firstChild) {
//         items.removeChild(items.firstChild);
//     }

//     /**
//      * Inserindo novamente no DOM
//      */
//     while (i--) {
//         items.appendChild(arr[i]);
//     }

// })();
