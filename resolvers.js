 module.exports = {
    Query:{
      onePerson(){
        return {
          name: 'Ilya'
        }
      }
    },
   Mutation:{
      newPerson(_,args,ctx){
        const name = args.input.name;
        return {
          name
        }
      }
   }
 };