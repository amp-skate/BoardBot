# Board Bot

## Setup
You will need to define a `.env` file with the following contents:
```
DISCORD_BOT_KEY = 'SOME_DISCORD_KEY_VALUE'
```

## Development
You will need to install `node_modules` and start the bot server to test your changes:
```
npm install
npm start
```

## Deployment
This bot is hosted as a [Heroku](https://www.heroku.com) app, named `pure-board-bot`:
```
heroku login
heroku git:remote -a pure-board-bot
git push heroku main
```
