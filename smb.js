function mostrarObservacaoOH() {
    const observacao = document.getElementById('observacaoOH');
    observacao.style.display = observacao.style.display === 'none' ? 'block' : 'none';
}

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
    const oh = parseFloat(document.getElementById('oh').value);

    if (!peso || !sodio || !potassio || !oh) {
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

    // 2. Cálculo da oferta hídrica (OH) total
    const ofertaHidrica = pesoCalorico * oh; // OH total = peso calórico x OH (ml/100kcal)

    // 3. A oferta hídrica será dada em SG 5%
    const volumeSG = ofertaHidrica;

    // 4. Cálculo da oferta de sódio
    const ofertaTotalSodio = (sodio * volumeSG) / 1000; // em mEq

    // 5. Cálculo do volume de NaCl 20%
    const volumeNaCl = Math.round(ofertaTotalSodio / 3.4); // Arredondar para número inteiro

    // 6. Cálculo do volume de KCl 19,1%
    const volumeKCl = (potassio * pesoCalorico) / 2.5; // Volume de KCl, arredondando para uma casa decimal
    const volumeKClArredondado = volumeKCl.toFixed(1); // Arredondado para uma casa decimal

    // 7. Cálculo do volume total
    const volumeTotal = volumeSG + volumeNaCl + volumeKCl; // Soma dos volumes

    // 8. Cálculo da taxa de infusão (arredondado para uma casa decimal)
    const taxaInfusao = (volumeTotal / 24).toFixed(1); // mL/h, arredondado para 1 casa decimal

    // 9. Cálculo da oferta hídrica final (OH final)
    const ohFinal = (volumeTotal / pesoCalorico).toFixed(1); // OH final em ml/100 kcal

    // 10. Exibir o resultado
    document.getElementById('prescricao').innerText = `Prescrição: SG 5% ${volumeSG.toFixed(0)} ml + NaCl 20% ${volumeNaCl} ml + KCl 19,1% ${volumeKClArredondado} ml.`;
    document.getElementById('infusao').innerText = `Infundir a ${taxaInfusao} ml/h em 24h.`;
    document.getElementById('ohFinal').innerText = `OH final: ${ohFinal} ml/100 kcal.`;
}
