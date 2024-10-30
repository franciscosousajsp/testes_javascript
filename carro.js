class Carro {

  
    // Construtor
    constructor(marca, modelo, ano, km, velocidade) {
      this.marca = marca;   
      this.modelo = modelo; 
      this.ano = ano;       
      this.km = km; // quilometragem ou quilometros rodados
      this.velocidade = 0; // estado inicial da velocidade do carro
      
    }
  
    // Método público
    andar() {
        this.velocidade = 50;
      console.log("O carro", this.marca," ",this.modelo,"andando a", this.velocidade," km/h.");
    }

    

}


const argo = new Carro()
argo.andar()