# invest-owl-stock-analyzer
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

<p>
The Securities and Exchange Commission's (SEC) Form 13F is a quarterly report that is required 
to be filed by all institutional investment managers with at least $100 million in assets under management. 
It discloses their equity holdings and can provide insights into what the smart money is doing in the market.

Hedge funds are required to file Form 13F within 45 days after the last day of the calendar quarter. 
Most funds wait until the end of this period in order to conceal their investment strategy from 
competitors and the public.

My goal is to create a webapp with a more user-friendly interface to view SEC 13F filings. 

Why would you want to view SEC 13F filings?
<ul>
  <li>Allows an individual to analyse/view investment holdings of large institutional managers, such as hedge funds</li>
  <li>This information can server as a valuable learning experience for investors.</li>
  <li>Monitor all institutional ownerships in real-time.</li>
</ul>

Limitations & caveats
<ul>
  <li>The SEC does not review the information in the filing and 
  has not determined if it is accurate and complete. The reader should not assume 
  that the information is accurate and complete.</li>
  <li>Filings are not timely - Most managers submit their 13Fs as late as 
  possible because they do not want to tip off rivals to what they are doing.</li>
  <li>A risk for both professional and retail investors is the tendency 
  to borrow investment ideas from one another. Hedge fund managers are no more 
  immune to behavioral biases than anyone else.</li>
  <li>Funds are only required to report long positions. This can give an incomplete picture, because some funds generate most of their returns from their short-selling.</li>
</ul>

See https://www.investopedia.com/terms/f/form-13f.asp for information. 
</p>



My application is hosted on Heroku.

<br>
<h3 id="link">Link to webpage:</h3>
<p>https://pro-owl.herokuapp.com</p>

<h3 id="screenshot">Screenshot</h3> 

<h3>Welcome page</h3>

![owl-homepage](https://user-images.githubusercontent.com/99220339/180356304-e9b71b23-593b-441f-9fe0-8cfa2dbf38c7.png)

<h3>User's dashboard</h3>

![owl-userdashboard](https://user-images.githubusercontent.com/99220339/180356265-fe2c4c97-54d9-4a7b-9790-29391caaf165.png)

<h2 id="process">My Process</h2>
<h3 id="builtWith">Built With:</h3>
<ul>
  <li>React</li>
  <li>Redux</li>
  <li>MongoDB</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Javascript/HTML/CSS</li>
</ul>




<h3 id="howItWorks">How It Works</h3>


Upon entering a name and quote and clicking the button, the quote/name data is stored in a MongoDB database.
The page is redirected (aka refreshed) and the new name/quote is shown on the page. 
Additionally, the user can 'like' and 'delete' names/quotes from the page and database by clicking the 'thumbs up' and 'trash' icons. 
The number of 'likes' on the page will increase by 1 upon each 'thumbs up' click. 

Analytics

<ul>
  <li>React</li>
  <li>Redux</li>
  <li>MongoDB</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Javascript/HTML/CSS</li>
</ul>


<h3 id="whatILearned">What I Learned</h3> 
This was a fun project and I learned the following:

Backend:

<ul>
  <li>Build models/schemas with Mongoose</li>
  <li>Utilized JSON web tokens to securely transmit data between frontend and backend </li>
  <li>Practiced using controllers, middleware, and routers to solidify my learning</li>
</ul>

Frontend: 

<ul>
  <li></li>
  <li></li>

</ul>

<h3 id="optimizations">Optimizations:</h3>
There are many additional features I plan to include, such as the following items: 
<br><br>
<ul>
  <li>Stock price live feed</li>
  <li>Search institutional investment managers by name</li>
  <li>Additional features in the user dashboard - watchlist, other SEC company filngs, improve the overall UX/UI</li>
</ul>
