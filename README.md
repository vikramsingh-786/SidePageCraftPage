# SidePageRepairPage - Game UI Component

The task involves recreating a complex interactive UI component called `SidePageRepairPage`, based on a Figma design, with full interactivity and responsiveness.

## 🔧 Technologies Used

- **Framework:** React (with Hooks)
- **State Management:** useState, useEffect
- **Drag & Drop:** React DnD / HTML5 Drag-and-Drop API
- **Styling:** CSS Modules / Tailwind CSS / Styled Components (choose your actual method)
- **Time Handling:** JavaScript Date and Interval

---

## 🧪 Features Implemented

### ✅ Tabs System
- Three tabs implemented: `Queue`, `Table`, and `History`
- Smooth tab switching with visual indication of the active tab

### ⏳ Queue Tab
- Displays multiple queue items such as “Broken Rifle”, “Damaged Scope”, etc.
- Each item includes:
  - Name
  - Start Time
  - End Time
  - Remaining Time
  - Real-time updating progress bar
- Queue items automatically removed once progress reaches 100%

### 🛠️ Table & Inventory (Drag-and-Drop)
- Drag and drop functionality between Crafting Table and Inventory
- Supports full and partial stack transfers
- Quantity updates accurately on both sides
- Visual feedback on valid drop zones and item states

### 🧾 History Tab
- Displays item history cards matching the Figma design
- Fully responsive and styled as per specification

---

## 📱 Responsiveness
- Fully responsive layout for various screen sizes
- Mobile-first design considerations

---

## 🧠 Edge Case Handling

- Prevents negative or invalid quantities during drag
- Prevents items from being dropped into incorrect zones
- Handles multiple queue items updating simultaneously
- Ensures consistent UI state after multiple interactions

---

## 🚀 Getting Started

### Install Dependencies

npm install


Run Locally
npm start






