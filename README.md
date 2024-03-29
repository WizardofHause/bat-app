# Bat-App

## Overview
Welcome to the Bat-App; an essential crime-fighting tool and organizational system for busy Batpersons to categorize known characters and suspects as they correllate to various crimes, disturbances, and general scummery throughout Gotham City.

This was my first solo build using create-react-app where I wanted to explore state management among react components and async functions using react hooks. My intention was to create an application that displayed an array of data sets in a Batman-themed UI, with functionality to add, edit, and delete any particular set. Full list of features and user stories detailed below. For styling I used simple vanilla CSS. 

## Features
Given an array of characters, any Batperson should be able to:

- View an array of all characters and villains in the db.json file - GET
- Search those characters by name or alias - .filter()
- Update the database with new characters - POST
- Remove characters from the database - DELETE
- View the specific details of a given character by clicking the associated image - GET
- Update/edit a suspect's details - PATCH
- Toggle "AT LARGE / INCARCERATED" status of any given suspect - PATCH
- Filter the database of suspects based on at_large
- Populate "Suspects" and "Persons of Interest" to the homepage by editing their category (Unaffiliated, Persons of Interest, Suspects, and Perpetrators)
- Navigate to suspect details page AS SOON AS they're added/their details are edited
- Toggle populated characters in SuspectList based on freedom status
- Add characters to a 'List of Suspects' to evaluate
- Navigate to current list of suspects and persons of interest via the logo Link on the "/" route

## Challenges 
Client-side routing and nested routes/components (which mostly had to deal with the version of React I was using), lining up the descriptive list elements, styling the NavBar, and styling the Current Suspects display page. You might notice the SuspectContainer that I left as an abandoned component mixed in there. I'm not sure why that hooking that up wouldn't allow for the SuspectDetails component to render, but I'll find out soon enough. 

I had a lot of trouble getting the at_large value on the EditSuspectForm to agree with the at_large value in the SuspectList component, but had a facepalm moment when I remembered that JS reads the string "false" as truthy. I've since done some more learning about React forms and how to handle state with different JSX elements, so this feature will get cleaned up in due time. 

I also made an attempt at using an external API that looked pretty friendly to beginners and had the Power Stats as data points, but didn't realize how incomplete the API was until I'd already started changing some of my code. I ended up just ripping what data I could from the API and searching through the Batman Wiki for the missing bits, and I actually think the whole thing ended up as a win overall. 

## Favorite Parts
The calculated "formidabliltyScore" that I came up with, adding up the Power Stats and dividing by the suspect's BMI. I thought it was kind of clever and an interesting way to still use the character's power stats for a rating that wasn't purely arbitrary, like the "danger_level" (NOTE: I know this is confusing. I know. I made the "danger_level" display as "Chaos Lvl" on the page, and the "formidabilityScore" displays as "Danger Lvl". I know. But it's my first React app, and I somehow managed to keep it together, so shush with your judgements).

I also liked the way the fieldset and legend tags almost styled themselves into the perfect skyscraper-like structure for the form components. Finding those elements and the dl, dt, dd tags for the Suspect Details was actually kind of a life-saver when it came to styling and probably saved me hours of work. 

And I'm pretty satisfied with the level of bells and whistles I added to this tiny monster. I did my best to cram as much functionality into it as I could muster, while still making it look good, and I got through ALMOST everything I wanted to accomplish. 

## Dependencies
+ React v.18.2.0
+ React-Router v.6.4.2

## Running Locally
1. Clone this project locally
1. Run `npm install` to install dependencies
1. Run `npm run server` to start the json server on local port 3000
1. Run `npm start` to open the app in your browser

## More Links
#### Whimsical Brainstorm: 
https://whimsical.com/bat-page-outline-DPLbaiVwrGc2KHBbsu6bqP
#### Loom Demo:
Coming soon!