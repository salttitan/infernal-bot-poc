// import { SlashCommandBuilder } from "discord.js";
const { SlashCommandBuilder, TextChannel, PermissionFlagsBits } = require("discord.js");

module.exports = {
  // Prompts the user to enter a Discord message link
  // Only works if the user has the "Manage Members" permission, this can be changed to whatever criteria you want
  category: 'utility',
  data: new SlashCommandBuilder()
    .setName("publish")
    .setDescription("Reads the provided Discord Message link.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Link for message to publish")
        .setRequired(true).setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    ),
  async execute(interaction) {
    // Find the message string from the interaction
    const messageLink = interaction.options
      .getString("message", true)
      .toLowerCase();
      // Get the message ID from the end of the provided link
    const messageId = messageLink.split("/")[messageLink.split("/").length - 1]; // The id of the message is in the last position in the link
    console.log("found message id: ", messageId);
    // Fetch the message from the channel
    const resolvedMessage = await interaction.channel.messages.fetch(messageId);
    console.log("retrieved message content: ",resolvedMessage.content);
    // We now have the message contents, so this is where we would put in the code to send the contents off to the DB that serves the website and/or app.
    // For now we just return a message to the channel containing the message content so we can see that it worked.

    await interaction.reply(`Oh, got this: ${resolvedMessage.content}`);
  },
};
