# Suigh Síos
## FAQ (For my Team)
**What is '$scope' in the code?**  
It is AngularJS, and is what allows us to call the variables from the Javascript to the HTML really easily like so: '{{something}}'

**How do I run the app on cloud9?**  
Down in the blue 'bash' console below, type the following command: ionic serve -p $PORT --nolivereload  
If you are prompted to select between an IP or localhost ALWAYS choose the IP option as this allows you to test its connection to the database.

**There are a lot of files, which ones are related to the project?**  
The ones related to the app are located exclusively inside the 'www' folder. Everything outside of this folder belongs to the framework being utilized.

**What do specific files in the 'www' folder do?**  
*Templates Folder*  
Inside this folder are all of the apps 'views', or the different pages you can naviagte to.

*CSS Folder*  
Inside this folder are the apps stylesheets. 'style.css' is our own personal stylesheet for creating new styles, as well as overriding Ionic's built in 
styles we do not wish to utilize. It is the only stylesheet that should be edited.

**Where is the database?**  
The database is located on Firebase at this URL: https://testapp-c77c8.firebaseio.com  
You will need to be added as a collaborator to view this link.