# Bartenders2U Bloc Capstone Project
This is app was built is for my capstone project at Bloc. The idea stemmed from a friend's company. 

The production version of this is on Heroku at [I'm an inline-style link](https://bartenders2u.herokuapp.com)

The actual website with the company is at [I'm an inline-style link](https://www.bartenders2u.com). Go check em out.

Scroll to the **End-user Flow** section of this README for a description of the various use-cases.


### `npm install`

Use this command to install dependencies before running the app.

Install dependencies at the root directory and in the client directory.

### `npm run dev`

Use this command to run the Express server on Local 5000 and the React app on 3000.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the Express app<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.



### `npm test`

Runs the unit and integration tests.<br>


**Pages**

Home
![alt text](/client/src/components/images/dev-when.png "Home Page")

Our Services
![alt text](/client/src/components/images/dev-packages.png "Packages")

Our Company
![alt text](/client/src/components/images/prod-ourcompany.png "Our Company")

**Forms**
![alt text](/client/src/components/images/multistep-form.gif "Request for Bartender Form")



**End-User Flows**

1. Submit Request for Bartender Form

    1.1 From the home page, enter in the date, start time and end time of event then hit next
   
    1.2 Enter in the address and name of venue then hit next
    
    1.3 Select the Package, event size, event type and contact information (first name, last name, email and phone number) then hit next
   
    1.4 Review the information on the "Review" form to make sure they match everything that was entered in the previous forms
  
    1.5 Hit the "Request a Bartender" button at the button to submit the request


2. View Packages

    2.1 From the home page, click on the "Our Services" link on the left side of the header

3. View Company Info

    3.1 From the home page, click on the "Our Company" link on the left side of the header

4. Register

    4.1 Click on the "Signup" link on the right side of the navbar
    4.2 Enter a name, an email, a password, and the password again to confirm
    4.3 Click the register button
    Note: if you have a Gravatar.com account and your email matches your Gravatar email, it will use your profile picture from Gravatar

5. Log In

    5.1 Click on the "Login" link on the right side of the navbar
    5.2 Enter your email and password
    5.3 Click the login button

6. Edit Account

    6.1 While loggged in, click on your name on the right side of the navbar
    6.2 Select the "Account" option on the dropdown menu
    6.3 Click the "Edit Profile" button
    6.4 Enter in your new name, new email or both
    6.5 Hit "Update" to save or "Cancel" to go back

7. Delete Account

    7.1 While logged in, click on your name on the right side of the navbar
    7.2 Select the "Account" option on the dropdown menu
    7.3 Click the red "Delete My Account" button
    7.4 Click okay at the alert box(s)


