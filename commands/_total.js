/*CMD
  command: /total
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Total SLP Farmed
  keyboard: 
  aliases: 
CMD*/

User.setProperty("total", message, "string");

Bot.runCommand("/dopost");
