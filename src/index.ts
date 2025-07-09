import { config } from "./config/env";

function iniciarApp(port: number): void {
    console.log(`SGA 2.0 iniciado na porta ${port}`);
}

iniciarApp(config.port)