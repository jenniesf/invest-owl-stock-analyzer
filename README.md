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
<!--    <li><a href="#development">Getting started with development</a></li>
    <ol>
      <li><a href="#development">Development</a></li>
   </ol> -->
   <li><a href="#author">Author</a></li>
    <ol>
      <li><a href="#author">Portfolio</a></li>
    </ol>
</ol>

<h2 id="overview">Overview</h2>

<h3>About</h3>
<p>
The Securities and Exchange Commission's (SEC) Form 13F is a quarterly report that is required 
to be filed by all institutional investment managers with at least $100 million in assets under management. 
It discloses their equity holdings and can provide insights into what the smart money is doing in the market.

Hedge funds are required to file Form 13F within 45 days after the last day of the calendar quarter. 
Most funds wait until the end of this period in order to conceal their investment strategy from 
competitors and the public.

My goal is to create a webapp with a more user-friendly interface to view SEC 13F filings. 

<h3>Why would you want to view SEC 13F filings?</h3>
<ul>
  <li>Allows an individual to analyze/view investment holdings of large institutional managers, such as hedge funds</li>
  <li>This information can serve as a valuable learning experience for investors.</li>
  <li>Monitor all institutional ownership filings in real-time.</li>
</ul>

<h3>Limitations & caveats</h3>
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



My application is hosted on Heroku. See link below.

<br>
<h3 id="link">Link to webpage:</h3>
<p>https://pro-owl.herokuapp.com</p>

<h3 id="screenshot">Screenshots:</h3> 

<h3>Welcome page</h3>

![owl-homepage](https://user-images.githubusercontent.com/99220339/180356304-e9b71b23-593b-441f-9fe0-8cfa2dbf38c7.png)

<h3>Register an account</h3>

![owl-register](https://user-images.githubusercontent.com/99220339/180469156-75aada45-2a90-4768-b3db-e79a25650a10.png)

<h3>User's dashboard</h3>

![owl-userdashboard](https://user-images.githubusercontent.com/99220339/180356265-fe2c4c97-54d9-4a7b-9790-29391caaf165.png)

<h2 id="process">My Process</h2>
<h3 id="builtWith">Built With:</h3>

<h3 id="howItWorks">Technologies and Frameworks</h3>
<ul>
  <li>React</li>
  <li>React-router</li>
  <li>Redux</li>
  <li>MongoDB</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Bcryptjs</li>
  <li>JSON Web Token</li>
  <li>Javascript</li>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<h3 id="howItWorks">How It Works</h3>

<p>
As a retail investor myself, I enjoy researching companies before I decide to invest in a company. 
Often times I find myself struggling to find new companies to invest. There are over 2,000 companies listed on the New York Stock Exchange. Here comes Form 13F - a quarterly report that is required to be filed by all institutional investment managers with at least $100 million in assets under management. The 13F is a great resource to find new ideas for companies to invest and research what Wall Street/Money Managers are investing and holding on quarterly basis. 
</p>
<p>
My goal is to create an app where I can view all 13F filings in one place and where I have 
the historical information to review. I plan to include a comparison feature to view 13F comparisons between quarters. 
In addition to 13F filings, I plan to include additional search functions for other SEC filings, such as Annual Reports on 10Ks, Earning Calls, Financial Statements etc. 
</p>

Upon loading the webpage, an unauthenticated user is directed to the home/welcome page and authenticated user is directed to their dashboard. The home/welcome page includes a snippet about the site and the user can either log in or register a new account. 

Once authenticated or registered, the user is directed to their dashboard. Here, the user can search for 13F filings. In order to obtain data from the backend and API and display the data, two parameters are necessary: company CIK and reporting period. CIK is a SEC ID to identify corporations and individual people who have filed disclosure with the SEC. The form fields include an example of the reporting period format as a placeholder. (I plan to add a company search feature so users are not required to enter CIKs.) Using React, the Form 13F information is displayed on the dashboard. 

<!-- Analytics

<ul>
  <li>React</li>
  <li>Redux</li>
  <li>MongoDB</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Javascript/HTML/CSS</li>
</ul>
 -->

<h3 id="whatILearned">What I Learned</h3> 
This was a fun project and I learned how to:
<br><br>
<ul>
  <li>Build models/schemas with Mongoose</li>
  <li>Hash passwords for user database</li>
  <li>Utilize JSON web tokens to securely transmit data between the frontend and backend </li>
  <li>Practice using controllers, middleware, and routers to solidify my learning</li>
  <li>Practice creating separate React components, such as headers, forms, and spinners</li>
  <li>Learn about React states and how to implement</li>
  <li>Learn how to implement useDispatch to dispatch an action</li>
</ul>

<h3 id="optimizations">Optimizations</h3>
There are many additional features I plan to include, such as the following items: 
<br><br>
<ul>
  <li>Stock price live feed</li>
  <li>Search institutional investment managers by name</li>
  <li>Additional features in the user dashboard - watchlist, other SEC company filngs, improve the overall UX/UI</li>
</ul>

<!-- <h2 id="development">Getting started with development</h2>
<h3 id="Development">Development</h3>
 -->

<h2 id="author">Author</h2>

<ul>
  <li>Portfolio: https://jcsf.netlify.app/</li>
</ul>
