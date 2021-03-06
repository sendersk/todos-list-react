# TODO List React

![TODO LIST](https://user-images.githubusercontent.com/55362061/91884614-a36fb000-ec86-11ea-9051-6f9d8f65c4fe.png)

## Table of contents

- [DEMO](#demo)
- [Description](#description)
- [How to use](#how-to-use) 
- [Technologies used](#technologies-used)
- [Methodologies used](#methodologies-used)
- [Available Scripts](#available-scripts)
    - [npm start](#npm-start)
    - [npm run build](#npm-run-build)
    - [npm run eject](#npm-run-eject)

## DEMO

 https://sendersk.github.io/todos-list-react/

 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a simple task list created for educational purposes. The current version includes adding tasks, marking the selected ones as completed and the possibility of removing the selected task. It also contains button to show/hide completed tasks and mark all tasks as completed. Tasks will be saved in local storage memory of your browser. 

## How to use

1. Write the task content.
2. Press **Enter** or click on the button **"Submit"**.
3. You can add tasks continuously after every **Enter** pressing. 
4. Once you will add task, it will be shown on list below called **Task list**.
5. Click on the green button on the left to mark the task as completed.
6. Click on the red button on the right to delete the task. 
7. Click on the **"Hide done/Show done"** button to hide or show completed tasks.
8. Click on the **"Set all as done"** button to mark all tasks as completed.

## Technologies used 

- React
- create-react-app
- Redux with react-redux
- Redux Saga
- React Router
- HTML
- CSS
- JavaScript ES6+
- Styled Components
- npm
- localStorage

## Methodologies used

- Hooks
- Custom Hooks
- JSX

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.