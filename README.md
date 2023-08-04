# Work Planner 
The goal of this project was to build a work day planner using a third party API source 
such as J-query to safely manipulate DOM related elements. I used a moment.js date format to
show the current date and time of the current day. This app will take user input in each time block,
so that events or plans are saved to the local storage. Once the user stores their plan, it will continously
be displayed when user refreshes the browser. Each time displayed in the time block has an id which holds the key to
local storage input. In this case I used the DOM tree method, in which you call the closest method to find
all ancestors or matches to the specified element. In this case, the set attributes and classes matched and then I
was able to grab the id, which was hour-x. In order for the saved events to stay on the page, I first used the "getItem() to retrieve from local storage and set the value to the input to be displayed. The user will be able to update and store plans each time they enter previous plans. The plans will still be added to local storage. Each time block had set classes, in which three different classes would be added or removed dependindg on the current hour. Class of
"past" would be applied if the time block hour is below the current hour. Class "present" would be applied if the time block hour is equal to the current hour. Lastly, the "future" class would be applied if the current hour was before the time block hour. In the console log, you will be able to locate the local storage and see the saved time block id and the value of input, which is the saved event. I learned that when using moment.js you have to read all documentation on how to format, implement and syntax before using. I like the vanilla javascript, I find it easier to understand and it very readable to pick up on quickly. J-query and using third party API's can be very humbling, fun and a headache when first starting off. In the future, I will be implementing and practicing to build apps using third party API's and J-query. 

## Your Task


## User Story

An employee would like a daily work planner, so
that employee has the benefit of work efficiency. Employee 
woud like an App that enables the employee to save plans entered in App.

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Mock-up
![Alt text](Assets/05-third-party-apis-homework-demo.gif)
