// A user add a new task title: Meeting and description:Important, then delete it
#import "mainScreenController.js"
#import "taskDetailController.js"

var target = UIATarget.localTarget();

var mainScreen =  new mainScreenController();
var taskDetail = new taskDetailController();


mainScreen.addTask(); // Add a new task
mainScreen.setTaskTitle("Meeting");//set a title for the new task
mainScreen.setDescriptionTitle("important");//set a description for the new task
mainScreen.dismissKeyboard();
mainScreen.tapOk();//press ok
mainScreen.checkPendingtasks(); // go to Pending List
taskDetail.tapTask("Meeting","important"); // tap on the task
taskDetail.tapDelete(); // tap on delete
taskDetail.tapBack(); //back to previous list
UIALogger.logMessage("Test Finished Successfully!!!");








