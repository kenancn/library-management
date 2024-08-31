CREATE SEQUENCE IF NOT EXISTS public."Users_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE IF NOT EXISTS public."Books_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE IF NOT EXISTS public."Borrowings_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;


CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public."Books"
(
    id integer NOT NULL DEFAULT nextval('"Books_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    score double precision DEFAULT '-1'::double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Books_pkey" PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS public."Borrowings"
(
    id integer NOT NULL DEFAULT nextval('"Borrowings_id_seq"'::regclass),
    "returnDate" timestamp with time zone,
    "userScore" double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "UserId" integer,
    "BookId" integer,
    CONSTRAINT "Borrowings_pkey" PRIMARY KEY (id),
    CONSTRAINT "Borrowings_BookId_fkey" FOREIGN KEY ("BookId")
        REFERENCES public."Books" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT "Borrowings_UserId_fkey" FOREIGN KEY ("UserId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
);