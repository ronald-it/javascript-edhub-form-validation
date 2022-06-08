// SCRIPT

// 1. Sla de referentie naar het gebruikersnaam-veld op
const userNameInput = document.getElementById("username-input")
const passwordInput = document.getElementById("password-input")
// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
const userNameWarning = document.getElementById('username-warning')
const passwordWarning = document.getElementById('password-warning')
// 3. Zet een event listener op het gebruikersnaam-veld
userNameInput.addEventListener('keyup', showWarningUsername);
passwordInput.addEventListener('keyup', showWarningPassword);

// 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
function showWarningUsername(input) {
    if (input.target.value.includes("@")) {
        userNameWarning.textContent = `Gebruikersnaam mag geen @ bevatten`;
    } else {
        userNameWarning.textContent = '';
    }
}

function showWarningPassword(input) {
    if (input.target.value === '' || input.target.value.length > 6) {
        passwordWarning.textContent = '';
    } else {
        passwordWarning.textContent = `Wachtwoord is te kort, gebruik minimaal 6 tekens`;
    }
}

// 5. Laat die functie checken of de huidige waarde van de input een '@' bevat

// 6. Als dit zo is, geef de waarschuwing weer

// 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt

// 8. Herhaal deze stappen voor het wachtwoord