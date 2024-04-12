function generateReport() {
    const output = document.getElementById('output');
    const table = document.querySelector('table');
    const checkboxes = Array.from(table.querySelectorAll('thead tr th input[type="checkbox"]'));
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    const selectedColumns = checkboxes.reduce((acc, checkbox, i) => {
        if (checkbox.checked) {
            acc.push(i);
        }
        return acc;
    }, []);

    const report = rows.map(row => {
        const cells = Array.from(row.children);
        return selectedColumns.reduce((obj, colIndex) => {
            const columnName = checkboxes[colIndex].name;
            const cellValue = cells[colIndex].textContent;
            obj[columnName] = cellValue;
            return obj;
        }, {});
    });

    output.value = JSON.stringify(report, null, 2);
}