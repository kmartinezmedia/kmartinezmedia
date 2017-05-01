# kmartinezmedia.com

## Production ports used for kmartinezmedia.com
5003 - kmartinezmedia.com
5002 - api.kmartinezmedia.com
5001 - pei-annual-report
5000 - freelance-branded-palette
4999 - pei-original-penguin
4998 - freelance-brown-wedding
4997 - celmatix-style-guide
4996 - celmatix-polaris-platform

## Local setup

Find and replace all `kmartinezmedia.com` instances in  `src/index.html` and this readme file

Generate app icons/images here `https://realfavicongenerator.net/`

Generate sitemap here `https://www.xml-sitemaps.com/`

Grab google fonts here `https://fonts.google.com/`

Run `npm install && npm run setup` in root

open `.env` file in sublime & edit with correct definitions

When running 'npm start' make sure to load api.kmartinezmedia.com in another terminal window

## Digital Ocean DNS setup

`https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean`

Point DNS to following servers

`NS1.DIGITALOCEAN.COM`
`NS2.DIGITALOCEAN.COM`
`NS3.DIGITALOCEAN.COM`

Check to make sure worked by typing `whois kmartinezmedia.com` in console

Add new domain in networking tab of digital ocean

Add `@` hostname to A entry

Add  `dev` hostname to A entry (this will be staging)

Add `www` hostname to CNAME entry


## Digital Ocean setup directory

`ssh username@digitalOceanIP` and `sudo mkdir -p /var/www/kmartinezmedia.com/html` to create new site directory

`cd /var/www/kmartinezmedia.com/html` and `git clone https://github.com/kmartinezmedia/kmartinezmedia.git .` to clone repo into that html directory

`touch .env`

Type i to enter insert mode

Copy and paste environment variables

`esc` and `:wq` to write the current file and exit

`NODE_ENV=staging pm2 start server.js --name kmartinezmedia.com-staging` and `npm run staging` for staging

`NODE_ENV=production pm2 start server.js --name kmartinezmedia.com` and `npm run production` for production


## SSL Setup

Stop nginx temporarily `sudo systemctl stop nginx`

Startup letsencrypt plugin with `sudo letsencrypt certonly --standalone`

Fill in the info and jot down expiration date to renew


## Digital Ocean NGINX setup

Detailed directions can be found `https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04`

`sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/kmartinezmedia.com`

`sudo nano /etc/nginx/sites-available/kmartinezmedia.com`

`sudo ln -s /etc/nginx/sites-available/kmartinezmedia.com /etc/nginx/sites-enabled/`

`sudo nginx -t` checks errors

`sudo systemctl restart nginx`


## Installation

Clone repo

`npm install && npm run setup`

This will install all dependenceis and create `.env` in root directory to store environment variables

Open `.env` file in text editor

In new terminal window `ssh username@digitalOceanIP` then `cd /var/www/kmartinezmedia.com/html`

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

`ssh username@digitalOceanIP` then `cd /var/www/kmartinezmedia.com/html` and `git pull`

Then run `npm run staging`

`npm run staging` is shortcut for running `npm install && npm update cmx-components && npm run clean && npm run build && NODE_ENV=staging pm2 restart kmartinezmedia.com-staging`


## Production Server

`ssh username@digitalOceanIP` then `cd /var/www/kmartinezmedia.com/html` and `git pull`

Then run `npm run production`

`npm run production` is shortcut for running `npm install && npm update cmx-components && npm run clean && npm run build && NODE_ENV=production pm2 restart kmartinezmedia.com`


## Adding new environment variables

When adding environment variables don't forget to add entry in `config/.sample-env` file for future devs

Will also need to ssh into staging and production to update those .env files

`ssh username@digitalOceanIP` then `cd /var/www/kmartinezmedia.com/html`

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


## Testing staging/production build locally

When wanting to test locally before deploying to staging/production you can use `npm run staging:local` or `npm run production:local`

On the staging/production server we use PM2 to manage node processes

The deployment `npm run staging` and `npm run production` script contains a command to restart a pm2 process with the name `kmartinezmedia.com-staging` or `kmartinezmedia.com`

The only difference between deployment script and `npm run staging:local` or `npm run production:local` is that the local variations replace pm2 to use plain node so you don't have to download pm2 to test

If you wish to use pm2 instead to replicate exact environment you can install PM2 globally on your machine using `npm install pm2@latest -g`

After it is installed, go to the root directory of kmartinezmedia repo and create the staging or production pm2 process using `pm2 start server.js --name kmartinezmedia.com-staging` or `pm2 start server.js --name kmartinezmedia.com`

You can now run `npm run staging` to `http://localhost:5004/` and `npm run production` to `http://localhost:5003/` successfully

This process will continuouslly run in the background, but you can stop the PM2 process using `pm2 stop kmartinezmedia.com-staging` and `pm2 stop kmartinezmedia.com` when done testing
