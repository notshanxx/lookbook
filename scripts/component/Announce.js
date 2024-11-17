export default function Announce(text) {
    const announceDiv = document.getElementById("announcer");
    const p = document.createElement("p");
    p.textContent = text;
    announceDiv.appendChild(p);
    setTimeout(() => {
        announceDiv.removeChild(p);
    }, 5000);
}