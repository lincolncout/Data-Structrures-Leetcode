let nums = [2, 3, -8, 7, -6, 2, 1]

// tentar melhorar futuramenteß

let maiorValor = nums[0];
let valorAtual = nums[0];
for (let i = 1; i < nums.length; i++) {
  valorAtual += nums[i];
  if (nums[i] > valorAtual) valorAtual = nums[i]
  if (valorAtual > maiorValor) {
    maiorValor = valorAtual
  }
}

console.log(maiorValor)