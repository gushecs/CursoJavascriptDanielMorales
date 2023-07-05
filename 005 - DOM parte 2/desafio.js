const listaOriginal = document.querySelector(".original ul")
const listaAlvo = document.querySelector(".alvo ul")

// crie um nova li com texto "item 2" e a inclua na ul de div com class .alvo
let newItem = document.createElement("li")
newItem.textContent = "item 2"
listaAlvo.append(newItem)

//Mova a última li de original para alvo (mas antes da primeira li).
let itemToMove = listaOriginal.lastElementChild
listaAlvo.prepend(itemToMove)

//altere o texto da primeira li de .alvo para "item 0"
itemToMove.textContent = "item 0"

//clone a ul de .original e a inclua na primeira li de .alvo
let clonedListaOriginal = listaOriginal.cloneNode(true)
itemToMove.append(clonedListaOriginal)

//remova a ultima li (item2) da lista inserida na etapa anterior
clonedListaOriginal.removeChild(clonedListaOriginal.lastElementChild)

//remova as duas li's que sobraram na ul original
listaOriginal.removeChild(listaOriginal.lastElementChild)
listaOriginal.removeChild(listaOriginal.lastElementChild)