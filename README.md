# JavaScript DOM Challenge - Provide Proof of Aliens

## Summary

In this project, I built a website to display information about alien sightings with filter capabilites so that the user only sees what they want. The final application is hosted on Github Pages at <https://joekell.github.io/DOM_Manpulation_ALIEN-PROOF/>.

### Using the Final Application
The application can be reached at <https://joekell.github.io/D3InteractiveScatterPlot/> and is hosted on Github Pages. When opening the page no data shows at first.

![Opening the Site](FinalImages/SiteLoad.PNG)

After scrolling down, you can click "Filter Table" without entering any of the filters to view all data.

![All Data View](FinalImages/AllData.PNG)

To view sightings from a particular date, city, state, county, or shape, enter the desired results in the appropriate fields and then click "Filter Table"!

## Tools
These are the tools, techniques, and resources used in this project.

* Javascript is used to filter to the appropriate data upon click of the filter button

* HTML is used for the framework of the page

* Github Pages is used to host the data and final application

### About the Data

Alien sighting data was provided for the challenge without a source, it was likely generated.

## Project Steps

### Step 1: Static Page Elements
The first step was to set up locations for the svg area, chart area, plot title, and axes labels. These elements do not change, the labels appear to change in the final application, but that is done with css styles.

### Step 2: Import CSV

  ![CSV Load](FinalImages/CSV.PNG)

In my js file, this function takes up the majority of the space. After static page elements are built, the interactive parts that use the data are required. The appropriate data is then parsed as numbers.

  ![Parse Data](FinalImages/parse.PNG)

### Step 3: Scales and Axes

  ![Gauge Chart](FinalImages/Scale.PNG)

A little bit of math is involved to create the scale for the axes, once these are done, I created groups for each axis and threw them onto the chart area. 

  ![Gauge Chart Code](FinalImages/Axes1.PNG)
  ![Gauge Chart Code](FinalImages/Axes2.PNG)

### Step 4: Groups and Circles and Text, Oh My!

  ![Bubble Chart](FinalImages/Group.PNG)

First I created a group for each line of data. These groups hold the data and will contain a circle and a text with the state abbreviation.

  ![Bubble Chart Code](FinalImages/Circle.PNG)

The circle is added in according to the positioning of the data on the chart.

  ![Bubble Chart Code](FinalImages/Text.PNG)

The text is also added in according to that same positioning. The text is shifted down slightly since the y value determines the top of the text element.

### Step 5: Tool Tips

  ![Demographic Data](FinalImages/Tip.PNG)

I used D3.Tip() to create the tips, then I called the tip to the circleGroup. Then on mouseover and on mouseout events are added so that the tips are only there when you want them.

  ![Demographic Data Code](FinalImages/TipCode.PNG)

### Step 6: Transitions and Changing Axes

When a different label is selected for one of the axes, an on click event is triggered. 

1. The class of the selected label becomes active and the class of the others become inactive.

2. A new scale is calculated for the selected data set.

3. The axis tick values are transitioned from old to new.

4. The position of the circles and text are transitioned from old to new.

5. The tool tips are updated again.
