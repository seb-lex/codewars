function countSheeps(arrayOfSheep) {
    let sheepCount = 0;
      for (let i = 0; i < arrayOfSheep.length; i++) {
          if (arrayOfSheep[i] === true) {
              sheepCount += 1;
          }
      }
      return sheepCount;
  }
