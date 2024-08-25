
# URL-SHORTENER-CLIENT
•	This URL Shortener web application is a user-friendly web-based tool that allows users to create shortened versions of long URLs, making them easier to share.
•	This app is designed with a complete Login, Registration, and Forgot password authentication system.
•	This app is built using the MERN stack and styled with react-bootstrap for a responsive user interface.

## Overview
## 1. Sign IN Page
•	Users enter their registered email ID and password to sign in to their account.

### User Existence Verification
•	The system validates the existence of the user in the database.
•	Validates the activation of the account and password check.

## 2. SignUp Page
•	New users can register to the site with details like FirstName, last name, Email Address, Password and “User” as the default role.
•	“Admin” in the role – as full access to the app (CRUD) operations.
•	“User” in the role – create and update their data and read the entire URL directory.
•	Front-end validation is implemented on the sign-up page.
## 3. Two-step Registration
•	When user signs up, inactive account is created and an email is sent containing activation link
•	Clicking on the link, redirects user to signin page where user can activate their account by providing proper credentials and clicks on “Activate my account” link.
## 4. Forgot Password Link
o If the user clicks on forgot password link, a reset-password link with random string will be sent to the individual's registered mail ID.
o The random string is securely stored in the database.

## 5. Reset Password Page
o User allows to set new password and re-enters the same in the confirm password field.
o IF the new password and confirm password does not match, an error message is displayed.
o Upon submission, the new password is securely stored, and the random string is cleared from the database.

## 6. Home Page
•	After successful log in, an authenticated token will be stored in the session storage.
•	After token verification, User can create shortURL in the app and view the URL directory.
•	Copy to clipboard: copy the shortened URL to the clipboard for easy sharing.

## 7. Dashboard page
•	This page is accessible only for Admin to view all the user details and update the user’s status.

## 8. MYURLs Page
•	This page is accessible only for User to view shortUrls created by them and to view their profile details.
•	By clicking on Logout Button, User will be logged out and redirected to sign in page by clearing the session storage.

# Technology Used
React
React-Router
Axios
React-bootstrap
Toastify – to handle error and success notifications.
