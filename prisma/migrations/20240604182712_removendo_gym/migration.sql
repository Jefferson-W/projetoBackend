/*
  Warnings:

  - You are about to drop the `check_ins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gyms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_gym_id_fkey";

-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_user_id_fkey";

-- DropTable
DROP TABLE "check_ins";

-- DropTable
DROP TABLE "gyms";

-- CreateTable
CREATE TABLE "CheckIn" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" TIMESTAMP(3),
    "chamado" TEXT,
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
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CheckIn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
