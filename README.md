This project was bootstrapped with Create React App.

To use this app:
1. npm start
     - Runs the app in dev mode, Open http://localhost:3000 to view in browser
2. To stop the app Ctrl + C.

If the Process is running (usually if you closed gitbash before stopping the app)
1. lsof -wni tcp:3000 
    look for the PID#
2. kill -9 PID

This is a simple web application that fetchs JSON data supplied by https://jsonplaceholder.typicode.com/.
1. Eastridge logo - click on the logo to go to Eastridge Workforce Solutions: https://www.eastridge.com/
2. My name - click on my name to see my github
3. Buttons 
    - **Home** will take you back to the landing page
    - **Users** will supply a list of users from https://jsonplaceholder.typicode.com/users.  Click on a name to see more about them
    - **Posts** will list all posts made on https://jsonplaceholder.typicode.com/posts  click on the post title to see the body of the post and comments (from https://jsonplaceholder.typicode.com/comments) associated with that post.  The bottom button "back to top" will take you back to the top top of the list

To Employ Rory
1. Contact Thomas Liolios from Eastridge Workforce management
2. Message me here for my Resume and contacts

This is my very first exposure to React ever, I wrote this app in a little over 3 days. My biggest challenges were figuring out how to route in React and fetching and parsing JSON data in React.  There are only GET requests in this project.  The styling is a little simple as I spent most of my time on routing and JSON fetch.

Modules beyond the default React supplied ones used:
* React-Router-Dom
* React-Helmet
* React-scroll

Enjoy!