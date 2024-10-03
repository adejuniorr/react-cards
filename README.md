# React Cards

This is a small [React.js](https://react.dev/) project that I created to venture into web development using the [TypeScript](https://www.typescriptlang.org/) language and the [TailwindCSS](https://tailwindcss.com/) framework.

I also took the opportunity to improve my design skills a little more and bring a interactive SPA containing one of the things I love most: **Music** (especially 🤘**ROCK**)! 

### The Project ♥️♠️

The application has a JSON file containing all the data necessary to create the cards. The entire object is pulled into the `<CollectionSelection />` component and converted into an array with the `Object.values()` method allowing iteration over each collection **(which are also arrays, but now containing the objects with the information for each card).**

Then we map over the initial array creating 3 `<CollectionCard />`'s which allow us to open the `<CardsList />` by clicking on a especific collection card. The opened cards list will contain all the cards belonging to that collection and each card can be "flipped" by clicking on it revealing the main content behind.

## How to run it 🧑‍💻

You can clone the project and run the application by opening the root folder in terminal and doing:

```
cd .\react-cards-project\
npm install
npm run dev
```

Or you can visit the deployment link: https://react-cards-musiclegends.vercel.app/

🤘🎙️♦️♣️
