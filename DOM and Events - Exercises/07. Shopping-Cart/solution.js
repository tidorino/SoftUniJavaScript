function solve() {
   //TODO...   
   const output = document.querySelector('textarea');
   const products = new Set();
   let total = 0;

   Array.from(document.getElementsByClassName('add-product')).forEach(btn => {
         btn.addEventListener('click', (ev) => {
            const product = ev.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);

            total += price;
            products.add(name);

            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         });
   });

   document.querySelector('.checkout').addEventListener('click', () => {
         output.value += `You bought ${Array.from(products).join(', ')} for ${total.toFixed(2)}.`;
         Array.from(document.getElementsByTagName('button')).forEach(b => b.disabled = true);
   });
}
