var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/hola", () => new { mensaje = "¡Hola desde AspNetCore!" });

app.Run();