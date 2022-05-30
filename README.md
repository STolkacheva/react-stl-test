1.  Generate new project with create react app
2.  Create new repo on your github or bitbucket account and put that project there
3.  The main task is:

    • the App is consist of two pages.
    • the main page contains the list of users with following info: name, phone, email, country, age. 
    • also each user needs to have 2 buttons - update and delete. So, when you click on delete button the user should be removed from the list. When you click update button - it should open new page with user’s details, which you can update and save updates.

So, that means we have one main page with the list of users and one details page.
Details page - is a form. On that form we have 5 inputs:
    • Name - text input
    • Phone - text input
    • Email - text input
    • Country - select (let’s just put three options there: Australia, Russia, USA)
    • Age - number input.

On main page, please add opportunity to sort users by name

You can store data with users info in some file like fixtures.js as mock data on frontend. 

Design doesn’t matter. It’s up to you. Please, don’t use many external libraries. Actually, you can use React Redux, React router. For styles you can use @material-ui/styles or whatever you want for css. 

Would be really nice if you could write your custom component for input and select.

UPDATE: 
Создание юзера.
Страница с таблицей юзеров, должна быть сортировка по всем полям юзера(username, email, age, country). Также, возможность создания и редактирования. Использовать можно только свои компоненты, для выбора страны нужно использовать автокомплит. Плюсом будет покрытые ошибок и toast messages.
Stack: JS(TS), React, JSS or StyledComponents, json web server for api

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
