export type Payment = {
    id: string;
    amount: number;
    status: "beklemede" | "işleniyor" | "başarılı" | "başarısız";
    email: string;
};
 
export const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "beklemede",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "işleniyor",
        email: "example@gmail.com",
    },
    {
        id: "9a7b3c1e",
        amount: 75,
        status: "başarılı",
        email: "user@example.com",
    },
    {
        id: "63d2e4a8",
        amount: 50,
        status: "başarısız",
        email: "test@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "beklemede",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "işleniyor",
        email: "example@gmail.com",
    },
    {
        id: "9a7b3c1e",
        amount: 75,
        status: "başarılı",
        email: "user@example.com",
    },
    {
        id: "63d2e4a8",
        amount: 50,
        status: "başarısız",
        email: "test@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "beklemede",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "işleniyor",
        email: "example@gmail.com",
    },
    {
        id: "9a7b3c1e",
        amount: 75,
        status: "başarılı",
        email: "user@example.com",
    },
    {
        id: "63d2e4a8",
        amount: 50,
        status: "başarısız",
        email: "test@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "beklemede",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "işleniyor",
        email: "example@gmail.com",
    },
    {
        id: "9a7b3c1e",
        amount: 75,
        status: "başarılı",
        email: "user@example.com",
    },
    {
        id: "63d2e4a8",
        amount: 50,
        status: "başarısız",
        email: "test@example.com",
    }
];
