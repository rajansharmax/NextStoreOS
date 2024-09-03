-- CreateTable
CREATE TABLE "artwork" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER,
    "tags" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "image_name" VARCHAR(255),

    CONSTRAINT "artwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artwork_category" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "artwork_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IDX_Artwork_Category" ON "artwork"("category_id");

-- CreateIndex
CREATE INDEX "IDX_Post_Author" ON "post"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "artwork" ADD CONSTRAINT "FK_Artwork_Category" FOREIGN KEY ("category_id") REFERENCES "artwork_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "FK_Post_Author" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
