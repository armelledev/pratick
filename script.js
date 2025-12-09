document.querySelector("form").addEventListener("submit", function (e) {
    
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Réinitialiser les messages
    document.getElementById("nomError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValide = true;

    if (!nom) {
        document.getElementById("nomError").innerText = "Le nom est obligatoire";
        isValide = false;
    }

    if (!email) {
        document.getElementById("emailError").innerText = "L'email est obligatoire";
        isValide = false;
    }

    if (!password) {
        document.getElementById("passwordError").innerText = "Le mot de passe est obligatoire";
        isValide = false;
    }

    if (!isValide) {
        e.preventDefault(); // Empêche l'envoi si il y a des erreurs
    }
});
