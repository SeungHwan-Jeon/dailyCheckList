function createCalendar(year, month) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const container = document.getElementById("calendar");
    container.innerHTML = ""; // Clear previous calendar

    dayNames.forEach((day) => {
        const dayElem = document.createElement("div");
        dayElem.textContent = day;
        dayElem.className = "day-name";
        container.appendChild(dayElem);
    });

    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        const dayElem = document.createElement("div");
        dayElem.textContent = date.getDate();
        dayElem.className = "day";
        if (date.getDate() === 1) {
            const offset = (date.getDay() + 6) % 7; // Adjust for starting day of the week
            dayElem.style.gridColumnStart = offset + 1;
        }
        container.appendChild(dayElem);
        date.setDate(date.getDate() + 1);
    }
}

createCalendar(2023, 4); // May 2023
