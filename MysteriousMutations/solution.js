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
    num: num,
    dnaArr: dnaArr,

    mutate(dnaArr) {
      console.log(`Before Mutation: ${this.dnaArr}`);
      const dnaBases = ["A", "T", "C", "G"];
      const pAequorBase = Math.floor(Math.random() * 15);
      const rndMutation = () => dnaBases[Math.floor(Math.random() * 3)];

      if(this.dnaArr[pAequorBase] === dnaBases[rndMutation]){
        rndMutation();
        this.dnaArr.splice(pAequorBase, 1, rndMutation());
      } else {
        console.log("Mutation!");
        this.dnaArr.splice(pAequorBase, 1, rndMutation());
      }
      return console.log(`After Mutation: ${this.dnaArr}`);
    },
  };
};

const firstTest = pAequorFactory(1, mockUpStrand());
firstTest.mutate();
// console.log(pAequorFactory(1, mockUpStrand()));
