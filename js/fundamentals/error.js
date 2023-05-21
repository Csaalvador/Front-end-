function error(erro) {
  throw new Error("Põ Mano...");
}

function imprimirName(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    error(e);
  } finally {
    console.log('Padrao 06');
  }
}
const obj = { nome: "bia" };

imprimirName(obj);
