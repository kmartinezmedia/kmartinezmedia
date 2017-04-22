# kmartinezmedia

## Prerequisites

[Node.js](http://nodejs.org/) >= v6 must be installed.

[NPM](https://www.npmjs.com/) >= 3.10 must be installed


## Installation

Clone repo

Run `npm install && npm run setup` in root

This will install all dependenceis and create `.env` in root directory to store environment variables

Open `.env` file in text editor

In new terminal window `ssh u71289328@home443574865.1and1-data.host`

Run `vim .env` and copy + paste contents to your local `.env` file

Press `ESC` and then type `:q` to exit


## Development Server

`npm start` will run the app's server at [http://localhost:8000](http://localhost:8000)

with `NODE_ENV=development` and `DEVELOPMENT_PORT=8000`

If a static build is present in `dist`, it will be served otherwise, a hot-reloading development build will be served from `src`

`npm run build` creates a static production build in `dist`

If you run npm start anytime after `npm run build` has been run the server file will load the static files from `dist` and any changes made after that build was generated will not be reflected

To enable hot-reloading again run `npm run clean` to delete the `dist` folder

Now when running `npm start` the server file will point to the `src` folder as expected


## Deploying to the staging server

`ssh u71289328@home443574865.1and1-data.host` then `git pull` which will pull updates from master

Then run `npm run staging` and this will run the staging script defined in the package.json

`npm run staging` is shortcut for running `npm install && npm update cmx-components && npm run clean && npm run build && NODE_ENV=staging pm2 restart kmartinezmedia-staging`


## Production Server

`ssh u71289328@home443574865.1and1-data.host` then `git pull` which will pull updates from master

Then run `npm run production` and this will run the staging script defined in the package.json

`npm run production` is shortcut for running `npm install && npm update cmx-components && npm run clean && npm run build && NODE_ENV=production pm2 restart kmartinezmedia-production`


## Adding new environment variables

When adding environment variables don't forget to add entry in `config/.sample-env` file for future devs

Will also need to ssh into staging and production to update those .env files

`ssh u71289328@home443574865.1and1-data.host` then `cd /mnt/dev/seva/kmartinezmedia-prod`

VIM into each directories .env file to add new entries

Type `i` to enter insert mode & add contents

When finished press `esc` to exit insert mode & type `:wq` to write the current file and exit


## API

We use `server.js` file to define our endpoints

To debug when adding new endpoint you can run `npm run api` which will create build of src files and use nodemon to run `server.js` file. 

Nodemon is helpful because it updates the browser when changes are made to `server.js` file instead of having to restart node process on each change in order to see updates reflected in browser

## Airtable

We use airtable to store some content so that the marketing team can easily make updates
  
To access their api we store our custom airtable url and key in two environment variables `AIRTABLE_KEY` AND `AIRTABLE_URL` defined in our .env file

We use axios npm module to make http (GET or POST) requests on client side to our express server api

i.e. `axios.post('airtable/questionnaire', data)` in `src/index.js` to save questionnaire to airtable

This points to the `app.post('/airtable/:table)'` in `server.js`


## Contributing to repo

If new packages need to be added always install using `--save` so the package is included in `package.json`

i.e. `npm install axios --save`

If forgotten this will cause build fails on other machines

Before making pull request it's always good to test your build with fresh node_modules

Use `npm run staging:local` or `npm run production:local` to test locally since this script will remove `node_modules` folder and run everything from scratch


## Coding style

Follow the Airbnb javascript style guide to maintain cosistent coding style [https://github.com/airbnb/javascript]

Some takeaways fromt the guide

- Use `const` for all of your references; avoid using `var`
- If you must reassign references, use `let` instead of `var`
- Use single quotes `''` for strings
- When you must use function expressions, use arrow function notation
- If the function body consists of a single expression, omit the braces and use the implicit return
- Multiline imports should be indented just like multiline array and object literals.
- Don't use iterators. Prefer JavaScript's higher-order functions instead of loops like for-in or for-of
- Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays
- Use Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects
- Use one const or let declaration per variable instead of chaining declarations [https://github.com/airbnb/javascript#variables--one-const]
- Avoid using unary increments and decrements (++, --) instead using `num += 1` or `num -= 1`
- Use camelCase when naming objects, functions, and instances [https://github.com/airbnb/javascript#naming--camelCase]
- Don't save references to this. Use arrow functions
- A base filename should exactly match the name of its default export [https://github.com/airbnb/javascript#naming--filename-matches-export]


## CSS style

Follow BEM methodology [https://en.bem.info/methodology/quick-start/]

B stands for block: A functionally independent page component that can be reused is considered a block

- Blocks can be nested in each other
- You can have any number of nesting levels

i.e. `<header class="header"> </header>`

E stands for element: A composite part of a block that can't be used separately from it

- The element name describes its purpose ("What is this?" — item, text, etc.), not its state ("What type, or what does it look like?" — red, big, etc.)
- The structure of an element's full name is block-name__element-name
- The element name is separated from the block name with a double underscore (__)
- An element is always part of a block, and you shouldn't use it separately from the block
- An element is an optional block component. Not all blocks have elements.

i.e. `<header class="header"> <input class="header__input"> </header>`

M stands for modifier: An entity that defines the appearance, state, or behavior of a block or element

- The modifier name describes its appearance ("What size?" or "Which theme?" and so on — size_s or theme_islands), its state ("How is it different from the others?" — disabled, focused, etc.) and its behavior ("How does it behave?" or "How does it respond to the user?" — such as directions_left-top).
- The modifier name is separated from the block or element name by a single underscore (_).

When to use modifiers?

- Used when only the presence or absence of the modifier is important, and its value is irrelevant. For example, disabled. If a Boolean modifier is present, its value is assumed to be true.
- The structure of the modifier's full name follows the pattern:
  `block-name_modifier-name`
  `block-name__element-name_modifier-name`
- Used when the modifier value is important. For example, "a menu with the islands design theme": menu_theme_islands.
- The structure of the modifier's full name follows the pattern:
  `block-name_modifier-name_modifier-value`
  `block-name__element-name_modifier-name_modifier-value`


## Testing staging/production build locally

When wanting to test locally before deploying to staging/production you can use `npm run staging:local` or `npm run production:local`

On the staging/production server we use PM2 to manage node processes

The deployment `npm run staging` and `npm run production` script contains a command to restart a pm2 process with the name `kmartinezmedia-staging` or `kmartinezmedia-production`

The only difference between deployment script and `npm run staging:local` or `npm run production:local` is that the local variations replace pm2 to use plain node so you don't have to download pm2 to test

If you wish to use pm2 instead to replicate exact environment you can install PM2 globally on your machine using `npm install pm2@latest -g`

After it is installed, go to the root directory of kmartinezmedia repo and create the staging or production pm2 process using `pm2 start server.js --name kmartinezmedia-staging` or `pm2 start server.js --name kmartinezmedia-production`

You can now run `npm run staging` to `http://localhost:5004/` and `npm run production` to `http://localhost:5003/` successfully

This process will continuouslly run in the background, but you can stop the PM2 process using `pm2 stop kmartinezmedia-staging` and `pm2 stop kmartinezmedia-production` when done testing


## TODO

* Favicon in new logo

* Sitemap

* 