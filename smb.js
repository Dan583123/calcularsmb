function mostrarObservacaoSodio() {
    const observacao = document.getElementById('observacaoSodio');
    observacao.style.display = observacao.style.display === 'none' ? 'block' : 'none';
}

function mostrarObservacaoPotassio() {
    const observacao = document.getElementById('observacaoPotassio');
    observacao.style.display = observacao.style.display === 'none' ? 'block' : 'none';
}

function calcularSoro() {
    const peso = parseFloat(document.getElementById('peso').value);
    const sodio = parseFloat(document.getElementById('sodio').value);
    const potassio = parseFloat(document.getElementById('potassio').value);

    if (!peso || !sodio || !potassio) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    // 1. Cálculo do peso calórico
    let pesoCalorico = 0;

    if (peso <= 10) {
        pesoCalorico = peso * 1; // 1 kg = 1 kg calórico
    } else if (peso <= 20) {
        pesoCalorico = 10 + (peso - 10) * 0.5; // 10 + 0,5 kg calórico para cada kg adicional
    } else {
        pesoCalorico = 15 + (peso - 20) * 0.2; // 15 + 0,2 kg calórico para cada kg adicional
    }

    // 2. Cálculo da oferta hídrica (OH)
    const ofertaHidrica = pesoCalorico * 100; // OH = peso calórico x 100

    // 3. A oferta hídrica será dada em SG 5%
    const volumeSG = ofertaHidrica;

    // 4. Cálculo da oferta de sódio
    const ofertaTotalSodio = (sodio * volumeSG) / 1000; // em mEq

    // 5. Cálculo do volume de NaCl 20%
    const volumeNaCl = Math.round(ofertaTotalSodio / 3.4); // em ml, arredondado para número inteiro

    // 6. Cálculo do volume de KCl 19,1%
    const volumeKCl = (potassio * pesoCalorico) / 2.6; // em ml

    // 7. Cálculo do volume total (sem arredondar o volume de KCl)
    const volumeTotal = volumeSG + volumeNaCl + volumeKCl; // O volume de KCl não é arredondado

    // 8. Cálculo da taxa de infusão
    const taxaInfusao = (volumeTotal / 24).toFixed(1); // em mL/h, arredondado para 1 casa decimal

    // Exibir resultados
    document.getElementById('prescricao').innerText = `Prescrição: SG 5% ${Math.round(volumeSG)} mL + NaCl 20% ${volumeNaCl} mL + KCl 19,1% ${volumeKCl.toFixed(1)} mL`;
    document.getElementById('infusao').innerText = `Infundir IV em bomba de infusão contínua à ${taxaInfusao} mL/h em 24h.`;
}
