# react-cards [![My Skills](https://skillicons.dev/icons?i=react,ts,tailwind)](https://skillicons.dev)

## 📄Description

### What is this? | O que é isso? 🤔

This is a small React.js Project that I created to venture into web development using the **Typescript** language and the **Tailwind CSS** framework.

I also took the opportunity to improve my design skills a little more and bring a interactive SPA containing one of the things I love most: **Music** (especially 🤘**ROCK**)!

> Esse é um pequeno projeto que criei para me aventurar no desenvolvimento web usando a linguagem **Typescript** e o framework **Tailwind CSS**. Também aproveitei para aprimorar um pouco mais minhas habilidades com design e, unindo o útil ao agradável, trouxe uma SPA interativa com uma das coisas que mais amo: **Música** (especialmente 🤘**ROCK**)!

### How it works? | Como funciona? ⚙️

The application has a JSON file containing all the data necessary to create the cards. The entire object is pulled into the `<CollectionSelection />` component and converted into an array with the `Object.values()` method allowing iteration over each collection **(which are also arrays, but now containing the objects with the information for each card).**
> A aplicação possui um arquivo JSON contendo todos os dados necessários para criar as cartas. O objeto é puxado dentro do componente `<CollectionSelection />` e então convertindo em um array com o método `Object.values()` que permite a iteração sobre cada coleção **(que também tratam de arrays, mas agora contendo os objetos com as informações de cada carda).**

Then we map over the initial array creating 3 `<CollectionCard />`'s which allow us to open the `<CardsList />` by clicking on a especific collection card. The opened cards list will contain all the cards belonging to that collection and each card can be "flipped" by clicking on it revealing the main content behind.

> Após isso nós mapeamos o array inicial criando 3 componentes `<CollectionCard />` que nos permitem abror o componente `<CardsList />` com um único click sobre uma coleção específica. A lista de cartas aberta irá conter todas as cartas pertencentes àquela coelção e cada carta pode ser virada ao clicar sobre revelando o conteúdo principal atrás dela.

## Take a look | Dá uma olhada 👀

### You can clone the project and run the application by opening the root folder in terminal and doing:
> Você pode clonar o projeto e rotar a aplicação abrindo a pasta raiz no terminal e digitando:

```
cd .\react-cards-project\
npm install
npm run dev
```

### Or you can also visit the deployment link: https://react-cards-musiclegends.vercel.app/
> Ou pode visitar o link de deploy
