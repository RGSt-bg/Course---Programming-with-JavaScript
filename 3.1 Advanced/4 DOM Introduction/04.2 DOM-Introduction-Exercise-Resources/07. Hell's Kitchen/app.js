function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);
   let inputText = document.querySelector("textarea");
   let restInfo = {};

   function onClick () {
      
      inputText = inputText.value;
      let inputArr = JSON.parse(inputText);

      for (let restaurant of inputArr) {
         let [nameRest, workers] = restaurant.split(" - ");
         let workersInfo = workers.split(", ");
         if (!restInfo.hasOwnProperty(nameRest))
            restInfo[nameRest] = {
               averageSal: averSalary(workersInfo),
               bestSal: bestSalary(workersInfo),
               workersInfo: workersInfo
         }
         else {
            restInfo[nameRest].workersInfo = addNewWorkers(restInfo[nameRest].workersInfo, workersInfo);
            workersInfo = restInfo[nameRest].workersInfo;
            restInfo[nameRest].averageSal = averSalary(workersInfo);
            restInfo[nameRest].bestSal = bestSalary(workersInfo);
         }
      }
      let sortedRestByBestSal = Object.entries(restInfo).sort((a, b) => b[1].averageSal - a[1].averageSal);

      let bestRestaurant = `Name: ${sortedRestByBestSal[0][0]} Average Salary: ${sortedRestByBestSal[0][1].averageSal} Best Salary: ${sortedRestByBestSal[0][1].bestSal}`;
      document.getElementById("bestRestaurant").getElementsByTagName("p")[0].textContent = bestRestaurant;

      let bestWorkersArr = sortedRestByBestSal[0][1];
      let bestWorkers = "";
      bestWorkersArr.workersInfo.sort(sortedWorkersBySalary)
                                .forEach(row => {
                                    let [worker, salary] = row.split(" ");
                                    salary = Number(salary);
                                    bestWorkers += `Name: ${worker} With Salary: ${salary} `;
                                 });
      bestWorkers.trim();
      document.getElementById("workers").getElementsByTagName("p")[0].textContent = bestWorkers;
   }

   function sortedWorkersBySalary(workerA, workerB) {
      let [nameA, salaryA] = workerA.split(" ");
      let [nameB, salaryB] =  workerB.split(" ");
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;
   }
   
   function addNewWorkers(oldWorkersArr, newWorkersArr) {
      for (let i = 0; i < newWorkersArr.length; i++) {
         if (!oldWorkersArr.includes(newWorkersArr[i])) oldWorkersArr.push(newWorkersArr[i]);
      }
      return oldWorkersArr;
   }

   function averSalary(workersInfo) {
      let sum = 0;
      workersInfo.forEach(row => {
         let [worker, salary] = row.split(" ");
         salary = Number(salary);
         sum += salary;
      });
      return (sum / workersInfo.length).toFixed(2);
   }

   function bestSalary(workersInfo) {
      let biggestSal = 0;
      workersInfo.forEach(row => {
         let [worker, salary] = row.split(" ");
         if (biggestSal < salary)
            biggestSal = Number(salary);
      });
      return biggestSal.toFixed(2);
   }
}