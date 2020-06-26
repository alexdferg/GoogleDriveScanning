var ScannerAccount = ;

function changeowner(owner, folderid) {
  var files = DriveApp.getFolderById(folderid).getFilesByType(MimeType.PDF);
  var i = 0;
      while (files.hasNext()){
        var file = files.next()
        if (file.getOwner().getEmail() == ScannerAccount){
            file.setOwner(owner);}
      }}
  

function main(){
  changeowner(user,folderid)
}

function FolderUploadTrigger(){
  var drive = DriveApp.getFolderById('1lM_9EtH2MSnsDyASluCBzkCUMOdJ_Po8')
  ScriptApp.newTrigger('main').timeBased().everyMinutes(1).create()
}
