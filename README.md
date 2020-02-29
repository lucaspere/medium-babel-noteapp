# medium-babel-noteapp
Exemplo do funcionamento do Babel para o artigo: https://medium.com/@lucasfapereira/o-que-%C3%A9-babeljs-e-porque-voc%C3%AA-deveria-us%C3%A1-lo-em-seu-projeto-1f22aef1f099

### Iniciar o app

Abre o arquivo index.html, dentro da pasta `public`, no navegador.

### Usar o Babeljs para compilar o código

Se você fizer modificações em um código e quiser compilá-lo, use o seguinte comando sempre que o fazer:
```sh
npx babel src --out-dir:"./public"
```
Pode-ser usar a opção `--watch` no final do comando acima para compilar automaticamente sempre que o código é modificado e salvo.
```sh
npx babel src --out-dir:"./public" --watch
```
