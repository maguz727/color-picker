const colorInput = document.getElementById("colorInput");
const textColor = document.getElementById("textColor");
const boxColor = document.getElementById("boxColor");
const copyIcon = document.getElementById("copyIcon");
const alertCopySuccess = document.getElementById("alertCopySuccess");
const alertCopyDanger = document.getElementById("alertCopyDanger");

colorInput.addEventListener("input", () => {
    textColor.textContent = colorInput.value;
    boxColor.style.backgroundColor = colorInput.value;
});

copyIcon.addEventListener("click", () => {
    navigator.clipboard
        .writeText(colorInput.value)
        .then(() => {
            alertCopySuccess.classList.remove("d-none");

            setTimeout(function () {
                alertCopySuccess.classList.add("d-none");
            }, 3000);
        })
        .catch((err) => {
            alertCopyDanger.classList.remove("d-none");
            
            setTimeout(function () {
                alertCopyDanger.classList.add("d-none");
            }, 3000);
            console.error("Error al copiar", err);
        });
});
