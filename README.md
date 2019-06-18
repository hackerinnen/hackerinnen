# hackerinnen.space [![Netlify Status](https://api.netlify.com/api/v1/badges/52a6b589-d735-4956-890e-3c59760772a6/deploy-status)](https://app.netlify.com/sites/loving-noyce-189cc2/deploys)

hackerinnen.space is a project to provide encouragement and enhance visibility for hackers who identify as not male in different places.
This aims for introducing non male programmers of your neighbourhood, helping to find mentors, speakers, new friends,
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

    If you experience trouble translating your profile in one of the languages, you could use [DeepL](https://www.deepl.com/translator) or Google Translate.
    If you do not want to add a pic of yourself, maybe you want to find a picture that is somehow connected to you? It would be wonderful if the profiles were individualized, but if you do not want that, it is also ok, we are happy that you are on board :-)
4.  See `hackerinnen/content/spaces/a-test-city` folder and copy the content structure of all index files and add them to your own files.
5.  Remove all `draft: true` settings in the head of your files.
6.  Check if you updated the `date` setting in the head of your files.
7.  Add your answers. If you do not want to answer a certain question, just leave it out.
8.  Create a PR

## Report a bug

## Support the project

You know someone who definitely needs to show themselves? Please, share the idea and invite people to be on the page!

## Technologies used to build this project

- [Hugo Framework](https://gohugo.io/)
- [Bulma CSS Framework](https://bulma.io/)

## Setup

If you want to run the the project locally, you need to install [Hugo](https://gohugo.io/getting-started/installing/).

### How to run the page locally

Run the following commands in the terminal:

`git clone git@github.com:normade/hackerinnen.git`

`cd hackerinnen`

`hugo server`

To see drafts run

`hugo server -D`
