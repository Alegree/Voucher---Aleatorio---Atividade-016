function gerar() {
    const operadores = ['VOD', 'NET', 'TEL', 'XYZ'];
    const randomOpe = operadores[Math.floor(Math.random() * operadores.length)];

    function trocar(string) {
        return string.split('').sort(() => Math.random() - 0.5).join('');
    }

    const randomLetras = trocar('ABCDEFGHIJKLMNOPQRSTUVWXYZ').substring(0, 4);
    const randomLetrasb = trocar('abcdefghijklmnopqrstuvwxyz').substring(0, 3);
    const randomNum = trocar('0123456789').substring(0, 2);

    const trocas = [randomLetras, randomLetrasb, randomNum];
    const [finalRandomLetras, finalRandomLetrasb, finalRandomNum] = trocas.sort(() => Math.random() - 0.5);
    const voucher = randomOpe + finalRandomLetras + finalRandomLetrasb + finalRandomNum;

    const randomCor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    const voucherc = document.getElementById('voucher-container');
    voucherc.textContent = voucher;
    voucherc.style.backgroundColor = randomCor;
}

gerar();