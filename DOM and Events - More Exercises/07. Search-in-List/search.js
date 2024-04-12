function search() {
   const searchText = document.getElementById('searchText').value.toLowerCase();
   const towns = Array.from(document.querySelectorAll('#towns li'));
   let matches = 0;

   towns.forEach(town => {
       town.style.fontWeight = 'normal';
       town.style.textDecoration = 'none';

       if (town.textContent.toLowerCase().includes(searchText)) {
           town.style.fontWeight = 'bold';
           town.style.textDecoration = 'underline';
           matches++;
       }
   });

   document.getElementById('result').textContent = `${matches} matches found`;
}
