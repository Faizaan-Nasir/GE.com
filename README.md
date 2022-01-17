# Grasp Excellence

Link to the app : https://ge-com.vercel.app/app/login.html

## Who are we?

A small group of students fuelled by the passion for teaching.

## Our initiative

To help students who need help in their scholastic career and offer them a vivid range of helpful resources. We help students in DPS Sharjah of Grade 8 to 10 by providing them the needful resources and sample papers which help them excell in their examinations. 

## General Instructions (Devs)

- Anything related or required for the website goes into the app directory.
- While adding new files keep the following things in mind :
  - Think which directory would the file best belong to
  - Think about a good name to the file.
  - The name of the file should be in a single word or if at all you can't come up with a single word page then use \_ instead of spaces.
- Every now and then check which files are required and which are not and delete them immediately.
- Please come up with sensible and proper *id*s and _class_ names for the elements
- Any documents (.docx, .pptx, .txt) which are required goes in app/docs/
- Any images required in the website goes to app/assets/
- css files can be linked using /css/(name of the file). All css files goes into app/css/.
- Main pages like contact, home etc. goes directly to app/ and not within any particular sub-folder
- Subject-wise pages goes in app/subjects/ folder.
- While adding anchor tag i.e. linking different pages within our website consider the following points:
  - Analyze the location of the file in the app folder
  - If its a main page then you may directly link by setting the attribute href to / followed by the name of the file without the .html extension
  - Anything within the docs folder can be linked by /docs/ followed by the full name of the file (including the extension). The same rule applies to images used within the websites (/assets/(the name of the image with the extension))
  - When referring to subject-wise html pages, set the href to /subjects/ followed by just the subject name all lower case (except SST). The subject names can also be referred from the html docs in subjects folder.

## Setup for Testing

Assuming you have [node.js](https://nodejs.org/en/) installed, follow the following steps.

- Create a new file called .env in the main folder.
- Paste this code in the .env file : `PORT = 3000`
- Open the command line in the main working directory
- First run the commmand `npm i`. This will install all the required dependencies for the app.
- Run the command `node server.js`. This will spin up a server for your perusal.
- Visit http://localhost:3000 to view the app.
- Not the links for html docs in the main directory is the above link followed by /(name without the extension). For the files in subjects directory, its the above link followed by /subjects/(name without the extension).
- Everytime you make a change to the html markup refresh the tab and you're good to go.

## Few things to note

- Please try not to edit anything in the server.js file or the .gitignore file.
- Try following the same folder structure.

If at all there are any discrepancies, then please contact @amazinglySK .
