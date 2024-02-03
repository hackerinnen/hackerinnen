# hackerinnen.space [![Netlify Status](https://api.netlify.com/api/v1/badges/52a6b589-d735-4956-890e-3c59760772a6/deploy-status)](https://app.netlify.com/sites/loving-noyce-189cc2/deploys)

## A project to provide encouragement and enhance visibility

hackerinnen.space originated from our personal experience that it is quite hard for non-male people in the Tech sector to spot other non-male people in the same field. Oftentimes you even think that there are no such people in your own city. But that is not the reality, we're here!

[On this website](https://www.hackerinnen.space) we share our personal experience and want to encourage people to participate in the creation of software, to contribute to the web and other technologies, to be creative, to learn together and exchange ideas - to hack together. Even though it sometimes looks different, not all programmers are men.

This initiative does not imply that we dislike men or want to distance ourselves from them. On the contrary, we all do know many men who love Tech and programming as much as we do, and we highly value them! By the way, many of them also wish for more diversity in Tech. Because Tech is colorful and doesn't have a gender.

In this spirit - let's spread our colors and show ourselves!

## Table of Contents

**[How to show yourself](#how-to-show-yourself)**<br>
**[Technologies used to build this project](#technologies-used-to-build-this-project)**<br>
**[Setup](#setup)**<br>
**[Report a bug](#report-a-bug)**<br>
**[Support the project](#support-the-project)**<br>
**[Isn't hacking illegal?](#isnt-hacking-illegal)**<br>
**[Recruiter info](#information-for-recruiters)**<br>
**[Contact](#contact)**

## How to show yourself

If you feel you belong here, please join and show yourself!

Local setup:

1.  Fork the repository and clone it to your local machine
2.  Switch into `hackerinnen` directory
3.  Create a feature branch
4.  Create a folder with your name in `/content/hackerinnen/{firstname-lastname}`

    A person's folder should contain 3 files:

    - index.de.md for the German translation
    - index.en.md for the English translation
    - a picture (please name it with your name, e.g. `ada-lovelace.jpg`)

    If you experience trouble translating your profile in one of the languages, you could use [DeepL](https://www.deepl.com/translator) or Google Translate. You can also skip one of the translations by keeping the setting `draft: true`.

    If you do not want to add a pic of yourself, maybe you want to find a picture that is somehow connected to you? It would be wonderful if the profiles were individualized, but if you do not want that, it is also ok, we are happy that you are on board :-)

5.  See `/content/hackerinnen/ada-lovelace` folder and copy the content structure of all index files and add them to your own files.
6.  Remove all `draft: true` settings in the head of your files. If you don't have a translated version (either English or German you can keep the draft setting and your profile won't show in this language).
7.  Check if you updated the `date` setting in the head of your files.
8.  If you like to be found when browsing `spaces` (hackerinnen.space/spaces) you need to update the `spaces` setting in the head of your files.

    Spaces can be a city or an area you can be met "offline".
    If your space doesn't exist, create a folder `/content/spaces/{name-of-your-space}`, add an `_index.de.md` and `_index.en.md` file to the new folder. Add an picture of that space.

9.  Add your answers. If you do not want to answer a certain question, just leave it out.
10. Create a PR

## Technologies used to build this project

- [Hugo Framework](https://gohugo.io/)
- [Bulma CSS Framework](https://bulma.io/)

## Setup

If you want to run the the project locally, you need to install [Hugo](https://gohugo.io/getting-started/installing/).
Make sure to install the **extended version**, since it is requiered for compiling scss/sass file.

### How to run the page locally

Run the following commands in the terminal:

`git clone git@github.com:hackerinnen/hackerinnen.git`

`cd hackerinnen`

`hugo server`

To see drafts run

`hugo server -D`

## Support the project

If you know people who should definitely show themselves, please let them know about the project and invite them to add their profile!

You can also help to spread the idea by referring us through your social media channels for example by linking or tagging us. We can be found on [Instagram](https://instagram.com/hackerinnen.space) and [Twitter](https://twitter.com/hackerinnen).

And we have issues :-) If you want to help to improve the website and/or the submission form, please feel free to grab one open issue and work on it. Beginners are welcome and we are always ready to help!

## Isn't hacking illegal?

The term Hacking is often used in mass media to describe a malicious action by a technically skilled person, like subverting security to break into computer systems to do damage. But the original meaning of this word is different! During the 1950s this term described the devotion to technical challenges and was associated with creativity and originality. Those smart tinkerers called themselves Hackers for the first time. It was around that time that the derived word to hack was coined, which these days stands for the creative solution for a technical problem.

We use the German word Hackerinnen in its original intent to describe people, who are passionate about using a computer to solve problems creatively and turn ideas into reality. We reject using a computer for malicious and illegal purposes and don't support any related techniques or points of view.

## Information for Recruiters

We don't know if the Hackerinnen presented on this platform are looking for a job, a career change or a freelance gig. If this is the case, they're most probably already on the lookout on other platforms. This platform has no commercial purpose. We kindly ask you to refrain from recruiting activities via this network.

## Contact

If you need help adding your profile, if you have questions or want to comment something, you can find us on [Instagram](https://instagram.com/hackerinnen.space) and [Twitter](https://twitter.com/hackerinnen) or send us an email to hello at hackerinnen.space.
