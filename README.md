# THINGS TO SORT BEFORE MONDAY!!!!!!!!

## UX

Clicking on a newly posted article just shows loading forever…  could be an issue with the back end as it returns 404 for all of the articles that have been posted.

posted comments - change it so that user can only post if they are logged in.

can i make a vote up/down feature for the comments?

make a delete function for the articles and comments written by logged in user.

can i make a log out button?????



## Code

Any components that are not using state should be functional, convert them from classes to functions.

The render of Articles is really long, consider making the individual articles into their own component. 

What’s different about singleTopic and Articles? They seem like the same thing apart from the endpoint they use. These could be the same component that handles both. 

When you fetch a single article you don’t catch any errors. This means your page just stays on the lovely loading gif. If there’s an error navigate to the error page. \

Your Filter component is calling fetchArticles from this.props but you never pass it as a prop. You are also destructuring name from the event.target. The event.target is the form which won’t have a name, you’re looking for the sort condition, which is in state. Once you have these the fetchArticles function in state will need to make an api request to get the filtered articles.
