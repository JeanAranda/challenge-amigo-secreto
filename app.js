
    let totalAmigos = [];

    function agregarAmigo() {
        let amigos = document.getElementById('amigo').value;
        if (amigos === "") {
            alert("Debe ingresar un nombre");
        } else {
            totalAmigos.push(amigos);
            document.getElementById('amigo').value = "";
            document.getElementById("listaAmigos").innerText = `Amigos:\n${totalAmigos.join(", \n")}`;
        }
    }

    function sortearAmigo() {
        if (totalAmigos.length === 0) {
            document.getElementById("listaAmigos").innerHTML = "No hay amigos para sortear";
            return;
        }
        let numeroSorteado = Math.floor(Math.random() * totalAmigos.length);
        let nombreSortedo = totalAmigos[numeroSorteado];
        document.getElementById("listaAmigos").innerHTML = `Amigo sorteado: ${nombreSortedo}`;
        totalAmigos.splice(numeroSorteado, 1);
    }
