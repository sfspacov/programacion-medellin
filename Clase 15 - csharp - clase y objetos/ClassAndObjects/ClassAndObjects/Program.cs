var carro1 = new Car
{
    Marca = "Toyota",
    Modelo = "Corolla",
    Ano = 2023,
    TransmicionAutomatica = true,
    Precio = 120000000,
};

var carro2 = new Car
{
    Marca = "Volkswagen",
    Modelo = "Escarabajo",
    Ano = 1953,
    TransmicionAutomatica = false,
    Precio = 18000000,
};

class Car
{
    public string Marca;
    public string Modelo;
    public int Ano;
    public bool TransmicionAutomatica;

    public float Precio; //Cambia    
    public bool EstaPrendido;  //Cambia

    void Prender()
    {
        EstaPrendido = true;
    }

    void Apagar()
    {
        EstaPrendido = false;
    }

    void Acelerar()
    {
        Console.WriteLine("Vrum, vrum");
    }
}