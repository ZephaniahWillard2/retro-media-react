Objective:
Develop a React application that simulates a simple media store featuring “retro media items” such as VHS tapes, DVDs, and CDs. This project aims to deepen your understanding of React's core features including hooks, state management, events, props, JSX, and component-based architecture.

Application Features
Browse Media Products: Users can view a list of retro media products available for sale, including VHS tapes, DVDs, and CDs. Each product displays its type (e.g., VHS, DVD, CD) and title.

Add Products to Cart: Users have the option to add media items to their shopping cart by clicking an "Add to Cart" button associated with each item. This action simulates adding items to a cart, which could later be expanded to actual cart functionality in a full-scale application.

Responsive Interface: The application responds immediately to user inputs, such as clicking on the "Add to Cart" button, enhancing the interactivity of the user experience.

Visual Feedback: Provides visual feedback when actions are taken, such as updating the state when a product is added to the cart, although in this basic version, feedback is limited to console messages.

Requirements:
Hooks: Utilize the useState hook to manage the application's state. This will allow you to hold data about the media items and any user interactions.
State Management: Maintain a list of media items within the application's state. This list will be dynamic, allowing for future additions like adding items to a user's cart or updating quantities.
Events: Implement event handling to manage users adding media items to a cart
Props: Use props to pass media item details data and like the add-to-cart function event handlers from parent components to child components
JSX: Use JSX to structure your component templates. This will be critical in rendering your application's UI and displaying dynamic data based on the state.

Assignment Details:
Create the following components with specified functionalities:

App Component:

This main component holds the state for media items and cart operations.
Render the MediaList component, passing down media items from the state and a function to handle adding items to the cart.

MediaItem Component:

Receive a media item object and an add-to-cart function as props.
Display the media item’s title, type, and include a button to add the item to the cart, demonstrating event handling.

MediaList Component:

Receive a list of media items and a cart addition function as props.
Render a list of MediaItem components, each receiving its own item details and the shared cart function, illustrating props usage for component communication.

Project Setup:
Initialize the project using Create React App.
Install any necessary dependencies.
Maintain a well-organized project directory.

Provided Media Items:
You must use the following media items in your project, which represent different types of retro media available for purchase:

[
  { "id": 1, "type": "VHS", "title": "Back to the Future" },
  { "id": 2, "type": "DVD", "title": "The Matrix" },
  { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
]