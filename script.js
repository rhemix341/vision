document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const loginContainer = document.getElementById('loginContainer');
    const withdrawButton = document.getElementById('withdrawButton');
    const frozenMessage = document.getElementById('frozenMessage');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const loginSuccessMessage = document.getElementById('loginSuccessMessage');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            validateCredentials();
        });
    } else {
        console.error('El botón de inicio de sesión no se encontró.');
    }

    function validateCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Usuario ingresado:', username);
        console.log('Contraseña ingresada:', password);

        // Verificar credenciales
        if (username === '1345v' && password === 'vision35') {
            loginErrorMessage.classList.add('hidden');
            loginSuccessMessage.classList.remove('hidden');
            setTimeout(() => {
                loginContainer.classList.add('hidden');
                dashboardContainer.classList.remove('hidden');
            }, 1500); // Espera 1.5 segundos para mostrar el mensaje de éxito
        } else {
            loginSuccessMessage.classList.add('hidden');
            loginErrorMessage.classList.remove('hidden');
            console.log('Usuario o contraseña incorrectos');
        }
    }

    if (withdrawButton) {
        withdrawButton.addEventListener('click', function() {
            frozenMessage.classList.remove('hidden');
        });
    }
});
