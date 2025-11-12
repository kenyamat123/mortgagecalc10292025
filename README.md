# Project Title: Home Loan Calculator
#### Name: Kenneth Alfanta Yamat
#### GitHub username: kenyamat123
#### edX username: BancorpOne
#### City, State, Country: Cameron, MO USA
#### Video Demo: https://www.youtube.com/watch?v=z09zRSl61vA&t=2s
#### Date of Video: 11/12/2025

## Description:

My CS50 final project is a simple mortgage calculator using HTML, CSS, and JavaScript.  The term mortgage and “home loan” will be used interchangeably in this readme file.  I did this simple project because I have limited coding experience. For example, I don’t know any of the Swift programming language, thus creating an iOS app is out of the question.  I have limited Java programming but not enough to create an Android app. Thus, this mortgage calculator was the more practical project. I did not do any extra learning other than what was in this class and the other class offered by HarvardX called “Web Programming with Python and JavaScript.”

This mortgage calculator is the beginning of an extensive loan calculator for a website that I eventually would like to create for a mortgage company.  I create this in Visual Studio Code and when it was finished, tested, and working as intended, I uploaded it to my cs50.dev account under the name project. When I say tested, I did not include any code to test it, I simply tested it in the Chrome browser.

This calculator will calculate the monthly principal and interest of a home loan after you enter the purchase price/home value, down payment/equity, the interest rate, and the term in years.  The loan amount is “read only” and is calculated by subtracting the down payment/equity from the purchase price/home value.  Once you enter all the required figures you click on “calculate your monthly payment.” Then you will see your monthly payment, which in this case will only include the principal and interest. The purchase price as well as the down payment is for a purchase while the home value and the equity are used for refinancing.

The only files I have for this loan calculator is the index.html for the HTML and CSS files, a mortgage.js for the JavaScript files, and this readme.md file for this summary.  I did not create a separate CSS file as this HTML with the CSS in one index.html file was less than 70 lines.  If it was much more then I would likely have separated the CSS into its own file. 

The index.html having both the HTML and the CSS is my outline, forms, labels, and style for this home loan calculator.  It was easier to design this home loan calculator in one file with the HTML and CSS first and then at the end I put the script tag to connect it to my JavaScript file called mortgage.js.  I used Bootstrap for the CSS stylesheets.  I used AJAX for speed and to use with my JavaScript.  Cloudflare was mainly used for speed and load times. 

The mortgage.js file has the JavaScript for this home loan calculator.  If I have JavaScript in any program, I think it is easier to have JavaScript in a separate file because you can have two windows open while you put your functions in JavaScript for the corresponding parts in the HTML file.  If I put the JavaScript on the same file as the HTML and CSS, it would be too cluttered and less simple with possibly more lines of code than if I separated it into its own file.

In this mortgage.js file I can call the user inputs, assign them names, and then perform the calculations. For example, to come up with the loan amount, I calculated this by subtracting the down payment/equity from the purchase price/home value.  The user will enter the interest rate as a number and then it is changed to a decimal and sent to be calculated when the monthly payment is calculated.  The term is in years and changed to total amount of payments by multiplying the years by 12 and this is returned to calculate the monthly payment.

The mortgage payment was calculated by using the math.pow function with the other calculations in my JavaScript. It was almost like these calculators are very widely used because as I was entering my code, new code would be suggested to use which made this project slightly easier regarding entering in the input.

I also have an alert function that will alert the user, in the event they do not enter in all the required inputs, that they must enter in all fields to return a monthly payment.  For example, if the user does not enter in the purchase price/home value, then we cannot calculate the monthly payment. Thus, if the user did not enter one of the parameters, there would be an alert that pops up that states, “Please fill in all fields.”

This was just a basic calculator for principal and interest.  It did not include a graph showing the amortization schedule which would show on what monthly payment how much would be paid to principal and how much of the payment was to interest.  It also did not include any mortgage payment, property taxes, or homeowners insurance. These would only be estimates and not exact values.

This is my CS50 final project.
