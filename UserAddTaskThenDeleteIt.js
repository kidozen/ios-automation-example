// A user add a new task then delete it
#import "mainScreenController.js"
#import "taskDetailController.js"

var target = UIATarget.localTarget();

var mainScreen =  new mainScreenController();
var taskDetail = new taskDetailController();


mainScreen.addTask(); // Add a new task
target.delay(5); // this is uggly but ui automation don't synchonize the actions on alerts
mainScreen.checkPendingtasks(); // go to Pending List
taskDetail.tapTask("Meeting","important"); // tap on the task
taskDetail.tapDelete(); // tap on delete
taskDetail.tapBack(); //back to previous list








