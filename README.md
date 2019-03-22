# React Drag & Drop: Chess Board

| In this React project, I explore the drag-and-drop capabilities of <a href="http://react-dnd.github.io/react-dnd">React DnD</a> while using CSS Grid to build a simplified chess board containing a single set of pieces. |
|:-|

<details>
<summary>Inspired by and adapted from <a href="http://react-dnd.github.io/react-dnd/docs/tutorial">Dan Abramov's tutorial</a>. </summary>
This app was initially inspired by and adapted from <a href="http://react-dnd.github.io/react-dnd/docs/tutorial">Dan Abramov's tutorial</a> (i.e. React DnD's creator), where a lonely knight roams about the chess board freely. One of my goals is to implement drag-and-drop capabilities for all of the knight's buddies so they too can roam about.
</details><br>

<p align="center">
  <a href="">
    <img src="./public/img/chess-board-preview.gif" alt="Chess Board" />
  </a>
</p>

---

## Identify components and consider props.

| Components | Description | Props |
|:-|:-|:-|
| **`Knight`** (class) | A single knight piece. | Probably needs no props. There's no need for it to be aware of its own position since it'll be placed into `Square` as a child. |
| **`Square`** (functional) | A single square on the board. | Probably just **`color`** (alternating in white and black), as it is the only value needed for rendering. It's not necessary to give position via props.
| **`Board`** (functional) | The entire 8x8 board with 64 total squares. | `Board` only consists of `Square` components, therefore instead of passing `Square` components to `Board` as children, `Board` would probably just own them. This means `Board` would then need `Knight`'s **current position**, a two-item array with a column (**`x`**) and row (**`y`**) position. |

### Where will the current state live?

If it can be helped, not `Board`. It's a good idea to have as little state in components as possible. Since `Board` will already have some layout logic, it's best to not burden it with managing state. However, for this simple demo, it's rather trivial at this point. Let's assume state exists *somewhere* and think about it later. Meanwhile, let's make sure the components render correctly when they receive said state via props.

### Add the state.

The goal is to make `Knight` draggable. This requires maintaining `knightPosition` in some kind of state storage and having some way to update it.

React is not opinionated about the state management or the data flow (e.g. Flux, Redux, Rx).

---

# Dependencies

| API | Description |
|:-|:-|
| [gh-pages](https://pages.github.com/) | Deployment tool that publishes GitHub repo as a static website directly to GitHub Pages. |
| [react-dnd](https://react-dnd.github.io/react-dnd/) | Set of higher-order components for React that help build complex drag-and-drop interfaces. |
| [react-dnd-html5-backend](http://react-dnd.github.io/react-dnd/docs/backends/html5) | Official HTML5 backend for React DnD. [No longer a required peer dependency](https://github.com/react-dnd/react-dnd/releases/tag/v4.0.6) as it is currently legacy and has been integrated into [react-dnd](https://react-dnd.github.io/react-dnd/). |
| [react-dnd-touch-backend](https://github.com/yahoo/react-dnd-touch-backend) | Touch back-end for [react-dnd](https://react-dnd.github.io/react-dnd/) (since native drag-and-drop is not currently supported in touch devices). |

<details>
<summary>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.
</summary><br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for ptoweruction to the `build` folder.<br>
It correctly bundles React in ptoweruction mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

</details>
