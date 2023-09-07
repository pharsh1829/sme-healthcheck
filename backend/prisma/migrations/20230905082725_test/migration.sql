-- CreateTable
CREATE TABLE "health_check" (
    "id" SERIAL NOT NULL,
    "company_uen" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "applicant_position" TEXT NOT NULL,
    "applicant_email" TEXT NOT NULL,
    "applicant_mobile" INTEGER NOT NULL,

    CONSTRAINT "health_check_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "health_check_company_uen_key" ON "health_check"("company_uen");

-- CreateIndex
CREATE UNIQUE INDEX "health_check_applicant_email_key" ON "health_check"("applicant_email");
