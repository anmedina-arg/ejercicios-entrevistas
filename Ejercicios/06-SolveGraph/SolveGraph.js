let visited = []; //--> esto nos puede traer problemas, por lo tanto lo deberíamos poner como parámetro

function SolveGraph(graph, start, end, visited = []) {
  //<-- aquí agrego como parámetro la variable auxiliar
  // Your code here:
  //determinar si, dado un graph, si un nodo de inicio y otro de fin, si hay un camino de ida
  // input: ({}, string, string)
  // output: true (or false)
  // DEBO ENTENDER CON QUÉ TIPO DE ESTRUCTURAS DE DATOS ESTAMOS TRABAJANDO: si estoy trabajando en el mundo de las linklist, arboles, o en donde haya nodos, es muy util utilizar recursividad
  // if (graph[start].includes(end)) return true; <-- esta solución no es escalable pero puede resolver el primer it

  //deberíamos chequear si ya pasamos por un nodo o no... para eso armo una variable aux
  //chequeo que el nodo (var aux) existe en el array
  if (visited.includes(start)) return false;
  //después pusheo el nodo recorrido a la var aux
  visited.push(start);
  console.log(visited);
  for (const node of graph[start]) {
    // si start == end ? lo encontre --> true
    if (node === end) return true;
    // return SolveGraph(graph, node, end); --> esto lo vimos en clase y entra en loop infinito
    if (SolveGraph(graph, node, end)) return true;
  }
  return false;
}

module.exports = SolveGraph;

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "r")); //true;

console.log(SolveGraph(graph, "a", "d")); //true;
console.log(SolveGraph(graph, "s", "b")); //false;

//PARA MEJORAR LA COMPLEJIDAD, PUEDO CAMBIAR EL ARRAY VISITED POR UN OBJETO, debería usar la sig línea:
//reemplazando en la línea 16: visited[start] = true
