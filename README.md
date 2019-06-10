# hackerinnen.space [![Netlify Status](https://api.netlify.com/api/v1/badges/52a6b589-d735-4956-890e-3c59760772a6/deploy-status)](https://app.netlify.com/sites/loving-noyce-189cc2/deploys)

hackerinnen.space is a project to improve visibility for hackers who identify as not male in different places.
This aims for introducing role models of your neighbourhood, helping to find mentors, speakers, new friends,
communities and places to learn and build technology. Please see the website for a detailed description.

If you feel you belong here, please join and show yourself!

## How to show yourself

1.  Checkout the project repo
2.  Create a feature branch
3.  Create a folder with your name in `hackerinnen/content/spaces/{your-city}/{firstname-lastname}`
    
    If your city doesn't exist, create a folder `hackerinnen/content/spaces/{name-of-your-city}`, add an `_index.md` and `_index.en.md` file to the new folder. Then create your name folder.
    
    A person's folder should contain 3 files:
    - index.md for the German translation
    - index.en.md for the English translation
    - a picture (please name it with your name, e.g. `ada-lovelace.jpg`)

4.  See `hackerinnen/content/spaces/a-test-city` folder and copy the content structure of all index files and add them to your own files.
5.  Remove all `draft: true` settings in the head of your files. 
6.  Add your answers
7.  Create a PR

## Report a bug

## Support the project

You know someone who definitely needs to show themselves? Please, share the idea and invite people to be on the page!

## Technologies used to build this project

- [Hugo Framework](https://gohugo.io/)
- [Bulma CSS Framework](https://bulma.io/)

## Setup

### How to run the page locally

Run the following commands in the terminal:

`git clone git@github.com:normade/hackerinnen.git`

`cd hackerinnen`

`hugo server`

To see drafts run

`hugo server -D`
