document.getElementById('backupButton').addEventListener('click', function() {
    const status = document.getElementById('status');
    const progressBar = document.getElementById('progress');

    status.innerText = "Backup em Andamento...";
    progressBar.style.display = "block";
    progressBar.style.width = "0%";

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            status.innerText = "Backup Completo!";
            addBackupToHistory();
        }
    }, 500);
});

function addBackupToHistory() {
    const backupHistory = document.getElementById('backupHistory');
    const li = document.createElement('li');
    li.innerText = `Backup realizado em ${new Date().toLocaleString()}`;
    backupHistory.appendChild(li);
}
