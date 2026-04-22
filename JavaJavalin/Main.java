import io.javalin.Javalin;

public class Main {
    public static void main(String[] args) {
        Javalin.create(config -> {
            config.routes.get("/hola", ctx -> ctx.json("{\"mensaje\": \"¡Hola desde Java Javalin!\"}"));
        }).start(3000);
    }
}