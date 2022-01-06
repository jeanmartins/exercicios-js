
function tratarErroELancar(erro){
   // throw new Error('Ocorreu um erro ao executar a função')
    //throw 10
   // throw 'mensagem'
  /* throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }*/
   throw erro.message
}
function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(ex){
        tratarErroELancar(ex)  
    } finally{
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)