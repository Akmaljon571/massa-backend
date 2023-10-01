"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("./config/swagger");
const custom_exetepsion_filter_1 = require("./filter/custom.exetepsion.filter");
const mongoose_1 = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors({
        origin: '*',
        credentials: true,
    }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new custom_exetepsion_filter_1.ErrorHandle());
    await mongoose_1.default
        .connect(process.env.DB)
        .then(() => console.log('Mongoose Run'))
        .catch((error) => console.log(error));
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_2.swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen('1000');
}
bootstrap();
//# sourceMappingURL=main.js.map