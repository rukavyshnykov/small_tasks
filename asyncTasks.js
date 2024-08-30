function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched')
        }, 2000)
    }) 
}
fetchData().then(console.log)

////2
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('1')
        }, 2000)
    })
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('2')
        }, 2000)
    })
}

firstTask().then(secondTask).catch(() => console.log('Resolved'))

///3

async function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
        resolve(data);
      }, 2000);
    });
  }
  // Expected result
  async function getUser() {
    const data = await fetchUserData();
    console.log(data);
  }
  
  getUser()

  ///4

  async function fetchWithErrorHandling() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  ////5
  async function fetchAllData() {
    const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
    console.log('All data fetched:', data1, data2, data3);
  }
  
  function fetchData1() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve('Data fetched 1')
          }, 2000)
      }) 
  }
  
  function fetchData2() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve('Data fetched 2')
          }, 1000)
      }) 
  }
  
  function fetchData3() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve('Data fetched 3')
          }, 3000)
      }) 
  }
  
  fetchAllData()
