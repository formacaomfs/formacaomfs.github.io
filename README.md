# Landing page — Formação Mário Ferreira dos Santos

Landing page estática e responsiva criada para o **Arquivo Intelectual Brasileiro**.

## Como visualizar

Abra o arquivo `index.html` diretamente no navegador. Se preferir usar um servidor local:

```bash
python3 -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Como configurar o link de compra e o preço

Abra `script.js` e altere apenas estas duas linhas no início do arquivo:

```js
const CHECKOUT_URL = "https://seu-link-de-pagamento.com";
const COURSE_PRICE = "R$ 197,00";
```

- Todos os botões de compra usam o mesmo `CHECKOUT_URL`.
- Se `COURSE_PRICE` permanecer vazio, a página exibirá “Condição disponível na inscrição”.

## Publicação

O projeto não exige compilação ou dependências. Basta enviar `index.html`, `styles.css`, `script.js` e a pasta `assets` para o mesmo diretório no seu serviço de hospedagem.

## Conteúdo a confirmar antes da publicação

- Link oficial de pagamento
- Preço ou condição de pagamento
- Forma exata de entrega do acesso por e-mail
- URL final para preencher as metatags de compartilhamento, se desejar
