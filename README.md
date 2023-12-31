So originally I used create-next-app CLI.
My local npm config was outdated and 'corrupted' by an old commercial project where I had NPM registry set to their own artifactory.
Thus it mixed up and I decided to create it from scratch (check GIT history).

I added json-server as a meaningful mock for getting the real data.

Some time afterwards I recieved the below code instructions and code template :)

Quite a story.

In the end I switched from styled-components to sass. I refactored a lot of code.

There are still some things to work with around mobile view.
Nevertheless this code gives a feel of what is to be expected.

Points:
Normally I would argue about details such as sudden color change for the same element (date time) of a component. That is rather not a consistent UX approach for RWD. I decided to stick with 1 color.

I would also consider taking other approach towards pictures. Also minimizing them for post grid and loading higher quality for full posts.

To run:

Make sure you have node installed.

1. npm install
2. npm run j-server (for mocking api)
3. npm run devbuild

[![Logo](https://gc-strapi-production.s3.eu-west-2.amazonaws.com/Gigaclear_Core_Logo_Master_RGB_Orange_fc5526ff8b.svg "Logo")](Gigaclear_Logo)

# Gigaclear Code Challenge - Frontend NextJs

The main objective of this challenge is to test your skills in Frontend Development using Next.js. As part of the review and the following discussion, we will be paying attention to:

- Your coding style
- Your knowledge of frameworks and other technologies
- Your adherence to best practices
- Your UI/UX skills

## The Challenge

The following [Figma](https://www.figma.com/file/6Lqq3DipyAvKRaXzHqm7os/gigaclear-frontend-challenge?node-id=0%3A1 "Figma") layout needs to be developed using Next.js based on the project skeleton we have provided.

Please consider the Figma as a prototype; we would also like to see your ability to propose improvements, features and new contributions to the product's UI!💄

These could include:

- Adding new functionalities
- Creating animations
- Developing visual optimizations

If you decide to do so, please let us know what changes you are proposing to introduce alongside the submission.

## Using the project skeleton

Alongside this README is a project skeleton from which to build your submission.

It is adapted from a standard Next.js template, with some additional contents to get you started (see the `src/components` folder). It also includes a Storybook extension (https://storybook.js.org).

To run this project, run

`yarn`

to install the dependencies, then

`yarn dev`

to spin up the application and

`yarn storybook`

from a separate terminal to spin up the storybook.

## About the API

To mock the API, you can create a JSON file with the data you will need. You could for instance assume that the content is coming from a headless CMS such as Strapi.

## About the project

You **SHOULD** develop:

- A page with all post cards sorted by post date
- Dynamic navigation when clicking on post cards

If you have additional time, you **COULD** develop:

- Tests
- Documentation of your components on Storybook

## Sending

After finishing the challenge, please upload your submission to a GitHub repository; the person in charge of recruitment will let you know who to share it with.
