<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>



function validar() {
    alert("BIENVENIDO AL SISTEMA");

}

function loadPage() {
    Swal.fire({
        title: "bienvenido",
        text: "a mi sitio web",
        icon: "success",
        showConfirmButton: false,
        timer: 3000
    });
}
const toggle_password = document.getElementById("toggle_password");
const password = document.getElementById("password");

toggle_password.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle_password.classList.toggle("fa-solid fa-eye");
    toggle_password.classList.toggle("fa-solid fa-eye-slash");
});





