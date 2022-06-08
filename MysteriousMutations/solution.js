// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArr) => {
  return {
    num,
    dnaArr,

    mutate() {
      console.log(`Before Mutation: ${this.dnaArr}`);
      let rndMutationNew = returnRandBase()
      const pAequorBase = Math.floor(Math.random() * 15);

      while(this.dnaArr[pAequorBase] === rndMutationNew){
        rndMutationNew = returnRandBase();
      }
      
      this.dnaArr.splice(pAequorBase, 1, rndMutationNew);
      console.log(`After Mutation: ${this.dnaArr}`);
      return this.dnaArr;
    },

    compareDNA(dnaArrToCompare) {
      let counter = 0;
      for(let i=0; i<this.dnaArr.length; i++ ){
        if(this.dnaArr[i] === dnaArrToCompare[i]) counter++;
      }
      return console.log(`Specimen #1 and specimen #2 have ${(((counter/15)*100)).toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive(){
      let counter = 0;
      let toPercentage;
      for(let i = 0; i< this.dnaArr.length ; i++){
        if(this.dnaArr[i] === 'C' || this.dnaArr[i] === 'G') counter++;
      }
      toPercentage = (Math.floor((counter/15)*100)).toFixed(2);
      if(toPercentage >= 60){
        return true
      } else {
        return false
      }
    }
  };
};

let the30Instances = [];
let i=1;

while(the30Instances.length < 30){
  let newpAequor = pAequorFactory(i, mockUpStrand())

  if(newpAequor.willLikelySurvive()){ 
    the30Instances.push(newpAequor);

    i++
  }
}
