function mostrarPropina() {
    const cantidad = document.getElementById("inputPropina").value;
    document.getElementById("resultado").textContent = "Ingresaste: $" + cantidad;
  }