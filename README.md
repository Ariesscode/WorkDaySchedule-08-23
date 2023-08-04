# Work Planner 
The goal of this project was to build a work day planner using a third party API source 
such as J-query to safely manipulate DOM related elements. I used a moment.js date format to
show the current date and time of the current day. This app will take user input in each time block,
so that events or plans are saved to the local storage. Once the user stores their plan, it will continously
be displayed when user refreshes the browser. Each time displayed in the time block has an id which holds the key to
local storage input. In this case I used the DOM tree method, in which you call the closest method to find
all ancestors or matches to the specified element. In this case, the set attributes and classes matched and then I
was able to grab the id, which was hour-x. In order for the saved events to stay on the page, I first used a method named
"Read-only", which gave me the same output that I wanted, which was for saved events to be displayed in time block after
browser was refreshed and to also make the time block uneditable. I came across another function which was "disabled", which 

## Your Task


## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

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
