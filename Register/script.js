document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.inputbox input');
    
    inputs.forEach(input => {
        const label = input.nextElementSibling;

        input.addEventListener('focus', () => {
            if (input.value === '') {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            } else {
                label.classList.add('label-top');
                label.style.opacity = '1';
            }
        });

        input.addEventListener('blur', () => {
            if (input.value !== '') {
                label.classList.add('label-top');
                label.style.opacity = '0';
            } else {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            }
        });

        input.addEventListener('input', () => {
            if (input.value === '') {
                label.classList.remove('label-top');
                label.style.opacity = '1';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const passwordInputs = document.querySelectorAll('.password-input');
    const lockIcons = document.querySelectorAll('.lock-icon');
    const closedEyeIcons = document.querySelectorAll('.closed-eye-icon');
    const eyeIcons = document.querySelectorAll('.eye-icon');

    passwordInputs.forEach((passwordInput, index) => {
        const lockIcon = lockIcons[index];
        const closedEyeIcon = closedEyeIcons[index];
        const eyeIcon = eyeIcons[index];
        const label = passwordInput.nextElementSibling;

        const updateLabel = () => {
            if (passwordInput.value === '') {
                label.classList.remove('label-top');
                label.style.opacity = '1';
                lockIcon.style.display = 'block';
                closedEyeIcon.style.display = 'none';
                eyeIcon.style.display = 'none';
            } else {
                label.classList.add('label-top');
                label.style.opacity = '0';
                lockIcon.style.display = 'none';
                closedEyeIcon.style.display = 'block';
            }
        };

        passwordInput.addEventListener('focus', updateLabel);
        passwordInput.addEventListener('input', updateLabel);

        passwordInput.addEventListener('blur', () => {
                passwordInput.type = 'password'; // Make password invisible when input loses focus
                eyeIcon.style.display = 'none';
                closedEyeIcon.style.display = passwordInput.value ? 'block' : 'none';
                updateLabel();
        });

        closedEyeIcon.addEventListener('click', () => {
            passwordInput.type = 'text';
            closedEyeIcon.style.display = 'none';
            eyeIcon.style.display = 'block';
        });

        eyeIcon.addEventListener('click', () => {
            passwordInput.type = 'password';
            eyeIcon.style.display = 'none';
            closedEyeIcon.style.display = 'block';
        });
    });
});
