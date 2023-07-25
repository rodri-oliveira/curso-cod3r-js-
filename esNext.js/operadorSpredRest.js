//usar spread com objeto
const funcionario ={ nome: 'maria', salario: 12.900}
const clone = { ativo: true, ...funcionario}

console.log(clone)

const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', 'carlos', ...grupoA]
console.log(grupoFinal)