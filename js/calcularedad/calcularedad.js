function calcularEdad() {
    const date_input = document.getElementById("calculatorAge").value;
    if (date_input === "") {
        Swal.fire("Por favor, ingresa una fecha válida.");
        return;
    } else {
        var date = new Date(date_input);
        var today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        edad = edad - 1;
        if (edad < 0) {
            Swal.fire("La fecha ingresada es futura. Por favor, ingresa una fecha válida.");
            return;
        }
        Swal.fire({
            title: "Tu edad es: " + edad,
        });

        // console.log(today.getDate())
        // console.log(today.getDay())
        // console.log(today.getFullYear())
        // console.log(today.getHours())
        // console.log(today.getMilliseconds())
        // console.log(today.getMinutes())
        // console.log(today.getMonth())
        // console.log(today.getSeconds())
        // console.log(today.getTime())
        // console.log(today.getTimezoneOffset())
    }



}
