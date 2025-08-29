document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', () => {
    const welcomeNameElement = document.getElementById('selamat-datang');
    const modalOverlay = document.getElementById('modal-nama');
    const nameInput = document.getElementById('input-nama');
    const setNameForm = document.getElementById('set-name');

    function setName(userName) {
        const name = userName || "Guest";
        welcomeNameElement.textContent = name;
        modalOverlay.style.display = 'none';
    }

    if (welcomeNameElement && modalOverlay && nameInput && setNameForm) {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            setName(savedName);
        } else {
            modalOverlay.style.display = 'flex';
            nameInput.focus();
        }

        setNameForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const userName = nameInput.value.trim();
            if (userName) {
                localStorage.setItem('userName', userName);
            }
            setName(userName);
        });
    }

    const messageForm = document.getElementById('message-us');
    if (messageForm) {
        messageForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('nama').value.trim();
            const dob = document.getElementById('tanggal-lahir').value;
            const genderElement = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('pesan').value.trim();

            if (!name || !dob || !genderElement || !message) {
                alert('Semua kolom harus diisi!');
                return;
            }

            document.getElementById('out-name').textContent = name;
            document.getElementById('out-dob').textContent = dob;
            document.getElementById('out-gender').textContent = genderElement.value === "male" ? "Laki-laki" : "Perempuan";
            document.getElementById('out-messages').textContent = message;
            document.getElementById('out-time').textContent = new Date().toLocaleString();

            messageForm.reset();
        });
    }
});