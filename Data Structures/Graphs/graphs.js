/* REPRESENTAÇÃO GRÁFICA DO 
//   2  --- 0
// /   \
  1 --- 3
*/

// Edge List (representa as conexões)
const graph = [[0,2], [2,3], [2,1], [1,3]] // 0 é adjacente a 2 ...

// Adjacent List (representa as adjacencias de um nodo, começando pelo nodo 0)
const graph2 = [[2],[2,3], [0,1,3], [2,1]] // nodo 0 é adjacente ao nodo 2 ...

// Adjacent Matrix (0 -> não tem conexão) (1 -> tem conexão)
const graph3 = {
  0: [0,0,1,0], // nodo 0 esta conectado no nodo 2 ...
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}