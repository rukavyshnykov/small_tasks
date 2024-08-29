//OBJECTS

function deepClone(obj) {
    const check = {}
          for(const key in obj) {
              if(typeof obj[key] === 'object') {
                  check[key] = deepClone(obj[key])
              }
              else{
                  check[key] = obj[key]
              }
          }
          return check
      }
      const original = {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3
          }
        }
      };
      const clone = deepClone(original);
      
      //////////////////////////////////////
    
      function invertObject(obj) {
        return Object.fromEntries(Object.entries(obj).map(el => el.toReversed()))
      }
      const original = {
        a: 1,
        b: 2,
        c: 3
      };
      console.log(invertObject(original));
    
      ///////////////////////////////////?
    
      function findDeepKey(obj, key) {
        if(obj.hasOwnProperty(key)){
            return obj[key]
        }
          else {
              for(const check in obj) {
                  console.log(obj)
                  if(typeof obj[check] === 'object') {
                      return findDeepKey(obj[check], key)
                  }
              }
          }
      }
      const data = {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3
          }
        }
      };
      console.log(findDeepKey(data, 'd'));
    
      ///////////////////////////////////
    
      function mergeDeep(obj1, obj2) {
        const check = {...obj1}
        for (const key in obj2) {
            if(!check.hasOwnProperty(key)) {
                check[key] = obj2[key]
            }
            else {
                check[key] = mergeDeep(check[key], obj2[key])
            }
        }   
        return check
    }
    
    const obj1 = {
      a: 1,
      b: {
        c: 2,
          f:{g: 5, h: 6}
      }
    };
    const obj2 = {
      b: {
        d: 3
      },
      e: 4,
        f: 7
    };
    console.log(mergeDeep(obj1, obj2));
    // Expected output: {a: 1, b: {c: 2, d: 3}, e: 4}
    
    ///////////////////////////////////////////
    
    function groupBy(array, property) {
        const check = {}
        for(obj of array) {
            if(!check.hasOwnProperty(obj[property])) {
                check[obj[property]] = [obj]
            }
            else {
                check[obj[property]].push(obj)  
            }
        }
        return check
    }
    
    const people = [
      {name: 'Alice', age: 21},
      {name: 'Bob', age: 21},
      {name: 'Charlie', age: 25}
    ];
    console.log(groupBy(people, 'age'));
    // Expected output:
    // {
    //   21: [{name: 'Alice', age: 21}, {name: 'Bob', age: 21}],
    //   25: [{name: 'Charlie', age: 25}]
    // }