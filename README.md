# Suigh Síos
## FAQ (For my Team)
**How do I run the app on cloud9?**  
Down in the blue 'bash' console below, type the following command: ionic serve -p $PORT --nolivereload  
If you are prompted to select between an IP or localhost ALWAYS choose the IP option as this allows you to test its connection to the database.

**What is the link for the running app if someone is already running it?**  
The link to the running app should always be: https://suigh-sios-naxespsn.c9users.io

**There are a lot of files, which ones are related to the project?**  
The ones related to the app are located exclusively inside the 'www' folder. Everything outside of this folder belongs to the framework being utilized.

**What do specific files in the 'www' folder do?**  
*Templates Folder*  
Inside this folder are all of the apps 'views', or the different pages you can naviagte to.

*CSS Folder*  
Inside this folder are the apps stylesheets. 'style.css' is our own personal stylesheet for creating new styles, as well as overriding Ionic's built in 
styles we do not wish to utilize. It is the only stylesheet that should be edited.

*JS Folder*    
Inside this folder is the apps Javascript. Two files matter here, 'controllers.js' and 'routes.js'. The former is the apps functionality through each views 
controller including references to the database. The latter is the links between the views with regards to the tabs along the bottom of the app.

*index.html*  
This is the html file whereby everything is linked: stylesheets, javascript, database etc. Anything you put in this file is universally used throughout the app
from my knowledge, such as the navbar on the top of the app. However, it is NOT a page that is navigated to in the app in the way a regular website uses it as 
its homepage. Content should not be added to it specifically. 

**Where is the database?**  
The database is located on Firebase at this URL: https://testapp-c77c8.firebaseio.com  
You will need to be added as a collaborator to view this link.

**What is '$scope' in the code?**  
Take for instance '$scope.something', it is AngularJS and is what allows us to call the variables from the Javascript to the HTML really easily like so: 
'{{something}}'

## Todo List (For my Team)
### Overview
I want to rework the features we've chosen initially to focus more on the unique selling point of our app, which is the storage and retrieval of seat information 
in realtime. I wish to rework the features as follows:

~~**Tab 1**~~ 
This tab is currently known as the 'stopNumber' tab. This is a feature I have chosen to keep mostly intact as I believe it's possible to accomplish. The 
change I'm making however is that it will specifically be used to search for buses by their number and NOT the stops they go to. The reason this is, is 
that most of you are focusing exclusively on Dublin Bus, because you are all from Dublin. When I concepted this idea Dublin Bus was not even in the scope 
of my plan.

I believe streamlining this feature to make it the number buses go by as opposed to what stops they frequent is universally something all of the companies 
have in common. All of their buses have an ID or number the use to identify themselves by the route they take. Not all buses have the stop infrastructure that 
Dublin Bus has.

**Tab 2**  
This tab is the seat capacity tab. Right now it exclusively shows and updates the capacity of the first bus in our database. Ideally I want it so that you
select a bus from 'Tab 1' and have this tab update the info according to your decision. So far I'm uncertain of how to do this without hard-coding it. Will need
help.

**Tab 3 & Tab 4**  
I'm lumping these two tabs together because I no longer know what I want them to be. 'Contact Us' is a very cop-out feature and the 'Route Map' I think is 
unreasonable to accomplish in a weeks time at this stage when we've only JUST gotten a database linked.

**Sign Up & Login?**  
I personally don't think this feature is necessary whatsoever. I'm not sure if I have made it clear to each team member but essentially the idea is that 
Suigh Síos is TWO seperate applications. One for the driver, who has the ability to manipulate the data, and one for the passenger, with that functionality
stripped out. It's a lot simpler than devising a login system whereby - IF bus driver, show controls, IF passenger, omit controls. Again this is another thing
I think is unreasonable to do in a weeks time anyway.

### -Seán
