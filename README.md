# physio-ai
React frontend Assignment to use for login


# Tech Stack use 
we have use ReactJs,Html,Css,Javascript,react-chartjs-2,html2canvas,jspdf,chart.js

# Login Page
User have to provide uid and password than it will get encoded and send the data to api https://myphysio.digitaldarwin.in/api/login_v1 ,if api response will be correct than it show log in with api but if there is some error from api than also it will login showing message as log in with default data.If api is correct than it will decode the response but if api server is incorrect than it will take default value.During this phase in local storage it will store with user is logged in true and redirect to Chart page.

<br/>
<img src="https://i.ibb.co/vwxNHyh/Screenshot-8.png" alt="Screenshot-8" />
<br/>

# Chart Page
So this page we can only access when we are loged in.It will show user a chart with static data as shown below in the page.This page also contain a logout button which can be used to get log out of the page and redirect to login page.When user click on logout than the data in local storage with user will get removed.

<br/>
<img src="https://i.ibb.co/QQKf9Ns/Screenshot-9.png" alt="Screenshot-9" />
<br/>

# Pdf print
When ever user click on print pdf on chart page,user will get a pdf downloaded and then he can print it.

<img src="https://i.ibb.co/PWccPXc/Screenshot-10.png" alt="Screenshot-10">


# Responsive
Both the pages are responsive as shown in below images.
<img src="https://i.ibb.co/hDs3QN4/Screenshot-11.png" alt="Screenshot-11" />
<img src="https://i.ibb.co/0F8MgvL/Screenshot-12.png" alt="Screenshot-12" />
