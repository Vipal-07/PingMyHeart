

export default function Hosi() {
    const nobtn = document.getElementById('No')
    const yesbtn = document.getElementById('Yes')
    const btn = document.getElementById('btn')


    nobtn.addEventListener("mouseenter", () => {
        const yesIndex = Array.from(btn.children).indexOf(yesbtn);
        const noIndex = Array.from(btn.children).indexOf(nobtn);
        if (yesIndex < noIndex) {
            btn.insertBefore(nobtn, yesbtn)
        } else {
            btn.insertBefore(yesbtn, nobtn)
        }
    })
}