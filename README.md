README


Calculadora de Soro de Manutenção Basal.


A Calculadora de Soro de Manutenção Basal (SMB) é um projeto para facilitar o cálculo de SMB em pediatria. 


A calculadora faz contas de forma sistemática, da forma que foi programada, assim, não considera contexto clínico e outros parâmetros além dos inputs permitidos. 
Além disso, o SMB gerado é constituído apenas por SG 5%, NaCl 20% e KCl 19,1%. 
Portanto, limitações naturais da calculadora são a inflexibilidade e a dependência de inputs adequadas ao paciente em questão. 
Use com cautela e não baseie condutas exclusivamente nos resultados do site. 


Abaixo segue a explicação de como as contas são realizadas pelo site.
Como as contas são feitas:

1. Cálculo do Peso Calórico (kg calórico):
   
O peso calórico é calculado com base no peso total da criança, de acordo com as seguintes regras:

- Para crianças com peso de 0 a 10 kg:
   * Peso calórico = Peso total (kg)
-  Para crianças com peso de 10 a 20 kg:
   * Peso calórico = 10 + (Peso total - 10) / 2
- Para crianças com peso acima de 20 kg:
   * Peso calórico = 15 + (Peso total - 20) / 5
     
2. Cálculo da Oferta Hídrica (OH):
   
A oferta hídrica (OH) é calculada multiplicando o peso calórico por 100:

- OH = Peso calórico × 100
  
3. Cálculo da Oferta de Sódio:
   
A oferta total de sódio é calculada pela fórmula:

- Oferta total de Sódio (mEq) = (Oferta em mEq/L × Volume de SG 5% (ml)) / 1000
  
5. Cálculo do Volume de NaCl 20%:
   
O volume de NaCl 20% necessário é calculado da seguinte forma:

- Volume de NaCl 20% (ml) = Oferta total de Sódio (mEq) / 3.4
  
6. Cálculo da Oferta de Potássio:
   
A quantidade de potássio é calculada com base no input fornecido em mEq/100 kcal/dia. A fórmula para o volume de KCl 19,1% é:

- Volume de KCl 19,1% (ml) = (Oferta de Potássio (mEq/100 kcal) × Peso Calórico) / 2.6
  
7. Cálculo do Volume Total e da Taxa de Infusão:
   
O volume total a ser infundido em 24 horas é:

- Volume total = Volume SG + Volume NaCl + Volume KCl
  
A taxa de infusão (em ml/h) é calculada como:

- Taxa de infusão = Volume total / 24
