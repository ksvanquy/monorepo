"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Enable validation pipes globally
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    // Enable CORS
    app.enableCors();
    // Swagger config
    const config = new swagger_1.DocumentBuilder()
        .setTitle("E-Learning API")
        .setDescription("API docs for the e-learning platform")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3001);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
