/*CMD
  command: /dopost
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let newRow = {
  'Name': User.getProperty("name"),
  'Slp': User.getProperty("slp"),
  'Total': User.getProperty("total")
}

let prms = {
  sheetName: "Users",
  row: newRow,
  onSuccess: "onSuccess",
  onError: "onError"
}

rowIndex = User.getProperty("rowIndex");
if(rowIndex){
  prms.rowIndex = rowIndex;
  Libs.GoogleSpreadSheet.editRow(prms);
  return
}

Libs.GoogleSpreadSheet.addRow(prms)
