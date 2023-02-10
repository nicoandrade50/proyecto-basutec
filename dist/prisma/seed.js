"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.dump.upsert({
        where: { name: "Conejo" },
        update: {},
        create: {
            name: "Conejo",
            description: "Basurero Tecnológico numero 1",
            maintenance: "Martes",
            ubication: 1,
        },
    });
    const post2 = await prisma.dump.upsert({
        where: { name: "Perro" },
        update: {},
        create: {
            name: "Perro",
            description: "Basurero Tecnológico numero 2",
            maintenance: "Jueves",
            ubication: 2,
        },
    });
    console.log({ post1, post2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map