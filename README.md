![Sticky Notes Screenshot](https://raw.githubusercontent.com/Gitzak/react-sticky-notes/main/Screenshot%202024-07-28%20193317.png)

Sticky Notes Application
========================

This is a full-stack notes application built with React.js and Vite for the frontend, and Appwrite for the backend. The application allows users to create, manage, and organize sticky notes with ease.

Demo Link: https://react-sticky-notes-one.vercel.app/
Source Tutorial: https://sticky-fcc.vercel.app/

Tech Stack
----------

-   **Frontend:** React.js
-   **Backend:** Appwrite

Features
--------

-   **Production Database:** All note data is stored on a live, production-ready database.
-   **Draggable Notes:** Drag and drop notes anywhere on the screen for better organization.
-   **Autosave Changes:** Changes to note content and position are automatically saved without any explicit action required.
-   **Color Picker:** Change the color of your notes at any time using the built-in color picker.

Installation
------------

1.  **Clone the repository:**

    `git clone https://github.com/Gitzak/react-sticky-notes.git
    cd sticky-notes-app`

2.  **Install dependencies:**

    `npm install`

3.  **Start the development server:**

    `npm run dev`

4.  **Build for production:**

    `npm run build`

Configuration
-------------

Ensure you have Appwrite set up and configured. Update the Appwrite configuration in your project to match your setup.

Usage
-----

-   **Creating Notes:** Click the '+' button to create a new note.
-   **Editing Notes:** Click on a note to edit its content.
-   **Dragging Notes:** Click and hold a note to drag it around the screen.
-   **Changing Colors:** Use the color picker to change the color of a note.

Dependencies
------------

`"dependencies": {
  "appwrite": "^15.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}`

Contributing
------------

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

License
-------

This project is licensed under the MIT License.