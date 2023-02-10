//code

import { PrismaClient } from "@prisma/client";
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.dump.upsert({
    where: { name: "Conejo" },
    update: {},
    create: {
      name: "Conejo" ,  
      description: "Basurero Tecnológico numero 1",
      maintenance:"Martes" ,
      ubication: 1 ,
      
    },
  });

  const post2 = await prisma.dump.upsert({
    where: { name: "Perro" },
    update: {},
    create: {
      name: "Perro",
      description:"Basurero Tecnológico numero 2" ,
      maintenance: "Jueves",
      ubication: 2,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });



  //Devuelve un valor lógico que indica si el valor especificado coincide con alguno de los valores con los que se lo compara.