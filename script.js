function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function promptAddFolder() {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
        // Send request to backend to create folder (optional)
        alert(`Folder "${folderName}" created.`);
    }
}

function promptDeleteFolder() {
    const folderName = prompt("Enter folder name to delete:");
    if (folderName) {
        // Send request to backend to delete folder (optional)
        alert(`Folder "${folderName}" deleted.`);
    }
}
