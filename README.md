# Autofleet - Home-challenge - Riel Journo:

Autofleet company, thank you for this challenge 
While this was a long and hard one, it was also a lot of fun.

The idea was to make a web app that helps the user manage his car business
by targeting the data of thor location.

I decided to use mongoDB to store the data.
In addition, I invested a lot in the distribution of folders (even when I did not have to)
to later develop a capability of magnification.

## The Design drawing: 

![This is an image](https://i.ibb.co/dJJqmHd/Design.png)

Catching the polygon points and calculating if the car is inside the polygon was the tricky part
because it was hard to understand how to hook the drawing from Mapbox engine.
Although I have written the algorithm, It's still not working at the moment
My time was up and I still could not find a way out.

The algorithm is in a file called `pointpoly.js` for now on route `public/js/pointpoly.js`

I'm planning to finish it at the weekend because I very enjoyed the challenge.

## technology set

**Language I use:**

`Node.js`, `Express.js` and `JavaScript` for Sarver and Back-End.

map engine from `mapbox`

`mongoDB` for the Database

`HTML`, `CSS`, `JavaScript` and `Boostrap` for Front-End.


`React` to make the front might be better choices because of the separate refreshing,
However, I'm new to React so I decided to stick with the language I know better.

I created a `.gitignore` file that lists which files to ignore, but I've put them all here (even the `APIkey` `Tokens`  and `.env` files) so you can see them all.

At the heroku site I did everything "by the book".

heroku URL: https://whispering-oasis-57254.herokuapp.com/
