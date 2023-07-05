(function(){

    const alunos = [
        { nome: "Daniel", notas: [10, 3, 7.5, 3]},
        { nome: "Maria", notas: [10, 9, 3, 9.5]},
        { nome: "João", notas: [10, 4.5, 1, 3.5]},
        { nome: "Joana", notas: [1, 3, 9, 1.5]},
        { nome: "José", notas: [10, 4.5, 7, 3]},
        { nome: "Arnaldo", notas: [10, 4.5, 7, 3]},
        { nome: "Lucas", notas: [4.5, 9, 8, 3]},
        { nome: "Luana", notas: [3, 7, 9, 3]},
        { nome: "Beatriz", notas: [10, 4, 7, 9]},
        { nome: "Sergio", notas: [4.5, 9.5, 10, 2]}];

    const tableBody = document.querySelector("tbody")

    for (let aluno of alunos) {

        let newRow = document.createElement("tr")

        let nameColumn = document.createElement("td")
        nameColumn.textContent = aluno.nome
        newRow.appendChild(nameColumn)

        let n1 = document.createElement("td")
        n1.textContent = aluno.notas[0]
        newRow.appendChild(n1)

        let n2 = document.createElement("td")
        n2.textContent = aluno.notas[1]
        newRow.appendChild(n2)

        let n3 = document.createElement("td")
        n3.textContent = aluno.notas[2]
        newRow.appendChild(n3)

        let n4 = document.createElement("td")
        n4.textContent = aluno.notas[3]
        newRow.appendChild(n4)

        let meanColumn = document.createElement("td")
        let mean = average(...aluno.notas)
        meanColumn.textContent = mean
        let color = mean < 6 ? 'color: red' : 'color: green'
        meanColumn.setAttribute("style", color)
        newRow.appendChild(meanColumn)

        tableBody.appendChild(newRow)
    }
})()