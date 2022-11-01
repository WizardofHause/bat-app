Welcome to the Bat-page; an essential crime-fighting tool and organizational system for busy Batpersons to categorize known characters and suspects as they correllate to various crimes, disturbances, and general scummery throughout Gotham City.

Given an array of characters, any Batperson should be able to:

- View an array of all characters and villains in the db.json file - GET
- Search those characters by name or alias - .filter()
- Update the database with new characters - POST
- Remove characters from the database - DELETE
- View the specific details of a given character by clicking the associated image - GET
- Update/edit a suspect's details
- Toggle "AT LARGE / INCARCERATED" status of any given suspect
- Filter the database of suspects based on at_large
- Populate "Suspects" and "Persons of Interest" to the homepage by editing their category (Unaffiliated, Persons of Interest, Suspects, and Perpetrators)
- NAVIGATE to suspect details page AS SOON AS they're added/their details are edited
- Toggle populated characters in SuspectList based on freedom status
- Add characters to a 'List of Suspects' to evaluate

Challenges: 
Client-side routing nested routes/components (which mostly had to deal with the version of React I was using), lining up the descriptive list elements, styling the NavBar, and styling the Current Suspects display page. You might notice the SuspectContainer that I left as an abandoned component mixed in there. I'm not sure why that hooking that up wouldn't allow for the SuspectDetails component to render, but maybe someone else knows...?

The way I left "/home" as a route to the Current Suspects Page is confusing, and loading up localhost:3000 doesn't really display anything other than a repeating background gradient. Also the CSS for the Current Suspects Page is a head-scratcher that I eventually just gave up on.  

I had a lot of trouble getting the at_large value on the EditSuspectForm to agree with the at_large value in the SuspectList component, but had a facepalm moment when I remembered that JS reads the string "false" as truthy. 

I also made an attempt at using an external API that looked pretty friendly to beginners and had the Power Stats as data points, but didn't realize how incomplete the API was until I'd already started changing some of my code. I ended up just ripping what data I could from the API and searching through the Batman Wiki for the missing bits, and I actually think the whole thing ended up as a win overall. 

Favorite Parts: 
The calculated "formidabliltyScore" that I came up with, adding up the Power Stats and dividing by the suspect's BMI. I thought it was kind of clever and an interesting way to still use the character's power stats for a rating that wasn't purely arbitrary, like the "danger_level" (NOTE: I know this is confusing. I know. I made the "danger_level" display as "Chaos Lvl" on the page, and the "formidabilityScore" displays as "Danger Lvl". I know. But it's my first React app, and I somehow managed to keep it together, so shush with your judgements).

I also liked the way the fieldset and legend tags almost styled themselves into the perfect skyscraper-like structure for the form components. Finding those elements and the dl, dt, dd tags for teh Suspect Details was actually kind of a life-saver when it came to styling and probably saved me hours of work. 

And I'm pretty satisfied with the level of bells and whistles I added to this tiny monster. I did my best to cram as much functionality into it as I could muster, while still making it look good, and I got through ALMOST everything I wanted to accomplish. 


Whimsical Brainstorm: 
https://whimsical.com/bat-page-outline-DPLbaiVwrGc2KHBbsu6bqP



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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
