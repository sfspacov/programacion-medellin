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
    public float Precio;
    public bool TransmicionAutomatica;
    public bool EstaPrendido;

    void Prender()
    {
        EstaPrendido= true;
    }

    void Apagar()
    {
        EstaPrendido = false;
    }

    void Aceletar()
    {
        Console.WriteLine("Vrum, vrum");
    }
}