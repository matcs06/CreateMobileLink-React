# openmobile: Create Mobile Link
<h3>This is a simple lib to generate a qrcode with the link of your local React JS or any other framework, like View, Angular, that you can open on you phone to test.</h3>

<p> 1 - To install you first have to use: yarn add openmobile -D or npm i openmobile --save-dev </p>

<p> 2 - Add it to you main package.json script: "scripts":{"mobile-link": "node ./node_modules/openmobile/ip.js"} </p>  
<div>
<p> 3 - Run on your command line the script, passing the port of where your app is runing(If it is running on port 3000, you dont need to inform the port on command line)</p>
<image src="./mobile-link.PNG" alt="Mobile link qracode">
<p> 4 - Use your cellphone camera on the qrcode and it will give you the link of where you local app is running</p> 

<h3> If you are using VITE </h3>
<p> Just add the --host flag in the "dev" script in you package.json: <b>"dev": "vite --host"</b> </p>
<image src="./viteflag.PNG" alt="vite-flag">

<h3> If you want to open it directly to a page from the QRCode </h3>
<p> Just pass the page route after the port, EG: "yarn openmobile 3000<b>/admin/app</b>" </p>
<image src="./page.PNG" alt="page-flag">


</div>
