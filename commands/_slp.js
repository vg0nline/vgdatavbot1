/*CMD
  command: /slp
  help: 
  need_reply: true
  auto_retry_time: 
  answer: SLP today
  keyboard: 
  aliases: 
CMD*/

User.setProperty("slp", message, "string");

Bot.runCommand("/total");

