# Recipe App
> This is (for now) a small React Application for displaying and organizing your own recipes.



## General Information
- I undertook this project to gain experience in creating a full-stack application on my own and help my mother
- My mother is used to get her recipes from a few different sources (pinterest, screenshots, handwritten, google drive). The app should function as the only place to display all these recipes from different sources
- The foundation is a HTML / CSS page from [Coding Addict](https://www.youtube.com/c/CodingAddict) which I tweaked to my liking, converted it into a React application and added the features for searching, filtering etc.
- The app is for private use which is why this version includes only sample data in order to not infringe any copyrights in terms of the used recipes



## Technologies Used
- React 17.0.2
- React Router 5.3.0
- Font Awesome 5.15.4



## Features
- Displaying recipes
- Filtering recipes by certain tags / categories
- Searching for recipes



## Screenshots
![Example screenshot](https://i.ibb.co/sbmVkhP/recipes-screenshot.jpg)



## Demo
Live demo [_here_](https://vigilant-swartz-cc44b8.netlify.app/).


## Setup
The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Navigate to the project folder in the terminal and install the necessary NPM dependencies
```
npm install
```
3. Run the app typing
```
npm start
```
in your terminal and visit localhost:3000 in your browser.



## Learnings
- How to work with normalize.css in a React app
- Using a scroll-to-top component in order to scroll automatically on top when visiting other pages / routes
- How to implement continuous deployment with Netlify / GitHub



## Project Status
The is the basic version of the App which is just a static React application. The plan is to built this into an interactive full-stack-app



## To do
- Build my own API to provide the recipes
- Manage the recipes in a database
- Create my own design
- Dynamically calculate the amount of certain ingredients based on for how many persons the recipe is intended
- Adding / Removing / Updating recipes
- Adding dates to recipes to mark when the recipe was last used
- Adding a filter to display recipes which weren't used for the longest time
- Adding authentication
- Dynamically create a shopping list based on the chosen recipe
- Conversion to a React-Native app




## Acknowledgements
- This project is partly based on a tutorial from [John Smilga](https://www.youtube.com/watch?v=-8LTPIJBGwQ&t=6s).



