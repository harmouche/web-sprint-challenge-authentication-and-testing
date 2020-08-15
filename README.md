# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

Implement an User Authentication System. Hash user's passwords before saving the user to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

Cryptographic Signatures
JSON web tokens have cryptographic signatures, and that’s not the case with session cookies.

JSON is Stateless
JSON web tokens are stateless because claims are stored client-side, rather than in the server’s memory. Authentication can occur locally, instead of per request, where requests have to go through the server’s database, or similar locations. This means that a user can be authenticated multiple times without having to communicate with the site or app’s database, and without using up a lot of its resources in the process.

Scalability
Because session cookies are stored in the server’s memory, it has the potential of using a lot more resources if the website or app sees a lot of traffic. Because JSON web tokens are stateless, they can potentially save on server resources in many cases.This also means that JSON web tokens tend to be a lot more scalable as a result.

Authentication Across Multiple Locations
Session cookies only work across a single domain, or on its subdomains. If they try to go to a third party, browsers tend to disable them. This is particularly an issue if you want your website to have a secure connection with an API that uses a different domain.

With JSON web tokens, you can authenticate a user across multiple locations including multiple domains, mobile devices, and APIs to name a few. This is because they’re stored locally in the request header.

2. What does `bcrypt` do to help us store passwords in a secure manner.
bcrypt will take a password string and hash it into an encrypted password before saving it into a database.

3. How are unit tests different from integration and end-to-end testing.

unit tests test small blocks of code and make sure they perform as expected, because it is smaller it doesn't need much computing power as integration or end-to-end testing which will test all of the app functionalities. 

4. How _Test Driven Development_ changes the way we write applications and tests.

Test-driven development is an approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring.


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] An authentication workflow with functionality for account creation and login implemented inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Middleware used to restrict access to resources for non authenticated requests. Use the file: `./auth/authenticate-middleware.js` as a starting point.
- [ ] Configuration for running tests using `Jest`.
- [ ] A **minimum o 2 tests** per API endpoint.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Write at least 4 tests per endpoint.
- [ ] Extract user validation into a separate method and write unit tests for it.
- [ ] Use a separate testing database for the endpoint tests.
- [ ] Implement authentication with the other method, if you used JWTs for MVP use sessions for stretch and vice versa.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
