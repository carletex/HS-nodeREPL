# Hacker School python REPL (WIP)


## Usage

1. Clone this repository
2. Create an OAuth application on you Hackerschool settings
   1. Use `urn:ietf:wg:oauth:2.0:oob` as your app redirect URI
3. Create a `keys.sh` file and put the following values:

   ```bash
   export HS_CONSUMER_KEY='<your_hackerschool_app_consumer_key>'
   export HS_CONSUMER_SECRET='<your_hackerschool_app_consumer_secret>'
   ```

4. Put those variables in your environment with `$ source keys.sh`
5. Run `$ npm install` to install all the dependencies
6. Run `$ node repl.js` and enter your HackerSchool user and password to get the auth and access token
6. Start sending get requests to the Hacker School API (e.g. `HS> var data = get('/api/command'`)
