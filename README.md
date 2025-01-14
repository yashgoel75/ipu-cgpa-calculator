# IPU CGPA Calculator 🎓

IPU CGPA Calculator is a simple, web-based application designed to help students from **Guru Gobind Singh Indraprastha University (GGSIPU)** calculate their **SGPA (Semester Grade Point Average)** and **CGPA (Cumulative Grade Point Average)** accurately and efficiently.

---

## 🌟 Features

- **SGPA Calculation**  
  Calculate SGPA based on grade points and credits for individual subjects.

- **CGPA Calculation**  
  Compute CGPA by aggregating SGPA and credits across multiple semesters.

- **User-Friendly Interface**  
  Responsive design with a clean, modern layout powered by **Bootstrap**.

- **Interactive Functionality**  
  Real-time input handling and dynamic updates using **JavaScript**.

---

## 📂 Project Structure

```plaintext
.
├── index.html     # Main HTML file containing the app structure
├── style.css      # Custom CSS for styling the app
├── script.js      # JavaScript for interactivity and calculations
└── src/           # Contains images, icons, and other static assets
    └── logo.png   # Logo used in the application
    └── switch-to-dark-mode.png      # toggle used in the application to switch to dark mode
    └── switch-to-light-mode.png     # toggle used in the application to switch to light mode

```
---

## 💻 Technologies Used
- **HTML5:** For structure and content.
- **CSS3 & Bootstrap:** For styling and responsiveness.
- **JavaScript:** For calculations and dynamic behavior.

---

## 🛠️ How It Works

### SGPA Calculation
- Input the number of subjects and their respective grade points and credits.
- The app calculates the weighted average using the formula:
  ```plaintext
  SGPA = (Σ (Grade Points × Credits)) / (Σ Credits)
  ```

### CGPA Calculation
- Input the SGPA and total credits for each semester.
- The app computes CGPA using:
  ```plaintext
  CGPA = (Σ (SGPA × Total Credits)) / (Σ Total Credits)
---

## Dynamic Toggle
- Switch between SGPA and CGPA modes seamlessly using radio buttons.

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yashgoel75/ipu-cgpa-calculator.git
   cd ipu-cgpa-calculator
   ```
2. Open the index.html file in your browser.
3. Interact with the app by selecting SGPA or CGPA calculation modes.

---

## 🌐 Live Demo
Try out the app here: [IPU CGPA Calculator](https://ipucgpacalculator.vercel.app)

---

## 📈 Example Calculations

### SGPA Calculation Example
Suppose you have 3 subjects with the following details:

| Subject   | Grade Points | Credits |
|-----------|--------------|---------|
| Subject 1 | 9            | 4       |
| Subject 2 | 8            | 3       |
| Subject 3 | 7            | 2       |

The SGPA is calculated as:
```plaintext
SGPA = (9×4 + 8×3 + 7×2) / (4 + 3 + 2) = 8.33
```

### CGPA Calculation Example
Suppose you have 3 subjects with the following details:

| Semester   | Grade Points | Credits |
|------------|--------------|---------|
| Semester 1 | 8.5          | 20      |
| Semester 2 | 9.0          | 24      |
| Semester 3 | 8.2          | 22      |

The CGPA is calculated as:
```plaintext
CGPA = (8.5x20 + 9.0×24 + 8.2×22) / (20 + 24 + 22) = 8.58
```

---

## 🤝 Contributions
Contributions, issues, and suggestions are welcome!
Feel free to fork the repository and submit pull requests.

---

## 🧑‍💻 About Me
Developed by **Yash Goel**, a passionate learner pursuing **B.Tech in Artificial Intelligence & Machine Learning** at **Vivekananda Institute of Professional Studies, Delhi**.
