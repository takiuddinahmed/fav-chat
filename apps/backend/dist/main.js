"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const globalPrefix = "api";
    const port = 3002;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: [
            'error', 'warn', 'debug', 'verbose'
        ]
    });
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({ origin: '*' });
    await app.listen(3002);
    common_1.Logger.warn(`Application running on http://localhost:${port}/${globalPrefix}`);
}
bootstrap();
//# sourceMappingURL=main.js.map