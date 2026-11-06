import java.util.Scanner;

public class IniciarSesion {
    private static final String USUARIO = "admin";
    private static final String CONTRASENA = "123456";
    private static final int MAX_INTENTOS = 3;

    public static void main(String[] args) {
        Scanner leer = new Scanner(System.in);
        int intentos = 0;

        while (intentos < MAX_INTENTOS) {
            System.out.println("Intento " + (intentos + 1) + " de " + MAX_INTENTOS);
            System.out.println("Ingrese su usuario:");
            String UsuarioDigitado = leer.nextLine();
            System.out.println("Ingrese su contraseña:");
            String ContrasenaDigitada = leer.nextLine();

            // Llamamos al METODO: le pas el nos dice si el nos dice si es correcto.
            if (UsuarioDigitado.equals(USUARIO) && ContrasenaDigitada.equals(CONTRASENA)) {
                System.out.println("Iniciaste sesion con exito");
                break;
            } else {
                System.out.println("Usuario o contraseña incorrectos");
                intentos++;
            }
        }

        if (intentos >= MAX_INTENTOS) {
            System.out.println("No puedes iniciar sesion, debe esperar 15 minutos para realizar otro intento");
        }

        leer.close();
    }
}
