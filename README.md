# JeffMHsu-Revamp
 
I rebuilt [my personal website](https://jeffmhsu.com/) which was previously written in pure HTML/CSS, using React and SASS. The main reason for the revamp was that adding new projects or changing parts of the website using just HTML/CSS is a nightmare, and I don't want to have to do that ever again. Using SASS is also great for assigning frequently used styles to variables, making the styling process easier.

My website is also a Progressive Web App, meaning it has a responsive design and is downloadable on desktop and mobile. It also uses the [SW Precache Webpack Plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin) to leverage service workers to cache static content. This made my website load 90% faster on all revisits, and allows me to even navigate it without an internet connection.
