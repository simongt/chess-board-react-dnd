# Chess Board (React DnD Example)

| In this app, I use <a href="http://react-dnd.github.io/react-dnd">React DnD</a> to build a simplified chess board with a lonely knight, based off of <a href="http://react-dnd.github.io/react-dnd/docs/tutorial">this tutorial</a>. |
|:-|

<p align="center">
  <a href="">
    <img src="./public/img/chess-board-preview.gif" alt="Chess Board" />
  </a>
</p>

---

## React DND

<details>
<summary>
Notes from <a href="https://www.youtube.com/watch?v=930JPFaKg-s">Andre Madarang's tutorial video</a>.
</summary>
<ul>
<li>
Install dependencies:<br>
<code>npm install --save react-dnd react-dnd-html5-backend</code>
</li>
<li>
Three prereqs for this library to work:
<ol>
<li>
Define a context which wraps the entire app and tells the app that things are <em>draggable</em>.
</li>
<li>
Define which things are <em>draggable</em> (i.e. <strong>sources</strong>).
</li>
<li>
Define which things are <em>droppable</em> (i.e. <strong>targets</strong>).
</li>
</ol>
</li>
</ul>
</details>

---

## Dependencies

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
