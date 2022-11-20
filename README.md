# Zain Virani - LANDR test submission

## Description

This project is a simple user contact list. You can add, edit, and delete contacts. The contact list persists even when the local app is shut down.

## Running the Application

To run the project, clone this repo and then run the following commands:
```
npm install (or yarn install)
npm run server
```
and in a new terminal tab
```
npm run start
```

This will spin up the json-server to act as a mock API. The site should be available at localhost:8080.

## Future Considerations
- Fix tests
- Add proper input validation and better validation UI
- Finish photo feature
- Add sorting, searching
- Make sure stylesheet is split up among components instead of in one main file
- Implement proper theme
- Make theme and stylesheet accessible to modal windows
- Upgrade to React 18
- Switch off MUI

## A note on my tests
I struggled to set up a proper test environment for this project. Originally I was trying to work with `react-test-renderer` as Enzyme was no longer compatible past React 16. I had one main pain point
- I was able to get `ShallowRenderer` to work but `TestRenderer` for deeper interaction testing was throwing errors having to do with functional components and refs, which confused me because I did not use refs. 
Ultimately, I downgraded to 17 (for which I found an Enzyme adapter on npm), but still was not able to finish in time, as I ran into trouble with `jsdom`.

Given more time I would have added proper tests within `act()` blocks to test:
- Edit contact button
- Add contact button
- Delete contact button
- Interacting with the user avatars

I left my attempt in the project.
