
        document.addEventListener('DOMContentLoaded', function () {
            const agreeCheckbox = document.getElementById('agree_terms');
            const submitButton = document.getElementById('submit_button');

            agreeCheckbox.addEventListener('change', function () {
                submitButton.disabled = !this.checked;
            });
        });