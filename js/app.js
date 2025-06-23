// Event Handling
// Event handling is how JavaScript responds to user interactions like clicks, keypresses, form submissions, etc.

// Basic Syntax

element.addEventListener("eventType", callback);

// Types od Event
// | Event Type  | Description               |
// | ----------- | ------------------------- |
// | `click`     | Mouse click               |
// | `change`    | Form field changed        |
// | `submit`    | Form submitted            |
// | `mouseover` | Mouse hovers over element |
// | `keydown`   | Key pressed down          |
// | `load`      | Page or image loaded      |


// Event Object
// You can access event details via the event object:
element.addEventListener("click", (event) => {
  console.log(event.target);  // Element clicked
});


// 4. Event Delegation
// Instead of adding an event listener to every child element, you add one to the parent and handle events based on the clicked target.

// Why Use It?
//Fewer event listeners (better performance).
//Works for dynamically added elements.

//Example: Event Delegation in a List