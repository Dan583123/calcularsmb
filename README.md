README


Calculadora de Soro de Manutenção Basal.


A Calculadora de Soro de Manutenção Basal (SMB) é um projeto para facilitar o cálculo de SMB em pediatria. 


A calculadora faz contas de forma sistemática, da forma que foi programada, assim, não considera contexto clínico e outros parâmetros além dos inputs permitidos. 
Além disso, o SMB gerado é constituído apenas por SG 5%, NaCl 20% e KCl 19,1%. 
Portanto, limitações naturais da calculadora são a inflexibilidade e a dependência de inputs adequadas ao paciente em questão. 
Use com cautela e não baseie condutas exclusivamente nos resultados do site. 


Abaixo segue a explicação de como as contas são realizadas pelo site.

A) Como os cálculos são feitos:

1. Cálculo do Peso Calórico:
   
- Para crianças com até 10 kg: 1 kg = 1 "kg calórico" (100 kcal).
- Para crianças entre 10 a 20 kg: os primeiros 10 kg contam como 10 kg calóricos, e o peso adicional acima de 10 kg é multiplicado por 0,5.
- Para crianças com mais de 20 kg: os primeiros 20 kg contam como 15 kg calóricos, e o peso adicional acima de 20 kg é multiplicado por 0,2.

2. Cálculo da Oferta Hídrica (OH) Total:

- OH total = Peso calórico x OH em ml/100 kcal.

Obs: O valor padrão para OH é 100 ml/100 kcal, mas pode ser ajustado conforme a necessidade do paciente.

3. Cálculo do Volume de SG 5%:

O volume de SG 5% será igual à oferta hídrica total.

4. Cálculo da Oferta de Sódio:

- Oferta total de sódio (mEq) = Oferta de sódio em mEq/L (input) x Volume de SG 5% (OH) em ml / 1000.

5. Cálculo do Volume de NaCl 20%:

- Volume de NaCl 20% (ml) = Oferta total de sódio (mEq) / 3,4.
  
Obs: Arredondado para números inteiros.

6. Cálculo do Volume de KCl 19,1%:

- Volume de KCl (ml) = (Oferta de potássio em mEq/100kcal/dia x Peso calórico) / 2,5.

Obs: Arredondado para uma casa decimal.

7. Cálculo do Volume Total e Taxa de Infusão:

- Volume total = Soma dos volumes de SG 5%, NaCl 20%, e KCl 19,1%.
- Taxa de infusão (ml/h) = Volume total / 24 horas.

Obs: Taxa de infusão arredondado para uma casa decimal.

8. Cálculo da Oferta Hídrica Final (OH Final):

- OH final (ml/100 kcal) = Volume total / Peso calórico.
  
B) Informações Importantes:

1. Os campos de OH, Sódio, e Potássio já vêm preenchidos com valores padrões, mas podem ser editados conforme necessário:
   
- OH = 100 ml/100 kcal.
- Sódio = 136 mEq/L.
- Potássio = 2,5 mEq/100 kcal/dia.
  
2. Observações das caixas:
   
- Oferta de Sódio: "A oferta de sódio em um soro de manutenção de Holliday-Segar é de 30 mEq/L (hipotônico), enquanto soros isotônicos possuem oferta de 136 mEq/L."
- Oferta de Potássio: "A necessidade média de potássio é de 2-3 mEq/100 kcal/dia, sendo habitual considerar 2,5 mEq/100 kcal/dia."
- Oferta Hídrica (OH): "A oferta hídrica padrão é de 100 ml/100 kcal, entretanto, pode ser alterada de acordo com o paciente e seu balanço hídrico."

Não nos responsabilizamos por condutas tomadas a partir desses cálculos.
