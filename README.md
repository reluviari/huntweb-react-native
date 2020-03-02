# Recycling learning with React Native

## Criação: 02 de março de 2020
## Prática : @reluviari

![React Native](/images/logo-react-native.png)
![HTML-CSS-JS](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Git](/images/logo-git.png)
![GitHub](/images/logo-github.png) 
![Rocketseat](/images/logo-rocketseat.png)

### SESSÃO

#### Aula 1. O que é react native
- Biblioteca react native
- Ferramenta usando javascript para mobile 
- Interface nativa
- iOS e Android

#### Aula 2. Criando um projeto
`react-native -v`: exibe a versão atual na máquina<br>
1. Configurar ambiente
2. gitbash : `react-native start` : metro bundler
3. Configurando SDK do Android
- `react-native run-android`
- `react-native run-ios`
- run : somente para 1ª vez por projeto.
- `metro bundler` : tem que estar rodando durante desenvolvimento.
- `react-native start` : running metro bundler para trabalhar nas próximas vezes
7. Estrutura de pastas da aplicação **React Native**
- Diretório `android` e pasta `ios`
- Diretório `node_modules` : Dependências
- Arquivo `app.json`: Exibição da aplicação, desenvolvedor e usuário final
- Arquivo `index.js`: Arquivo introdutório da aplicação.
- Arquivo `App.js`: Arquivo inicial
- Arquivo `package.json`: Dependências da nossa aplicação
- Arquivo `yarn.lock`: Cache das dependências que forem instaladas

#### Aula 3. O que são componentes 
1. Componentização : arquitetura : separar o código da aplicação: visualização, lógica, estilização.
2. Componente : Um componente por arquivo.

#### Aula 4. configurando navegação
1. `yarn add react-navigation` : Navigação por botão
2. Organização da estrutura de pastas do projeto

#### Aula 5. Estilização Header e StatusBar
1. `navegationOptions`
2. `headerStyle`
3. `statusbar`

#### Aula 6. Buscando produto da API
1. `axios`: Biblioteca
2. Construíndo API
3. Construir API com NodeJS
4. NodeJS API: `insomnia`

#### Aula 7. Entendendo o estado
1. Estado é um objeto 
2. Podemos armazenar e manipular estados
3. O objeto possuí variáveis que são atualizadas de forma automática

#### Aula 8. Listando produtos
- `Flatlist`: Componente para exibir em forma de lista
- `TouchableOpacity`: No ato de clicar, aplica efeito
- Importando informações da API.

#### Aula 9. Estilizando lista de produtos
- Formatação das informações em elementos.

#### Aula 10. Scroll infinito com flatlist
- `scrooll infinito`

#### Aula 11. Detalhes com WebView
1. Exibir conteúdo em uma nova página mas sem sair da nossa aplicação.

Aplicação com React Native terminada. Utilizado navegação, criado duas páginas, stateless component react native, componentes em classes, consumo de API Rest, FlastList, scroll infinito, estilização. 

:. Do curso `React Native` da Station Rocketseat - Starter.
Por Diego Fernandes : https://station.rocketseat.com.br/courses/starter 95