/*
  Warnings:

  - You are about to drop the `CheckIn` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_user_id_fkey";

-- DropTable
DROP TABLE "CheckIn";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cpf" TEXT,
    "endereco" TEXT,
    "numero" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "checkInId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checkin" (
    "id" TEXT NOT NULL,
    "chamado" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" TIMESTAMP(3),
    "abertura_chamado" TIMESTAMP(3),
    "inicio_atendimento" TIMESTAMP(3),
    "fim_atendimento" TIMESTAMP(3),
    "km_inicio" TEXT,
    "km_fim" TEXT,
    "contrato" TEXT,
    "garantia" TEXT,
    "tipo" TEXT,
    "observacoes" TEXT,
    "detalhes" TEXT,
    "relatorio_tecnico" TEXT,
    "consideracoes" TEXT,
    "assinatura" TEXT,

    CONSTRAINT "checkin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_checkInId_fkey" FOREIGN KEY ("checkInId") REFERENCES "checkin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
