function gerarQR() {
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl='
    var url = "jucoskicristian.github.io/LeitorQR/?id="
    var fabricante = document.getElementById('fabricante').value
    var cor = document.getElementById('cor').value
    var malha = document.getElementById('malha').value
    var gancho = document.getElementById('gancho').value
    var data = document.getElementById('data').value

    data = data.split('-')
    dataFormatada = data[2] + data[1] + data[0]

    if (fabricante == '' || cor == '' || malha == '' || gancho == '' || data == '') {
        console.log('Algum Campor esta vazio');
    } else {
        var conteudoQrCode = googleChartAPI + encodeURIComponent(url + fabricante + cor + malha + gancho + dataFormatada)
        document.getElementById('imgqr').src = conteudoQrCode
    }

}

function imprimir() {
    window.print('');
}