function MergeSort(arr) {
    // Caso base: si el arreglo tiene 0 o 1 elemento, ya está ordenado
    if (arr.length <= 1) {
      return arr;
    }
  
    // Paso 1: Dividir el arreglo en dos mitades aproximadamente iguales
    const mitad = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);
  
    // Paso 2: Aplicar Merge Sort de manera recursiva a ambas mitades
    const izquierdaOrdenada = MergeSort(izquierda);
    const derechaOrdenada = MergeSort(derecha);
  
    // Paso 3: Combinar las dos mitades ordenadas
    return Merge(izquierdaOrdenada, derechaOrdenada);
  }
  
  // Función para combinar dos arreglos ordenados
  function Merge(arr1, arr2) {
    let resultado = [];
    let i = 0; // Índice para recorrer arr1
    let j = 0; // Índice para recorrer arr2
  
    // Combinar los dos arreglos ordenados en un solo arreglo ordenado
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        resultado.push(arr1[i]);
        i++;
      } else {
        resultado.push(arr2[j]);
        j++;
      }
    }
  
    // Agregar cualquier elemento restante en arr1
    while (i < arr1.length) {
      resultado.push(arr1[i]);
      i++;
    }
  
    // Agregar cualquier elemento restante en arr2
    while (j < arr2.length) {
      resultado.push(arr2[j]);
      j++;
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  const listaDesordenada = [38, 27, 43, 3, 9, 82, 10];
  const listaOrdenada = MergeSort(listaDesordenada);
  console.log(listaOrdenada);