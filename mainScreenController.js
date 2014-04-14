var target = UIATarget.localTarget();
var app = target.frontMostApp();


function mainScreenController(){
}

//Here I map all the object and define an action for each

// Add button
mainScreenController.prototype.addTask = function (){
	app.navigationBar().buttons()["Add"].tap();
}

//Completed tasks
mainScreenController.prototype.checkCompletedtasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["Completed"].tap();
}

//Pending tasks
mainScreenController.prototype.checkPendingtasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["Pending"].tap();
}

//All tasks
mainScreenController.prototype.checkAlltasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["All"].tap();
}

//set title

mainScreenController.prototype.setTaskTitle = function(titleValue){
	app.mainWindow().scrollViews()[0].textFields()["titleTextField"].setValue(titleValue);
}


//set description

mainScreenController.prototype.setDescriptionTitle = function(descriptionValue){
	app.mainWindow().scrollViews()[0].textViews()["descriptionTextView"].setValue(descriptionValue);
}

//tap ok

mainScreenController.prototype.tapOk = function(){
	app.mainWindow().scrollViews()[0].buttons()["okButton"].tap();
}

//tap cancel
mainScreenController.prototype.tapCancel = function(){
	app.navigationBar().leftButton().tap();
}

//dismiss keyboard
mainScreenController.prototype.dismissKeyboard = function(){
	app.windows()[1].toolbar().buttons()["Done"].tap();
}
