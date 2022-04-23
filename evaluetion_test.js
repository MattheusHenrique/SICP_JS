// Teste para verificar se usa avaliaçao de ordem aplicada
// Ou avaliaçao de ordem normal
// No caso de javascript é de ordem aplicada e a funçao test(0, p())
// resulta em um chamada recursiva sem fim
function p() { return p(); }
function test(x, y) {
    return x === 0 ? 0 : y;
}
test(0, p())
