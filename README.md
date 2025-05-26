# Typescript

Este é um projeto pessoal que tem como objetivo ajudar quem está iniciando com Typescript.

Também tem como objetivo ser utilizado para estudo, experimentar recursos da linguagem conforme houver a necessidade.

# O que você vai encontrar aqui?

- [Como funciona o Typescript](#como-funciona-o-typescript)
- [Como compilar Typescript para gerar Javascript](#como-compilar-typescript-para-gerar-javascript)
- [Como preparar o ambiente de desenvolvimento para utilizar TypeScript](#como-preparar-o-ambiente-de-desenvolvimento-para-utilizar-typescript)
- [Algumas extensões para ajudar no desenvolvimento com VSCode](#extensões-vs-code)

# Como funciona o Typescript

- Typescript é uma linguagem de programação baseada no Javascript. Ele adiciona algumas funcionalidades que não estáo presentes na versão nativa do Javascript. Resumindo: Typescript é um Javascript com super poderes.
- O Typescript precisa ser compilado para que seja executado nos navegadores (Chrome, Firefox, etc).

> Na imagem abaixo temos uma representação desse processo. Páginas Html, incluem arquivos Css e Javascript. O Typescript é compilado e arquivos Javascript são gerados para que possam ser incluídos nas páginas web

![como-funciona-typescript.png](./docs/como-funciona-typescript.png)

# Como compilar Typescript para gerar Javascript

- Para compilar podemos utilizar o compiler com o seguinte comando

```shell
tsc index.ts
```

- Também é possível gerar um arquivo chamado tsconfig.json e incluir configurações de compilação para o código Typescript. A referência desse arquivo você encontra [aqui](https://www.typescriptlang.org/tsconfig/)

- Para gerar o arquivo podemos executar o comando

```shell
tsc --init
```

- Especificando as configurações abaixo no arquivo tsconfig.json também podemos utilizar o comando `tsc --watch` para monitorar os arquivos mapeados quando tiverem alterações

```json
{
  "compilerOptions": {
    // ...
    "rootDir": "./src",             /* Especifica o diretório que contém os códigos Typescript */
    "outDir": "./public/js",             /* Especifica o diretório na qual os arquivos compilados serão criados */
    // ...
  }
}
```

# Como preparar o ambiente de desenvolvimento para utilizar Typescript

- Para iniciar o desenvolvimento o primeiro passo é instalar o typescript e para fazer isso você precisará ter instalado o nodejs

# Instalação no Mac OS

- [Instalar o gerenciador de pacotes para o Mac OS](https://brew.sh)
- [Instalar o nodejs](https://formulae.brew.sh/formula/node#default)

```shell
brew install node
```

- [Instalar o TypeScript usando o gerenciador de pacores npm](https://www.typescriptlang.org/download/)

```shell
sudo npm install -g typescript 
```

- Para verificar se foi instalado basta executar o comando abaixo, no qual será mostrada a versão do typescript instalada

```shell
tsc -v
```

# Extensões VS Code

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)