# owl-project
<h2>Table of Contents</h2>
<ol>
  <li><a href="#overview">Overview</a></li>
    <ol>
      <li><a href="#link">Link to webpage</a></li>
      <li><a href="#screenshot">Screenshot</a></li>
    </ol>
  <li><a href="#process">My Process</a></li>
    <ol>
      <li><a href="#builtWith">Built With</a></li>
      <li><a href="#howItWorks">How It Works</a></li>
      <li><a href="#whatILearned">What I Learned</a></li>
      <li><a href="#optimizations">Optimizations</a></li>
    </ol>
</ol>

<h2 id="overview">Overview</h2>
I built a full-stack CRUD application to track my favorite & popular quotes and store in a MongoDB database. <br>
My application is hosted on Heroku.
<br><br>
<h3 id="link">Link to webpage:</h3>
<p>https://pro-owl.herokuapp.com/welcome</p>

<h3 id="screenshot">Screenshot</h3> 

<h3>Welcome page</h3>

![owl-homepage](https://user-images.githubusercontent.com/99220339/180356304-e9b71b23-593b-441f-9fe0-8cfa2dbf38c7.png)

<h3>User's dashboard</h3>

![owl-userdashboard](https://user-images.githubusercontent.com/99220339/180356265-fe2c4c97-54d9-4a7b-9790-29391caaf165.png)

<h2 id="process">My Process</h2>
<h3 id="builtWith">Built With:</h3>
<ul>
  <li>MongoDB</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>EJS</li>
  <li>Javascript/HTML/CSS</li>
</ul>

<h3 id="howItWorks">How It Works</h3>
Upon entering a name and quote and clicking the button, the quote/name data is stored in a MongoDB database.
The page is redirected (aka refreshed) and the new name/quote is shown on the page. 
Additionally, the user can 'like' and 'delete' names/quotes from the page and database by clicking the 'thumbs up' and 'trash' icons. 
The number of 'likes' on the page will increase by 1 upon each 'thumbs up' click. 

<h3 id="whatILearned">What I Learned</h3> 
I learned about databases and related functions, such as creating, reading, deleting and updating data. 
I learned how to push my code to Heroku, including how to troubleshoot Heroku error codes.
Also, I learned about object-oriented databases, how to sort data and enter things into the DOM. 

<h3 id="optimizations">Optimizations:</h3>
I would like to provide the following future features/optimizations:
<br><br>
<ul>
  <li>User login and authentication - create userbase for each user</li>
  <li>Name and quote suggestion and auto-complete</li>
  <li>Use a UI framework (bootstrap) to redesign the look of the website</li>
</ul>
