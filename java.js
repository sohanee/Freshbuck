let clicks = 0;

function handleClick() {
    const but = document.getElementById('but');
    const time = document.getElementById('time');

    clicks++

    but.innerHTML = clicks;
    let timeNum = 15;
    if (isNaN(but.innerHTML) || but.innerHTML <= 1) {
        setTimeout(() => {
            but.innerHTML = `${clicks / 15} cps`;
            but.removeAttribute('onclick');
        }, 15000);
        if (but.innerHTML == '1') {
            const intVar = setInterval(() => {
                timeNum--
                time.innerHTML = `Time remaining: ${timeNum}s`;
            }, 1000);
            setTimeout(() => {
                clearInterval(intVar);
            }, 15000)
        }
    }
}

