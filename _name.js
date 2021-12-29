/*CMD
  command: /name
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Type your name
  keyboard: 
  aliases: 
CMD*/

User.setProperty("name", message, "string");
Bot.runCommand("/slp")
