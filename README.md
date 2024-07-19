# infernal-bot-poc
Proof of concept Discord bot for publishing Infernal rulings to an external source

You will need to edit the 'dummy-config.json' file and rename it to 'config.json' before the bot will work.

# Setting up the bot
1. Create a new application on https://discord.com/developers/
2. Under the OAuth2 tab check off 'bot'
3. Under the Bot Permissions panel check off 'Manage Messages' and 'Use Slash Commands'
4. Copy the Generated URL and open it in your browser to add the bot to a Discord server you are an admin of.

# First time run
1. Run 'npm install' to install dependencies
2. Run 'node deploy-commands.js' to register the commands to the bot
3. Run 'node .' to start the bot
