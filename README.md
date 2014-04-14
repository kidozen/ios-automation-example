ios-automation-example
======================

design patterns on ios automation scripts

You have 2 options to run tests, one is from instruments interface, but this is slower and you have to execute each test manually. The other option is to run from console, you have to use this command:

instruments -t automation.tracetemplate_location “.app_location”\ -e UIASCRIPT automation_script_test_location
 

In our case would be:

instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate "/Users/user/Library/Application Support/iPhone Simulator/6.0/Applications/AFF90D0A-7AFB-4FA6-8C52-A15E270C0CEC/tasks.app" -e UIASCRIPT /Users/user/Desktop/aut/UserAddTaskThenDeleteIt.js
 

Keep in mind for older versions of xcode, lower than 4.5 the automation.tracetemplate is located here:

/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/Instruments/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate"
 

And also depending how you installed xcode .app path could also change.

 
