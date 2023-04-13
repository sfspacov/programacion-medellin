var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    var corsWhiteList = builder.Configuration.GetSection("Cors:Whitelist").Value.Split(',');
    options.AddPolicy("CorsPolicy",
        policy =>
        {
            policy.WithOrigins(corsWhiteList)
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
