const correctPassword = "140526";
const display = document.getElementById("inputDisplay");

let input = "";

function enterDigit(digit) {
    if (input.length < 6) {
        input += digit;
    }
    display.textContent = input.padEnd(6, ".");
    if(input.length === 6){
        if(input === correctPassword){
            window.location.href = "flower.html";
        } else {
            Swal.fire({
                html: `
                    <div style="margin-top: 10px;">
                        <span style="font-size: 80px; color: #e1b346; display: block; margin-bottom: 20px;">💔</span>
                    </div>
                    <h2 style="color: #433422; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 600; font-size: 24px; margin-bottom: 10px;">
                        ¡Ups! Inténtalo de nuevo.
                    </h2>
                    <p style="color: #837562; font-family: sans-serif; font-size: 15px; line-height: 1.5;">
                        La contraseña es incorrecta, por favor<br>revisa y vuelve a intentarlo. 😉
                    </p>
                `,
                background: '#fcf8eb', // Fondo crema suave
                showConfirmButton: false,
                timer: 20000,
                timerProgressBar: true,
                width: '420px',
                padding: '3em',
                borderRadius: '15px',
                // Sombra suave para que se vea flotando como en tu imagen
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            });
            input = "";
            display.textContent = input.padEnd(6, "......");
        }
    }
}