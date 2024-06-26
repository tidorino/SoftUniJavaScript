function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      const searchQuery = document.querySelector('#searchField').value;
      const cells = Array.from(document.querySelectorAll('tbody td'));
      const activeRows = Array.from(document.querySelectorAll('tbody tr.select'));

      activeRows.forEach((row) => { 
         row.classList.remove('select');
      });

      cells.forEach((cell) => {
         if (cell.textContent.includes(searchQuery)) {
            cell.parentElement.classList.add('select');
         }
      });

   }
}