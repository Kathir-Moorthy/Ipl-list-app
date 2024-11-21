# 🏏 IPL Players List App

Welcome to the **IPL Players List App**! This app allows you to manage IPL team rosters effortlessly. Users can select their favorite team, add players, view the squad, and download the squad list as a PDF. The app also dynamically changes colors based on the selected IPL team for a personalized experience.

---

## 🎨 Features

- 🌟 **Dynamic Theming**: Background, card, and font colors adapt to the selected IPL team.
- 📝 **Add Players**: Easily add players to your team's roster.
- 📋 **View Squad**: Display all added players in a visually appealing format.
- 📄 **Download Squad**: Export the complete squad list as a PDF.
- 🌗 **Light/Dark Mode Support**: User-friendly design with proper contrast.
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile.

---

## 🚀 Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **PDF Generation**: jsPDF library
- **Routing**: React Router
- **Styling**: TailwindCSS with dynamic themes

---

## 📂 Project Structure

```plaintext
.
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── logo.png
├── src
│   ├── components
│   │   ├── Addtodoform.jsx       # Form to add players
│   │   ├── Addtofdolist.jsx      # Component to display and download player list
│   │   ├── Header.jsx            # Header component
│   │   ├── Card.jsx              # Card component for team-specific data
│   │   └── Todoitem.jsx          # Individual player item
│   ├── pages
│   │   ├── Landing.jsx           # Main landing page
│   ├── App.jsx                   # Main App component
│   ├── App.css                   # Global styles
│   ├── index.js                  # Entry point
│   └── teamStyles.js             # Dynamic team color styles
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```
## 🌈 Team Color Themes

| Team   | Background Color | Card Color    | Text Color  |
|--------|------------------|---------------|-------------|
| **CSK** | 🟡 Yellow        | 🔵 Blue       | ⚪ White     |
| **MI**  | 🔵 Blue          | 🟡 Yellow     | ⚪ White     |
| **RCB** | 🔴 Red           | ⚫ Black      | ⚪ White     |
| **KKR** | 🟣 Purple        | 🟡 Yellow     | ⚪ White     |
| **SRH** | 🟠 Orange        | ⚫ Black      | ⚪ White     |
| **RR**  | 🩷 Pink          | 🔵 Blue       | ⚪ White     |
| **DC**  | 🔵 Blue          | 🔴 Red        | ⚪ White     |
| **PBKS**| 🔴 Red           | 🟡 Yellow     | ⚪ White     |
| **LSG** | 🔵 Blue 600      | 🔵 Blue 400   | ⚪ White     |
| **GT**  | 🔵 Blue 700      | ⚫ Gray 700   | ⚪ White     |

## 🔧 How to Run Locally

```bash
# Step 1: Clone the repository
git clone https://github.com/your-username/ipl-players-list-app.git
```
## Step 2: Navigate to the project directory
```bash
cd ipl-players-list-app
```
## Step 3: Install dependencies
```baah
npm install
```
## Step 4: Start the development server
``` bash
npm start
```
## Step 5: Open the app in your browser at:
