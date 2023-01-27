/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código
   var arregloP = [];
   
   for (const clave in objeto) {
      arregloP.push(arregloH = [clave, objeto[clave]]);   
   }
   return arregloP;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada 
   // propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = [];
   array = string.split("");
   var a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0, k=0, l=0, m=0, n=0, o=0, p=0, q=0, r=0, s=0, t=0, u=0, v=0, w=0, x=0, y=0, z= 0;
   var obj = {};
   for (let is = 0; is < array.length; is++) {
   //   obj.array[is] = array[is] + 1;    // Entiendo que debe haber alguna manera de armarlo parecido a esto.
      switch (array[is]) {                // se que este bloque de codigo no es lo mas optimo del mundo pero funciona :)
         case "a": 
            a++; 
            obj.a = a;    
            break;
         case "b": 
            b++;
            obj.b = b;
            break;
         case "c": 
            c++;
            obj.c = c;
            break;
         case "d": 
            d++;
            obj.d = d;
            break;
         case "e": 
            e++;
            obj.e = e;
            break;
         case "f": 
            f++;
            obj.f = f;
            break;
         case "g": 
            g++;
            obj.g = g;
            break;
         case "h": 
            h++;
            obj.h = h;
            break;
         case "i": 
            i++;
            obj.i = i;
            break;
         case "j": 
            j++;
            obj.j = j;
            break;
         case "k": 
            k++;
            obj.k = k;
            break;
         case "l":
            l++;
            obj.l = l;
            break;
         case "m": 
            m++;
            obj.m = m;
            break;
         case "n":
            n++;
            obj.n = n;
            break;
         case "o": 
            o++;
            obj.o = o;
            break;
         case "p": 
            p++;
            obj.p = p;
            break;
         case "q": 
            q++;
            obj.q = q;
            break;
         case "r": 
            r++;
            obj.r = r;
            break;
         case "s": 
            s++;
            obj.s = s;
            break;
         case "t": 
            t++;
            obj.t = t;
            break;
         case "u": 
            u++;
            obj.u = u;
            break;
         case "v": 
            v++;
            obj.v = v;
            break;
         case "w": 
            w++;
            obj.w = w;
            break;
         case "x":
            x++;
            obj.x = x;
            break;
         case "y": 
            y++;
            obj.y = y;
            break;
         case "z": 
            z++;
            obj.z = z;
            break;
         default:
            break;
      }   
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   arrayMA = [];
   arrayMI = [];
   
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         arrayMA.push(string[i]);
      } else {
         arrayMI.push(string[i]);  
      }
   }
   var may = arrayMA.join("");
   var min = arrayMI.join("");
   return may + min;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el 
   // que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código: 
   var array = [];
   var newStr = "";

   for (let i = 0; i < frase.length; i++) {
      if (i === frase.length-1) {
         array.unshift(frase[i]);
         newStr = newStr + array.join("") + " ";
      }
      if (frase[i] != " "){
         array.unshift(frase[i]);
      }else {
         newStr = newStr + array.join("") + " ";
         array = [];
      }
   }
   return newStr.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var numAstr = "";
   numAstr = numAstr + numero;
   var inverso = "";
   for (let i= numAstr.length -1 ; i >= 0 ; i--) {
      inverso = inverso + numAstr.charAt(i);
   }
   if (numAstr == inverso) {
      return "Es capicua"
      
   } else {
      return "No es capicua"
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   
   // Tu código:
   var firstarray = [] 
   firstarray = string.split("");
   var newchain = "";
   for (let i = 0; i < firstarray.length; i++) {
      if(firstarray[i] != "a" && firstarray[i] != "b" && firstarray[i] != "c" ){
         newchain = newchain + firstarray[i]
      }      
   }
   return newchain;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var newarray = [];
   var menorL = 10;
   var menor = "";
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (menorL > arrayOfStrings[i].length){
         menorL = arrayOfStrings[i].length;
         menor = arrayOfStrings[i];
      }
   }
   for (let j = 0; j < arrayOfStrings.length + 100; j++) {
      for (let r = 0; r < arrayOfStrings.length; r++) {
         if (menorL === arrayOfStrings[r].length) {
            newarray.push(arrayOfStrings[r]);
         }
      }
      menorL = menorL +1;
   }
   return newarray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newarray = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] == array2[j]){
            newarray.push(array2[j])
         }
      }   
   }
   return newarray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
