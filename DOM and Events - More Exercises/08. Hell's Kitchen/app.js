function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurants = {};
  
      input.forEach(line => {
          const [name, workersStr] = line.split(' - ');
          const workers = workersStr.split(', ').map(w => {
              const [name, salary] = w.split(' ');
              return { name, salary: Number(salary) };
          });
  
          if (!restaurants[name]) {
              restaurants[name] = { workers: [], averageSalary: 0, bestSalary: 0 };
          }
  
          restaurants[name].workers.push(...workers);
          restaurants[name].averageSalary = restaurants[name].workers.reduce((sum, w) => sum + w.salary, 0) / restaurants[name].workers.length;
          restaurants[name].bestSalary = Math.max(...restaurants[name].workers.map(w => w.salary));
      });
  
      const bestRestaurant = Object.entries(restaurants).sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];
      const bestRestaurantName = bestRestaurant[0];
      const bestRestaurantWorkers = bestRestaurant[1].workers.sort((a, b) => b.salary - a.salary);
  
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      document.querySelector('#workers p').textContent = bestRestaurantWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
  }
}